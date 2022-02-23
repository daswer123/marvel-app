import "./RandomBlock.scss";

import CharInfo from "../CharInfo/CharInfo";
import RandomChar from "../RandomChar/RandomChar";

const RandomBlock = () => {
  return (
    <section className="random-block">
      <CharInfo />
      <RandomChar />
    </section>
  );
};

export default RandomBlock;
