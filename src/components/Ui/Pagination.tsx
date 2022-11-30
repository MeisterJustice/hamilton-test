import classNames from "classnames";

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
        disabled={offset === 0}
        className={classNames("cursor-pointer font-semibold", {
          "!cursor-not-allowed text-gray-500": offset === 0,
        })}
        onClick={() => handlePagination("p")}
      >
        Prev
      </button>

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

      <button
        disabled={page === totalPages}
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
