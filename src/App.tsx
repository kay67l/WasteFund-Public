import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ForSchools from './components/ForSchools'
import ForRecyclers from './components/ForRecyclers'
import Impact from './components/Impact'
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
        <HowItWorks />
        <ForSchools onRegisterSchool={openRegister} />
        <ForRecyclers onPartnerInquiry={openPartner} />
        <Impact />
      </main>

      <Footer onRegisterSchool={openRegister} onPartnerInquiry={openPartner} />

      {showRegister && <RegisterSchoolModal onClose={() => setShowRegister(false)} />}
      {showPartner && <PartnerInquiryModal onClose={() => setShowPartner(false)} />}
    </>
  )
}
