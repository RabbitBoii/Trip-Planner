
import { Toaster } from 'sonner'
import './App.css'
import Header from './components/custom/Header'
import Hero from './components/custom/Hero'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Toaster />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
