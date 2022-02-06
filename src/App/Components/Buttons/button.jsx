import React from 'react';

import './button.css';


export const Button = ()=> {
  return (
    <>
      <div className="button-titile">
        <h1>Buttones</h1>
        </div>
    <div className='Button-1'>
      
      <button className='primera'>Default</button>
    </div>
    <div className='Button-2'>
      <button className='segunda'>Primary</button>
    </div>
    <div className='Button-3'>
      <button className='tercera'>Success</button>
    </div>
    <div className='Button-4'>
      <button className='cuarta'>Danger</button>
    </div>
    <div className='Button-5'>
      <button className='quinta'>Warning</button>
    </div>
    <div className='Button-6'>
      <button className='sexta'>Info</button>
    </div>
    <div className='container-1'>
      <div className='Button-7'>
        <button className='septima'>Disabled</button>
      </div> 
      <div className='Button-8'>
        <button className='octava'>Disabled</button>
      </div>
    </div>
    <div className='container-2'>
      <div className='Button-9'>
        <button className='novena'>Disabled</button>
      </div> 
      <div className='Button-10'>
        <button className='decima'>Disabled</button>
      </div>
      <div className='Button-11'>
        <button className='undecima'>Disabled</button>
      </div>
    </div> 
    <div className='container-3'>
      <div className='Button-12'>
        <button className='Grey'>Disabled</button>
      </div>
      <div className='Button-13'>
          <button className='Blue'>Disabled</button>
      </div>
      <div className='Button-14'>
          <button className='Oscuro'>Disabled</button>
      </div>
      <div className='Button-15'>
          <button className='Red'>Disabled</button>
      </div>
    </div>



    </>

  );
}