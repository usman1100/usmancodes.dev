import Header from "@/components/shared/Header";
import Image from "next/image";

const vaporwareSize = 230;

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-pink-100">
        <div className="mx-auto flex w-fit flex-row px-5">
          <div>
            <h1
              className="
              my-10 text-2xl sm:text-4xl
              lg:text-9xl
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
