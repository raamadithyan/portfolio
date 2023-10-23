 import Link from "next/link";
import { Rammetto_One  } from 'next/font/google'



 import { createPortal } from "react-dom";

const rammetto = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
})
 
 const Header = () => {
 	return (
 		<header className=" justify-center 
 		fixed w-full flex sm:justify-between py-4 sm:px-96 z-40">

 		<div className="text-2xl py-0 block z-50
 		sm:flex sm:gap-12 sm:py-4  sm:text-xl">
         <div className={rammetto.className}>

 		<Link href="/"> Raam Adithyan</Link>
 		</div>
 		</div>

 		<div className=" absolute  flex py-16 gap-8
 		sm:flex sm:gap-12 sm:py-4 sm:relative
 		">

 		<div className="header-item text-xl">
 		<Link className="text-[1rem] sm:text-[1.2rem]" href="/portfolio"> Portfolio</Link>
 		</div>

 		<div className="header-item text-xl">
 		<Link className="text-[1rem] sm:text-[1.2rem]" href="/resume"> Resume</Link>
 		</div>

 		<div  className="header-item text-xl">
 		<Link className="text-[1rem] sm:text-[1.2rem]" href="/connect">Connect</Link>
 		</div>

 		</div>
 			
 		</header>
 	)
 }
 
 export default Header