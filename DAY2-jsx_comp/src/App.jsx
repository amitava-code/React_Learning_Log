import React from 'react'
import Contact from './Contact'

import abcd, {one , two} from './test'

const App = () => {

  abcd()

  one()

  two()




  return (
    <div>
      <h1>hi guys</h1>
      {Contact()}
    </div>
  )
}

export default App