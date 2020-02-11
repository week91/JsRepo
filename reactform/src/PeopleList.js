import React from 'react';





class PeopleList extends React.Component {  
    render() {
      
      return (
           <div className="form-container">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Contract</th>
                <th>Position</th>
              </tr>
              <br/>
              {this.props.people.map(item => {
                return (
                  <tr key={item.name + Math.random()}>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="checkbox"
                        disabled={true}
                        checked={item.contract}
                      />
                    </td>
                    <td>{item.position}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default PeopleList;