# TESTING LIBRARY

- React Testing Library build on top of DOM testing librarry, it uses Jest behind te scenes

  - Types of testing (As developer)
    - Unit testing : testing each component in isolation
    - Integration testing : test flows for components, like to add item we test complete flow till cart
    - End to End testing( E2E ) : Just like user, we test from user landing till logout

- setup required few config:
  - install react testing library
  - install jest
  - install babel dependencies
  - configure babel config file
  - optional: configure parcel cofig file to disable default babel transpilationcoming from parcel itself
  - configure jest file (by a command: npx jest --init) it create "jest.config.js"
  - install JSDOM library
