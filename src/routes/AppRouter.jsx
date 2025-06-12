import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ProgramsPage from "../pages/Programs";
import StoryPage from "../pages/StoryPage";
import FullStoryPage from "../pages/FullStoryPage";
import Donate from "../pages/Donate";
import Blog from "../pages/Blog";
import Partners from "../pages/Partners";
import Dashboard from "../pages/Dashboard";
import Gallery from "../pages/GalleryPage";
import AboutPartners from "../pages/AboutPartners";
import EventsPage from "../pages/Events";
import PartnershipHero from "../components/partners/PartnerHero";
import ProgramDetails from "../pages/ProgramDetails";
import Community from "../pages/CommunityE";

// ... import the rest

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<ProgramsPage/>}/>
        <Route path="/program/:programId" element={<ProgramDetails/>}/>
        <Route path="/storypage" element={<StoryPage/>}/>
        <Route path="full-story" element={<FullStoryPage/>}/>
        <Route path="/donation" element={<Donate/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/about-partners" element={<AboutPartners/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/childcare" element={<PartnershipHero/>}/>
        <Route path='/community-extended' element={<Community/>}/>
        {/* Add the rest of your routes here */}
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
