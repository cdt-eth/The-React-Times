# The React Times

### Read stories from the New York Times using Top Stories Technology API

![home](https://user-images.githubusercontent.com/26611339/109046041-4f2c1280-76a2-11eb-85fb-20be1e8502e4.gif)

<br />

#### To run the frontend (it's a basic create-react-app):
1. `gh repo clone christiandavidturner/The-React-Times`
2. `cd The-React-Times/frontend/`
3. `npm i`
4. `yarn start`
5. open browser window and type in `http://localhost:3000`

<br/>

### Call-out Features (Design & Function):
- Nested React components (children & grandchildren)
- Data fetching from API with auth key
- Responsive Design
- CSS Grid
- Animated SVG wave element
- GIF logo
- setTimeout() added to showcase loading animation
- Navigation that fetches new data based on section 
- Deployed on Netlify
- Desktop only: button micro-interaction on-hover

### Components:
- **Header** - Parent component to `Masthead` and `SVG`. There 3 make up the principal navigation component <br/>
   └─ **Masthead** - List of sections<br/>
   └─ **SVG** - Animated SVG wave<br/>
- **News** - Fetch data from New York Times API and return `Stories` <br/>
   └─ **Story** - Child component of `News` for individual story component
- **LoadingBar** - Loading animation taken from [react-loading](https://www.npmjs.com/package/react-loading)
- **Button** - Composable button
- **Spacer** - Flexible spacer by height
