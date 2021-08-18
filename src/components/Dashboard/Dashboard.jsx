import React from "react";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div>
      <main className="bg-secondary">
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 bg-dark card m-3"></div>
          <div className="col-md-3 bg-dark card m-3"></div>
          <div className="col-md-3 bg-dark card m-3"></div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 bg-dark card m-3"></div>
          <div className="col-md-3 bg-dark card m-3"></div>
          <div className="col-md-3 bg-dark card m-3"></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
