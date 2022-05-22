import React, { Component } from "react";

class Home extends Component { // Como Component también es del modulo react, podría no importarlo y poner "class Home extends React.Component{ }"
    render() { // render es un método del componente Component y se utiliza solo en métodos de tipo clase, no en metodos de tipo función
        return (
            <div className="">
                Home
            </div>
        )
    }
}

export default Home;