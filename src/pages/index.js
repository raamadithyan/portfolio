import Page from '@/components/Page'

export default function Home() {
  return (
    <Page>
    <div 
      className='
        bg-[#5e44e1] w-full h-[100vh]
         border-yellow-600 border border-1 flex justify-center items-center

         '>
         <div className=' border-yellow-600 border border-1 w-[80%] sm:w-[50%] h-[50%]'>
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

           
         </div>
    </div>
    </Page>
  )
}
