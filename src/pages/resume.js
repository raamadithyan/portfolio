import Page from "@/components/Page";
import { motion } from "framer-motion";

export default function Resume() {
  const variant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Page>
      <div
        className="bg-[#ee0e94] w-full h-[100vh] absolute top-0 left-0 -z-10
      flex justify-center items-center
    "
      >
        <div className=" mt-20 sm:mt-0 w-[80%] sm:w-[50%] h-auto flex justify-around">
          {/*Experience*/}

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
            <table className="text-white ">
              <thead>
                <tr>
                  <th className="text-xl sm:text-2xl">Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    2021 — 2022 <br />
                    <span>Diamondpick</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    2018 — 2021 <br />
                    <span>Inscribe Graphics </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    2016 — 2017 <br />
                    <span>Sulekha </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    2014 — 2015 <br />
                    <span>Sun Infotek </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    2012 — 2014 <br />
                    <span>Sony Pictures Imageworks </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

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
            <table className="text-white skill-table ">
              <thead>
                <tr>
                  <th className="text-xl sm:text-2xl">Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Javascript</td>
                </tr>
                <tr>
                  <td>Typescript</td>
                </tr>
                <tr>
                  <td>React JS</td>
                </tr>
                <tr>
                  <td>Next JS</td>
                </tr>
                <tr>
                  <td>Node JS</td>
                </tr>
                <tr>
                  <td>React Testing Library</td>
                </tr>
                <tr>
                  <td>Jest</td>
                </tr>
                <tr>
                  <td>Git</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </Page>
  );
}
