import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import SeoHelmet from '../seo/SeoHelmet'
import StructuredData from '../seo/StructuredData'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <SeoHelmet />
      <StructuredData />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
