import Header from "@/components/shared/Header";
import Image from "next/image";

const vaporwareSize = 230;

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-pink-100 flex-1">
        <div className="flex flex-row w-fit mx-auto px-5">
          <div>
            <h1
              className="
              text-2xl sm:text-4xl lg:text-9xl
              my-10
            "
            >
              Usman.<b>Ahmed</b>
            </h1>
            <p>Fullstack software engineer with a passion for building</p>
          </div>
          <Image
            src={"/vaporware.png"}
            alt="vaporware"
            height={vaporwareSize}
            width={vaporwareSize}
          />
        </div>
      </main>
    </>
  );
}
