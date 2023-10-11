const Pages = ({ pages, currentPage, setcurrentPage }) => {
  return (
    <div className="relative">
      <ul className="text-lg flex gap-4 justify-center flex-wrap">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={` bg-gray-800/70 transition duration-300 
                hover:bg-gray-900/70 text-white/70 active:text-black px-[.9rem]  p-1 
                  rounded-lg
                ${page === currentPage && "bg-green-400"}`}
              onClick={() => setcurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pages;