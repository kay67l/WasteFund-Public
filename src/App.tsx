import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Programs from './components/Programs'
import ForSchools from './components/ForSchools'
import ForRecyclers from './components/ForRecyclers'
import WasteGuide from './components/WasteGuide'
import Impact from './components/Impact'
import Newsletter from './components/Newsletter'
import About from './components/About'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import RegisterSchoolModal from './components/RegisterSchoolModal'
import PartnerInquiryModal from './components/PartnerInquiryModal'

export default function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showPartner, setShowPartner] = useState(false)

  const openRegister = () => setShowRegister(true)
  const openPartner = () => setShowPartner(true)

  return (
    <>
      <Header onRegisterSchool={openRegister} onPartnerInquiry={openPartner} />

      <main>
        <Hero onRegisterSchool={openRegister} onPartnerInquiry={openPartner} />
        <About />
        <HowItWorks />
        <Programs onRegisterSchool={openRegister} onPartnerInquiry={openPartner} />
        <ForSchools onRegisterSchool={openRegister} />
        <ForRecyclers onPartnerInquiry={openPartner} />
        <WasteGuide />
        <Impact />
        <Testimonials />
        <Newsletter />
        <CtaBanner />
      </main>

      <Footer />

      {showRegister && <RegisterSchoolModal onClose={() => setShowRegister(false)} />}
      {showPartner && <PartnerInquiryModal onClose={() => setShowPartner(false)} />}
    </>
  )
}