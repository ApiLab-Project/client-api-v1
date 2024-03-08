import React from 'react'
import ContactFormSide2 from './ContactFormSide2/ContactFormSide2'
import ContactFormSide1 from './ContactFormSide1/ContactFormSide1'

export default function ContactForm() {
  return (
<div className="min-w-screen min-h-[50vh] flex items-center justify-center px-5 py-5">
    <div className=" text-gray-500 rounded-3xl  w-full overflow-hidden" style={{"max-width":"1000px"}}>
        <div className="md:flex w-full">
            <ContactFormSide1/>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <ContactFormSide2/>
            </div>
        </div>
    </div>
</div>


    )
}
