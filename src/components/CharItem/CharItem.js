import "./CharItem.scss";

import damaImg from "../../assets/img/dama.jpg";

const CharItem = () => {
  return (
    <li className="char-item">
      <img src={damaImg} href="#" className="char-item__img" />
      <h2 className="char-item__name sub-title">ABYSS</h2>
    </li>
  );
};

export default CharItem;
