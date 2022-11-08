import { API_URL, API_KEY } from "./config.js";
import * as model from "./model.js";
import randomGiphyView from "./views/randomGiphyView.js";
import finderView from "./views/finderView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import trendingView from "./views/trendingView.js";
import navigationView from "./views/navigationView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

// if (module.hot) {
//   module.hot.accept();
// }

const controlGiphy = async () => {
  try {
    randomGiphyView.renderSpinner();
    // Loading giphy
    await model.showRandomGiphy();

    // Render giphy
    randomGiphyView.render(model.state.giphy);
  } catch (err) {
    randomGiphyView.renderError();
  }
};

const controlFinderResults = async () => {
  try {
    resultsView.renderSpinner();

    // Get finder query
    const query = finderView.getQuery();
    if (!query) return;

    // Load finder results
    await model.showFinderResults(query);

    // Render results
    //resultsView.render(model.state.search.results);
    resultsView.render(model.searchResultsPerPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = (goToPage) => {
  // Render NEW results
  resultsView.render(model.searchResultsPerPage(goToPage));

  // Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlTrending = async () => {
  try {
    trendingView.renderSpinner();

    await model.showTrendingGiphy();

    trendingView.render(model.state.trending);
  } catch (err) {
    console.log(err);
  }
};

const init = () => {
  controlGiphy();
  controlTrending();
  finderView.addHandlerFinder(controlFinderResults);
  paginationView.addHandlerClick(controlPagination);
  randomGiphyView.addHandlerNewRandomGif(controlGiphy);
};

init();
