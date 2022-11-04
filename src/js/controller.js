import { API_URL, API_KEY } from "./config.js";
console.log("TEST");

const showGiphy = async () => {
  try {
    const res = await fetch(`${API_URL}random?api_key=${API_KEY}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let giphy = data.data;
    giphy = {
      id: giphy.id,
      title: giphy.title,
      url: giphy.url,
    };
    console.log(giphy);

    // Render giphy
    const markup = `
    `;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
showGiphy();
