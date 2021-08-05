import React, { Component } from "react";

function EstadoAhijo(props){
  return(
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}

export class Estado extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
    }
    // setInterval(() => {
    //   //this.state.contador += 1
    //   this.setState({
    //     contador:this.state.contador + 1
    //   });
    // }, 2000);
  }
  
  render (){
    return(
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAhijo contadorHijo={this.state.contador}/>
      </div>
    );
  }
}