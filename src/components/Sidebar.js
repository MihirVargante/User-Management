import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails'
import CreateUser from './CreateUser'
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [showModal,setShowModal]=useState(false)
  const [dashActive,setDashActive]=useState(true)
  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          <span className="pl-2">Hello there ✌️</span>
        </div>
        <div>
            <span className="pr-3"><i class="fa-solid fa-user"></i></span>
            <span>Mihir Vargante</span>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/' className={`nav-link ${dashActive? 'dashActive':''}`} onClick={()=>setDashActive(true)}>
                
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/' className={`nav-link ${dashActive? '':'dashActive'}`} onClick={()=>{
                setDashActive(false)
                setShowModal(true)}}>
              <i class="fa-solid fa-users"></i>
                <span className='nav-link-name' >Create-User</span>    
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      <UserDetails/>
      <CreateUser isVisible={showModal} onClose={()=>{
                  setShowModal(false)
                }}/>
    </main>
  );
};

export default Sidebar;
