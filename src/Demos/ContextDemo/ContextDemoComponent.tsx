import React from 'react';
import { LanguageContext, ThemeContext } from '../ContextDemo';

export default class ContextDemoComponent extends React.Component<any, any> {

    langRef: any;
    themeRef: any;

    constructor(props: any) {
        super(props);
        this.langRef = React.createRef();
        this.themeRef = React.createRef();
    }

    render() {
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
                    <label htmlFor="lang">Update lang provider</label>
                    <input id="lang" type="text" ref={this.langRef} />
                </div>
                <div>
                    <label htmlFor="theme">Update theme provider</label>
                    <input id="theme" type="text" ref={this.themeRef} />
                </div>
                <button onClick={() => this.props.updateProviders(this.themeRef.current.value, this.langRef.current.value)}>Update Providers</button>
                {this.props.children}
            </div>
        </div >

    }
}
ContextDemoComponent.contextType = ThemeContext;
