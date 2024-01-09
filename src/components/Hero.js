import React from 'react'

export default function Hero(props) {
    console.log('memanggil Hero Page');
  return (
    <div >
      Ini adalah Hero Page yang namanya {props.pacar} <br/>
      Ini adalah Hero Page yang namanya {props.myName} <br/>
      Ini adalah Hero Page yang namanya {props.ex}
    </div>
  )
}
