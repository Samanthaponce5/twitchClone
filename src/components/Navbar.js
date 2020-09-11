import React from 'react'
import {Link} from 'react-router-dom'

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
        </div>
        </div>
    )
}



export default Navabar