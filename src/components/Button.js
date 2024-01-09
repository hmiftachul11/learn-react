import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={() => props.clicked()}>Coba Tekan</button>
    </div>
  )
}
