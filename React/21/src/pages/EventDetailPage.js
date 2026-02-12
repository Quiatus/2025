import { useParams } from "react-router-dom"
import { DUMMY_EVENTS } from "./EventsPage"

export default function EventDetailPage() {
  const params = useParams()

  const {title} = DUMMY_EVENTS.find(item => params.eventId === item.id)
  
  return (
    <>
      <h1>{title}</h1>
      <p>Event id: {params.eventId}</p>
    </>
  )
}
