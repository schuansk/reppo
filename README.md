<p align="center">
    <img alt="Reppo" src="https://github.com/schuansk/bucket/blob/main/reppo/assets/logo.png?raw=true" width="100" />
</p>
<h1 align="center">
  Reppo
</h1>
<p align="center">
  <a href="#why">Why</a> •
  <a href="#technologies-used">Technologies used</a> •
  <a href="#how-to-use">How to use</a> •
  <a href="#how-to-contribute">How to contribute</a> •
  <a href="#license">License</a>
</p>

<p align="center">Display your main projects in a simple manner.</p>

## Why

<p>This is a project to list its main projects. He was inspired by the Hacktoberfest 2022.</p>

## Technologies used

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

## How to use

```bash
  # Clone the repository
  $ git clone git@github.com:schuansk/reppo.git

  # Access the project directory
  $ cd reppo

  # Install all packages
  $ yarn

  # And run
  $ yarn dev
```

## How to contribute

 1. Use [this JSON file](https://raw.githubusercontent.com/schuansk/reppo/main/src/utils/firstname-lastname.json)  as an example to make your page.
 2. Some tips:
    - In **customBackgroundColor**, use an RGB value, e.g., `"customBackgroundColor": "255, 255, 255"`
    - Contact icons use **Ant Design Icons**, you can consult them [here](https://react-icons.github.io/react-icons/icons?name=ai) to use, just add the name in the **icon**, e.g., `"icon": "AiOutlineGithub"`
 3. When you finish editing your json file, move it to `/src/lib/db/`.
    - Remember to rename it with your firstname-lastname.json.
 4. Submit your PR and wait for approval (or not 🙃).

## License

<p>Licensed under <a href="./LICENSE">MIT</a>.</p>

---

<p align="center">Made lovingly by Schuansk Torres ❤️.</p>
