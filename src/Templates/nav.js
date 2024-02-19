import * as React from 'react';
import { Button } from '@mui/material';
import logo from "./icons8-menu-30.svg"
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav className='d-flex flex-column' style={{ width: "100%", backgroundColor: 'black', height: "15vh" }}>
        <div className='headercontent d-flex align-items-center justify-content-center w-100  ' style={{ height: "70%" }}>
          <Button size='small' className='mb-2'>
            <Link to="/" className='d-flex'><img src={logo} alt="" title='Home' /></Link>
          </Button>
          <h2 className='text-white'>NewsBank</h2>
        </div>
        <div style={{ height: "30%", borderTop: "1px solid red" }} className='d-flex justify-content-evenly'>
          <Link to="/sports"><Button style={{ padding: "5px" }} className='text-light'>Sports</Button></Link>
          <Link to="/Entertainment"><Button style={{ padding: "5px" }} className='text-light'>Entertainment</Button></Link>
          <Link to="/business"><Button style={{ padding: "5px" }} className='text-light'>Business</Button></Link>
          <Link to="/Sci&tech"><Button style={{ padding: "5px" }} className='text-light'>Science</Button></Link>
        </div>
      </nav>
      <div className='sidebar gap-2 flex-column' style={{ height: "84.9vh", width: "32%", backgroundColor: "black", position: "sticky", top: "15%", display: "none", zIndex: "999" }}>
        <div className='d-flex align-items-center justify-content-center' style={{ height: "10%", color: "darkgrey" }}>
          <h5>CATEGORIES</h5>
        </div>
        <div className='elements d-flex flex-wrap gap-3' style={{ flex: "1", justifyContent: "flex-start", alignContent: 'flex-start' }}>
          <Button variant='outlined' style={{ width: "30%", height: "30%", color: "white", border: "0.7px solid red" }}>Sports</Button>
          <Button variant='outlined' style={{ width: "30%", height: "30%", color: "white", border: "0.7px solid red" }}>Entertainment</Button>
          <Button variant='outlined' style={{ width: "30%", height: "30%", color: "white", border: "0.7px solid red" }}>Business</Button>
          <Button variant='outlined' style={{ width: "30%", height: "30%", color: "white", border: "0.7px solid red" }}>Science</Button>
        </div>
      </div>
    </>
  );
}
