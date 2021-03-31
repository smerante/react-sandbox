import React from 'react';
import PropertyLogger from './HOCDemo';

class HOCTestComponent extends React.Component<any, any> {
    render() {
        return <>
            <h1>Higher order component test</h1>
            <p>Any properties passed to this component will be logged in the console</p>
            {JSON.stringify(this.props)}
        </>
    }
}

export default PropertyLogger(HOCTestComponent);