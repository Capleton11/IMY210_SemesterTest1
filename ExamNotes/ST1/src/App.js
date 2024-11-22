import React from 'react'
import PointInput from './PointInput'
import Line from './Line'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr1: [], // Initialize with an empty array
            arr2: []  // Initialize with an empty array
        };
        this.onSub = this.onSub.bind(this); // Bind the method
    }

    onSub(arr3, arr4) {
        // Update the state with new arrays
        this.setState({ arr1: arr3, arr2: arr4 });
    }

    render() {
        const { arr1, arr2 } = this.state;

        return (
            <div>
                <h1>IMY 220 Semester Test 1</h1>
                <div>
                    <PointInput OnSub={this.onSub} />
                </div>
                <h2>Line</h2>
                <div>
                    {arr1.length > 0 && arr2.length > 0 ? (
                        <Line x={arr1} y={arr2} />
                    ) : (
                        "Waiting for input..."
                    )}
                </div>
            </div>
        );
    }
}

export default App;
