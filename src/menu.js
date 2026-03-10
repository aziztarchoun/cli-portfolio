import inquirer from "inquirer";
import showSkills from "./sections/skills.js";
import showEducation from "./sections/projects.js";
import showAbout from "./sections/about.js";
import showContact from "./sections/contact.js";
import showGithub from "./sections/github.js";
import showExperience from "./sections/experience.js";
import showHeader from "./header.js";

function clearScreen() {
  process.stdout.write("\x1Bc");
}

async function waitForBack() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "—",
      choices: ["← Back to menu"],
    },
  ]);
  return action;
}

export default async function showMenu() {
  while (true) {
    clearScreen();
    await showHeader();

    const { section } = await inquirer.prompt([
      {
        type: "list",
        name: "section",
        message: "Navigate my CLI portfolio:",
        choices: [
          "About",
          "Github",
          "Skills",
          "Experience",
          "Education",
          "Contact",
          "Exit",
        ],
      },
    ]);

    if (section === "Exit") {
      clearScreen();
      process.exit();
    }

    clearScreen();
    await showHeader();

    //make this if switch case

    if (section === "About") {
      await showAbout();
    } else if (section === "Github") {
      await showGithub();
    } else if (section === "Skills") {
      await showSkills();
    } else if (section === "Experience") {
      await showExperience();
    } else if (section === "Education") {
      await showEducation();
    } else if (section === "Contact") {
      await showContact();
    } else if (section === "Exit") {
      clearScreen();
      process.exit();
    }
    console.log("");
    await waitForBack();
  }
}
