import Page from "@/components/Page";
import Lottie from "lottie-react";
import groovyWalkAnimation from "public/block.json";
export default function Home() {
  return (
    <Page>
      <div
        className="
        bg-[#5e44e1] w-full h-fit sm:h-[100vh]
          flex flex-col pt-40 sm:pt-24 items-center sm:justify-center
         
         "
      >
        <div className=" w-[80%] sm:w-[50%] h-auto">
          <h1
            className="
        font-bold
        text-white
        text-2xl
        text-center
        sm:text-4xl

        "
          >
            Crafting Exquisite Digital Experiences
          </h1>
          <h1
            className="
        font-normal
        text-white
        mt-8
        text-md
        sm:text-xl
        text-center
        "
          >
            Feature oriented Front End Developer specializing in JavaScript and
            React. Passionate about creating dynamic interactive web
            applications and thrive on turning ideas into code.
          </h1>
          <div className="  h-fit relative top-0 sm:relative  sm:mt-8 ">
            <Lottie
              className=" transform -translate-y-20 sm:-translate-y-10  mix-blend-screen scale-100 sm:scale-150 sm:relative"
              style={{ height: 320 }}
              animationData={groovyWalkAnimation}
            />
            ;
          </div>
          <div className="flex justify-center -translate-y-48 sm:-translate-y-12 ">
            <button className="text-white px-4 py-2 border-2 rounded-md scale-75 sm:scale-100">
              Currently Open for Work
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
