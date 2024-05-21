import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import Home from './screens/HomeScreen.jsx'
import Login from './screens/LoginScreen.jsx'
import Register from './screens/RegisterScreen.jsx'
import Profile from './screens/ProfileScreen.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<PrivateRoute />}>
        <Route index={true} element={<Profile />} />
      </Route>
    </Route>
  ),

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
