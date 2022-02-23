import * as axios from "axios";
import { API_CHARACTER, API_CHARACTERS, API_KEY, API_KEY_PRIVATE, COMICS_CHAR_LIMIT, TIMEOT } from "../configs/config";
import { timeout, createHASH } from "./helper";

const getJSON = async (url, params = {}) => {
  try {
    console.log(params);
    const ts = Date.now();
    const response = axios.get(url, {
      params: {
        ...params,
        apikey: API_KEY,
        hash: createHASH(ts, API_KEY_PRIVATE, API_KEY),
        ts,
      },
    });

    const result = await Promise.race([response, timeout(TIMEOT)]);
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getCharStory = async (url) => {
  const params = {
    limit: 1,
  };

  const request = await getJSON(url, params);
  return request;
};

const findFullStory = async ({ items }) => {
  const story = items.filter((el) => el.type === "cover");

  if (!story) {
    return "Sorry we don't have any data";
  }

  for (const el of story) {
    const storyData = await getCharStory(el.resourceURI);
    if (storyData.results[0].description) {
      return storyData.results[0].description;
    }
  }

  return "Sorry we don't have any data";
};

const getCharList = async (page, size) => {
  const params = {
    limit: size,
    offset: page * size,
  };

  const data = await getJSON(API_CHARACTERS, params);

  return data.results;
};

const getRandomChar = async () => {
  const randomId = Math.ceil(Math.random() * 1478 + 1);

  const params = {
    limit: 1,
    offset: randomId,
  };

  const data = await getJSON(API_CHARACTERS, params);

  const stories = await findFullStory(data.results[0].stories);

  return [data.results[0], stories];
  //   console.log(storyDesc);

  //   if (storyDesc === false) {
  //   }

  //   return [data.results[0], storyDesc];
};

const getCharInfo = async (id) => {
  const params = {
    characterId: id,
  };
  const responce = await getJSON(API_CHARACTER, params);

  return responce;
};

const getCharComics = async (id) => {
  const params = {
    limit: COMICS_CHAR_LIMIT,
  };

  const request = await getJSON(`${API_CHARACTER}${id}/comics`, params);
  return request;
};

export { getJSON, getCharList, getRandomChar, getCharStory, getCharInfo, getCharComics };
