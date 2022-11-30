import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../application/actions/character";
import { getCharacters as characters } from "../application/selectors/character";
import { getLoading } from "../application/selectors/ui";

const CharacterPage = () => {
  const dispatch = useDispatch();
  const { character } = useSelector(characters);
  const loading = useSelector(getLoading);

  useEffect(() => {
    const path = window.location.pathname;
    const character_id = path.substring(1);
    dispatch(getCharacter(character_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-h1">Loading</div>
      </div>
    );
  return (
    <div className="px-5 xl:px-14">
      <div className="pt-10 w-full xl:pt-20 lg:flex justify-center items-center">
        <div className="w-full lg:max-w-sm xl:max-w-lg">
          <h1 className="lg:text-h1 text-h1-sm text-left">{character?.name}</h1>
          <div className="text-base mt-3 w-full">{character?.description}</div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img
          className="img-character object-cover"
          src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
          alt="marvel character"
        />
      </div>
      <div className="mt-10">
        <h2 className="lg:text-h1 text-h1-sm">Stories</h2>
        <ul className="mt-5 list-disc">
          {character?.stories?.items?.map((story) => (
            <li key={story.name} className="mb-4 ml-4">
              {story?.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="lg:text-h1 text-h1-sm">Events</h2>
        <ul className="mt-5 list-disc">
          {character?.events?.items?.map((event) => (
            <li key={event.name} className="mb-4 ml-4">
              {event?.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="lg:text-h1 text-h1-sm">Series</h2>
        <ul className="mt-5 list-disc">
          {character?.series?.items?.map((series) => (
            <li key={series.name} className="mb-4 ml-4">
              {series?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterPage;
