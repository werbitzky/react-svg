import React from 'react'
import { render } from 'react-dom'

function App() {
  return (
    <div>
      <h1>react-svg examples</h1>
      <div>
        <p>{`
          This is an example project of how to use downshift to build
          enhanced input experiences (autocomplete, dropdown, etc).
          Open a file in the examples directory within codesandbox and
          then toggle the "Current Module View" in the upper-right of
          the browser preview.
        `}</p>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
