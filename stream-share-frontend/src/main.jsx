import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AddVideo from './add-video-app'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPlayer from './video-app'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/upload', element: <AddVideo />},
  {path: '/videos/:id', element: <VideoPlayer />}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
