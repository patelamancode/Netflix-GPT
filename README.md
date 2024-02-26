# NETFLIX-GPT

- Creating react app
- adding Tailwind css
- Routing
- Header
- Login page (for big form based app try to use Formik library easy to handle validation)
- Signup page
- Form validation with error message ( by using useRef() hook)
- Implementing AUth for signup/Signin by Firebase
- Creating store by using REDUX
- Implemeting sigout API from firebase
- Updating user info in store by firebase api
- Bug Fix : Signup userdisplay in browse page
- Bug Fix : Restricting user to naviagte to browsepage without signup or login
- Seperating constant urls to a single file as good practice.
- Movie data: use TMDB api for data, need to login or signup, then edit profile, then API, then create a project to get Key and Access token.
  -Fetching movies data from TMDB api, and storing in redux store
- creating primary and secondary container for browse page
- fetching trailer video data from TMDB api and using useState to manage it, also store same data in store
- implementing youtube embeded vedio code to render trailer
- using Tailwind CSS clases to beautify it and make similar UI
- Implementing secondary container

# App Planning :

- without Authentication
  SignIn/SignUp pages
  basic static landing page with static data

- After Auth
  navbar
  movie comp - background trailer - Title & Heading - description - suggested movie list ( side scrollable) - movieList \* N
- GPT search bar comonent (suggest movie as per input)
