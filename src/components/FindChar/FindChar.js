import "./FindChar.scss";

const FindChar = () => {
  return (
    <form action="#" method="GET" className="char-find">
      <h2 className="char-find__title paragraph-title">Or find a character by name</h2>
      <div className="char-find__data">
        <input name="name" type="text" placeholder="Enter name" className="char-find__input" />
        <button type="submit" className="button char-find__btn">
          Find
        </button>
      </div>
    </form>
  );
};

export default FindChar;
