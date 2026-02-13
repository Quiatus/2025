import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
  const data = useLoaderData()

  if (data.isError) {
    return <p>{data.message}</p>
  }

  const events = data.events

  return <EventsList events={events} />
}

export async function loader() {
  const response = await fetch('http://localhost:8080/event');
  
  if (!response.ok) {
    // return { isError: true, message: 'Could not load data!' }
    throw {
      message: 'Could not load data'
    }
  } else {
    return response
  }
} 

export default EventsPage;