import "./CharInfo.scss";
import thorImg from "../../assets/img/thor.png";

const CharInfo = (props) => {
  let className = "";

  if (props.type === "page") {
    className = "--page";
  }

  if (props.type === "one") {
    className = "--one";
  }

  return (
    <section className={`char char${className}`}>
      <img src={thorImg} alt="thor" className="char__img" />
      <div className="char__info">
        <h2 className="sub-title char__title">THOR</h2>
        <p className="char__about">
          As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted
          hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and
          compassionate...
        </p>

        <div className="char__button-block">
          <a className="button char__btn" href="#">
            Homepage
          </a>
          <a className="button char__btn button--grey" href="#">
            Wiki
          </a>
        </div>
      </div>
      {className === "page" ? (
        <p className="char__about--page">
          In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother
          of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world
          serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the
          father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is
          referred to as the father of Váli in the Prose Edda.
        </p>
      ) : (
        ""
      )}
    </section>
  );
};

export default CharInfo;
