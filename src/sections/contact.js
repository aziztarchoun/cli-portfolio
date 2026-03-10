import chalk from "chalk";
import boxen from "boxen";

export default function showContact() {
  const contact = `
${chalk.bold.yellow("Contact Me")}
${chalk.gray("─────────────────────────────────────────────────")}

${chalk.bold.white("Email:")}      ${chalk.green("aziz.tarchoun04@gmail.com")}

${chalk.bold.white("Github:")}    ${chalk.green("github.com/aziztarchoun")}

${chalk.bold.white("LinkedIn:")}   ${chalk.green("linkedin.com/in/aziz-tarchoun-1676b0216")}

${chalk.bold.white("Location:")}   ${chalk.green("Khzema, Sousse, Tunisia")}

${chalk.gray("─────────────────────────────────────────────────")}
${chalk.italic.gray("Feel free to reach out — I'm always open to new opportunities!")}
`;

  const box = boxen(contact, {
    padding: 1,
    borderStyle: "round",
    borderColor: "magenta",
  });

  console.log(box);
}
