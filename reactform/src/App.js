import React from 'react';
import './App.css';
import AddWorker from './AddWorker'
import PeopleList from './PeopleList';

class App extends React.Component {  
  
  constructor(props) {
    super(props);
    this.state = { workers: [] }
    
   this.addWorker=this.addWorker.bind(this)
     
  }
  addWorker(value){
    let workers = [...this.state.workers];
    workers=[...value]
    this.setState({workers:workers})
  }
 render ()
  { 
    const initial={
      addwork: this.addWorker.bind(this),
      positions:["engineer","accountant","manager","dispatcher","dealer"]
   }
  
    return(
      <div className="App">
       
<AddWorker initial={initial} />
<PeopleList people={this.state.workers} />

      </div>
     )
    }
  }


export default App;