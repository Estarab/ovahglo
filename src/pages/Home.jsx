import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Services from '../components/Services';
// import Pricing from '../components/Pricing';
// import Terms from '../components/Terms';

// import Footer from '../components/Footer';
// import Projects from '../components/Projects';
import WhatsAppComponent from '../components/WhatsAppComponent';
// import OurServicesComp from '../components/OurServicesComp';
import ImageScroll from '../components/ImageScroll';
// import CompOne from '../components/CompOne';
import CompTwo from '../components/CompTwo';
import ScrollingText from '../components/ScrollingText';
import CompThree from '../components/CompThree';
import ServicesComp from '../components/ServicesComp';
import SystemsComp from '../components/SystemsComp';
// import SystemsSlider from '../components/SystemsSlider';
import RefProjectComp from '../components/RefProjects';
import SliderContainer from '../components/SliderContainer';
// import ImageWithTitle from '../components/ImageWithTitle';






export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    // <div className='bg-slate-700' >
    <div className='bg-slate-700 overflow-x-hidden w-full'>

      {/* <Hero/> */}
      <SliderContainer/>
      {/*<ImageScroll/>*/}
      {/* <CompOne/> */}
      <CompTwo/>
      <ScrollingText/>
      {/* <CompThree/> */}
      <ImageScroll/>
      {/* <ServicesComp/> */}
      
      <SystemsComp/>
      {/* <SystemsSlider/> */}
      {/* <ImageWithTitle/> */}
      <RefProjectComp/>
      {/* <About/> */}
      {/* <OurServicesComp/> */}
      {/* <Services/> */}
      {/* <Pricing/> */}
      {/* <Projects/> */}
      {/* <Terms/> */}
      {/* <EmailComponent/> */}
      <WhatsAppComponent/>
      
      {/* <Footer/> */}

  

      

      
      
      
      

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-bold text-center text-[#46923c]'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-2xl text-[#46923c] hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
