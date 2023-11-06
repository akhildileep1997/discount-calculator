import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar light style={{backgroundColor:'rgb(10, 174, 10)',height:'90px',}} >
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' style={{color:'white',fontWeight:'900'}}>
        <img
          style={{borderRadius:'50%',border:'1px solid white',marginLeft:'10px',marginRight:'10px'}}
          src='https://techindia.midi.org.in/images/activities/calculator.gif'
          height='50'
          alt=''
          loading='lazy'
        />
        Discount Calculator
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header