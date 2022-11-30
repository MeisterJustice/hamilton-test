import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCharacters } from "../application/actions/character";
import { getCharacters as characters } from "../application/selectors/character";
import { getLoading } from "../application/selectors/ui";
import { Container, Loader, Pagination } from "../components/Ui";
import { debounce } from "../libs/utils";

const limitOptions = [20, 40, 50, 100];

const HomePage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const { offset, total, results, limit } = useSelector(characters);
  const navigate = useNavigate();
  const scrollRef: any = useRef(null);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchText, setSearchText] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("name");

  const pageArray = Array.from(Array(totalPages), (_, x) => x + 1);

  const customPagination = pageArray
    .slice(0, pageArray.length - 1)
    .slice(
      page === totalPages ? 0 : page - 1,
      page === totalPages ? 2 : page + 2
    );

  const handleNumberToSkip = (type: string | number) => {
    switch (type) {
      case "p":
        return offset! - limit!;
      case "n":
        return offset! + limit!;
      default:
        return handleCustomPagination(Number(type));
    }
  };

  const handlePage = (type: string | number) => {
    switch (type) {
      case "p":
        return page - 1;
      case "n":
        return page + 1;
      default:
        return Number(type);
    }
  };

  const callGetCharacters = (query?: string) => {
    dispatch(
      getCharacters(query || "", {
        onSuccess: () => scrollToTop(),
      })
    );
  };

  const handlePagination = (type: string | number) => {
    const skip = handleNumberToSkip(type);
    const query = `&offset=${skip}`;
    const searchQuery = searchText ? `&nameStartsWith=${searchText}` : "";
    const filterQuery = `&orderBy=${filterText}`;
    const allQuery = filterQuery + searchQuery + query;
    callGetCharacters(allQuery);

    const newPage = handlePage(type);
    setPage(newPage);
  };

  const handleCustomPagination = (page: number) => {
    return (page - 1) * limit!;
  };

  const handleSearchText = debounce((value: string) => {
    setSearchText(value);
    const query = value ? `&nameStartsWith=${value}` : "";
    callGetCharacters(query);
    setPage(1);
  }, 10);

  const handleFilter = (value: string) => {
    setFilterText(value);
    const searchQuery = searchText ? `&nameStartsWith=${searchText}` : "";
    const filterQuery = `&orderBy=${value}`;
    const allQuery = filterQuery + searchQuery;
    callGetCharacters(allQuery);
  };

  const handleLimit = (value: string) => {
    const query = `&limit=${value}`;
    callGetCharacters(query);
  };

  const scrollToTop = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (results?.length === 0) {
      callGetCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (total && limit) {
      const num = total / limit;
      setTotalPages(Math.ceil(num));
    }
  }, [total, limit]);

  return (
    <div ref={scrollRef}>
      <Container>
        <div className="py-10 xl:py-20">
          <h1 className="lg:text-h1 text-h1-sm">Marvel Characters</h1>
          <div className="mt-10">
            <div className="my-5 lg:flex justify-between items-center">
              <div className="flex items-center">
                {loading ? (
                  <div className="w-16">
                    <Loader />
                  </div>
                ) : (
                  <div
                    onClick={() => callGetCharacters()}
                    className="mr-4 text-blue-500 font-semibold cursor-pointer"
                  >
                    to top
                  </div>
                )}
                <input
                  value={searchText}
                  onChange={(e) => handleSearchText(e.target.value)}
                  placeholder="search"
                  className="outline-gray-500 border border-gray-600 rounded h-12 w-full lg:w-80 p-3"
                />
              </div>
              <select
                value={filterText}
                onChange={(e) => handleFilter(e.target.value)}
                name="filter"
                className="w-full mt-3 lg:mt-0 lg:w-44 cursor-pointer p-3 h-12 rounded border-gray-600 border outline-gray-500"
              >
                <option value="name">ASC</option>
                <option value="-name">DESC</option>
              </select>
            </div>
            <table className="table-auto w-full overflow-x-auto border">
              <thead className="border rounded">
                <tr className="p-8">
                  <th className="text-left p-2 xl:p-5">Characters</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {results?.map((item) => (
                  <tr
                    onClick={() => navigate(`/${item?.id}`)}
                    className="w-full"
                    key={item?.id}
                  >
                    <td className="px-2 w-full py-5 xl:px-5 xl:py-7 bg-slate-50 text-base hover:bg-slate-100 cursor-pointer border-b">
                      {item?.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              customPagination={customPagination}
              handlePagination={handlePagination}
              length={results?.length || 0}
              offset={offset!}
              page={page}
              pageArrayLength={pageArray.length}
              totalPages={totalPages}
            />

            {results!?.length > 0 && (
              <div className="mt-7">
                <label htmlFor="limits">limit</label>
                <select
                  value={filterText}
                  onChange={(e) => handleLimit(e.target.value)}
                  name="filter"
                  className="ml-3 w-20 cursor-pointer p-3 rounded border-gray-600 border outline-gray-500"
                >
                  {limitOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
