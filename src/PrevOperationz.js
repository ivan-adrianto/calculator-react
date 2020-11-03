import React, { Component } from 'react';

class PrevOperationz extends Component {
    render (){
        let {prevOps} = this.props
        return (
            <div>
                <h1>{prevOps}</h1>
            </div>

        )
    }
}

export default PrevOperationz