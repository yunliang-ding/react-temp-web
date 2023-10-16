const config = require("./view/config.js");

const { readFileSync } = require("fs");

const path = require("path");

module.exports = class extends think.Controller {
  indexAction() {
    const html = readFileSync(
      path.resolve(__dirname, "./view/index.html")
    ).toString();
    const content = html
      .replace("{{icon}}", config.icon)
      .replace("{{title}}", config.title)
      .replace(
        "{{cdn}}",
        config.cdn.map((item) => `<script src="${item}"></script>`).join("\n")
      )
      .replace(
        "{{script}}",
        config.script
          .map((item) => `__asyncLoadModuleScript(${item})`)
          .join("\n")
      )
      .replace(
        "{{link}}",
        config.link.map((item) => `__asyncLoadCss(${item})`).join("\n")
      );
    this.ctx.res.end(content);
  }
};
