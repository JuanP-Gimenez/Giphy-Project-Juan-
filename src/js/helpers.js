export const fetchData = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    if (err.message === "Failed to fetch")
      err.message =
        "Oh no! Something went snap 🙃. Please check your internet connection";
    throw err;
  }
};
