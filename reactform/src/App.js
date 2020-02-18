import React from 'react';
import './App.css';
import AddWorker from './AddWorker'
import PeopleList from './PeopleList';
import nanoid from 'nanoid';

class App extends React.Component {  
  
  constructor(props) {
    super(props);
    this.state = { 
      workers: [] ,
      editorWorker: {},
    }
   this.deleteWorker = this.deleteWorker.bind(this);
   this.addWorker=this.addWorker.bind(this)
   this.edit=this.edit.bind(this)
    }

  edit(e) {
    let workers = [...this.state.workers];
    const target = e.target;
    const id = target.getAttribute("id");
    const editWorker = workers.find(item=>{return item.id===id})

    this.setState({
      editorWorker: editWorker,
    });
  }

  deleteWorker(e) {
    let workers = [...this.state.workers];
    const target = e.target;
    const id = target.getAttribute("id");

    workers.splice(
      workers.indexOf(
        workers.find(item=>
          {return item.id===id})),1);

    this.setState({
      workers: workers
    });
  }

  addWorker(value){
    let workers = [...this.state.workers];
    workers=[...value]
    this.setState({
      workers:workers
    })
  }
 render ()
  { 
    const listAction = {
      del: this.deleteWorker,
      edit: this.edit
    };

    const initial={
      addwork: this.addWorker.bind(this),
      positions:[{stat:"engineer",value:nanoid()},{stat:"accountant",value:nanoid()},{stat:"manager",value:nanoid()},{stat:"dealer",value:nanoid()},{stat:"dispatcher",value:nanoid()}]
   }
  
    return(
      <div className="App">
       
<AddWorker initial={initial} workers={this.state.workers} editor={this.state.editorWorker} />
<PeopleList people={this.state.workers} action={listAction}/>

      </div>
     )
    }
  }

export default App;