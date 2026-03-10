import chalk from "chalk";
import boxen from "boxen";

export default function showEducation() {
  const content = `
${chalk.bold.yellow("Education")}
${chalk.gray("─────────────────────────────────────────────────────────")}

${chalk.bold.cyan("🎓 Bachelor's Degree in Business Intelligence")}

${chalk.white("   Institution:")}  ${chalk.green("Higher Institute of Management of Sousse")}
${chalk.white("   Period:")}       ${chalk.green("Sep 2023 - Present")}

${chalk.gray("─────────────────────────────────────────────────────────")}

${chalk.bold.cyan("Relevant Coursework")}
  ${chalk.magenta("•")} ${chalk.white("Data Analysis & Business Intelligence")}
  ${chalk.magenta("•")} ${chalk.white("Database Management Systems")}
  ${chalk.magenta("•")} ${chalk.white("Software Development")}
  ${chalk.magenta("•")} ${chalk.white("Network & IT Infrastructure")}
  ${chalk.magenta("•")} ${chalk.white("Statistics & Data Visualization")}

${chalk.gray("─────────────────────────────────────────────────────────")}
${chalk.italic.gray("Knowledge is the foundation — application is the structure.")}
`;

  const box = boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "yellow",
  });

  console.log(box);
}
