//Google Button --- Symptomify
import Image from "next/image";

export default function GoogleButton({text = ""}) {
  return (
    <div className="flex items-center cursor-pointer justify-center bg-color-three duration-300 hover:bg-color-two py-3 px-6 rounded-[10px] gap-3">
      <Image 
        src={"/images/google-icon.svg"} 
        alt="Google logo" 
        width={20} 
        height={20}
       />
        <p className={`text-sm font-light text-white`}>{text} with Google</p>
    </div>
  );
}
