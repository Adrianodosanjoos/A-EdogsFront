import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { router } from  './routes'


import GlobalStyles from './styles/globalStyles';





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
   <GlobalStyles />
   <ToastContainer autoClose={3000} theme='colored'/>
  </StrictMode>,
);