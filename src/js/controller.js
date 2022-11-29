import * as model from "./model.js";
import randomGiphyView from "./views/randomGiphyView.js";
import finderView from "./views/finderView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import trendingView from "./views/trendingView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";

const controlGiphy = async () => {
  try {
    randomGiphyView.renderSpinner();
    // Loading giphy
    await model.showRandomGiphy();

    // Render giphy
    randomGiphyView.render(model.state.giphy);
  } catch (err) {
    console.error(err.message);
    randomGiphyView.renderError(err.message);
  }
};

const controlFinderResults = async () => {
  try {
    resultsView.renderSpinner();

    // Get finder query
    const query = finderView.getQuery();
    if (!query) throw new Error("Please, enter your search 🤔");

    // Load finder results
    await model.showFinderResults(query);

    // Render results
    resultsView.render(model.searchResultsPerPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
    resultsView.renderError(err.message);
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
    console.error(err);
    trendingView.renderError(err.message);
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
