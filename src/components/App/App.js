import "../../assets/style/style.scss";
import "./App.scss";

import AppHeader from "../AppHeader/AppHeader";

import RandomBlock from "../RandomBlock/RandomBlock";
import CharsList from "../CharsList/CharsList.js";
import CharPage from "../CharPage/CharPage";

import Banner from "../Banner/Banner";
import ComicsList from "../ComicsList/ComicsList";
import ComicsOne from "../ComicsOne/ComicsOne";
import CharOne from "../CharOne/CharOne";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <RandomBlock />
      <CharsList />
      <CharPage />
    </div>
  );
}

export default App;

// CHARACTERS

/* <RandomBlock /> 
   <CharsList /> 
   <CharPage /> 
*/

// COMICS

// <Banner />
// <ComicsList />

// COMICS ONE

// <Banner />
// <ComicsOne />

// Char One

// <Banner />
// <CharOne />;
