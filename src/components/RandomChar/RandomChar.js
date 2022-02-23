import "./RandomChar.scss";

const RandomChar = ({ changeRandomChar }) => {
  return (
    <section className="randomchar">
      <h2 className="randomchar__slogan title">Random character for today! Do you want to get to know him better?</h2>
      <h2 className="randomchar__slogan--2 title">Or choose another one</h2>

      <button type="button" className="randomchar__btn button" onClick={() => changeRandomChar()}>
        Try it
      </button>
    </section>
  );
};

export default RandomChar;
