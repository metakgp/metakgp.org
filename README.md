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
<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links-->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Wiki][wiki-shield]][wiki-url]

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/metakgp/metakgp.org">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F11089056%3Fs%3D280%26v%3D4&f=1&nofb=1&ipt=256d00f50ccece811f04675b62fb37d0857a0bcd7f8e2fdc59483c08d2eed445&ipo=images" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MetaKGP Website</h3>

  <p align="center">
    Website for metaKGP to display their projects
    <br />
    <a href="https://github.com/metakgp/metakgp.org">No demo yet</a>
    ·
    <a href="https://github.com/metakgp/metakgp.org/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/metakgp/metakgp.org/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
<summary>Table of Contents</summary>

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
  - [Maintainer(s)](#maintainers)
  - [creators(s)](#creators)
- [Additional documentation](#additional-documentation)
- [Acknowledgments](#acknowledgments)

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
  # Install dependencies using  pnpm
  pnpm install
  pnpm start

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

- [x] Migrate from `npm` to `pnpm`
- [X] Design some fire project cards
- [x] Add `react-router` to setup the various pages
- [X] Add the projects sections and relatedly the projects page
- [X] Add the contribute page
- [X] Add the DC++ page :)
- [X] Add a Footer
- [X] Use an API to get metaKGP stats (look into organisation stats github apis)

See the [open issues](https://github.com/metakgp/metakgp.org/issues) for a full list of proposed features (and known issues).


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

<a href="https://github.com/metakgp/metakgp.org/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=metakgp/metakgp.org" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<p>
📫 Metakgp -
<a href="https://slack.metakgp.org">
  <img align="center" alt="Metakgp's slack invite" width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/slack.svg" />
</a>
<a href="mailto:metakgp@gmail.com">
  <img align="center" alt="Metakgp's email " width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/gmail.svg" />
</a>
<a href="https://www.facebook.com/metakgp">
  <img align="center" alt="metakgp's Facebook" width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/facebook.svg" />
</a>
<a href="https://www.linkedin.com/company/metakgp-org/">
  <img align="center" alt="metakgp's LinkedIn" width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/linkedin.svg" />
</a>
<a href="https://twitter.com/metakgp">
  <img align="center" alt="metakgp's Twitter " width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/twitter.svg" />
</a>
<a href="https://www.instagram.com/metakgp_/">
  <img align="center" alt="metakgp's Instagram" width="22px" src="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/instagram.svg" />
</a>
</p>

### Maintainer(s)

The currently active maintainer(s) of this project.

- [Dipam Sen](https://github.com/dipamsen)
- [Tegan Jain](https://github.com/Majestic9169)

### Creator(s)

Honoring the original creator(s) and ideator(s) of this project.

- [Vikrant Varma](https://github.com/amrav)

<p align="right">(<a href="#top">back to top</a>)</p>

## Additional documentation

  - [License](/LICENSE)
  - [Code of Conduct](/.github/CODE_OF_CONDUCT.md)
  - [Security Policy](/.github/SECURITY.md)
  - [Contribution Guidelines](/.github/CONTRIBUTING.md)

<p align="right">(<a href="#top">back to top</a>)</p>

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

[wiki-shield]: https://custom-icon-badges.demolab.com/badge/metakgp_wiki-grey?logo=metakgp_logo&style=for-the-badge
[wiki-url]: https://wiki.metakgp.org
[slack-url]: https://slack.metakgp.org
[contributors-shield]: https://img.shields.io/github/contributors/metakgp/metakgp.org.svg?style=for-the-badge
[contributors-url]: https://github.com/metakgp/metakgp.org/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/metakgp/metakgp.org.svg?style=for-the-badge
[forks-url]: https://github.com/metakgp/metakgp.org/network/members
[stars-shield]: https://img.shields.io/github/stars/metakgp/metakgp.org.svg?style=for-the-badge
[stars-url]: https://github.com/metakgp/metakgp.org/stargazers
[issues-shield]: https://img.shields.io/github/issues/metakgp/metakgp.org.svg?style=for-the-badge
[issues-url]: https://github.com/metakgp/metakgp.org/issues
[license-shield]: https://img.shields.io/github/license/metakgp/metakgp.org.svg?style=for-the-badge
[license-url]: https://github.com/metakgp/metakgp.org/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/Majestic9169
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

