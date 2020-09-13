import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {createStream} from '../actions'
class StreamCreate extends React.Component {
    renderError=({error,touched})=>{
        if(touched && error){
            return(
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

	renderInput = (formProps) => {
        const className= `field ${formProps.meta.error && formProps.meta.touched? 'error': ''}`
		return (
			<div className={className}>
				<label>{formProps.label}</label>
				<input
					value={formProps.input.value}
                    onChange={formProps.input.onChange}
                    autoComplete='off'
				/>
				
                {this.renderError(formProps.meta)}
			</div>
		);

		//or you can also do it this way by using the spread
		//operator basically putting all the props into the input
		//which is recommended since there more props to be used
		//than just value and onchange
		//<input {...formProps.input}/>
	};

	onSubmit=(formValues)=> {
		this.props.createStream(formValues)
	}
	render() {
		return (
			<form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
				<Field
					name="title"
					component={this.renderInput}
					label={'Enter Title'}
				/>
				<Field
					name="description"
					component={this.renderInput}
					label={'Enter Description'}
				/>
                <button className='ui button primary'>Submit</button>
			</form>
		);
	}
}

const validate= formValues=>{
    const errors={}
    if(!formValues.title){
        errors.title='You must enter a title'
    }
    if(!formValues.description){
        errors.description= 'You must enter a description'
    }
    return errors
}


export default connect(null,{createStream})(reduxForm({
	form: 'streamCreate',
	validate,
})(StreamCreate));


// or se can also put the reduxForm
// into a variable and do the following
// export default connect(null,{createStream})(variableName)