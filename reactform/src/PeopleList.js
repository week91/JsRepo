import React from 'react';

 
  function PeopleList(props) {
   
     return (
           <div className="container">
          <table>
            <tbody>
              <tr>
               <th>_____Worker list____</th>
              </tr>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Contract</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {props.people.map(worker => {
                return (
                  <tr key={worker.id}>
                    <td>{worker.name}</td>
                    <td>{worker.position}</td>
                    <td>
                      <input type="checkbox"
                       checked={worker.contract}
                       disabled={true}
                     />
                    </td>
                    <td>
                      <input className="close"type="button" value="delete" id={worker.id} onClick={props.action.del}
                       />
                    </td>
                    <td>
                      <input type="button" value="edit" id={worker.id} onClick={props.action.edit}
                      
                       />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  
  
  export default PeopleList;