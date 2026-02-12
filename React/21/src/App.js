// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    // errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsRoot />, children: [
        { index: true, element: <EventsPage /> },
        { path: ':eventId', element: <EventDetailPage /> },
        { path: 'new', element: <NewEventPage /> },
        { path: ':eventId/edit', element: <EditEventPage /> },
      ]},
    ] 
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;