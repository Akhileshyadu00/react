
import { createRoot } from 'react-dom/client'
//import React from 'react';

import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: "Click to google"
// }

// const anotherElement = (
//   <a href="https://google.com" target= "_blank"> Google</a>
// )

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank"
//   },
//  " click to visit"
// )

createRoot(document.getElementById('root')).render(

   // reactElement
  <App />
)

//tag name  Upper
//always save in .jsx 
// <> </>  fragment
