const lang = localStorage.getItem("i18nextLng");
const API_URL = `https://65bb-213-230-125-170.ngrok-free.app${lang === "ru" || lang === "en" ? `/${lang}` : ""
  }`;
export { API_URL };
