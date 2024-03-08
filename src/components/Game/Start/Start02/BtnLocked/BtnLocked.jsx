import { AiOutlineLock } from "react-icons/ai";

export default function BtnLocked({children}) {
  return (
    <button type="button" class="mx-3 flex align-center content-around text-white font-normal py-2 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-red-700 border border-red-700 hover:bg-red-900 hover:border-red-900">{children}
     
     <span className="ml-1">  <AiOutlineLock fill="white" className="m-auto"/></span>
    
    </button>
  )
}
