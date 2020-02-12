import React from 'react';





class PeopleList extends React.Component {  
    render() {
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
              </tr>
              {this.props.people.map(worker => {
                return (
                  <tr key={worker.name}>
                    <td>{worker.name}</td>
                    <td>{worker.position}</td>
                    <td>
                      <input type="checkbox"
                       checked={worker.contract}
                       disabled={true}
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
  }
  
  export default PeopleList;