import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Services = lazy(() => import('../pages/Services/Services'))
const ShareResume = lazy(() => import('../pages/ShareResume/ShareResume'))
const RecruitmentRequirement = lazy(() => import('../pages/RecruitmentRequirement/RecruitmentRequirement'))
const WhyEdtalink = lazy(() => import('../pages/WhyEdtalink/WhyEdtalink'))
const FAQPage = lazy(() => import('../pages/FAQ/FAQ'))
const Contact = lazy(() => import('../pages/Contact/Contact'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" aria-busy="true" /> }>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/share-resume" element={<ShareResume />} />
          <Route path="/recruitment-requirement" element={<RecruitmentRequirement />} />
          <Route path="/why-edtalink" element={<WhyEdtalink />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
