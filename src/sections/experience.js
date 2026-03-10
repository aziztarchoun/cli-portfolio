import boxen from "boxen";
import chalk from "chalk";

export default function showExperience() {
  const content = `
${chalk.bold.yellow("Work Experience")}
${chalk.gray("──────────────────────────────────────────────────────────────")}

${chalk.bold.cyan("Software Development Intern – Angular & NestJS")}
${chalk.green("TeamDev.")} ${chalk.gray("│")} ${chalk.white("Jul 2025 - Aug 2025")} ${chalk.gray("│")} ${chalk.white("Remote")}
${chalk.gray("──────────────────────────────────────────────────────────────")}
  ${chalk.magenta("▸")} ${chalk.white("Developed full-stack features using Angular (frontend)")}
  ${chalk.white("  and NestJS (backend).")}
  ${chalk.magenta("▸")} ${chalk.white("Collaborated on API integration, UI components,")}
  ${chalk.white("  and application logic.")}
  ${chalk.magenta("▸")} ${chalk.white("Gained practical understanding of modern web")}
  ${chalk.white("  development workflows.")}

${chalk.bold.cyan("Network & IT Infrastructure Maintenance")}
${chalk.green("WINWIN")} ${chalk.gray("│")} ${chalk.white("Jun 2024 - Aug 2024")} ${chalk.gray("│")} ${chalk.white("Sousse")}
${chalk.gray("──────────────────────────────────────────────────────────────")}
  ${chalk.magenta("▸")} ${chalk.white("Maintained and supported network and IT")}
  ${chalk.white("  infrastructure systems.")}
  ${chalk.magenta("▸")} ${chalk.white("Troubleshot and resolved operational technical issues")}
  ${chalk.white("  to ensure system reliability.")}
  ${chalk.magenta("▸")} ${chalk.white("Contributed to infrastructure optimization and")}
  ${chalk.white("  performance monitoring.")}

${chalk.bold.cyan("Freelance Web Developer")}
${chalk.green("Self-Employed")} ${chalk.gray("│")} ${chalk.white("Dec 2023 - Mar 2024")} ${chalk.gray("│")} ${chalk.white("Remote")}
${chalk.gray("──────────────────────────────────────────────────────────────")}
  ${chalk.magenta("▸")} ${chalk.white("Delivered small-scale web development projects.")}
  ${chalk.magenta("▸")} ${chalk.white("Worked with React and other web technologies")}
  ${chalk.white("  to build responsive interfaces.")}`;

  const box = boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "yellow",
  });
  console.log(box);
}
