# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.2.0](https://github.com/MobDev-org/expo-template/compare/v1.0.2...v1.2.0) (2023-04-10)


### Bug Fixes

* **eslint config:** eslint removed config that is not needed ([b459bfb](https://github.com/MobDev-org/expo-template/commit/b459bfb53537c15ade6aff1e042f62ecc5c9f5b1))


* **coverage:** coverage folder ([8fd7965](https://github.com/MobDev-org/expo-template/commit/8fd79658d781381ad5f7b92603a24b07d9edf68c))


### Chore: Maintenance

* **packages:** removed unnecessary packages for now ([4a026a1](https://github.com/MobDev-org/expo-template/commit/4a026a1e8a06ed827db16df4d1b3460c9cd0ed90))


### Documentation:

* **readme:** added explanation of folder structure ([9861121](https://github.com/MobDev-org/expo-template/commit/9861121f53d8ec502c1bfb72082116d3e4acf588))
* **readme:** improved readme, and package json scripts as well, so it supports android builds ([4b5c24a](https://github.com/MobDev-org/expo-template/commit/4b5c24aa77c92e791531e9231533318960b5be87))
* **starting the app:** added commands for starting the app ([f552b75](https://github.com/MobDev-org/expo-template/commit/f552b75f78453339a8735f9d4534d89133df88a0))


### Features:

* **babel:** mOdule resolver so we can use @ as root folder ([00ca420](https://github.com/MobDev-org/expo-template/commit/00ca4207fa1dd0b0db8e19b95f29b7ee077dedd7))
* **builds:** dev client and fixing secure storage importing ([afb6da2](https://github.com/MobDev-org/expo-template/commit/afb6da2844dab063fecc0b01585f27fcaf140984))
* **console log:** add babel config package that removes console logs in production ([66abd59](https://github.com/MobDev-org/expo-template/commit/66abd59c3a074891f498fdfc366e9851fb858bc5))
* **fflipper:** configured flipper for both platforms, added hermes as default JS engine ([6460e35](https://github.com/MobDev-org/expo-template/commit/6460e35efd85db84008f5e569a67d4c688e8c4af))
* **icons:** completed icons and added theme functionality to it ([dee24fa](https://github.com/MobDev-org/expo-template/commit/dee24fa422bed25c77bb129b963ccb87613d253f))
* **linting and formatting:** added automatic import sort to prettier and eslint ([9ad949d](https://github.com/MobDev-org/expo-template/commit/9ad949d0e3bff03e79f799d8eeff67d45d531555))
* **no inline style:** added config for no inline styles in code ([3425cc3](https://github.com/MobDev-org/expo-template/commit/3425cc3aeec94e678a0bde219c938c51cf2b54dc))
* **npm registry:** change the app name so it can be published to registry ([03f7626](https://github.com/MobDev-org/expo-template/commit/03f7626889c080cce25cd8a1839e112f6c2b19b6))
* **overall:** folder structure, atomic design, navigation ([b84b5b6](https://github.com/MobDev-org/expo-template/commit/b84b5b6337151c6ee044e9b09f407711aed374c2))
* **screens folder:** improved folders and files ([d59ca3b](https://github.com/MobDev-org/expo-template/commit/d59ca3b6058ce7dd22f5b2df7574e9b700757bda))
* **secure storage:** added secure storage to redux persist so async storage is not used ([a8f62e6](https://github.com/MobDev-org/expo-template/commit/a8f62e66382d6503a4b284796f929ea2d5373866))
* **status bar, settings:** git st ([ccd953f](https://github.com/MobDev-org/expo-template/commit/ccd953fd66906f1539213ae6b53a1e3c0b6c62e0))
* **status bar, settings:** ignoring plugins from eslint, Added new component- Status Bar with focus ([8c532a4](https://github.com/MobDev-org/expo-template/commit/8c532a4c4354e32a1777d6624487c853564304ad))
* **svg-s:** added svg transforemer so new svgs can be easily added to the project ([42d8ce9](https://github.com/MobDev-org/expo-template/commit/42d8ce9ee5deef6ed9c39f3e9d6ab14ac14df763))
* **translations:** added translations config and 2 languages english and bosnian ([c72ce08](https://github.com/MobDev-org/expo-template/commit/c72ce081b8cedb3a26b9f168324fdc4a255497bb))

## [1.0.2](https://github.com/MobDev-org/expo-template/compare/v1.0.1...v1.0.2) (2023-02-06)


### Documentation:

* **genereated first changelog:** changes from before ([4af4619](https://github.com/MobDev-org/expo-template/commit/4af4619501cb85f97a54f46076bc1c0aae7c1270))
* **readme:** new way to create project ([13d5b0f](https://github.com/MobDev-org/expo-template/commit/13d5b0fa87691320b4d75dcf3aea6ac6bc671105))


### Features:

* **debugging, redux:** added flipper, redux store, ([28dca98](https://github.com/MobDev-org/expo-template/commit/28dca98ca7e7d95cd9150b6ee247cfc3c1ae28e7))
* **eslint:** added and configured eslint to enforce code style for everyone ([d27eb4a](https://github.com/MobDev-org/expo-template/commit/d27eb4aefaf1c611706f18b14459bdb2c6c393a9))
* **jest:** testing configuration added to the projects, running Unit, Component tests before commit ([58ee1e5](https://github.com/MobDev-org/expo-template/commit/58ee1e5db9469ca45e68ac17088da4cfcef334ae))
* **prettier:** tool for formatting code, also added husky hooks to enforce code style for everyone ([ed7ad3a](https://github.com/MobDev-org/expo-template/commit/ed7ad3a2d5222995d62da3c9bafa47f4ff99cbd6))

### 1.0.1 (2023-02-04)

### Features:

-   **navigation, commits:** added config for conventional commits, added source (src) folder ([774e18a](https://github.com/MobDev-org/expo-template/commit/774e18a24288d130dab3cc2a9a38b92e9e4b7e31))
