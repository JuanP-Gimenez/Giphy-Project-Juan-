import { async } from "regenerator-runtime";
import { API_URL, API_KEY, TIMEOUT_SEC, RES_PER_PAGE } from "./config";
import { AJAX, getJSON } from "./helpers";

export const state = {
  giphy: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  trending: {
    results: [],
  },
};

export const showRandomGiphy = async () => {
  try {
    const data = await fetch(`${API_URL}random?api_key=${API_KEY}`);
    const dataJson = await data.json();

    const giphy = dataJson.data;

    state.giphy = {
      fixedWidth: giphy.images?.fixed_width,
      original: giphy.images.original,
      fixedWidthDownsampled: giphy.images.fixed_width_downsampled,
      fixedWidthSmall: giphy.images.fixed_width_small,
      preview: giphy.images.downsized_still,
      title: giphy.title,
    };
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
};

export const showFinderResults = async (query) => {
  try {
    state.search.query = query;

    const data = await fetch(`${API_URL}search?api_key=${API_KEY}&q=${query}`);
    const giphyResults = await data.json();

    state.search.results = giphyResults.data.map((gif) => {
      return {
        fixedWidth: gif.images?.fixed_width,
        original: gif.images.original,
        fixedWidthDownsampled: gif.images.fixed_width_downsampled,
        fixedWidthSmall: gif.images.fixed_width_small,
        preview: gif.images.downsized_still,
        title: gif.title,
      };
    });
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
};

export const searchResultsPerPage = (page = state.search.page) => {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 5;

  return state.search.results.slice(start, end);
};

export const showTrendingGiphy = async () => {
  try {
    const data = await fetch(`${API_URL}trending?api_key=${API_KEY}`);
    const trenData = await data.json();
    console.log(trenData.data);
    state.trending.results = trenData.data.map((gif) => {
      return {
        fixedWidth: gif.images?.fixed_width,
        original: gif.images.original,
        fixedWidthDownsampled: gif.images.fixed_width_downsampled,
        fixedWidthSmall: gif.images.fixed_width_small,
        preview: gif.images.downsized_still,
        title: gif.title,
      };
    });
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
};
