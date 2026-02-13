import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { loader } from './pages/EventsPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';

export const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsRoot />, children: [
        { index: true, element: <EventsPage />, loader: loader },
        { path: ':eventId', element: <EventDetailPage /> },
        { path: 'new', element: <NewEventPage /> },
        { path: ':eventId/edit', element: <EditEventPage /> },
      ]},
    ] 
  },
])