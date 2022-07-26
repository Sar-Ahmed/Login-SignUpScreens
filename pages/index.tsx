import { Outlet, ReactLocation, Router } from '@tanstack/react-location'
import LoginUsingOtp from './loginUsingOtp'
import SignIn from './signIn'

const location = new ReactLocation()

const routes = [
  {
    path: '/', element: < SignIn />
  },
  {
    path: '/loginUsingOtp', element: <LoginUsingOtp />
  }
]

export default function Home() {
  return (
    <Router
      location={location} 
      routes={routes}
      >
      <Outlet />
    </Router>
  )
}

