import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
console.log(inter);

export default function Home() {
  return (
    <main className="bg-black">
      <h1>These using Design Tokens with Tailwinds</h1>
      <div className="bg-white p-4 rounded">
        <h2>Dark</h2>
        <div className="flex gap-3">
          <div className="text-[#000000] w-[80px] h-[80px] flex items-center justify-center bg-dark-primary">
            Primary.
          </div>
          <div className="text-[#000000] w-[80px] h-[80px] flex items-center justify-center bg-dark-secondary">
            Secondary
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded">
        <h2>Light</h2>
        <div className="flex gap-3">
          <div className="text-[#000000] w-[80px] h-[80px] flex items-center justify-center bg-light-primary">
            Primary.
          </div>
          <div className="text-[#000000] w-[80px] h-[80px] flex items-center justify-center bg-light-secondary">
            Secondary
          </div>
        </div>
      </div>
    </main>
  );
}
