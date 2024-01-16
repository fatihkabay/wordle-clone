import React from 'react'
import '../App.css'

function Key({ keyVal, bigKey }) {
  return (
    <div className='key' id={bigKey && "big"}>{keyVal}</div>
  )
}

export default Key