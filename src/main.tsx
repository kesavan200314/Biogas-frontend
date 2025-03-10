import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ServiceProvider } from './Backend/Servicecontext.tsx';
import { Authprovider } from './Backend/auathcontext.tsx';
import { BrowserRouter } from 'react-router-dom';
import { BookingProvider } from './Backend/Bookingcontext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookingProvider>
    <ServiceProvider>
    <Authprovider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Authprovider>
    </ServiceProvider>
    </BookingProvider>
  </StrictMode>,

)
