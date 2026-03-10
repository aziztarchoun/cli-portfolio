import boxen from "boxen";
import chalk from "chalk";

export default function showHeader() {
  const content = `
${chalk.green("const")} me = {
  ${chalk.red("name")}: "${chalk.green("Aziz Tarchoun")}",
  ${chalk.red("role")}: "${chalk.green("Business Intelligence Student")}",
  ${chalk.red("stack")}: [${chalk.green('"JavaScript"')}, ${chalk.green('"React"')}, ${chalk.green('"Angular"')}, ${chalk.green('"NestJS"')}],
  ${chalk.red("location")}: "${chalk.green("Sousse, Tunisia")}",
  ${chalk.red("motto")}: "${chalk.green("Turning data into decisions")}"
}

${chalk.bold.white("Email:")}      ${chalk.green("aziz.tarchoun04@gmail.com")}
${chalk.white("")}
${chalk.bold.white("LinkedIn:")}   ${chalk.green("linkedin.com/in/aziz-tarchoun-1676b0216")}
${chalk.white("")}
${chalk.bold.white("Github:")}    ${chalk.green("github.com/aziztarchoun")}

`;

  const box = boxen(content, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "yellow",
  });

  console.log(box);
}
