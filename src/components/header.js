 import Link from "next/link";
 import { createPortal } from "react-dom";

 
 const Header = () => {
 	return (
 		<header className=" justify-center 
 		fixed w-full flex sm:justify-between py-4 sm:px-96 z-40">

 		<div className="text-3xl py-0 block z-50
 		sm:flex sm:gap-12 sm:py-4  sm:text-xl">
 		<Link href="/"> Raam Adithyan</Link>
 		</div>

 		<div className=" absolute  flex py-16
 		sm:flex gap-12 sm:py-4 sm:relative
 		">

 		<div className="header-item text-xl">
 		<Link href="/portfolio"> Portfolio</Link>
 		</div>

 		<div className="header-item text-xl">
 		<Link href="/resume"> Resume</Link>
 		</div>

 		<div className="header-item text-xl">
 		<Link href="/connect">Connect</Link>
 		</div>

 		</div>
 			
 		</header>
 	)
 }
 
 export default Header