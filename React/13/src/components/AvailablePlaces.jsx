import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from './ErrorPage.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsFetching(true)
    async function fetchPlaces() {
      try {
        const response = await fetch('http://localhost:3000/places')
        const data = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fetch places')
        }

        setAvailablePlaces(data.places)
      } catch (error) {
        setError(error)
      } 
           
      setIsFetching(false)
    }

    fetchPlaces()
  }, [])

  if (error) {
    return <ErrorPage title="An error has occured!" message={error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
