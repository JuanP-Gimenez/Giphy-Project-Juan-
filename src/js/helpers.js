import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config";

const timeout = (s) => {
  new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    if (!res.ok) throw new Error(`${res.message} (${res.status})`);
    return data;
  } catch (err) {
    if (err.message === "Failed to fetch")
      err.message =
        "Oh no! Something went snap 🙃. Please check your internet connection";
    throw err;
  }
};
