# aziztarchoun

An interactive CLI portfolio card. Run a single command to explore my profile, skills, experience, education, and GitHub activity — right from your terminal.

## Quick Start

No install required. Just run:

```sh
npx aziztarchoun
```

Or install it globally:

```sh
npm install -g aziztarchoun
aziztarchoun
```

## What You Get

An interactive menu that lets you browse through the following sections:

- **About** -- Summary, education, location, and contact details.
- **GitHub** -- Live profile stats and repositories fetched from the GitHub API.
- **Skills** -- Languages, frameworks, and tools I work with.
- **Experience** -- Work history and internship details.
- **Education** -- Degree information and relevant coursework.
- **Contact** -- Email, LinkedIn, GitHub, and location.

Use the arrow keys to navigate and press Enter to select a section. Each section displays inside a styled terminal card. Select "Back to menu" to return, or "Exit" to quit.

## Requirements

- Node.js >= 18.0.0

Node 18+ is required because the GitHub section uses the built-in `fetch` API.

## Project Structure

```
aziztarchoun/
  bin/
    cli.js            # Entry point
  src/
    header.js         # Header card displayed on every screen
    menu.js           # Interactive menu loop
    sections/
      about.js        # About me
      github.js       # Live GitHub profile and repos
      skills.js       # Technical skills
      experience.js   # Work experience
      projects.js     # Education
      contact.js      # Contact information
```

## Dependencies

| Package   | Purpose                          |
|-----------|----------------------------------|
| boxen     | Styled terminal boxes            |
| chalk     | Colored terminal output          |
| inquirer  | Interactive command-line prompts  |

## How It Works

1. The CLI clears the terminal and renders a header card with my name, role, stack, and links.
2. An interactive list menu is displayed below the header.
3. When a section is selected, the screen clears, the header redraws at the top, and the section content renders underneath.
4. The GitHub section calls the public GitHub REST API (unauthenticated) to fetch live profile stats and repository data. If the request fails (no internet, rate limit), it falls back gracefully with an error message.
5. A "Back to menu" prompt appears at the bottom of every section to return to the main menu.

## Local Development

Clone the repository and install dependencies:

```sh
git clone https://github.com/aziztarchoun/aziztarchoun.git
cd aziztarchoun
npm install
```

Run it locally:

```sh
node bin/cli.js
```

## Author

**Aziz Tarchoun**
Business Intelligence Student | Web Developer

- Email: aziz.tarchoun04@gmail.com
- LinkedIn: https://linkedin.com/in/aziz-tarchoun-1676b0216
- GitHub: https://github.com/aziztarchoun

## License

MIT