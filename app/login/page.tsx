//Login Page --- Symptomify
"use client";
import { useState} from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { Montserrat} from "next/font/google";
import Image from "next/image";
import HorizontalLine from "@/components/registration/HorizontalLine";
import FormButton from "@/components/registration/FormButton";
import GoogleButton from "@/components/registration/GoogleButton";

const montsy = Montserrat({
    weight: ['100', '200', '300', '400', '500'],
    subsets: ['latin'],
    display: 'swap',
});

export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false);

    //Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className={`${montsy.className} flex flex-col justify-center items-center font-light text-sm text-color-one`}>
        <Image 
            src="/images/logo-header.svg" 
            alt="Symptomify Logo"
            className="my-4" 
            width={100} 
            height={100} 
        />

        {/* Login Form */}
        <form  className={`flex flex-col justify-center shadow-[0px_4px_4px_rgba(0,0,0,0.25)] px-12 rounded-[10px] w-72 bg-white`}>
            <label className="pt-6 pb-1">Email</label>
            <input 
            type="email" 
            name="email" 
            required 
            autoFocus 
            className="rounded-[10px] border p-2" 
            />

            
            {/* Password Field */}
            <label className="pt-6 pb-1">Password</label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password" 
                    required 
                    className="rounded-[10px] border p-2 w-full" 
                />
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-3 flex items-center text-color-three ntecursor-pointer duration-300 hover:text-color-two"
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
        
            <p className="mt-3 text-color-three cursor-pointer duration-300 hover:text-color-two">
            Forgot Password?
            </p>
        
            <FormButton ButtonText="Login"/>
        
        </form>
      <p className="mt-8">Don&apos;t have an account? 
        <Link href="/signup">
           <span className="text-color-three cursor-pointer duration-300 hover:text-color-two"> Sign up</span>
        </Link>
      </p>
      <HorizontalLine />
      <GoogleButton text="Login" />
    </div>
  );
}
