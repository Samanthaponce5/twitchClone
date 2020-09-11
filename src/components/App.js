import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import StreamCreate from '../streams/StreamCreate'
import StreamEdit from '../streams/StreamEdit'
import StreamDelete from '../streams/StreamDelete'
import StreamList from '../streams/StreamList'
import StreamShow from '../streams/StreamShow'
import Navabar from '../components/Navbar'

const App=()=>{

    return(
        <div className='ui container'>
           
        <BrowserRouter>
        <div>
          <Navabar/>
            <Route path='/' exact component={StreamList}/>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/edit' exact component={StreamEdit}/>
            <Route path='/stream/delete' exact component={StreamDelete}/>
            <Route path='/stream/show' exact component={StreamShow}/>
        </div>
        </BrowserRouter>
        </div>
    )
}

export default App

// 784724287343-ipnkea5t68t15o3np0p16kghh8b6jcfv.apps.googleusercontent.com