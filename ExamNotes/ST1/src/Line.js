import React  from "react"
import PropTypes from 'prop-types';

class Line extends React.Component{
    constructor(props){
        super(props);
        this.getEuclideanDist = this.getEuclideanDist.bind(this);
    }

    getEuclideanDist(){
        let arr1 = this.props.x;
        let arr2 =this.props.y;

        let arr3 = arr1.map((element,index) => {
            return ( element - arr2[index])**2;
        });

        let sum = arr3.reduce((accumulator, currElement) => {
            return accumulator + currElement;
        })

        let answer = Math.sqrt(sum);
        return answer;

    }

    render(){
        const arr4 = this.props.x.join(";"); 
        const arr5 = this.props.y.join(";"); 
        return(
            <div>
                <p>Point 1: {arr4 ? arr4 :" " }</p>
                <p>Point 2: {arr5 ? arr5 : " "}</p>
                <p>Dimension: {this.props.x.length}</p>
                <p>Euclidean Distance: {this.getEuclideanDist()}</p>
            </div>

        )
    }
}

Line.propTypes = {
    x: PropTypes.arrayOf(PropTypes.number), 
    y: PropTypes.arrayOf(PropTypes.number)  
}

export default Line;