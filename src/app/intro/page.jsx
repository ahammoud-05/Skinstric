import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";
import CustomInput from "../components/CustomInput";


const Intro = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Header />
    <div className="ml-15 mt-5 font-semibold tracking-tight">
        TO START ANALYSIS
    </div>
    <div className="flex-grow flex items-center justify-center w-full">
        <Image src='/assets/rombuses.png' alt="rombus" width={762} height={762} />
        <div className="absolute">
            <CustomInput />
        </div>
    </div>
        <Link className="flex items-center ml-10 mb-2 gap-5" href='/'>
        <Image src='/assets/ButtonIcon.png' alt="back-button" width={44} height={44} />
        <p className="whitespace-nowrap text-gray-700 font-semibold">BACK</p>
        </Link>
    </div>
    </>
  )
}

export default Intro;