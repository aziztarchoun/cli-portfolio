import chalk from "chalk";
import boxen from "boxen";

export default function showSkills() {
  const content = `
${chalk.bold.yellow("Technical Skills")}
${chalk.gray("─────────────────────────────────────────")}

${chalk.bold.cyan("Languages")}
  ${chalk.magenta("•")} ${chalk.white("JavaScript")}
  ${chalk.magenta("•")} ${chalk.white("Python")}
  ${chalk.magenta("•")} ${chalk.white("HTML5")}
  ${chalk.magenta("•")} ${chalk.white("CSS3")}

${chalk.bold.cyan("Frameworks")}
  ${chalk.magenta("•")} ${chalk.white("React.js")}
  ${chalk.magenta("•")} ${chalk.white("Angular")}
  ${chalk.magenta("•")} ${chalk.white("NestJS")}
  ${chalk.magenta("•")} ${chalk.white("Bootstrap")}

${chalk.bold.cyan("Tools")}
  ${chalk.magenta("•")} ${chalk.white("Git")}
  ${chalk.magenta("•")} ${chalk.white("Docker")}
  ${chalk.magenta("•")} ${chalk.white("Power BI")}

${chalk.gray("─────────────────────────────────────────")}
`;

  const box = boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  });

  console.log(box);
}
