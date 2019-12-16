import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <h1>react-svg examples</h1>
    <div>
      <p>{`
          Open a file in the examples directory within CodeSandbox and
          then toggle the "Current Module View" in the upper-right of
          the browser preview.
        `}</p>
    </div>
  </div>
)

render(<App />, document.getElementById('root'))
