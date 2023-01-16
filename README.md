## Application of the latest news about spaceflight

- Created app with React using TypeScript, Redux, Material-UI, and SASS.

- The prototype layout from Figma be taken.

- An open API was used to get the titles and descriptions of articles: https://spaceflightnewsapi.net/

- Home page contains:

  1. Cards with titles of articles and descriptions for 100 characters. The user can click on the card to go to the article page, which contains the title and full description of the selected article.

  2. Field for filtering by keyword. The user enters keywords in the field, and the system displays all articles containing at least one of the keywords in the title and/or description.

- Field priority: (1) names; and (2) description. An article with one title match is higher than an article with one description match.

- Relevant keywords will be highlighted in yellow.
