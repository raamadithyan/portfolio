import { useRouter } from "next/router"
import { motion } from "framer-motion";
export default function Details(){
  const router = useRouter()
  const pathid = router.query.id;

  return(
   <motion.div className="bg-[#333] h-[100vh]"
   >
   details {pathid}
   </motion.div>
  )
}