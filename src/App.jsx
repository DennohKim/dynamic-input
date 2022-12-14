import { useState } from "react";

import "./App.css";

function App() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  console.log(serviceList);

  //Helper Method to add service
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  //Helper function to remove service button

  const handleServiceRemove = (index) => {
    const list = [...serviceList]
    list.splice(index, 1);
    setServiceList(list)
  }

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target
    const list = [...serviceList]
    list[index][name] = value;
    setServiceList(list);


  }

  return (
    <form autoComplete="off" className="App">
      <div className="form-field">
        <label htmlFor="">Service(s)</label>

        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input className="service" id="service" required type="text" name="service" value={singleService.service} onChange={(e) => handleServiceChange(e, index)} />

              {/* Conditionally render add button to appear once */}
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button type="button" className="add-btn" onClick={handleServiceAdd}>
                  <span>Add a service</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {/* conditionally render remove button to appear with more than one input */}

              {serviceList.length > 1 && (
                <button type="button" className="remove-btn" 
                onClick={() => handleServiceRemove(index)}>
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
        {serviceList.map((singleService, index ) => (
          <ul key={index}>
            {singleService.service &&(
              <li>{singleService.service}</li>
            )}
          </ul>
        ))}
      </div>
    </form>
  );
}

export default App;
