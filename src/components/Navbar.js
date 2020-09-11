import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
const Navabar=()=>{
    return(
    <div className='ui secondary pointing menu'>
        <Link to='/' className='item'>
            Streamy
        </Link>
        <div className='right menu'>
        <Link to='/' className='item'>
            All Sreama
        </Link>
        <GoogleAuth/>
        </div>
        </div>
    )
}



export default Navabar