import React from 'react';

import './App.css';

import PeopleList from './PeopleList';

class App extends React.Component {  
  posit=[1,3,4,5,6,]
  constructor() {
    super();
    this.state = {
      name:"",
      contract: false,
      position: "1",
      items: [],
         };
    this.Submit = this.Submit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
   
  }
  handleInputChange(e) {
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
   
    this.setState({
      [name]:value
      
    }); 
    console.log(this.state.name)
    
  }
  Submit(e){
   
    let items = [...this.state.items];
    items.push({
      name: this.state.name,
      contract: this.state.contract,
      position: this.state.position
    }) 
    e.preventDefault();
    
    console.log(this.state.items)
    console.log(this.state.name)
    this.setState({
      items,
      name: "",
      position: "1"
    });
  }
  render (){return(

      <div className="App">
        <form onSubmit={this.Submit}>
    <label> Name:
      <input type="text" value={this.state.name}
           
            name="name" onChange={this.handleInputChange}/>
    </label> 
  <tr></tr>
  <label>
    Position:
    <select  name="position" value={this.state.position}    onChange={this.handleInputChange}>
  
      {this.posit.map(pos=> {return (	<option value={pos}>{pos}</option>)})}
    </select>
    </label>
    <tr/>
    <label> Is contract :
  <input onChange={this.handleInputChange} type="checkbox" name="contract"/>
          </label>
    <tr/>
   
   <input type="submit" value="add"></input>
     
  </form>

  <PeopleList people={this.state.items}/>

        </div>
  )
    }
  }


export default App;