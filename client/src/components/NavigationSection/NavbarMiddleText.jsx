import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavbarMiddleText() {


    const location = useLocation();


  return (
    <>
      {location.pathname == "/" ? <h1>Home</h1>:
      location.pathname == "/today" ? <h1>Today</h1>:
      location.pathname == "/project" ? <h1>Project</h1>:
      location.pathname == "/payment" ? <h1>Payment</h1>:
      location.pathname == "/messege" ? <h1>Messege</h1>:null}
    </>
  )
}

export default NavbarMiddleText
