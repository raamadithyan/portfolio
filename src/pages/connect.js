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
        className="bg-[#5cc9c9] w-full h-[100vh] absolute top-0 left-0 z-10
                        flex justify-center items-center 
    "
      >
        <div className="w-[80%] sm:w-[50%] h-auto flex justify-center sm:justify-end ">
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
            <section className="text-white flex flex-col  ">
              <p className="text-xl sm:text-2xl connect-table">
                raamadithyan@gmail.com
              </p>
              <p className="text-xl sm:text-2xl connect-table connect-table-bottom  ">
                9962802830
              </p>
              <a
                className="text-xl sm:text-2xl connect-table"
                href="https://github.com/raamadithyan"
                target="_blank"
              >
                Github
              </a>
              <a
                className="text-xl sm:text-2xl connect-table"
                href="https://www.linkedin.com/in/raamadithyan/"
                target="_blank"
              >
                Linkedin
              </a>
              <a
                className="text-xl sm:text-2xl connect-table"
                href="https://www.behance.net/raamadithyan"
                target="_blank"
              >
                Behance
              </a>
            </section>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
