const lang = localStorage.getItem("i18nextLng");
const API_URL = `https://back.utyekspress.uz${
  lang === "ru" || lang === "en" ? `/${lang}` : ""
}`;
export { API_URL };
