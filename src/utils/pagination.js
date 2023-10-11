//? currentPage = la pag actual
//? residents = Arreglo total de residentes en la dimension actual
const paginationLogic = (currentPage, residents) => {
  //Excepcion para el primer render
  if (residents.length === 0) {
    return {
      pages: [1],
      residentsInPage: [],
    };
  }

  {/*The number of residents per page */} 
  const RESIDENTS_PER_PAGE = 8;

  {/* Total number of pages*/}
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  {/*Residents to be displayed on the current page*/}
  const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
  const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  {/*Generation of arrangement of the pages to be displayed*/} 
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return {
    residentsInPage,
    pages,
  };
};

export { paginationLogic };
