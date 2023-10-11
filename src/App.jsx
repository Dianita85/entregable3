import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getRandomNumber from "./utils/random";

import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState(null);

  //Called Api//
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      {location === null ? (
        <div
          className="loading bg-black min-h-screen min-w-full flex flex-col 
        justify-center items-center gap-6"
        >
          <div className="animate-bounce flex justify-center items-center w-[100px] sm:w-[150px] ">
            <img src="./loading.jpg" alt="" className="" />
          </div>
          <h3 className="text-white">Loading...</h3>
        </div>
      ) : (
        <main className="font-['Lato']  text-white">
          <img src="./rick.jpg" alt="" className="min-h-screen min-w-full fixed object-cover bg-cover bg-center"/>
          <Location location={location} setLocation={setLocation} />
          <ResidentList residents={location?.residents ?? []} />
        </main>
      )}
    </main>
  );
}

export default App;