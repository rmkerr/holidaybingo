import squares from "./list";

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
        <h1 className="text-center">Christmas Movie Bingo</h1>
      </div>
      <div className="grid grid-cols-5 border border-green-600">
        {selected.map((element) => {
          return (
            <div className="grow aspect-square text-center border border-green-600 py-8 px-4">
              <p className="">{element}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
