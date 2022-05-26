import React from 'react'

const Avater = ({children, backgroundcolor, px, py, color, borderRadius, fontSize, cursor}) => {

  const style = {
    backgroundcolor: color || 'red',
    padding: `${px} ${py}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlgin: "center",
    cursor: cursor || null,
    textDecoration: 'none'

  }

  return (
    <div style={style}>
        <h2>{children}</h2>
    </div>
  )
}

export default Avater