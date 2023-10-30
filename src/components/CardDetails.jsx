import { useRouter } from "next/router";

function CardDetails({ card }) {
  const router = useRouter();
  const pathid = router.query.id;

  console.log(card);
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <span onClick={() => router.back()} className="text-8xl cursor-pointer ">
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
  );
}

export default CardDetails;
