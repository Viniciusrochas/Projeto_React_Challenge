import React, { Component } from 'react';
import api from './api';

class App extends Component {
  
  state={
    jogos: [],
  }
  
  async componentDidMount(){
    const response = await api.get('produtos');
  
    this.setState({ jogos:response.data});
  }
  
  render(){

    const { jogos } = this.state;


    
    return(
      <div>
        <div id="topo">
        <h1>Jogos</h1>
        <select id="filtro" name="filtro">
          <option value="OrdemAlfa">Ordem Alfabética</option>
          <option value="preco">Preço</option>
          <option value="popularidade">Popularidade</option>
        </select>
        </div>
       {jogos.map(jogos =>(
         <li id='container' key={jogos.id}>
           <div id='imagem'>
           <img src={"./assets/"+jogos.image} />
           </div>
           <div id='titulo'>
           <h2>
             {jogos.name}
           </h2>
           <p>R${jogos.price}</p>     

           <a key={jogos.id} href="#" >Adicionar ao carrinho</a>
           </div>
         </li>

        
       ))}
       <div id="carrinho">
          <h2>Carrinho: </h2>
        </div>
        <div id="img">
        <img src='./assets/cart-icon.svg'/>
        </div>
        <p id="p"> Até o momento, o seu carrinho está vazio</p>
      </div>
    )
  }
;}

export default App;
