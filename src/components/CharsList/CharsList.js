import "./CharsList.scss";

import CharItem from "../CharItem/CharItem";

const CharList = () => {
  return (
    <>
      <ul className="chars__list">
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />
        <CharItem />

        <button type="button" className="button chars__btn">
          Load More
        </button>
      </ul>
    </>
  );
};

export default CharList;
