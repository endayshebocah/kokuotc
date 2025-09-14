import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Ini mengimpor komponen dari App.jsx
// import './index.css' // Anda bisa menggunakan ini untuk styling global jika perlu

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
