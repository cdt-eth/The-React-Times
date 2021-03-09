# The React Times

### Read stories from the New York Times fetched from their Top Stories API

![home](https://user-images.githubusercontent.com/26611339/109046041-4f2c1280-76a2-11eb-85fb-20be1e8502e4.gif)

### [www.TheReactTimes.com](https://thereacttimes.com/)

### To run the program:

1. `gh repo clone christiandavidturner/The-React-Times`
2. `cd The-React-Times/frontend/`
3. `npm i`
4. `yarn start`
5. open browser window and type in `http://localhost:3000`

### Call-out Features (Design & Function):

- Nested React components (children & grandchildren)
- Data fetching from API with auth key
- Responsive Design
- CSS Grid
- Animated SVG wave element
- GIF logo
- Add setTimeout() to showcase loading animation
- Navigation that fetches new data based on section
- Deployed on Netlify
- Custom domain + configuration
- Desktop only: button micro-interaction on-hover

### Components:

- **Header** - Parent component to `Masthead` and `SVG` (all 3 compromise Nav). <br/>
  └─ **Masthead** - List of sections<br/>
  └─ **SVG** - Animated SVG wave<br/>
- **News** - Fetch data from New York Times API and return `Stories` <br/>
  └─ **Story** - Single story component<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ **Button** - Composable button
- **LoadingBar** - Loading animation taken from [react-loading](https://www.npmjs.com/package/react-loading)
- **Spacer** - Flexible spacer by height
- **Footer** - Copyright year, email, and website

### Challenges:

- map API data to create children components dynamically
- responsive design (css grid)
- optional chaining when fetched data is `null` (conditional rendering)
- string interpolation in fetch request to change section -> `${section}.json`
- implementing new `useState` and `useEffect` hooks
- Refactor to use Typescript

### Future Plans:

~~- Add Typescript~~
~~- clean up CSS file~~
~~- Unit Testing with Jest~~

- [Add Redux](https://redux-toolkit.js.org/introduction/getting-started#an-existing-app)
- [Add Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app)
- End-to-end testing with Cypress
- Add code comments
- Refactor `Masthead` component to use [React Router](https://reactrouter.com/web/guides/quick-start)
  - eliminate page reload when clicking new section (on-fetching new data)
