import squares from "./list";
import { Mountains_of_Christmas } from "next/font/google";

const mountains = Mountains_of_Christmas({
  weight: ["700"],
  subsets: ["latin"],
});

function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  shuffleArray(squares);
  const selected = squares.slice(0, 25);
  return (
    <div className="container mx-auto bg-slate-50 p-4 drop-shadow">
      <div className="w-full text-7xl my-4">
        <h1 className={"text-center " + mountains.className}>
          Christmas Movie Bingo
        </h1>
      </div>
      <div className="grid grid-cols-5 border border-green-600 rounded-sm">
        {selected.map((element) => {
          return (
            <div className="grow aspect-square text-center border border-green-600 py-12 px-4">
              <span className="">{element}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full text-center pt-2">
        <p className="m-auto">
          Made by Olivia and Max. Report bugs{" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
