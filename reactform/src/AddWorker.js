import React from 'react';


class AddWorker extends React.Component {  
render() {
  return(
   <form onSubmit={this.props.submit}>
    <label> Name:
     <input type="text" 
            value={this.props.name}
            name="name" 
            onChange={this.props.inputChange}/>
    </label> 
     <tr/>
     <label>Position:
      <select  name="position" 
             value={this.props.position}
               onChange={this.props.inputChange}>
                 <option value="">select position</option>
                  {this.props.positions.map(position=> {
                    return (
                     <option key={Math.random()} value={position}>{position}</option>
                    )
                 })}
      </select>
     </label>
     <tr/>
     <label>Contract :
        <input onChange={this.props.inputChange}
               type="checkbox" 
               name="contract"/>
                         </label>
    <tr/>
   <input type="submit"
          value="add"/>
</form>
  )                  
 }
}

export default AddWorker;