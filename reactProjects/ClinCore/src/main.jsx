import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/styles/MainStyle.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.jsx'
import { ModalProvider, AddFormDrawer, ProfileEditModal, ToastNotification } from './js/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
      <AddFormDrawer />
      <ProfileEditModal />
      <ToastNotification />
    </ModalProvider>
  </StrictMode>,
)
