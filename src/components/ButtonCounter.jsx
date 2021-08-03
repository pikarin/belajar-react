import React, { useState } from 'react'

function ButtonCounter(props) {
    const [counter, setCounter] = useState(0)

    return (
        <button onClick={() => setCounter((count) => counter + 1)}
            {...props}
          >
            count is: {counter}
          </button>
    )
}

export default ButtonCounter