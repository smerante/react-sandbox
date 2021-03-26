import React from 'react';
import FocusableTextInput from './FocusableTextInput/FocusableTextInput';

export default class AccessibilityDemo extends React.Component<any, any> {
    private textInputRef: React.RefObject<HTMLInputElement>;
    private toggleContainer: React.RefObject<HTMLDivElement>
    constructor(props: any) {
        super(props);
        this.textInputRef = React.createRef();

        this.state = { isOpen: false };
        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }

    onClickHandler() {
        this.setState((state: any) => ({
            isOpen: !state.isOpen
        }));
    }

    onClickOutsideHandler(event: any) {
        switch (event.target.id) {
            case 'option1':
                this.setState({
                    selectedOption: "Option 1"
                });
                this.setState({ isOpen: false });
                break;
            case 'option2':
                this.setState({
                    selectedOption: "Option 2"
                });
                this.setState({ isOpen: false });
                break;
            case 'option3':
                this.setState({
                    selectedOption: "Option 3"
                });
                this.setState({ isOpen: false });
                break;
        }
        if (this.state.isOpen && !this.toggleContainer.current?.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    render() {
        return <>
            <div>
                <FocusableTextInput inputRef={this.textInputRef}></FocusableTextInput>
            </div>
            <div>
                <button onClick={() => this.textInputRef.current?.focus()} >Focus on input element</button>
            </div>

            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an option: {this.state.selectedOption}</button>
                {this.state.isOpen && (
                    <ul>
                        <li id="option1">Option 1</li>
                        <li id="option2">Option 2</li>
                        <li id="option3">Option 3</li>
                    </ul>
                )}
            </div>
        </>
    }
}