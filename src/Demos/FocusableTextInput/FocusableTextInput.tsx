import React from 'react';

export default class FocusableTextInput extends React.Component<{ inputRef: React.RefObject<HTMLInputElement> }> {

    render() {
        return <>
            <div>
                <label htmlFor="inputRefTest">Input reference test</label>
                <input id="inputRefTest" ref={this.props.inputRef} />
            </div>
        </>
    }
}