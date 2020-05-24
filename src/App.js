import React from 'react';

function App() {
  return (
    <React.Fragment>
      <label htmlFor="foo">bar</label>
      <input id="foo" type="text" onClick={() => {console.log('I am clicked.')}}></input>
    </React.Fragment>
  )
}

export default App;
