import { Montserrat} from "next/font/google";
import Header from "../components/sections/Header";
import Main from "@/components/sections/Main";
import Footer from "@/components/sections/Footer";

 const montsy = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={`${montsy.className} bg-white grid`}>
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}
