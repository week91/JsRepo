import React from 'react';


class AddWorker extends React.Component { 
    constructor(props){
        super(props);
          this.state={
             name:"",
             contract: false,
             position: "",    
             workers:[],
          }  
      this.submits=this.submits.bind(this)
      this.inputChange = this.inputChange.bind(this);
    }

  inputChange(e) 
  {
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({[name]:value}); 
  }

  submits(e){
     let workers = [...this.state.workers];
     workers.push({
       name: this.state.name,
       contract: this.state.contract,
       position: this.state.position 
     })

 e.preventDefault();
  this.setState({
     workers,
     name:""
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
             value={this.position}
               onChange={this.inputChange}>
                 <option value="">select position</option>
                  {this.props.initial.positions.map(position=> {
                    return (
                     <option key={position} value={position}>{position}</option>
                    )
                 })}
      </select>
     </label>
     <tr/>
     <label>Contract :
        <input onChange={this.inputChange}
               type="checkbox" 
               name="contract"/>
      </label>
    <tr/>
   <input type="submit"
          value="Add"/>
</form>
  )                  
 }
}

export default AddWorker;