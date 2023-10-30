import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import { cards } from "./index";
import CardDetails from "@/components/CardDetails";
export default function Details() {
  const router = useRouter();
  const pathid = router.query.id;
  const card = cards.filter((c) => c.color);

  function cellColor(status) {
    switch (pathid) {
      case "kanban-board":
        return "#1F1F1F";
      case "article-condense":
        return "#7CCAA0";
      case "invoice-print":
        return "#F4F592";
      case "scribble-app":
        return "#999592";

      default:
        return "";
    }
  }

  return (
    <div
      style={{
        backgroundColor: cellColor(pathid),
      }}
      className={`h-[100vh] text-black`}
    >
      {pathid}
      <CardDetails  />
      
    </div>
  );
}
