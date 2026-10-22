import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import './assets/styles/MainStyle.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.jsx'
import { ModalProvider, AddFormDrawer, ProfileEditModal, ToastNotification } from './js/index.js'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
        <AddFormDrawer />
        <ProfileEditModal />
        <ToastNotification />
      </ModalProvider>
    </AuthProvider>
  </StrictMode>,
)
