import { motion } from "framer-motion";
import Page from "@/components/Page";
import Link from "next/link";

export default function Connect() {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Page>
      <div
        className="bg-[#5cc9c9] w-full h-[100vh] absolute top-0 left-0 -z-10
                        flex justify-center items-center
    "
      >
        <div className="w-[80%] sm:w-[50%] h-auto flex justify-end">
          {/*Skills*/}

          <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              // delay: 0.1 * index,
            }}
          >
            <table className="text-white  ">
              <tbody>
                <tr>
                  <th className="text-2xl connect-table">
                    raamadithyan@gmail.com
                  </th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table connect-table-bottom  ">
                    9962802830
                  </th>
                </tr>
                <tr>
                  <Link href="https://github.com/raamadithyan" legacyBehavior>
                    <th className="text-2xl connect-table">Github</th>
                  </Link>
                </tr>
                <tr>
                  <th className="text-2xl connect-table">Linkedin</th>
                </tr>
                <tr>
                  <th className="text-2xl connect-table">Behance</th>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
