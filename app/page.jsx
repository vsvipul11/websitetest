// 'use client'

// import Link from 'next/link'
// import { ChevronRight } from 'lucide-react'
// import Sidebar from '@/components/sidebar'
// import Header from '@/components/header'
// import HeroCarousel from '@/components/hero-carousel'
// import StatsSection from '@/components/stats-section'
// import CollectibleCard from '@/components/collectible-card'
// import PackCard from '@/components/pack-card'
// import ActivityItem from '@/components/activity-item'
// import QuestItem from '@/components/quest-item'

// // Define all the data arrays at the top of the file
// const recentCollectibles = [
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//   }
// ]

// const currentPacks = [
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Packs-d6VM2YwyUT15viGA6EYYvAkF7ju6Qy.png',
//     title: 'Summer Goatz',
//     description: '5 Cards from the WLG Collection',
//     price: '2.30'
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Packs-d6VM2YwyUT15viGA6EYYvAkF7ju6Qy.png',
//     title: 'Summer Goatz',
//     description: '5 Cards from the WLG Collection',
//     price: '2.30'
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Market%20-%20Packs-d6VM2YwyUT15viGA6EYYvAkF7ju6Qy.png',
//     title: 'Summer Goatz',
//     description: '5 Cards from the WLG Collection',
//     price: '2.30'
//   }
// ]

// const cardsYouNeed = [
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//     circulation: '169 in Circ',
//     price: '2.30',
//     rarity: 'Legendary'
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//     circulation: '169 in Circ',
//     price: '2.30',
//     rarity: 'Rare'
//   },
//   {
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png',
//     title: 'WLG Streamer Legend',
//     circulation: '169 in Circ',
//     price: '2.30',
//     rarity: 'Limited'
//   }
// ]

// const activities = [
//   {
//     user: {
//       name: 'crestis69',
//       avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png'
//     },
//     action: 'has requested a trade for',
//     item: 'WLG Star Card'
//   },
//   {
//     user: {
//       name: 'crestis69',
//       avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png'
//     },
//     action: 'has requested a trade for',
//     item: 'WLG Star Card'
//   },
//   {
//     user: {
//       name: 'crestis69',
//       avatar: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20(2)-s7Uxj0xzkqCmYlMvmWZRcXo9nfPmyb.png'
//     },
//     action: 'has requested a trade for',
//     item: 'WLG Star Card'
//   }
// ]

// const quests = [
//   {
//     progress: 1,
//     total: 4,
//     title: 'Unpack 4 WLG',
//     reward: '40'
//   },
//   {
//     progress: 1,
//     total: 4,
//     title: 'Unpack 4 WLG',
//     reward: '40'
//   },
//   {
//     progress: 1,
//     total: 4,
//     title: 'Unpack 4 WLG',
//     reward: '40'
//   }
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#121214]">
//       <Sidebar />
//       <Header />
      
//       <main className="pl-[72px] pt-16">
//         <div className="max-w-7xl mx-auto p-8">
//           <section className="mb-12">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <span className="text-[17px] font-medium text-white">Trending Creators</span>
//               </div>
//               <button className="text-[13px] text-[#6B7280] hover:text-white flex items-center gap-1">
//                 Show All
//                 <ChevronRight size={16} />
//               </button>
//             </div>
//             <HeroCarousel />
//           </section>

//           <StatsSection />

//           <div className="grid grid-cols-3 gap-8">
//             <div className="col-span-2 space-y-12">
//               <section>
//                 <h3 className="text-[17px] font-medium text-white mb-6">Recent Collectibles</h3>
//                 <div className="grid grid-cols-4 gap-4">
//                   {recentCollectibles.map((collectible, i) => (
//                     <CollectibleCard key={i} {...collectible} />
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-[17px] font-medium text-white">Current Pack Sales</h3>
//                   <button className="text-[13px] text-[#6B7280] hover:text-white flex items-center gap-1">
//                     Show More
//                     <ChevronRight size={16} />
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                   {currentPacks.map((pack, i) => (
//                     <PackCard key={i} {...pack} />
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-[17px] font-medium text-white">Cards You Need</h3>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4">
//                   {cardsYouNeed.map((card, i) => (
//                     <CollectibleCard key={i} {...card} />
//                   ))}
//                 </div>
//               </section>
//             </div>

//             <div className="space-y-12">
//               <section>
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-[17px] font-medium text-white">User Activity</h3>
//                 </div>
//                 <div className="space-y-2">
//                   {activities.map((activity, i) => (
//                     <ActivityItem key={i} {...activity} />
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-[17px] font-medium text-white">Your Quests</h3>
//                   <button className="text-[13px] text-[#6B7280] hover:text-white">
//                     All Quests →
//                   </button>
//                 </div>
//                 <div className="space-y-4">
//                   {quests.map((quest, i) => (
//                     <QuestItem key={i} {...quest} />
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#0066FF] to-[#0044FF] p-6 text-center">
//                   <div className="flex items-center justify-center gap-2 mb-4">
//                     <img src="/coin.svg" alt="LX" className="w-6 h-6" />
//                     <span className="text-2xl font-bold text-white">+150</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-4">Invite your friends and earn</h3>
//                   <button className="px-6 py-2 bg-[#FFA500] text-black rounded-lg text-[15px] font-medium hover:bg-[#FF9500]">
//                     Invite a Friend
//                   </button>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// pages/index.js
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebook, FaLinkedin, FaInstagram, FaCheck, FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import AOS from 'aos';

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState('mobile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Handle scroll event for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Milestone - Software Development Company</title>
        <meta name="description" content="Milestone Software Development Company - Transforming ideas into robust, scalable and user-friendly applications." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white text-gray-900 shadow-lg' : 'bg-transparent text-white'}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center z-50">
                <div className="relative w-16 h-16 mr-4">
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md">
                    <Image 
                      src="/logo.png" 
                      alt="Milestone Logo" 
                      layout="fill" 
                      objectFit="contain"
                      className="p-2 rounded-xl"
                    />
                  </div>
                </div>
                <div className={`flex flex-col transition-colors duration-300 ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`}>
                  <span className="text-xl font-bold">Milestone</span>
                  <span className="text-xs">Where We Go Together</span>
                </div>
                </div>
                
                {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="group relative">
              <button className={`px-2 py-1 font-medium flex items-center group-hover:text-blue-600 transition duration-300 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:rotate-180 transition duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="p-2">
                    {/* Services dropdown items */}
                    <a href="#services" className="block px-4 py-3 hover:bg-blue-50 rounded-lg flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block text-gray-900">Custom Software</span>
                        <span className="text-xs text-gray-500">Tailored solutions for your business</span>
                      </div>
                    </a>
                    <a href="#services" className="block px-4 py-3 hover:bg-blue-50 rounded-lg flex items-center">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block text-gray-900">Mobile Apps</span>
                        <span className="text-xs text-gray-500">Native and cross-platform solutions</span>
                      </div>
                    </a>
                    <a href="#services" className="block px-4 py-3 hover:bg-blue-50 rounded-lg flex items-center">
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium block text-gray-900">Web Development</span>
                        <span className="text-xs text-gray-500">Modern, responsive websites</span>
                      </div>
                    </a>
                  </div>
                  <div className="bg-gray-50 px-4 py-2">
                    <a href="#services" className="text-blue-600 text-sm font-medium flex items-center">
                      View all services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="#portfolio" className={`px-2 py-1 font-medium hover:text-blue-600 transition-colors duration-300 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>Portfolio</a>
            <a href="#clients" className={`px-2 py-1 font-medium hover:text-blue-600 transition-colors duration-300 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>Clients</a>
            <a href="#process" className={`px-2 py-1 font-medium hover:text-blue-600 transition-colors duration-300 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>Process</a>
            <a href="#contact" className={`px-2 py-1 font-medium hover:text-blue-600 transition-colors duration-300 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>Contact</a>
          </div>
          
          {/* Contact Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://wa.me/914847756431" className={`p-2 rounded-full hover:bg-green-100 transition duration-300 ${scrollY > 50 ? 'text-green-600' : 'text-white hover:text-green-600'}`}>
              <FaWhatsapp size={18} />
            </a>
            <a href="mailto:info@gomilestone.com" className={`p-2 rounded-full hover:bg-blue-100 transition duration-300 ${scrollY > 50 ? 'text-blue-600' : 'text-white hover:text-blue-600'}`}>
              <FaEnvelope size={18} />
            </a>
            <a href="tel:+914847756431" className={`flex items-center space-x-2 py-2 px-4 rounded-full border ${scrollY > 50 ? 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' : 'border-white text-white hover:bg-white hover:text-blue-500'} transition duration-300`}>
              <FaPhone size={14} />
              <span className="hidden lg:inline text-sm font-medium">+91 8447756431</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-0.5 mb-1.5 ${isMenuOpen ? 'bg-white rotate-45 translate-y-2' : scrollY > 50 ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}></div>
            <div className={`w-6 h-0.5 mb-1.5 ${isMenuOpen ? 'opacity-0' : scrollY > 50 ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}></div>
            <div className={`w-6 h-0.5 ${isMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : scrollY > 50 ? 'bg-gray-900' : 'bg-white'} transition-all duration-300`}></div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-blue-600 z-40 flex flex-col"
            >
              <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col space-y-4">
                  <a href="#services" className="text-white py-3 text-2xl font-medium border-b border-blue-500" onClick={() => setIsMenuOpen(false)}>Services</a>
                  <a href="#portfolio" className="text-white py-3 text-2xl font-medium border-b border-blue-500" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                  <a href="#clients" className="text-white py-3 text-2xl font-medium border-b border-blue-500" onClick={() => setIsMenuOpen(false)}>Clients</a>
                  <a href="#process" className="text-white py-3 text-2xl font-medium border-b border-blue-500" onClick={() => setIsMenuOpen(false)}>Process</a>
                  <a href="#contact" className="text-white py-3 text-2xl font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-blue-300 text-lg mb-4">Get in touch</h3>
                  <div className="flex flex-col space-y-4">
                    <a href="tel:+914847756431" className="text-white flex items-center">
                      <FaPhone className="mr-3" /> +91 8447756431
                    </a>
                    <a href="mailto:info@gomilestone.com" className="text-white flex items-center">
                      <FaEnvelope className="mr-3" /> info@gomilestone.com
                    </a>
                    <a href="https://wa.me/914847756431" className="text-white flex items-center">
                      <FaWhatsapp className="mr-3" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles-container">
            {Array.from({ length: 20 }).map((_, index) => (
              <div 
                key={index} 
                className="particle"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 50 + 15}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  backgroundColor: `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                We offer{' '}
                <span className="text-blue-300">
                  <Typewriter
                    options={{
                      strings: [
                        'Mobile App Development',
                        'Custom Software Development',
                        'Website Development',
                        'UI/UX Design',
                        'Cloud Solutions'
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                      cursor: '|'
                    }}
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Our Software Development Company is dedicated to transforming ideas into robust, 
                scalable and user-friendly applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transform hover:scale-105 transition duration-300 flex items-center justify-center">
                  <span>Start Your Project</span>
                  <FaArrowRight className="ml-2" />
                </a>
                <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-700 transition duration-300 flex items-center justify-center">
                  <span>Our Services</span>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="relative w-full h-[500px] shadow-2xl rounded-xl overflow-hidden">
                <Image 
                  src="/api/placeholder/600/500" 
                  alt="Software Development" 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Clients Section */}
        <section id="clients" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Trusted by <span className="text-blue-600">400+</span> Clients Worldwide</h2>
          <p className="text-gray-600">We've had the privilege of working with some amazing organizations from around the globe</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="200">
          {/* First Row */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="UGRO" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="Awfis" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="Client 3" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="Client 4" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="Dhampur" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            {/* Second Row */}
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="FLSmidth" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="MyNextSeason" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="MoooFarm" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="Ahilya" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 transition-all duration-300"
            >
              <div className="relative h-12 w-full">
                <Image src="/api/placeholder/120/48" alt="SAEL" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-medium shadow-md"
            >
              View All Clients
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-2 flex justify-center">
                  <CountUp end={500} suffix="+" duration={2.5} enableScrollSpy />
                </h3>
                <p className="text-lg text-blue-100">Projects Delivered</p>
              </div>
            </div>
            
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-2 flex justify-center">
                  <CountUp end={10} suffix="+" duration={2.5} enableScrollSpy />
                </h3>
                <p className="text-lg text-blue-100">Years of Experience</p>
              </div>
            </div>
            
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-2 flex justify-center">
                  <CountUp end={400} suffix="+" duration={2.5} enableScrollSpy />
                </h3>
                <p className="text-lg text-blue-100">Satisfied Customers</p>
              </div>
              </div>
            
            <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-5xl font-bold mb-2 flex justify-center">
                  <CountUp end={97} suffix="%" duration={2.5} enableScrollSpy />
                </h3>
                <p className="text-lg text-blue-100">Client Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-black font-semibold">WHAT WE DO</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-black">Our Services</h2>
          <p className="text-black">Comprehensive software solutions tailored to meet your business requirements</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="h-3 bg-blue-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Tailored software solutions that drive innovation, efficiency, and growth for your business
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="h-3 bg-green-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Application Development</h3>
                <p className="text-gray-600 mb-6">
                  Transform your ideas into powerful native app experiences with our custom app development services
                </p>
                <a href="#" className="inline-flex items-center text-green-500 font-medium hover:text-green-700 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="h-3 bg-purple-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Website Design & Development</h3>
                <p className="text-gray-600 mb-6">
                  Create a stunning online presence with our innovative, user-friendly website design and development services
                </p>
                <a href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Service 4 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <div className="h-3 bg-pink-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  Crafting seamless and engaging digital experiences through expert UI/UX design
                </p>
                <a href="#" className="inline-flex items-center text-pink-500 font-medium hover:text-pink-700 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Service 5 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="500"
            >
              <div className="h-3 bg-yellow-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Ecommerce Development</h3>
                <p className="text-gray-600 mb-6">
                  Build a powerful, scalable online store with our custom eCommerce development solutions
                </p>
                <a href="#" className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-700 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Service 6 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              <div className="h-3 bg-indigo-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cloud and DevOps Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Streamline your operations with scalable cloud and DevOps solutions for enhanced agility and performance
                </p>
                <a href="#" className="inline-flex items-center text-indigo-500 font-medium hover:text-indigo-700 transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="700">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-medium shadow-md"
            >
              <span>Get Started With Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="/api/placeholder/600/500" 
                  alt="Global Map" 
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-xl"
                />
                
                {/* Animated markers on the map */}
                <motion.div 
                  className="absolute top-[30%] left-[20%] w-3 h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-blue-500 rounded-full opacity-60 animate-ping"></span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[40%] left-[60%] w-3 h-3 bg-red-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 rounded-full opacity-60 animate-ping"></span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[25%] left-[80%] w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-green-500 rounded-full opacity-60 animate-ping"></span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-[60%] left-[30%] w-3 h-3 bg-yellow-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-yellow-500 rounded-full opacity-60 animate-ping"></span>
                </motion.div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <span className="text-blue-600 font-semibold">WORLDWIDE PRESENCE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Our Global Presence</h2>
              <p className="text-gray-600 mb-8">
                Our clientele spans across the US, UK, Dubai, Australia, Qatar, Trinidad and Tobago, Canada, and India, where we deliver world-class services. Regardless of their location, we ensure our clients receive unparalleled support and expertise.
              </p>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
                <div className="w-16 h-12 relative">
                  <Image src="/api/placeholder/64/48" alt="UK Flag" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
                </div>
                <div className="w-16 h-12 relative">
                  <Image src="/api/placeholder/64/48" alt="India Flag" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
                </div>
                <div className="w-16 h-12 relative">
                  <Image src="/api/placeholder/64/48" alt="US Flag" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
                </div>
                <div className="w-16 h-12 relative">
                  <Image src="/api/placeholder/64/48" alt="Canada Flag" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
                </div>
                <div className="w-16 h-12 relative">
                  <Image src="/api/placeholder/64/48" alt="Australia Flag" layout="fill" objectFit="cover" className="rounded-md shadow-sm" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock support across different time zones</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Multilingual Teams</h3>
                    <p className="text-gray-600">Teams that understand cultural nuances and speak your language</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mt-1 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Local Offices</h3>
                    <p className="text-gray-600">Strategic locations for better coordination and service delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-blue-600 font-semibold">OUR WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Portfolio</h2>
            <p className="text-gray-600">Discover how we've helped businesses across industries achieve their digital goals</p>
          </div>
          
          <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white shadow-md rounded-full p-1 inline-flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium ${activePortfolioTab === 'website' ? 'bg-blue-600 text-white' : 'text-gray-700'} transition-all duration-300`}
                onClick={() => setActivePortfolioTab('website')}
              >
                Website
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium ${activePortfolioTab === 'mobile' ? 'bg-blue-600 text-white' : 'text-gray-700'} transition-all duration-300`}
                onClick={() => setActivePortfolioTab('mobile')}
              >
                Mobile
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-tr from-yellow-100 to-yellow-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="p-6">
                <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden group">
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="IMWOW App Screenshot 1" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="IMWOW App Screenshot 2" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">IMWOW</h3>
                <p className="text-gray-600 text-center mb-4">UI/UX | Mobile App Development</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="Google Play" layout="fill" objectFit="contain" />
                    </div>
                    Google Play
                  </a>
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="App Store" layout="fill" objectFit="contain" />
                    </div>
                    App Store
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Portfolio Item 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-tr from-pink-100 to-pink-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="p-6">
                <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden group">
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="Awfis Coworking Screenshot 1" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="Awfis Coworking Screenshot 2" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-pink-600 bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Awfis Coworking</h3>
                <p className="text-gray-600 text-center mb-4">UI/UX | Mobile App Development</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="Google Play" layout="fill" objectFit="contain" />
                    </div>
                    Google Play
                  </a>
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="App Store" layout="fill" objectFit="contain" />
                    </div>
                    App Store
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Portfolio Item 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-tr from-orange-100 to-orange-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="p-6">
                <div className="relative h-80 w-full mb-6 rounded-lg overflow-hidden group">
                  <div className="flex items-center justify-center gap-4">
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="Crunch App Screenshot 1" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="relative h-full w-36">
                      <Image src="/api/placeholder/144/300" alt="Crunch App Screenshot 2" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-orange-600 bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-medium transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Crunch</h3>
                <p className="text-gray-600 text-center mb-4">UI/UX | Mobile App Development</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="Google Play" layout="fill" objectFit="contain" />
                    </div>
                    Google Play
                  </a>
                  <a href="#" className="inline-flex items-center bg-black text-white text-xs px-3 py-1 rounded-md transition-transform hover:scale-105">
                    <div className="w-4 h-4 mr-1 relative">
                      <Image src="/api/placeholder/16/16" alt="App Store" layout="fill" objectFit="contain" />
                    </div>
                    App Store
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 font-medium shadow-md"
            >
              View All Projects
            </motion.button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-blue-600 font-semibold">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Technologies We Work With</h2>
            <p className="text-gray-600">We leverage cutting-edge technologies to build scalable and future-proof solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Frontend
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Angular" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Angular</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="React" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">React</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Next.js" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Next.js</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="HTML5" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">HTML5</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="CSS3" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">CSS3</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="JavaScript" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">JavaScript</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Backend Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  Backend
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Node.js" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Node.js</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Laravel" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Laravel</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="PHP" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">PHP</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt=".NET" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">.NET</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Database Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  Database & Servers
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="MongoDB" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">MongoDB</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="PostgreSQL" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">PostgreSQL</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="MySQL" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">MySQL</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="SQL Server" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">SQL Server</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Linux" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Linux</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Windows" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Windows</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <div className="h-2 bg-gradient-to-r from-red-500 to-red-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Mobile App
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="React Native" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">React Native</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Kotlin" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Kotlin</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Design Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="500"
            >
              <div className="h-2 bg-gradient-to-r from-pink-500 to-pink-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-pink-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  UI/UX Design
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Adobe XD" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Adobe XD</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Figma" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Figma</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* E-commerce Technologies */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-700"></div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  Ecommerce and CMS
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="WordPress" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">WordPress</p>
                  </div>
                  <div className="tech-icon-container">
                    <div className="relative w-12 h-12 mx-auto mb-2">
                      <Image src="/api/placeholder/48/48" alt="Shopify" layout="fill" objectFit="contain" />
                    </div>
                    <p className="text-center text-sm text-gray-600">Shopify</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Working Model Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-blue-600 font-semibold">HOW WE WORK</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Working Model</h2>
            <p className="text-gray-600">We offer flexible engagement models tailored to your specific requirements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fixed Bid Model */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="h-2 bg-blue-600"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Fixed Bid Model</h3>
                <p className="text-gray-600 text-center">
                  For each project we offer a fixed cost by analyzing the scope of work and technology stack
                </p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Clear project scope</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Defined deliverables</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Predictable budget</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Hourly Model */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="h-2 bg-green-600"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Hourly Model</h3>
                <p className="text-gray-600 text-center">
                  Based on client's requirement, an hourly model for each technology stack is finalized
                </p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      </div>
                    <span className="text-sm text-gray-600">Flexible scope</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Pay only for hours worked</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Ideal for evolving projects</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Monthly Retention Model */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="h-2 bg-purple-600"></div>
              <div className="p-8">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Monthly Retention Model</h3>
                <p className="text-gray-600 text-center">
                  Monthly cost will be charged from client based of resource skill set
                </p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Dedicated resources</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Long-term partnerships</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600">Predictable monthly cost</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-blue-600 font-semibold">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Book A Call With Us</h2>
              <p className="text-gray-600 mb-8">
                Take a step towards us and it's our commitment and responsibility to fulfill the requirements mark of the Customer within the Estimated Budget and with Latest technology, with our track records we have ensure that our clients get nothing less than the best.
              </p>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center mb-6 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50"
              >
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Contact Via Email</h3>
                  <a href="mailto:info@gomilestone.com" className="text-blue-600 hover:underline">info@gomilestone.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center p-4 rounded-xl transition-all duration-300 hover:bg-blue-50"
              >
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us Directly</h3>
                  <a href="tel:+914847756431" className="text-blue-600 hover:underline">+91 (84477) 56431</a>
                </div>
              </motion.div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold mb-6">Talk With Our Expert</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your Phone Number" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      placeholder="Tell us about your requirements" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center"
                  >
                    Submit Request
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-2xl font-bold">We Partner With Industry Leaders</h3>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8" data-aos="fade-up" data-aos-delay="200">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="relative h-10 w-28">
                <Image src="/api/placeholder/112/40" alt="Shopify Partner" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="relative h-10 w-28">
                <Image src="/api/placeholder/112/40" alt="AWS Partner" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="relative h-10 w-28">
                <Image src="/api/placeholder/112/40" alt="DesignRush" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="relative h-10 w-28">
                <Image src="/api/placeholder/112/40" alt="Elementor" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300"
            >
              <div className="relative h-10 w-28">
                <Image src="/api/placeholder/112/40" alt="Odoo" layout="fill" objectFit="contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-3">
                  <Image 
                    src="/api/placeholder/48/48" 
                    alt="Milestone Logo" 
                    layout="fill" 
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Milestone</span>
                  <span className="text-xs text-blue-300">Where We Go Together</span>
                </div>
              </div>
              <p className="text-blue-200 mb-6">
                Our Software Development Company is dedicated to transforming ideas into robust, scalable and user-friendly applications.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaFacebook size={18} />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#clients" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Clients
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Custom Software Devlopment
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    eCommerce Development
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-800 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Milestone Private Limited, 515 BPTP Park Centra, Block A, Sector 30, Gurugram, Haryana 122001</p>
                    <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors duration-300">Get Directions</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <FaEnvelope className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@gomilestone.com" className="text-blue-200 hover:text-white transition-colors duration-300">info@gomilestone.com</a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <div className="relative w-4 h-3">
                      <Image src="/api/placeholder/16/12" alt="India" layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <a href="tel:+914847756431" className="text-blue-200 hover:text-white transition-colors duration-300">+91 (84477) 56431</a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-800 p-2 rounded-full mr-3">
                    <div className="relative w-4 h-3">
                      <Image src="/api/placeholder/16/12" alt="UK" layout="fill" objectFit="cover" />
                    </div>
                  </div>
                  <a href="tel:+447887983915" className="text-blue-200 hover:text-white transition-colors duration-300">+44 7887983915</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Milestone Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add the CSS for animations */}
      <style jsx global>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.6;
          animation-name: float-particle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(15px); }
          50% { transform: translateY(0) translateX(30px); }
          75% { transform: translateY(30px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .tech-icon-container {
          transition: all 0.3s ease;
        }
        
        .tech-icon-container:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}