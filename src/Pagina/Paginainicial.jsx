import React from 'react';
import Navbar from '../Componentes/Navbar'
import Header from '../Componentes/Header'
import Card from "../Componentes/Card"

class Paginainicial extends React.Component{
    render(){
      return(
        <div>
            <Navbar/>
            <Header/>
            <Card/>
    </div>
      );
    }
    }
export default Paginainicial;