import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <header className="main-header">
      <h1 className="main-title header__title">
        <span className="special">Marvel</span> information portal
      </h1>
      <div className="header__sections title">
        <a href="#" className="header__section header__section--active">
          Characters
        </a>
        <span> / </span>
        <a href="#" className="header__section special">
          Commics
        </a>
      </div>
    </header>
  );
};

export default AppHeader;
