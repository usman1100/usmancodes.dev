import Header from "@/components/shared/Header";
import Image from "next/image";

const vaporwareSize = 230;

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex-1 px-5 lg:w-3/4 lg:px-0 xl:w-3/4">
        <div className="flex flex-row">
          <div>
            <h1
              className="
              my-5 text-2xl sm:text-4xl  lg:my-10
              lg:text-9xl
            "
            >
              Usman.<b>Ahmed</b>
            </h1>
            <p>Fullstack software engineer with a passion for building</p>
          </div>
          <Image
            className="ml-auto hidden lg:block"
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
