module.exports = {
  icon: "https://v3.ice.work/img/logo.png",
  title: "中后台项目模版",
  cdn: [],
  link:
    think.env === "production"
      ? ["'/build/css/index.css'"]
      : [`\`http://$\{location.hostname\}:3333/css/index.css\``],
  script:
    think.env === "development"
      ? [`\`http://$\{location.hostname\}:3333/js/index.js\``]
      : ["'/build/index.js'"],
};
