import React from 'react';
import './App.css';
import AddWorker from './AddWorker'
import PeopleList from './PeopleList';

class App extends React.Component {  
  
  constructor() {
    super();
    this.state = {
      workers: [],
      name:"",
      contract: false,
      position: "",
      positions:["engineer","accountant","manager","dispatcher","dealer"]
    }
   
    this.submit = this.submit.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) 
  {
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
   
    this.setState({[name]:value}); 
  }

  submit(e){
   
    let workers = [...this.state.workers];
        workers.push({
      name: this.state.name,
      contract: this.state.contract,
      position: this.state.position
    }) 

    e.preventDefault();
          this.setState({
           workers,
           name: "",
           
          })
  }

  render (){return(

      <div className="App">
       
<AddWorker  submit={this.submit}
            inputChange={this.inputChange}
            name={this.state.name}
            conctact={this.state.contract}
            position={this.state.position}
            positions={this.state.positions}
             />
            
  <PeopleList people={this.state.workers}
              />

      </div>
     )
    }
  }


export default App;