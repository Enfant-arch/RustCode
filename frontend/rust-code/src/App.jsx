import { useState, useEffect } from 'react'


function App() {
  useEffect(() => {
      console.log(import.meta.env.VITE_API_URL)
  }, [])
}

export default App
