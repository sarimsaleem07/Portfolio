import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ThemeProvider } from './component/themeContext/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
)
