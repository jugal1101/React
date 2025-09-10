import React from "react";

export default function Album() {
  return (
    <div>
        <div className="collapse" id="toggler">
        <div className="container-fluid bg-dark w-100">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h2 className="text-light">About</h2>
                <p className="text-light">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-5">
                <h2 className="text-light">Contact</h2>
                <ul className="text-light">
                  {" "}
                  {["Follow on X", "Like on Facebook", "Email me"].map(
                    (data, index) => (
                      <li key={index} >
                        <a href="" className="text-light text-decoration-none">{data}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>




        <div className="navbar">
            <div className="container-fluid bg-dark">
                <h1 className="text-light">Album</h1>
               <button className="navbar-toggler border border-light" type="button" data-bs-toggle="collapse" data-bs-target="#toggler">
               <span class="navbar-toggler-icon"></span>
               </button>
          
            </div>
        </div>
      </div>


  
  );
}
