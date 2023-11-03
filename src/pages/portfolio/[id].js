import { useRouter } from "next/router";
// import { motion } from "framer-motion";
import { cards } from "./index";
import CardDetails from "@/components/CardDetails";


export default function Details() {
  const router = useRouter();
  const pathid = router.query.id;
  const textColor = cards.map((c) => c.text);

  const cardArr = [
    {
      projectHeading:"The KanbanBoard App is a digital project management tool",
      projectDescription:"designed to help teams and individuals organize tasks, track progress, and improve workflow efficiency using the Kanban methodology. This app provides a user-friendly interface that enables seamless task management, collaboration, and visualization of work processes."
    }
  ]

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
      className="h-[100vh] w-[100vw] flex justify-center"
    >
      {/* {pathid} */}
      {/* {console.log(textColor)} */}
      <CardDetails card={textColor} />
    </div>
  );
}
