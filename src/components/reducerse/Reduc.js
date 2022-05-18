import React, {Component} from 'react';
import StrAddButton from './StrAddButton';

class Reduc extends Component {
    render() {
        return (
            <div>
                <h1>Start React 200!</h1>
                <span>{this.props.store.getState().data.str}</span><br/>
                <StrAddButton store={this.props.store}/>
            </div>
        );
    }
}

export default Reduc;