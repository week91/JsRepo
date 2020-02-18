import React from 'react';
import nanoid from 'nanoid';

class AddWorker extends React.Component { 
    constructor(props){
        super(props); 
        let { name, contract, position, id } = this.props.editor;
          this.state={
             name: name ? name : "",
             contract: contract ? contract : false,
             position: position ? position:"choose position",    
             workers: [],
             id:id ? id:""
          }  
      this.submits=this.submits.bind(this)
      this.inputChange = this.inputChange.bind(this);
     
    }
    componentDidUpdate(prevProps){
      
        if (this.props.editor.id === prevProps.editor.id) {
          return null;
        } else {
          let { name, contract, position, id } = this.props.editor;
          this.setState({
            name: name,
            contract: contract,
            position: position,
            id: id
          });
        }
      
    }
  inputChange(e) 
  { 
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({[name]:value}); 
  }

  submits(e){
     let workers = [...this.props.workers];
     workers.push({
       name: this.state.name,
       contract: this.state.contract,
       position: this.state.position ,
       id:nanoid()
     })

 e.preventDefault();
  this.setState({
     workers,
     name:"",
     id: ""
  })

  this.props.initial.addwork(workers)
}

render()
 {
  return(
   <form onSubmit={this.submits}>
    <label> Name:
     <input type="text" 
            value={this.state.name}
            name="name" 
            onChange={this.inputChange}/>
    </label> 
     <tr/>
     <label>Position:
      <select  name="position" 
             value={this.state.position}
               onChange={this.inputChange}>
                 <option >{this.state.position}</option>
                  {this.props.initial.positions.map(position=> {
                    return (
                     <option key={position.value} value={position.stat}>{position.stat}</option>
                    )
                 })}
      </select>
     </label>
     <tr/>
     <label>Contract :
        <input onChange={this.inputChange}
               type="checkbox" 
               name="contract"
               checked={this.state.contract}/>
      </label>
    <tr/>
   <input type="submit"
          value="Add"/>
</form>
  )                  
 }
}

export default AddWorker;