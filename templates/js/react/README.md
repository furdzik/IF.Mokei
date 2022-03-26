# Template

Change all the names in brackets:
- `{repoName}`
- `{port}`
- `{netlify-preview-domain}`
- `{netlify status}`
- `{app title}`

---
---

# {repoName}

This repository presents ...

---

## Development

### Requirements

- `NodeJS` >= v10.14.1
- `npm` >= 6.4.1
- `Git` Bash (for versioning)

### Installation

- Clone project from GitHub repository
- Add alias to your `hosts` file: `127.0.0.1 {repoName}.local`
- `cd if.{repoName}`
- Install dependencies `npm install`
- Run `npm run prepare` to init husky configuration

### Running

- Create `.env` files (see **WIKI** for more information)
- Use `npm start` for starting dev server.

Browser automatically open `http://{repoName}.local:{port}/`.  
The app will automatically reload if you change any of the source files.

### Deploy to prod

Deploy by **Netlify**.  
Merge to `master` will automatically trigger build/deploy.

Status:

{netlify status}

---

## Contributing

If you want to contribute read the [contributing guidelines]() before opening an issue.

---

## Style guide

I use my own style guidelines: [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).
