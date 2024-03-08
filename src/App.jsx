import {BrowserRouter} from 'react-router-dom'
import {HeaderNavbar} from './components/HeaderNavbar/HeaderNavbar'
import AppRouter from './router/AppRouter'
import {Footer} from './components/Footer/Footer' 
function App() {

  return (
    <>
<BrowserRouter>
<HeaderNavbar/>
<AppRouter/>
<Footer/>
</BrowserRouter>
    </>
  )
}

export default App
