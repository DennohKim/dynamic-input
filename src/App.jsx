import { useState } from "react";

import "./App.css";

function App() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  //Helper Method to add service
  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <form autoComplete="off" className="App">
      <div className="form-field">
        <label htmlFor="">Service(s)</label>

        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input className="service" id="service" required type="text" />

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
                <button type="button" className="remove-btn">
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Output</h2>
      </div>
    </form>
  );
}

export default App;
