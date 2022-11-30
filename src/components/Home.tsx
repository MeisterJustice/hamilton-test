import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { getCharacters } from "../application/actions/character";
import { getCharacters as characters } from "../application/selectors/character";
import { Container, Pagination } from "../components/Ui";

const HomePage = () => {
  const dispatch = useDispatch();
  const { count, offset, total, results, limit } = useSelector(characters);
  const navigate = useNavigate();

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  console.log(totalPages, results);

  const pageArray = Array.from(Array(totalPages), (_, x) => x + 1);

  const customPagination = pageArray
    .slice(0, pageArray.length - 1)
    .slice(
      page === totalPages ? 0 : page - 1,
      page === totalPages ? 2 : page + 2
    );

  const callGetCharacters = (query?: string) => {
    dispatch(getCharacters(query || ""));
  };

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

  const handlePagination = (type: string | number) => {
    const skip = handleNumberToSkip(type);
    const query = `&offset=${skip}`;
    callGetCharacters(query);

    const newPage = handlePage(type);
    setPage(newPage);
  };

  const handleCustomPagination = (page: number) => {
    return (page - 1) * limit!;
  };

  useEffect(() => {
    callGetCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (total && limit) {
      const num = total / limit;
      setTotalPages(Math.ceil(num));
    }
  }, [total, limit]);

  return (
    <div>
      <Container>
        <div className="py-10 xl:py-20">
          <h1 className="lg:text-h1 text-h1-sm">Marvel Characters</h1>
          <div className="mt-10">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;