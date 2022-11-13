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

const createGifObject = (data) => {
  return {
    original: data.images?.original,
    fixedWidth: data.images?.fixed_width,
    fixedWidthSmall: data.images?.fixed_width_small,
    downStill: data.images?.downsized_still,
    downsized: data.images?.downsized_medium,
    downsizedLarge: data.images?.downsized,
    previewWebp: data.images?.preview_webp,
    previewGif: data.images?.preview_gif,
    preview: data.images?.preview,

    title: data.title,
  };
};

export const showRandomGiphy = async function () {
  try {
    // API call to return random GIPHY
    const { data } = await AJAX(`${API_URL}random?api_key=${API_KEY}`);
    console.log(data);
    state.giphy = createGifObject(data);
  } catch (err) {
    throw err;
  }
  // try {
  //   const data = await fetch(`${API_URL}random?api_key=${API_KEY}`);
  //   const dataJson = await data.json();
  //   const giphy = dataJson.data;
  //   console.log(giphy.images);
  //   state.giphy = createGifObject(giphy);
  // } catch (err) {
  //   console.error(`${err} 💥💥💥`);
  //   throw err;
  // }
};

export const showFinderResults = async (query) => {
  try {
    state.search.query = query;

    const data = await AJAX(
      `${API_URL}search?api_key=${API_KEY}&q=${query}&rating=g`
    );

    state.search.results = data.data.map((gif) => createGifObject(gif));
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
    const data = await AJAX(`${API_URL}trending?api_key=${API_KEY}&limit=10`);
    //const trenData = await data.json();

    state.trending.results = data.data.map((gif) => createGifObject(gif));
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err;
  }
};
