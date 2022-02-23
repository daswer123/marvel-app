import "./ComicsOne.scss";
import comicsImg from "../../assets/img/comics.png";

const ComicsOne = () => {
  return (
    <section className="comics-one">
      <img src={comicsImg} alt="comics-img" className="comics-one__img" />
      <div className="comics-one__info paragraph--page">
        <header className="comics-one__header">
          <h2 className="comics-one__title sub-title">X-men: Days of Future Past</h2>
          <a href="#" alt="back to all" className="comics-one__back paragraph--page">
            Back to all
          </a>
        </header>
        <p className="comics-one__about">
          Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and
          the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the
          return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?
        </p>
        <p className="comics-one__pages">144 pages</p>
        <p className="comics-one__language">Language: en-US</p>
        <p className="comics-one__price title special">9.99$</p>
      </div>
    </section>
  );
};

export default ComicsOne;
