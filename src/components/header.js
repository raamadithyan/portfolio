 import Link from "next/link";

 
 const Header = () => {
 	return (
 		<header className="fixed w-full flex justify-between py-4 px-96 z-10">
 		<div className="logo text-xl">
 		<Link href="/"> Raam Adithyan</Link>
 		</div>

 		<div className="header-items">

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