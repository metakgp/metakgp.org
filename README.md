<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Majestic9169/metakgp-website">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F11089056%3Fs%3D280%26v%3D4&f=1&nofb=1&ipt=256d00f50ccece811f04675b62fb37d0857a0bcd7f8e2fdc59483c08d2eed445&ipo=images" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MetaKGP Website</h3>

  <p align="center">
    Website for metaKGP to display their projects
    <br />
    <a href="https://github.com/Majestic9169/metakgp-website">No demo yet</a>
    ·
    <a href="https://github.com/Majestic9169/metakgp-website/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Majestic9169/metakgp-website/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

We need a landing page for [MetaKGP](https://wiki.metakgp.org) that 

1. "sells" the projects
1. Describes MetaKGP

The current landing page is [here](https://metakgp.github.io/) which looks janky
so ["metakgp.org"](https://metakgp.org) just redirects to the wiki instead. 

Our goal is to incorporate some modern web design principles. However directly using UI
frameworks defeats the purpose of the learning culture of metaKGP which is why we will
be writing our own `css` and designing stuff from scratch.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

* install dependencies and set up frontend
  ```sh
  npm install
  node start
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

```sh
.//
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── sections/
│   ├── index.css
│   └── index.tsx
├── README.md
└── tsconfig.json
```

<!-- ROADMAP -->
## Roadmap

- [ ] Migrate from `npm` to `pnpm`
- [ ] Design some fire project cards
- [ ] Add `react-router` to setup the various pages
- [ ] Add the projects sections and relatedly the projects page
- [ ] Add the contribute page
- [ ] Add the DC++ page :)
- [ ] Add a Footer
- [ ] Use an API to get metaKGP stats (look into organisation stats github apis)

See the [open issues](https://github.com/Majestic9169/metakgp-website/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/Majestic9169/metakgp-website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Majestic9169/metakgp-website" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

* Project Link: [https://github.com/Majestic9169/metakgp-website](https://github.com/Majestic9169/metakgp-website)
* Slack Workspace: [Join here](https://join.slack.com/t/metakgp/shared_invite/zt-2vgkizrok-mOEtk9NQCR8ba5s6M2U5PQ)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Majestic9169/metakgp-website.svg?style=for-the-badge
[contributors-url]: https://github.com/Majestic9169/metakgp-website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Majestic9169/metakgp-website.svg?style=for-the-badge
[forks-url]: https://github.com/Majestic9169/metakgp-website/network/members
[stars-shield]: https://img.shields.io/github/stars/Majestic9169/metakgp-website.svg?style=for-the-badge
[stars-url]: https://github.com/Majestic9169/metakgp-website/stargazers
[issues-shield]: https://img.shields.io/github/issues/Majestic9169/metakgp-website.svg?style=for-the-badge
[issues-url]: https://github.com/Majestic9169/metakgp-website/issues
[license-shield]: https://img.shields.io/github/license/Majestic9169/metakgp-website.svg?style=for-the-badge
[license-url]: https://github.com/Majestic9169/metakgp-website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Majestic9169
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
