import React from 'react'
import { Field,reduxForm } from 'redux-form'


class StreamCreate extends React.Component{

    renderInput=(formProps)=>{
       return <input value={formProps.input.value} onChange={formProps.input.onChange}/>

       //or you can also do it this way by using the spread 
       //operator basically putting all the props into the input
       //which is recommended since there more props to be used
       //than just value and onchange 
       //<input {...formProps.input}/>
    }
    render(){
    return(
       <form>
       <Field name='title' component={this.renderInput}/>
       <Field name='description' component={this.renderInput}/>
       </form>
    )
}
}

export default reduxForm(
    {
        form:'streamCreate'
    }
)(StreamCreate)