import * as md5 from "md5";

const timeout = (seconds) => {
  return new Promise((_, rej) => {
    setTimeout(() => {
      rej(new Error("Request takes a lot of time!"));
    }, seconds * 1000);
  });
};

const createHASH = (ts, privateKey, publicKey) => {
  return md5(`${ts}${privateKey}${publicKey}`);
};

const resizeText = (text, size) => {
  if (text.length <= size) {
    return text;
  }

  const newText = text.slice(0, size) + "...";
  return newText;
};

export { timeout, createHASH, resizeText };
