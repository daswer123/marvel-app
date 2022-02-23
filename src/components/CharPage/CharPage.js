import "./CharPage.scss";

import CharInfo from "../CharInfo/CharInfo";
import ComicsBlock from "../ComicsBlock/ComicsBlock";
import Wait from "../Wait/Wait";
import FindChar from "../FindChar/FindChar";

const CharPage = () => {
  const wait = false;

  const char = (
    <>
      <section className="char-block">
        <div className="char-block__info">
          <CharInfo type="page" />
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
