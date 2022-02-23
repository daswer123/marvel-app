import "./Wait.scss";

import waitImg from "../../assets/img/wait.png";

const Wait = () => {
  return (
    <section className="wait">
      <h3 className="wait__title paragraph--page">Please select a character</h3>
      <img src={waitImg} alt="wait" className="wait__img" />
    </section>
  );
};

export default Wait;
