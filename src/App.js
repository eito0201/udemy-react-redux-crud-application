import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="foo">bar</label>
//       <input id="foo" type="text" onClick={() => {console.log('I am clicked.')}}></input>
//     </React.Fragment>
//   )
// }

// eslint-disable-next-line
const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
