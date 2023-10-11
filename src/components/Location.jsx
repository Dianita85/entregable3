import axios from "axios";
import { useState } from "react";

const Location = ({ location, setLocation }) => {
  const [newNameLocation, setNewNameLocation] = useState([]);
  const [nameLocation, setNameLocation] = useState("");

  const handleInputLocation = (e) => {
    setNameLocation(e.target.value);
    const locationName = e.target.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
      .then(({ data }) => setNewNameLocation(data.results))
      .catch((err) => console.log(err));

    for (let i = 0; i < newNameLocation.length; i++) {
      if (newNameLocation[i].name === locationName) {
        axios
          .get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
          .then(({ data }) => setLocation(data.results[0]))
          .catch((error) => console.log(error));
      }
    }
  };

  return (
    <section className="grid place-items-center h-[600px]">
      <div className="z-10">
        <img src="./logo.png" alt="" className="animate-fade-in active:animate-fade-in2" />
      </div>

      <div className="overflow-hidden">
        <img src="" alt="" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg overflow-hidden animate-fade-in"
      >
        <input
          placeholder="type a new location..."
          name="locationName"
          value={nameLocation}
          className="w-[205px] h-[32px] sm:w-[280px] sm:h-[40px] outline-none px-4 py-1 bg-gray-800/50
          drop-shadow-2xl hover:bg-gray-900/50 focus:bg-gray-900/50
          transition duration-300"
          type="text"
          autoComplete="off"
          onClick={() => setNameLocation("")}
          onChange={handleInputLocation}
        />
        <div
          className={`${nameLocation === "" ? "hidden" : "block"} ${
            nameLocation.length > 6 ? "hidden" : "block"
          }
            overflow-y-scroll
            absolute cursor-pointer bg-gray-950/95 z-20 w-[205px] sm:w-[280px] h-[250px]`}
        >
          {newNameLocation?.map((location) => (
            <option
              className="hover:bg-gray-700/50 py-2 px-3 transition duration-150"
              key={location.name}
              value={location.name}
              onClick={handleInputLocation}
            >
              {location.name}
            </option>
          ))}
        </div>
      </form>

      <section
        className="z-10 bg-gray-800/50 min-w-[220px] min-h-[140px] rounded-xl 
        sm:min-w-[450px] sm:min-h-[200px] 
        grid grid-rows-[auto_1fr] place-items-center py-2 bg-center animate-fade-in"
      >
        
          <h3 className=" animate-fade-in1 text-[1rem] sm:text-3xl py-2 font-bold text-green-400">
            {location?.name}
          </h3>

          <ul className=" animate-fade-in1 grid grid-cols-[1fr,auto] gap-2 gap-x-4 text-[.7rem] sm:text-[1.1rem] text-white/70">
            <li>Type:</li>
            <li>
              {" "}
              <b>{location?.type}</b>{" "}
            </li>
            <li> Dimension: </li>
            <li>
              <b>{location?.dimension}</b>
            </li>
            <li>Population:</li>
            <li>
              <b>{location?.residents.length}</b>
            </li>
          </ul>
       
      </section>
    </section>
  );
};
export default Location;