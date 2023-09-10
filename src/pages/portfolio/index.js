import Page from '@/components/Page'
import Card from '@/components/Card';
// import Project from '@/components/Project';


export default function Portfolio() {
   const cards = [
    { title: 'Music App', content: 'Content for Card 1',color:'#1F1F1F',path:'music-app' },
    { title: 'Card 2', content: 'Content for Card 2',color:'#7CCAA0',path:'two' },
    { title: 'Card 3', content: 'Content for Card 3',color:'#F4F592' ,path:'three'},
    { title: 'Card 3', content: 'Content for Card 3',color:'#3CCAA0',path:'four' },
  ];
  return (
    <Page>
    <div className='  bg-[#333] w-full h-fit absolute top-0 left-0 flex items-center justify-center
     sm:h-full
    '>
      <div 
        className="
           
           flex flex-wrap items-center justify-center
          gap-12 p-12 mt-28
          w-fit h-full  z-20
          sm:w-full sm:h-fit sm:flex sm:mt-14 sm:mx-80
          

             ">
      {cards.map((card, index) => (
        <Card 
         key={card.title} title={card.title} content={card.content} 
              index={index} color={card.color} path={card.path}
        />

      ))}
    </div>
    </div>
    </Page>
  )
}
