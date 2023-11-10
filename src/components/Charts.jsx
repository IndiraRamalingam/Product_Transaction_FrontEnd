import React, { useContext,useEffect } from 'react'
import instance from '../services/instance';
import AppContext from './AppContext';

function Charts() {
  const{month}=useContext(AppContext)
  return (
  <>
   <div className="container">
        <div className='headStyle'>
          <h1 className="mt-5 mr-5" style={{ color: "rgb(92 209 39)", 'fontWeight': 'bolder', 'textAlign': 'center', fontStyle: 'italic' }}>Chart Stats <span style={{ fontSize: '25px', fontStyle: 'italic', color: '#2cdbcb', 'textAlign': 'center' }}>- {month}</span></h1>
        </div>
        <hr />
        <div className='contianer m-5'>
          <div className='row g-4'>

          </div>
          </div>
          </div>
  </>
  )
}

export default Charts