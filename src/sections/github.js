import chalk from "chalk";
import boxen from "boxen";

const GITHUB_USERNAME = "aziztarchoun";

async function fetchGitHubUser() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

async function fetchGitHubRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
  );
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

function languageColor(lang) {
  const colors = {
    JavaScript: chalk.yellow,
    TypeScript: chalk.blue,
    Python: chalk.green,
    HTML: chalk.red,
    CSS: chalk.magenta,
    Shell: chalk.gray,
    Dockerfile: chalk.cyan,
  };
  return (colors[lang] || chalk.white)(lang);
}

export default async function showGithub() {
  let content;

  try {
    const [user, repos] = await Promise.all([
      fetchGitHubUser(),
      fetchGitHubRepos(),
    ]);

    const totalStars = repos.reduce(
      (sum, r) => sum + (r.stargazers_count || 0),
      0,
    );
    const totalForks = repos.reduce((sum, r) => sum + (r.forks_count || 0), 0);

    const memberSince = new Date(user.created_at).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    // Build profile stats
    let lines = [];
    lines.push(chalk.bold.yellow("GitHub Profile"));
    lines.push(
      chalk.gray("──────────────────────────────────────────────────────"),
    );
    lines.push("");
    lines.push(
      `${chalk.white("  Username:")}     ${chalk.bold.green("@" + user.login)}`,
    );
    lines.push(
      `${chalk.white("  Profile:")}      ${chalk.cyan("https://github.com/" + user.login)}`,
    );
    if (user.bio) {
      lines.push(`${chalk.white("  Bio:")}          ${chalk.green(user.bio)}`);
    }
    if (user.location) {
      lines.push(
        `${chalk.white("  Location:")}     ${chalk.green(user.location)}`,
      );
    }
    lines.push(`${chalk.white("  Member since:")} ${chalk.green(memberSince)}`);
    lines.push("");

    // Stats
    lines.push(chalk.bold.yellow("Stats"));
    lines.push(
      chalk.gray("──────────────────────────────────────────────────────"),
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Public Repos:")}   ${chalk.green(String(user.public_repos))}`,
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Followers:")}      ${chalk.green(String(user.followers))}`,
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Following:")}      ${chalk.green(String(user.following))}`,
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Total Stars:")}    ${chalk.green(String(totalStars))}`,
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Total Forks:")}    ${chalk.green(String(totalForks))}`,
    );
    lines.push(
      `  ${chalk.magenta("★")} ${chalk.white("Public Gists:")}   ${chalk.green(String(user.public_gists))}`,
    );
    lines.push("");

    content = "\n" + lines.join("\n") + "\n";
  } catch (err) {
    content = `
${chalk.bold.yellow("GitHub Profile")}
${chalk.gray("──────────────────────────────────────────────────────")}

${chalk.white("  Username:")}     ${chalk.bold.green("@" + GITHUB_USERNAME)}
${chalk.white("  Profile:")}      ${chalk.cyan("https://github.com/" + GITHUB_USERNAME)}

${chalk.red("  ⚠  Could not fetch live data from GitHub API.")}
${chalk.gray("  " + err.message)}
`;
  }

  const box = boxen(content, {
    padding: 1,
    borderStyle: "round",
    borderColor: "magenta",
  });

  console.log(box);
}
