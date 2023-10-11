import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";
import Pages from "./Pages";

const ResidentList = ({ residents }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setcurrentPage(1);
  }, [residents]);

  return (
    <>
      {residents.length === 0 ? (
        <section className="relative grid place-items-center h-[350px] animate-fade-in">
          <h3 className="animate-fade-in text-2xl text-white/80 hover:text-[#1f20d2] transition duration-200">
            Missing residents...
          </h3>
        </section>
      ) : (
        <section className="z-10 animate-fade-in py-6">
          <Pages
            pages={pages}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
          <section
            className="z-10 grid grid-cols-[repeat(auto-fit,_300px)]
            justify-center gap-6 max--w-[1000px] mx-auto py-10 "
          >
            {residentsInPage.map((resident) => (
              <ResidentCard key={resident} residentEndpoint={resident} />
            ))}
          </section>
          
          <Pages
            pages={pages}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </section>
      )}
    </>
  );
};
export default ResidentList;