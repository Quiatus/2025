import { Link } from "react-router-dom"

export const DUMMY_EVENTS = [
  {id: 'e1', title: 'Event I'},
  {id: 'e2', title: 'Event II'},
  {id: 'e3', title: 'Event III'},
  {id: 'e4', title: 'Event IV'},
  {id: 'e5', title: 'Event V'},
]

export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map(item => <li key={item.id}><Link to={`/events/${item.id}`}>{item.title}</Link></li>)}
      </ul>
    </>
    
  )
}
