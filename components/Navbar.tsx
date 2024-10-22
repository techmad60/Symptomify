'use client'
import {useState, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { Montserrat} from "next/font/google";
import { FaTimes, FaBars } from 'react-icons/fa';

const montsy = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Navbar () {
    const [isNavOpen, setIsNavOpen] = useState(false);
    useEffect(() => {
        // Add or remove a class to the body and html to disable/enable scrolling
        const body = document.body;
        const html = document.documentElement;
    
        if (isNavOpen) {
          body.style.overflow = 'hidden';
          html.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        }
        // Clean up the effect on component unmount
        return () => {
          body.style.overflow = 'visible';
          html.style.overflow = 'visible';
        };
    }, [isNavOpen])
 
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`${montsy.className} lg:flex justify-between lg:self-center items-center`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
            <Image 
            className="logo"
            src={"/images/logo-header (1).svg"}
            alt="Symptomify Logo"
            width={130}
            height={27}/>
        </div>
        <div className="cursor-pointer lg:hidden" onClick={handleToggleNav}>
          <FaBars className='text-color-one'/>
        </div>
      </div>
      {isNavOpen && (
        <div
          className="fixed top-0 left-0 w-[25vw] min-h-screen bg-black opacity-50 z-50 lg:hidden"
          onClick={handleToggleNav} 
        />
      )}
      <div className={`bg-[#D9D9D9] absolute top-0 right-0 h-screen flex flex-col items-center p-4 w-3/4 z-40 lg:w-auto lg:flex-row lg:static lg:h-auto lg:bg-transparent lg:p-0 ${isNavOpen ? 'fixed' : 'hidden lg:flex'} `}>
        <button onClick={handleToggleNav} className="lg:hidden">
        <FaTimes size={24} />
        </button>
        <div className="flex flex-col text-center text-color-one my-12 text-xl leading-[3.75rem] lg:flex-row lg:text-sm lg:my-8">
            <div className='flex flex-col lg:flex-row justify-between items-center lg:relative right-[14rem] lg:space-x-12 xl:right-[20rem]'>
              <a href="/" className={`font-light transition duration-150 hover:ease-in`}>
                Home
              </a>
              <a href="/features" className={` transition duration-150 hover:ease-in`}>
                Features
              </a>
              <a href="/contact-us" className={`transition duration-150 hover:ease-in`}>
                Contact us
              </a>
            </div>
          
            <div className="flex flex-col space-y-6 mt-12 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:items-center lg:mt-0 bg-color-three rounded-md">
              <Link href="/login" className="bg-btn-two-color lg:px-4 lg:py-2 rounded-md transition duration-150 hover:ease-in text-white">
              Signin
              </Link>
              
            </div>
        </div>
      </div>
    </nav>
  )
}