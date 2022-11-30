import classNames from "classnames";
import { useSelector } from "react-redux";
import { getLoading } from "../../application/selectors/ui";

interface IPagination {
  length: number;
  offset: number;
  handlePagination: (type: string | number) => void;
  customPagination: any;
  page: number;
  pageArrayLength: number;
  totalPages: number;
}

const Pagination = ({
  customPagination,
  handlePagination,
  length,
  offset,
  page,
  pageArrayLength,
  totalPages,
}: IPagination) => {
  const loading = useSelector(getLoading);
  return (
    <div
      className={classNames(
        "flex mt-3 items-center justify-between text-base font-semibold",
        {
          hidden: length === 0,
        }
      )}
    >
      <button
        disabled={offset === 0 || loading}
        className={classNames("cursor-pointer font-semibold", {
          "!cursor-not-allowed text-gray-500": offset === 0,
        })}
        onClick={() => handlePagination("p")}
      >
        Prev
      </button>

      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
            role="status"
          >
            <span className="visually-hidden h-14 w-14 rounded-full border-4"></span>
          </div>
        </div>
      ) : (
        <div className="flex items-center lg:gap-8 gap-5">
          {customPagination.map((p: any) => (
            <button
              key={p}
              className={`${page === p ? "text-blue-400 font-semibold" : ""}`}
              onClick={() => {
                handlePagination(p);
              }}
            >
              {p}
            </button>
          ))}

          {pageArrayLength > 3 && <p className="tracking-wide">...</p>}

          <button
            className={`${page === totalPages ? "text-blue-400" : ""}`}
            onClick={() => handlePagination(totalPages)}
          >
            {totalPages}
          </button>
        </div>
      )}

      <button
        disabled={page === totalPages || loading}
        className={classNames("cursor-pointer", {
          "!cursor-not-allowed text-gray-500": page === totalPages,
        })}
        onClick={() => handlePagination("n")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
