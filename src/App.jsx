import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import '../styles.css'; // Your custom styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './pages/Home';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import SignUp from './pages/SignUp';
import Header2 from './components/Header2';

import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import ProductsPage from './pages/ProductsPage';
import HostingAndMaintenancePage from './pages/HostingAndMaintenancePage';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import PricingPage from './pages/PricingPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
// import ProjectsPage from './pages/ProjectsPage';
import GetStarted from './pages/GetStarted';
import LMMZambia from './pages/LMMZambia';
import QRCodeGenerator from './pages/QRCodeGenerator';
import Countdown from './pages/Countdown';
import MeetingPage from './pages/MeetingPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import ManagementSystemsPage from './pages/ManagementSystemsPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import RefProjectsPage from './pages/RefProjectsPage';
import Footer from './components/Footer';
import SystemsPage from './pages/SystemsPage';
import POS from './pages/POS';







export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header2 />
    
      <Routes>

        <Route path='/' element={<Home />} />
        
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/maintenance' element={<HostingAndMaintenancePage />} />
        <Route path='/terms' element={<TermsAndConditions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* <Route path='/projects' element={<ProjectsPage />} /> */}
        <Route path='/get-started' element={<GetStarted />} />
        <Route path='/lmm-zambia' element={<LMMZambia />} />
        <Route path='/QR-code-generator' element={<QRCodeGenerator />} />
        <Route path='/countdown' element={<Countdown />} />
        <Route path='/conference-call' element={<MeetingPage />} />
        <Route path='/web-development' element={<WebDevelopmentPage />} />
        <Route path='/app-development' element={<AppDevelopmentPage />} />
        <Route path='/management-systems' element={<ManagementSystemsPage />} />
        <Route path='/marketing' element={<DigitalMarketingPage />} />
        <Route path='/ref-projects' element={<RefProjectsPage />} />
        <Route path='/systems' element={<SystemsPage />} />
        <Route path='/pos' element={<POS />} />
      


        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        
        <Route path='/post/:postSlug' element={<PostPage />} />
        
        


      


      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}
