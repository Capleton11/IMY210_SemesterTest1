import PropTypes from 'prop-types';
import React from 'react';

class PointInput extends React.Component{
    constructor(props){
        super(props);
        this.input1 = React.createRef();
        this.input2 = React.createRef();
        this.getInputs = this.getInputs.bind(this);
    }

    getInputs(e){
        e.preventDefault();
        let one = this.input1.current.value;
        let two = this.input2.current.value;
        let arr1 = one.split(";").map((element, index) => {
            return Number(element);
        })
        let arr2 = two.split(";").map((element, index) => {
            return Number(element);
        })

        this.props.OnSub(arr1, arr2);




    }


    render(){
        return(
            <form onSubmit={this.getInputs}>
                <h2>Point Input</h2>
                <input type = 'text' ref = {this.input1}/> <br/>
                <input type = 'text' ref = {this.input2}/> <br/>
                <input type='submit' value="Calculate"/>
            </form>
        )
    }
}

PointInput.propTypes = {
    onSub: PropTypes.func
}

export default PointInput;