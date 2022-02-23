import "./ComicsList.scss";

import ComicsItem from "../ComicsItem/ComicsItem";

const ComicsList = () => {
  return (
    <>
      <ul className="comics__list">
        <ComicsItem />
        <ComicsItem />
        <ComicsItem />
        <ComicsItem />
        <ComicsItem />
        <ComicsItem />
      </ul>
      <button type="button" className="button comics__btn">
        Load More
      </button>
    </>
  );
};

export default ComicsList;
