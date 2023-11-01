import { useRouter } from "next/router";
import { Rammetto_One } from "next/font/google";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiRedux
} from "react-icons/si";
const rammetto = Rammetto_One({
  weight: "400",
  subsets: ["latin"],
});

function CardDetails({ card }) {
  const router = useRouter();
  const pathid = router.query.id;

  console.log(card);
  return (
    <div className="flex h-fit justify-start  pt-[48px] w-[55%] text-white gap-12">
      {/* Coloum left */}

      <div className=" w-full flex flex-col gap-8">
        {/* Back Button */}
        <div>
          <span
            onClick={() => router.back()}
            className="text-8xl cursor-pointer "
          >
            <svg
              style={{ color: pathid === "kanban-board" ? "white" : "black" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>
        </div>

        {/* Heading */}

        <div>
          <div className={rammetto.className}>
            <header
              className="text-[32px]"
              style={{ color: pathid === "kanban-board" ? "white" : "black" }}
            >
              {pathid === "kanban-board" &&
                "The KanbanBoard App is a digital project management tool"}
              {pathid === "article-condense" &&
                "The Article Condenser App is a cutting-edge text summarization tool"}
            </header>
          </div>
        </div>

        {/* Technologies used */}

        <div style={{ color: pathid === "kanban-board" ? "white" : "black" }}>
          <p>Technologies used</p>
          <div className="flex gap-3 mt-4 ">

            {pathid==="kanban-board"
            &&
            <>
            <SiReact title="React" size={32} />
            <SiTypescript title="Typescript" size={32} />
            <SiTailwindcss title="Tailwind CSS" size={32} />
            <SiVite title="Vite" size={32} />
            </>
            }

            {pathid==="article-condense"
            &&
            <>
            <SiReact title="React" size={32} />
            <SiTailwindcss title="Tailwind CSS" size={32} />
            <SiRedux title="Redux" size={32} />
            <SiVite title="Vite" size={32} />
            </>
            }
{/* 
            <SiReact title="React" size={32} />
            <SiTypescript title="Typescript" size={32} />
            <SiTailwindcss title="Tailwind CSS" size={32} />
            <SiVite title="Vite" size={32} />
            <SiFramer title="Framer Motion" size={32} />
            <SiNextdotjs title="Nextjs" size={32} /> */}

          </div>
        </div>
      </div>

      {/* column right */}
      <div className=" w-full">
        <p
          className="text-[14px] mt-[60px] "
          style={{ color: pathid === "kanban-board" ? "white" : "black" }}
        >
          {pathid === "kanban-board" &&
            "Designed to help teams and individuals organize tasks, track progress, and improve workflow efficiency using the Kanban methodology. This app provides a user-friendly interface that enables seamless task management, collaboration, and visualization of work processes."}
          {pathid === "article-condense" &&
            "Users extract key information from lengthy articles, research papers, and documents. It employs advanced natural language processing techniques to generate concise and informative summaries, saving users valuable time and ensuring they grasp the essence of the content."}
        </p>
      </div>
    </div>
  );
}

export default CardDetails;
