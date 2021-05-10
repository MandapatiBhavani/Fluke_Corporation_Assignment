import flukeLogo from '../fluke.svg' 

const Header  =()=> {
    return (
      <div className="app">
        <header className="app-header navbar">
          <span className="navbar-brand">
            <img src={flukeLogo} alt="fluke"/>
          </span>
          <span className="btns">
              <p className="header-buttons">Community</p>
              <p className="header-buttons">Learn</p>
              <p className="header-buttons">About</p>
          </span>
          <div className="mright-20">
              <button className="create-btn">CREATE AN ACCOUNT</button>
              <button className="sign-in">SING IN</button>
          </div>
        </header>
         
      </div>
    );
}

export default Header;