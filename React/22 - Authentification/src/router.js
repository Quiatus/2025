import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage';
import EventsPage, { loader as eventLoader } from './pages/EventsPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import Authentification, { action as authAction } from './pages/Authentication'
import { action as logoutAction } from './pages/Logout'
import { action as manipulateEvent } from './components/EventForm'
import { tokenLoader } from './util/auth'

export const router = createBrowserRouter([
  { path: '/', 
    element: <Root />,
    errorElement: <Error />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsRoot />, children: [
        { index: true, element: <EventsPage />, loader: eventLoader },
        { path: ':eventId', id: 'event-detail', loader: eventDetailLoader, children: [
          { index: true, element: <EventDetailPage />, action: deleteEventAction },
          { path: 'edit', element: <EditEventPage />, action: manipulateEvent },
        ]},
        { path: 'new', element: <NewEventPage />, action: manipulateEvent },
      ]},
      { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
      { path: 'logout', action: logoutAction },
      { path: 'auth', element: <Authentification />, action: authAction }
    ] 
  },
])