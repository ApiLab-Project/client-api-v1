import { AiOutlineUnlock } from "react-icons/ai";


export default function BtnUnlocked({children}) {
  return (
    <button type="button" class="mx-3 flex text-white font-normal py-2 px-6 rounded-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-green-700 border border-green-700 hover:bg-green-900 hover:border-green-900">{children}

            <span className="ml-1"><AiOutlineUnlock  fill="white"/></span>
    </button>  )
}
