import { useRouter } from "next/router";
import Header from "./header";

function CardDetails({ card }) {
  const router = useRouter();
  const pathid = router.query.id;

  console.log(card);
  return (
    <div className="flex h-fit justify-start border-2 w-[55%] text-white">
      {/* Coloum left */}

      <div className="border-2 w-full">
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
          <header> Heading</header>
        </div>

        {/* Technologies used */}

        <div>Technologies used</div>
      </div>

      {/* column right */}
      <div className="border-2 w-full">
        <p> Proj info</p>
      </div>
    </div>
  );
}

export default CardDetails;
