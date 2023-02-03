//import logo from './logo.svg';
import  './App.css'
//import Item from './Myitem';
import React from 'react';
class FilmItemRow extends React.Component{
  render(){
    return(
   <li><a href={this.props.url}>{this.props.url}</a></li>
    )
  }
}
class StarWars extends React.Component{
  constructor(){
    super()
    this.state={
      loadedCharacter:false,
      
      height:null,
      images:null,
      homeworld:null,
      films:[],
    }
  }
  getNewCharacter(){
    const randomNumber=Math.round(Math.random()*82)
    
    const url=`https://vignette.wikia.nocookie.net/starwars/images${randomNumber}/`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
    this.setState({
      images:data.images,
      height:data.height,
      homeworld:data.homeworld,
      films:data.films,
      
      loadedCharacter:true,
    })
  })
}

  
render() {
  const movies=this.state.films.map((film,i)=>{
return <FilmItemRow key={i} url={film}/>
  })
  return(
    <div>
    {
      this.state.loadedCharacter &&
      <div>
      
    <p>{this.state.height}</p>
    
    
    <p><a href={this.state.homeworld}>homeworld</a></p>
    <ul>
      {movies}
      </ul>
      </div>
    }
    <button type="button"onClick={()=>this.getNewCharacter()}
    className="btn">Randomized Character</button>
    </div>
  )
}}
  
function App() {
  return (
    <div className="App">
    <StarWars/>
    </div>
  );
}

export default App;
