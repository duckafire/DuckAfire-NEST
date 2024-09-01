// constantes
const MAX_LANG_ID    = 0; // index of the "last" language supported
const NEWS_CHILD_LEN = 4; // maximum (/ 2) quantity of children that news has

// elements
const news = document.getElementById("news");

// variables
let curLangID = -1 // index of the current language

// arries
let iconContent = null; // icons title
let welcContent = null; // message about DuckAfire
let newsContent = null; // paragraphs in news

