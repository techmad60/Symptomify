import { Poppins, Montserrat} from "next/font/google";
import Header from "../components/Header"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const montsy = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white grid`}>
      <Header/>
      <main>
         {/* Hero Section */}
         <section className="bg-color-two flex flex-col items-center justify-center text-center py-16 lg:text-start lg:flex-row lg:px-16 lg:py-[7.17rem] lg:gap-16 xl:gap-44">
          {/* Text and Button Section */}
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h1 className={`${poppins.className} text-white font-bold text-xl my-4 lg:text-4xl`}>
              What&apos;s the matter?
            </h1>
            <p className="text-sm font-extralight text-white px-8 sm:px-12 md:px-20 lg:px-0 lg:w-[425px] lg:text-xl">
              Describe your symptoms, and get insights on potential health issues in seconds. Symptomify is your quick and easy health assistant.
            </p>

            {/* Responsive Hero Image */}
            <Image 
              src="/images/Hero-img.svg" 
              alt="Hero Image"
              className="my-4 lg:hidden" 
              width={180} 
              height={126.37} 
            />

            {/* CTA Button */}
            <button className="text-color-one bg-white p-2 rounded-md font-semibold mt-6 h-[50px] lg:w-[8.75rem] lg:h-[58px] lg:text-xl lg:mt-8">
              Get started
            </button>
          </div>

          {/* Large Screen Hero Image */}
          <div className="hidden lg:flex">
            <Image 
              src="/images/Hero-img.svg"
              alt="Hero Image"
              width={386}
              height={271}
            />
          </div>
        </section>
        
        {/* Gemini Section */}
        <section className="flex flex-col items-center text-center my-12">
          <h2 className={`${poppins.className} text-color-two font-medium text-xl 
          lg:text-[2rem]`}>Your Virtual Health Assistant</h2>
          <p className="leading-[1.875rem] text-sm text-color-one px-8 mt-4 sm:px-16 md:px-24 font-medium lg:px-0 lg:w-[36.6875rem] lg:text-xl">Get instant insights on potential health conditions based on your symptoms—powered by
          <span className="pl-1 relative bottom-[0.24rem]">
            <Image 
            src={"/images/gemini-logo.svg"}
            alt="Gemini-logo"
            className="inline lg:w-[70px] lg:h-[18.46px]"
            width={50}
            height={18.46}
          /></span>.</p>
        </section>
        
        {/* Features Section */}
        <section className="flex flex-col justify-center items-center">

          {/* Symptom Insights */}
          <section className="flex flex-col justify-center items-center sm:flex-row gap-8">
            <Image 
              src={"/images/feature-1.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center my-32">
              <h3 className={`${poppins.className} font-medium text-color-three lg:text-2xl`}>AI-Powered Symptom Insights</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Describe your symptoms in everyday language, and let our AI provide you with potential diagnoses and next steps.</p>
              <button className="flex items-center text-color-two gap-2 mt-8 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button>
            </div>
          </section>

          {/* Symptom Questionnaire */}
          <section className="flex flex-col justify-center items-center sm:flex-row-reverse gap-8">
            <Image 
              src={"/images/feature-2.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center my-32">
              <h3 className={`${poppins.className} font-medium text-color-three lg:text-2xl`}>Interactive Symptom Questionnaire</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Our smart AI asks the right follow-up questions to help pinpoint possible conditions.</p>
              <button className="flex items-center text-color-two gap-2 mt-8 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button>
            </div>
          </section>

          {/* Private and Secure */}
          <section className="flex flex-col justify-center items-center sm:flex-row gap-8">
            <Image 
              src={"/images/feature-3.svg"}
              alt="Illustration"
              className="lg:w-[307px] h-[316]"
              width={180}
              height={185.28}
            />
            <div className="flex flex-col justify-center items-center text-center my-32">
              <h3 className={`${poppins.className} font-medium text-color-three lg:text-2xl`}>Private and Secure</h3>
              <p className="font-light text-sm text-color-one w-[16.875625rem] my-2 lg:text-xl lg:w-[23.1875rem]">Your health information is protected with encrypted data transmission and industry-standard security.</p>
              <button className="flex items-center text-color-two gap-2 mt-8 lg:text-lg">Let&apos;s go <FaArrowRight className=""/></button>
            </div>
          </section>

        </section>
      </main>
    </div>
  );
}
