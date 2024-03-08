import {useNavigate} from 'react-router-dom'
import { handleToCards, handleToGame } from "../../router/coordinator"
export default function AsideDashboard() {

    const navigate = useNavigate()
  return (
    <div className="p-2 rounded-xl ml-2 mt-4 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
    <div>
        <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
            <i className="fas fa-home mr-2"></i>Inicio
        </button>
        <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" onClick={()=>{handleToCards(navigate)}}>
            <i className="fas fa-file-alt mr-2"></i>Lab.Cards
        </button>
        <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
            <i className="fas fa-users mr-2"></i>Lab.Friends
        </button>
        <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"  onClick={()=>{handleToGame(navigate)}}>
            <i className="fas fa-store mr-2"></i>Lab.Games
        </button>
        <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
            <i className="fas fa-exchange-alt mr-2"></i>Lab.Ranking
        </button>
    </div>

    <button className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
        <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
    </button>

    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

    <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>

</div>

  )
}
