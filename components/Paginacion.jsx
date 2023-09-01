import Link from "next/link";


const Paginacion = ({paginacion}) => {

  const {page, size, total, pageCount} = paginacion

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center gap-2">
        <li className="page-item">
          <a className="page-link pagination-link" href={`/libros?page=${1}`} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {Array.from(Array(pageCount).keys()).map((i) => (
          
          <li className="page-item" key={i}>
            <Link className="page-link pagination-link" href={`/libros?page=${i + 1}`} >
              {i + 1}
            </Link>
          </li>
          
        ))}
        <li className="page-item">
          <a className="page-link pagination-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Paginacion;