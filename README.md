## This is my first take on three.js by react-three-fiber with react!

## The work flow is listed below.

1. creating the react app
2. connecting the git
3. installing the dependency of the package for react three fiber "yarn add @react-three/fiber"
4. also there is another package names Drei also from the same website "yarn add @react-three/drei"
5. lastly the css would be done by styled components "yarn add styled-components"
6. making the .js files as .jsx -> app.jsx and index.jsx
7. as we are using styled components I have made a component named CanvasContainer in the app.jsx and setting the width and the height to be 100%
8. then in the index.css we are just making the height and width to be 100% and the margin and the padding to 0 for the html, body and #root [an id of the boilerplate in the index.html]
9. importing Canvas from react-three/fiber in the app.jsx
10. now all of our react three fiber work is gonna be done in the canvas section
11. now have to make a new component named Suspense that is a component in the React which will be helping us as when he component has not yet loaded then the fallback will be rendered and after the total rendering of the main component the suspense will go in the child section
12. have to make the fallback set to null at the moment to continue the work flow
