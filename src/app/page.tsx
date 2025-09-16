import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto sm:text-2xl text-white animate-appear">
          <h1 className="text-4xl font-bold">
            Doppio&apos;s computer <br /> Repair Shop
            <address>
              555 Gateway <br />
              Kansas City, KS 55555
            </address>
            <p>Open Daily: 9am to 5pm</p>
            <Link href="tel: 55555" className="hover: underline">
              {"5555-555-5555 "}
            </Link>
          </h1>
        </div>
      </main>
    </div>
  );
}
