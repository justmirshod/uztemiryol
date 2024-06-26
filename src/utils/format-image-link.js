import { API_URL } from "../config/config";

export const formatImgLink = (externalLink) => {

  let link = "";
  if (externalLink?.includes(API_URL)) {
    link = externalLink;
  } else {
    link = API_URL + externalLink;
  }

  return link;
};
