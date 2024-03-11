// import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <main className='main'>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
