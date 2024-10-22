import { Montserrat} from "next/font/google";
import Header from "../components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

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
