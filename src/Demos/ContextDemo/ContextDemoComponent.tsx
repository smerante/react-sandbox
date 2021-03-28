import React from 'react';
import { LanguageContext, ThemeContext } from '../ContextDemo';

let uniqueID = 0;

export default class ContextDemoComponent extends React.Component<any, any> {

    langRef: any;
    themeRef: any;

    constructor(props: any) {
        super(props);
        this.langRef = React.createRef();
        this.themeRef = React.createRef();
        this.state = {
            localID: uniqueID
        };
    }

    componentDidMount() {
        this.setState({
            localID: uniqueID++
        });
    }

    render() {

        const {
            localID
        } = this.state;
        destructingTest({ ...this.state });
        return <div>
            <ThemeContext.Consumer>
                {theme => (
                    <div>theme: {theme}</div>
                )}
            </ThemeContext.Consumer>
            <LanguageContext.Consumer>
                {lang => (
                    <div>language: {lang}</div>
                )}
            </LanguageContext.Consumer>
            <div>
                <div>
                    <label htmlFor={"lang-" + localID}>Update lang provider</label>
                    <input id={"lang-" + localID} type="text" ref={this.langRef} />
                </div>
                <div>
                    <label htmlFor={"theme-" + localID}>Update theme provider</label>
                    <input id={"theme-" + localID} type="text" ref={this.themeRef} />
                </div>
                <button onClick={() => this.props.updateProviders(this.themeRef.current.value, this.langRef.current.value)}>Update Providers</button>
                {this.props.children}
            </div>
        </div >

    }
}
ContextDemoComponent.contextType = ThemeContext;

function destructingTest({ localID = 0 } = {}) {
    console.log("Desturcting from state, localID :", localID);
}