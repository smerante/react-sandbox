import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AccessibilityDemo from "./Demos/AccessibilityDemo";
import GlobalProvider, { GlobalProviders, LanguageContext, ThemeContext } from "./Demos/ContextDemo";
import ContextDemoComponent from "./Demos/ContextDemo/ContextDemoComponent";
import ErrorBoundary from "./Demos/ErrorBoundary";
import CustomButton from "./Demos/ForwardingRefs";
import HOCTestComponent from "./Demos/HOCTestComponent";
import HooksDemo from "./Demos/HooksDemo";
import LazyLoading from "./Demos/LazyLoadingDemo";
import ProductTableDemo from "./ProductTableDemo/ProductTableDemo";
import LoginForm from './Components/Login/login';

export default class App extends React.Component<any, any> {
  buttonRefs = React.createRef<HTMLButtonElement>();
  hocInput = React.createRef<HTMLInputElement>();

  hocProps: any = { testProp1: 'Hello, World!' };
  constructor(props: any) {
    super(props);
    this.state = {
      theme: 'dark',
      lang: 'en',
      hocProps: this.hocProps
    };
    this.updateProviders = this.updateProviders.bind(this);
  }

  updateProviders(newTheme: string, newLang: string) {
    this.setState({
      theme: newTheme,
      lang: newLang,
      hocProps: this.hocProps
    })
  }

  componentDidMount() {
    console.warn("Button refs: ", this.buttonRefs);
    if (this.buttonRefs.current)
      this.buttonRefs.current.onclick = (ev: any) => { console.warn("Clicked button"); }

  }

  render() {
    return (
      <Router>
        <div>
          <nav className="route-nav">
            <ul>
              <li className="route-nav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/axe">Accesibility</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/lazy-loading">Lazy Loading</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/context">Context</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/error-demo">ErrorDemo</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/product-table-demo">Product Table Demo</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/hooks">Hooks</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/forward-refs">Forward Refs</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/hoc">Higher order components</Link>
              </li>
              <li className="route-nav__item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/product-table-demo">
              <ProductTableDemo></ProductTableDemo>
            </Route>
            <Route path="/axe">
              <AccessibilityDemo></AccessibilityDemo>
            </Route>
            <Route path="/lazy-loading">
              <LazyLoading></LazyLoading>
            </Route>
            <Route path="/context">
              <p>Providers value set from state</p>
              <LanguageContext.Provider value={this.state.lang}>
                <ThemeContext.Provider value={this.state.theme}>
                  <ContextDemoComponent updateProviders={this.updateProviders}>
                    Providers update from state
                  </ContextDemoComponent>
                </ThemeContext.Provider>
              </LanguageContext.Provider>

              <p>Providers set from function</p>
              {GlobalProviders(<ContextDemoComponent updateProviders={this.updateProviders}>Providers not updated</ContextDemoComponent>)}

              <p>Set providers from class</p>
              <GlobalProvider>
                <ContextDemoComponent updateProviders={this.updateProviders}>
                  Providers update from state
                </ContextDemoComponent>
              </GlobalProvider>

            </Route>
            <Route path="/error-demo">
              test
              <ErrorBoundary>
                {{ one: 'one', two: 'two', thre: 'three' }}
                <ProductTableDemo></ProductTableDemo>
              </ErrorBoundary>
            </Route>
            <Route path="/hooks">
              <HooksDemo></HooksDemo>
            </Route>
            <Route path="/forward-refs">
              <CustomButton ref={this.buttonRefs}>Click me</CustomButton>
            </Route>
            <Route path="/hoc">
              <label htmlFor="HOC-props">Enter a property to add to the test component: </label>
              <input id="HOC-props" ref={this.hocInput} />

              <button onClick={() => { this.setState((state: any) => ({ ...state, hocProps: { newProp: this.hocInput.current ? this.hocInput.current.value : '', ...this.hocProps } })); console.warn("added props: ", this.hocProps); }}>Add property</button>
              {JSON.stringify(this.state.hocProps)}
              <HOCTestComponent {...this.state.hocProps}></HOCTestComponent>
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router >
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}