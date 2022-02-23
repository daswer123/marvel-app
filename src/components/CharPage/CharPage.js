import "./CharPage.scss";

import CharInfo from "../CharInfo/CharInfo";
import ComicsBlock from "../ComicsBlock/ComicsBlock";
import Wait from "../Wait/Wait";
import FindChar from "../FindChar/FindChar";

const CharPage = () => {
  const wait = true;

  const char = (
    <>
      <section className="char-block">
        <div className="char-block__info">
          <CharInfo type="page" />
          <h2 className="char-block__title">Comics:</h2>
          <ComicsBlock />
        </div>

        <FindChar />
      </section>
    </>
  );

  const content = wait ? <Wait /> : char;

  return content;
};

export default CharPage;
