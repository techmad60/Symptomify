import Image from "next/image";
import { Poppins} from "next/font/google";
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
  });

export default function Footer (){
    return (
        <footer className="bg-color-two text-white pt-16 px-16">
            <div className="flex flex-col justify-center items-center space-y-24 md:flex-row md:space-y-0 md:items-start md:gap-8 lg:gap-20">
                {/* Contact Section */}
                <section className="flex flex-col space-y-4">
                    <p className={`${poppins.className} text-center text-xl`}>Contact Us</p>
                    <div className="flex items-center gap-2">
                        <MdEmail className="text-2xl"/>
                        <a href="mailto:obasisuccess192@gmail.com" className="text-sm">obasisuccess192@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-2xl"/>
                        <a href="tel:+2348103763064" className="text-xs">+234 810 376 3064</a>
                    </div>
                </section>
                
                {/* Socials Section */}
                <section className="flex flex-col">
                    <nav className="flex flex-col space-y-8">
                        <p className={`${poppins.className} text-center text-xl`}>Socials</p>
                        <ul className="flex space-x-6">
                            <li><a href="" className="text-2xl"><FaFacebookSquare/></a></li>
                            <li><a href="" className="text-2xl"><FaInstagram/></a></li>
                            <li><a href="" className="text-2xl"><FaLinkedin/></a></li>
                            <li><a href="" className="text-2xl"><FaXTwitter/></a></li>
                        </ul>
                    </nav>
                </section>
                {/* Logo Footer */}
                <Image 
                  src={"/images/Logo-footer.svg"}
                  width={165}
                  height={25}
                  alt="Logo"
                />
            </div>
            <p className="text-xs text-center mt-16 mb-4">&copy; 2024 Symptomify. All rights reserved</p>
        </footer>
    )
}