import { montsy, poppins} from "@/fonts/fonts";
import Header from "../components/Header"
import Image from "next/image";

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white grid`}>
      <Header/>
      <main>
        <section className="bg-color-two flex flex-col items-center justify-center text-center py-4">
          <h1 className={`${poppins.className} text-white font-extrabold text-xl`}>
            What&apos;s the matter?
          </h1>
          <p className="text-sm px-8 font-light">Describe your symptoms, and get insights on potential health issues in seconds. Symptomify is your quick and easy health assistant</p>
          <Image 
            src={"/images/Hero-img.svg"}
            alt="Hero Image"
            className=""
            width={306}
            height={70}
          />
          <button className="text-color-one bg-white">
            Get started
          </button>
        </section>
        <section>
          <h2>Your Virtual Health Assistant</h2>
          <p className="relative">Get instant insights on potential health conditions based on your symptoms—powered by
          <span className="">
            <Image 
            src={"/images/Gemini-logo.svg"}
            alt="Gemini-logo"
            className="inline absolute top-[25px] right-[45px]"
            width={50}
            height={70}
          /></span></p>
        </section>
      </main>
    </div>
  );
}
