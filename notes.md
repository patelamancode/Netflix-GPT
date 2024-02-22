# for firebase setup

- creating project in firebase
- enabling google analytics
- enabling firebase hosting
- Enabling the Authorisation of email and password (alsohave multiple advance option)
- setup Auth in signin and signup component by using firebase
- Read firebase authentication docs for refrence
- Authentication > Web > Password authentication
- use both template for setup
- Firebase provide apis to interact
  like : createUserWithEmailAndPassword (forsignup) & signInWithEmailAndPassword (for signIn)

# Setting up Redux store:

- Creating store by configureStore() from RTK and exporting appStore;
- Creating slices for different case like user, cart, etc. by using createSlice() from RTK. and exporting sub reducers and default export for userSlice.reducer.
- Providing appStoreto App.js by using Provider from react-redux.

#

- Avoiding multiple repeated dispatch for signin, signout, signup we use firebase utility onAuthStateChanged. and write this api in root level.
