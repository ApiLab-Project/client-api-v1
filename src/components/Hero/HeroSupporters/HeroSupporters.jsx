import logo02ColegioPiagetWithText from './../../../assets/images/logos/logo02ColegioPiagetWithText.svg'
import logo04IMTWithText from './../../../assets/images/logos/logo04IMTWithText.svg'

export default function HeroSupporters() {
  return (
<>
<a href="https://soupiaget.com.br/" target='_blank'>
<img className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600" src={logo02ColegioPiagetWithText} alt="Logo" />
</a>
<a href="https://maua.br/" target='_blank'>
<img className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600" src={logo04IMTWithText} alt="Logo" />
</a>
</>
  )
}
