import { HomeContainer } from './styled.HomePage'
import Hero from './../../components/Hero/Hero'
import Features from './../../components/Features/Features'
import Testimonials from './../../components/Testimonials/Testimonials'
import ContactForm from './../../components/ContactForm/ContactForm'

export default function HomePage() {
  return (
    <HomeContainer>
    <div className="overflow-x-hidden antialiased" cz-shortcut-listen="true">
      <Hero/>
      <Features/>
      <Testimonials/>
      <ContactForm/>
    </div>
    </HomeContainer>

  )
}
