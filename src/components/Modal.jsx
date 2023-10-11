import { IconX } from "@tabler/icons-react";

const Modal = ({ resident, modal, setModal }) => {
  return (
    <div>
      {modal ? (
        <div
          className="absolote min-w-full min-h-screen z-20 bg-gray-950/90 grid place-items-center
                "
        >
          <div className="animate-fade-in bg-gray-800/80  rounded-xl overflow-hidden">
            <div>
              <header>
                <div className="flex justify-end pt-2 pr-2">
                  <div
                    onClick={() => setModal(!modal)}
                    className=" rounded-full p-1 w-[32px] bg-white text-black cursor-pointer hover:bg-green-400 transition duration-200"
                  >
                    <IconX />
                  </div>
                </div>
                <img src={resident?.image} alt="" className="p-2" />
              </header>
              <div className="p-4 px-6 grid grid-rows-[auto_1fr] ">
                <h4 className=" transition duration-200 cursor-pointer text-xl font-bold pb-3">
                  {resident?.name}
                </h4>
                <ul className="grid grid-cols-[auto,1fr] gap-2 line-clamp-1">
                  <li>
                    <span className="text-[0.9rem] text-white/80">Gender:</span>
                  </li>
                  <li className="font-bold">{resident?.gender}</li>

                  <li>
                    <span className="text-[0.9rem] text-white/80">
                      Species:
                    </span>
                  </li>
                  <li className="font-bold">{resident?.species}</li>

                  <li>
                    <span className="text-[0.9rem] text-white/80">Origin:</span>
                  </li>
                  <li className="font-bold ">{resident?.origin.name}</li>

                  <li>
                    <span className="text-[0.9rem] text-white/80">
                      Times appear:
                    </span>
                  </li>
                  <li className="font-bold">{resident?.episode.length}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Modal;
