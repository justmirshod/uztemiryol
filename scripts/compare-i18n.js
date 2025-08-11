const fs = require("fs");
const path = require("path");

const locales = ["en", "ru", "uz"];
const data = {};

for (const locale of locales) {
  const filePath = path.join(
    __dirname,
    "..",
    "public",
    "locales",
    locale,
    "translation.json"
  );
  data[locale] = JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function collectKeys(obj, prefix = "") {
  const keys = [];
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const full = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      keys.push(...collectKeys(value, full));
    } else {
      keys.push(full);
    }
  }
  return keys;
}

const base = "en";
const baseKeys = new Set(collectKeys(data[base]));

for (const locale of locales) {
  const localeKeys = new Set(collectKeys(data[locale]));
  const missing = [...baseKeys].filter((k) => !localeKeys.has(k));
  const extra = [...localeKeys].filter((k) => !baseKeys.has(k));
  console.log(`Locale ${locale} missing: ${missing.length}`);
  if (missing.length) console.log(missing.join("\n"));
  console.log(`Locale ${locale} extra: ${extra.length}`);
  if (extra.length) console.log(extra.join("\n"));
}
