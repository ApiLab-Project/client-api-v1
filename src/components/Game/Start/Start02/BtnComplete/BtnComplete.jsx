import { FaCheckCircle } from "react-icons/fa";

export default function BtnComplete({children}) {
  return (
    <button type="button" class="mx-3 flex text-white font-normal py-2 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-blue-700 border border-blue-700 hover:bg-blue-900 hover:border-blue-900">{children}
     
            <span className="ml-1"><FaCheckCircle  fill="greenyellow"/></span>
    
    </button>
  )
}
