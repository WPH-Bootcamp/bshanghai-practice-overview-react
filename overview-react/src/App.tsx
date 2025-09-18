import { useState } from "react";
import Footer from "./components/container/Footer";
import {
  HeaderFunctionArrow,
  HeaderFunctionBiasa,
} from "./components/container/Header/Header";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          dark ? "dark" : ""
        } min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition  `}
      >
        <HeaderFunctionArrow data={"Hello"} />
        <HeaderFunctionBiasa data={"Hello"} />
        <div className="flex flex-col items-center justify-center h-screen ">
          <h1 className="text-3xl font-bold ">
            Hello this is {dark ? "Dark Mode" : "Light Mode"}
          </h1>
          <button
            className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
            onClick={() => setDark(!dark)}
          >
            Toggle mode
          </button>
        </div>
        <Footer title="Apa kek" />
      </div>
    </>
  );
}

export default App;
