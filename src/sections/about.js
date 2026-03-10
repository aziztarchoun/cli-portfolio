import chalk from "chalk";
import boxen from "boxen";

export default function showAbout() {
  const bio = `
${chalk.bold.yellow("About Me")}
${chalk.gray("──────────────────────────────────────────────────────────────")}

${chalk.white("Hi there! I'm")} ${chalk.bold.green("Aziz Tarchoun")}${chalk.white(", a motivated and adaptable")}
${chalk.bold.cyan("Business Intelligence")} ${chalk.white("student with hands-on experience")}
${chalk.white("in network & IT infrastructure maintenance, complemented by")}
${chalk.white("practical exposure to software development using modern web")}
${chalk.white("technologies. Skilled in data analysis, problem-solving, and")}
${chalk.white("cross-functional collaboration.")}

${chalk.magenta("🎓")} ${chalk.white("Education:")}    ${chalk.green("Bachelor's in Business Intelligence")}
${chalk.white("                 Higher Institute of Management of Sousse")}
${chalk.white("                 Sep 2023 - Present")}

${chalk.magenta("📍")} ${chalk.white("Location:")}     ${chalk.green("Khzema, Sousse, Tunisia")}
${chalk.magenta("📧")} ${chalk.white("Email:")}        ${chalk.green("aziz.tarchoun04@gmail.com")}
${chalk.magenta("💼")} ${chalk.white("LinkedIn:")}     ${chalk.green("linkedin.com/in/aziz-tarchoun-1676b0216")}

${chalk.gray("──────────────────────────────────────────────────────────────")}
${chalk.italic.gray('"Turning data into decisions."')}
`;

  const box = boxen(bio, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  });

  console.log(box);
}
