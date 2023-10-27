module.exports = {
  icon: "https://v3.ice.work/img/logo.png",
  title: "中后台项目模版",
  cdn: ['http://lib.baomitu.com/socket.io/4.4.0/socket.io.js'],
  link:
    think.env === "production"
      ? ["'/build/css/index.css'"]
      : [`\`http://$\{location.hostname\}:3333/css/index.css\``],
  script:
    think.env === "production"
      ? ["'/build/js/index.js'"]
      : [`\`http://$\{location.hostname\}:3333/js/index.js\``],
};
