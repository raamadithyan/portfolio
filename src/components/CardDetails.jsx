import { useRouter } from "next/router";

function CardDetails() {
  const router = useRouter();

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <span onClick={() => router.back()} className="text-8xl cursor-pointer ">
        X
      </span>
    </div>
  );
}

export default CardDetails;
