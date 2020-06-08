import React from 'react';
import './App.css';

import ImageAmol from './img/amol.jpg';

const App: React.FunctionComponent = (props) => {
  return (
    <>
      <div className="d-flex p-2" style={{ minHeight: "100vh", alignItems: "center", width: "100%", background: "radial-gradient(circle, rgba(61,71,110,1) 0%, rgba(57,55,138,1) 100%)", /*backgroundImage: `url(${ImageBackground})`,*/ backgroundSize: "contain" }}>
        <div className="container rounded-lg">
          <div className="row">
            <div className="col-md-4 d-flex" style={{ minHeight: "70vh" }}>
              <div style={{ flex: 1, backgroundImage: `url(${ImageAmol})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
              </div>
            </div>
            <div className="col-md-8 d-flex">
              <div className="d-flex" style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
                <div className="container p-4">
                  <div>Hello! I am</div>
                  <h1 style={{ fontWeight: "bold" }}>Amol Bhave</h1>
                  <h2>Core Developer @ Hudson River Trading</h2>
                  <br />
                  <a target="_blank" href="https://linkedin.com/in/amolbhave"><i className="fab fa-linkedin display-4" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
