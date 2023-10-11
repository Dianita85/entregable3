import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constans/resident";
import Modal from "./Modal";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <article className="relative bg-gray-800/50 rounded-xl overflow-hidden animate-fade-in">
        <header className="relative" onClick={handleModal}>
          <img
            src={resident?.image}
            alt=""
            className="cursor-pointer hover:brightness-75
        transition duration-200"
          />

          <div
            className="absolute bottom-4 left-1/2 -transtlate-x-1/2 bg-black/50
          text-white px-4 py-1 rounded-md flex item-center gap-2"
          >
            <div
              className={`h-3 w-3 ${
                characterStatus[resident?.status]
              } rounded-full`}
            ></div>
            <span>{resident?.status}</span>
          </div>
        </header>
        <div className="p-4 px-6 grid grid-rows-[auto_1fr] ">
          <h4
            onClick={handleModal}
            className="hover:text-green-400 transition duration-200 cursor-pointer text-xl font-bold pb-3"
          >
            {resident?.name}
          </h4>
          <ul className="grid grid-cols-[auto,1fr] gap-2 line-clamp-1">
            <li>
              <span className="text-[0.9rem] text-white/80">Species:</span>
            </li>
            <li className="font-bold">{resident?.species}</li>

            <li>
              <span className="text-[0.9rem] text-white/80">Origin:</span>
            </li>
            <li className="font-bold ">{resident?.origin.name}</li>

            <li>
              <span className="text-[0.9rem] text-white/80">Times appear:</span>
            </li>
            <li className="font-bold">{resident?.episode.length}</li>
          </ul>
        </div>
      </article>
      <div className="fixed top-0 w-screen z-20 left-0">
        <Modal resident={resident} modal={modal} setModal={setModal} />
      </div>
    </div>
  );
};
export default ResidentCard;
