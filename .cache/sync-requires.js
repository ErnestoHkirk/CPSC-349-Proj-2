const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Ernie\\Desktop\\CPSC-349-Project-2\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Ernie\\Desktop\\CPSC-349-Project-2\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\Ernie\\Desktop\\CPSC-349-Project-2\\src\\pages\\page-2.js"))),
  "component---src-pages-vaccination-info-js": hot(preferDefault(require("C:\\Users\\Ernie\\Desktop\\CPSC-349-Project-2\\src\\pages\\VaccinationInfo.js")))
}

