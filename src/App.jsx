import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    
      <form autoComplete="off" className="App">
        <div className="form-field">
          <label htmlFor="">Service(s)</label>
          <div className="services">
            <div className="first-division">
              <input className="service" id="service" required type="text" />
              <button type="button" className="add-btn">
                <span>Add a service</span>
              </button>
            </div>
            <div className="second-division">
              <button type="button" className="remove-btn">
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
        <div className="output">
          <h2>Output</h2>
        </div>
      </form>
    
  );
}

export default App;
