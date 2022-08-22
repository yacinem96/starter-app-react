

export const Header=()=>{

    return(

        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black" aria-label="Fifth navbar example">
          <div className="container-fluid">
            <a className="navbar-brand" href="www.google.com"> 
            <img src={require('../images/fakelogo.png')} width="150px" height="60px" alt="" /> 
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05"
              aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="www.google.com">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="www.google.com">Team</a>
                </li>
  
  
              </ul>
  
            </div>
          </div>
        </nav>
  
      </header>

    );


};