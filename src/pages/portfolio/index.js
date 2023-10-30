import Page from "@/components/Page";
import Card from "@/components/Card";
// import Project from '@/components/Project';
export const cards = [
  {
    title: "Kanban Board",
    content: "Content for Card 1",
    color: "#1F1F1F",
    path: "kanban-board",
    text: "white",
  },
  {
    title: "Article Condense",
    content: "Content for Card 2",
    color: "#7CCAA0",
    path: "article-condense",
    text: "black",
  },
  {
    title: "Invoice Print",
    content: "Content for Card 3",
    color: "#F4F592",
    path: "invoice-print",
    text: "black",
  },
  {
    title: "Scribble App",
    content: "Content for Card 3",
    color: "#999592",
    path: "scribble-app",
    text: "black",
  },
];

export default function Portfolio() {
  return (
    <Page>
      <div
        className="  bg-[#333] w-full h-fit absolute top-0 left-0 flex items-center justify-center
     sm:h-full
    "
      >
        <div
          className="
           
           flex flex-wrap items-center justify-center
          gap-12 p-12 mt-28
          w-fit h-full  z-20
          sm:w-full sm:h-fit sm:flex sm:mt-14 sm:mx-80
          

             "
        >
          {cards.map((card, index) => (
            <Card
              key={card.title}
              title={card.title}
              content={card.content}
              index={index}
              color={card.color}
              path={card.path}
              textcolor={card.text}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
