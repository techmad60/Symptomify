"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import FormButton from "@/components/registration/FormButton";
import HorizontalLine from "@/components/registration/HorizontalLine";
import GoogleButton from "@/components/registration/GoogleButton";

const montsy = Montserrat({
    weight: ['100', '200', '300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
});

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
 

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  

  return (
    <div className={`${montsy.className} flex flex-col justify-center items-center font-light bg-white text-sm text-color-one`}>
        <Image 
            src="/images/logo-header.svg" 
            alt="Symptomify Logo"
            className="my-4" 
            width={100} 
            height={100} 
        />
        <form className={`flex flex-col justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-12 rounded-[10px] w-72`}>
            {/* Name Field */}
            <label className="pt-6 pb-1">Name</label>
            <input 
            type="text" 
            name="name" 
            required 
            autoFocus 
            className="rounded-[10px] border py-2 px-4" 
            />
            
            {/* Email Field */}
            <label className="pt-6 pb-1">Email</label>
            <input 
            type="email" 
            name="email" 
            required 
            className="rounded-[10px] border py-2 px-4" 
            />
        
            
            {/* Password Field */}
            <label className="pt-6 pb-1">Password</label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    required 
                
                    className="rounded-[10px] border py-2 px-4 w-full"
                />
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-3 flex items-center text-color-three cursor-pointer duration-300 hover:text-color-two"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        
            
            {/* Repeat Password Field */}
            <label className="pt-6 pb-1">Repeat password</label>
            <div className="relative">
                <input 
                    type="password"
                    name="repeatpassword" 
                    required 
                    // Update state
                    className="rounded-[10px] border py-2 px-4 w-full"
                />
            </div>
            
            <FormButton ButtonText="Sign up" />
        </form>

        <HorizontalLine />
        <GoogleButton text="Sign up" />
        <p className="mt-8">Already have an account? 
            <Link href="/login">
            <span className="text-color-three duration-300 hover:text-color-two cursor-pointer"> Login</span>
            </Link>
        </p>
    </div>
  );
}
