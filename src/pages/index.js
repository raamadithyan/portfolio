import Page from '@/components/Page'
import Lottie from "lottie-react";
import groovyWalkAnimation from "public/block.json";
export default function Home() {
  return (
    <Page>
    <div 
      className='
        bg-[#5e44e1] w-full h-[100vh]
          flex flex-col pt-48 sm:pt-24 items-center sm:justify-center

         '>
         <div className=' w-[80%] sm:w-[50%] h-fit'>
      <h1 
      className='
        font-bold
        text-white
        text-2xl
        text-center
        sm:text-4xl

        '>


      Crafting Exquisite Digital Experiences

      </h1>
      <h1 
      className='
        font-normal
        text-white
        mt-8
        text-md
        sm:text-xl
        text-center
        '>
              Hey there! I'm Raam Adithyan, a passionate 
      frontend developer with a flair for creating 
      seamless user experiences. I specialize in crafting
       intuitive, interactive, and modern web apps that 
       leave a lasting impression.
       
      </h1>
 <div className="  h-fit  mt-8 ">

           <Lottie className=' absolute mix-blend-screen scale-100 sm:scale-150 sm:relative' style={{ height: 320 }}  animationData={groovyWalkAnimation} />;
      
    </div>
         </div>
        
    </div>
    </Page>
  )
}
