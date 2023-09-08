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
    <div className='  bg-[#333] w-full h-[100vh] absolute top-0 left-0 px-96 flex items-center justify-center'>
      <div className="app z-20   ">
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
