import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../application/actions/character";
import { getCharacters as characters } from "../application/selectors/character";
import { Container } from "../components/Ui";

const Home = () => {
  const dispatch = useDispatch();
  //   const { data } = useSelector(characters);
  //   console.log(results);
  const callGetCharacters = (query?: string) => {
    dispatch(getCharacters(query || ""));
  };
  useEffect(() => {
    callGetCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              <tbody>
                <tr>
                  <td className="px-2 py-5 xl:px-5 xl:py-7 bg-slate-50 hover:bg-slate-100 cursor-pointer border-b">
                    <Link className="w-full" to="/djhjdhjdh">
                      The Sliding Mr. Bones (Next Stop, Pottersville)
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
