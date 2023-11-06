import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div> <MDBFooter className='text-center text-white' style={{backgroundColor:'rgb(10, 174, 10)'}}>
    <MDBContainer className='pt-4'>
      <section className='mb-4'>
        <MDBBtn
          rippleColor="light"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon  fab className='fab fa-facebook-f ' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-twitter' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-google' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-instagram' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-linkedin' />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color='light'
          floating
          size="lg"
          className='text-dark m-1'
          href='#!'
          role='button'
        >
          <MDBIcon fab className='fa-github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-light p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-light' href=''>
       Discount-Calculator.com
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer