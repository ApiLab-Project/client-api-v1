import {Routes , Route} from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import SignUpPage from './../pages/SignUpPage/SignUpPage'
import SignInPage from './../pages/SignInPage/SignInPage'
import ProfilePage from './../pages/ProfilePage/ProfilePage'
import SettingsPage from './../pages/SettingsPage/SettingsPage'
import GamePage from '../pages/GamePage/GamePage'
import CardsPage from '../pages/CardsPage/CardsPage'
import CreateCardsPage from '../pages/CreateCardsPage/CreateCardsPage'
import CreateQuestionsPage from '../pages/CreateQuestionsPage/CreateQuestionsPage'
export default function AppRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/game" element={<GamePage/>}/>
        <Route path="/cards" element={<CardsPage/>}/>
        <Route path="/cards/create" element={<CreateCardsPage/>}/>
        <Route path="/questions/create" element={<CreateQuestionsPage/>}/>
    </Routes>
    
    </>
  )
}
