import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false)
  const [availablePlaces, setAvailablePlaces] = useState([])

  useEffect(() => {
    setIsFetching(true)
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places')
      const data = await response.json()
      setAvailablePlaces(data.places)
      setIsFetching(false)
    }

    fetchPlaces()
  }, [])

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
