import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-500 
        px-2 py-3 rounded-3xl"
          >
            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              Black
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-White shadow-sm"
              style={{ backgroundColor: "white" }}
              onClick={() => setColor("white")}
            >
              White
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              Pink
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "purple" }}
              onClick={() => setColor("purple")}
            >
              Purple
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>

            <button
              className="outline-none px-6 py-2 rounded-full text-black shadow-sm"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              Lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
