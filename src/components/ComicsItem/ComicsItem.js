import "./ComicsItem.scss";

import comicsImg from "../../assets/img/comics.png";

const ComicsItem = () => {
  return (
    <li class="comics-item">
      <img src={comicsImg} alt="Comics img" className="comics-item__img" />
      <h3 className="comics-item__title">X-Men: Days of Future Past</h3>
      <p className="comics-item__price">9.99$</p>
    </li>
  );
};

export default ComicsItem;
