import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AccessibilityDemo from "./Demos/AccessibilityDemo";
import { GlobalProviders, LanguageContext, ThemeContext } from "./Demos/ContextDemo";
import ContextDemoComponent from "./Demos/ContextDemo/ContextDemoComponent";
import LazyLoading from "./Demos/LazyLoadingDemo";
import ProductTableDemo from "./ProductTableDemo/ProductTableDemo";

export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      theme: 'dark',
      lang: 'en'
    };
    this.updateProviders = this.updateProviders.bind(this);
  }

  updateProviders(newTheme: string, newLang: string) {
    console.warn("Update providers: ", newTheme, ' : ', newLang);
    this.setState({
      theme: newTheme,
      lang: newLang
    })
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/axe">Accesibility</Link>
              </li>
              <li>
                <Link to="/lazy-loading">Lazy Loading</Link>
              </li>
              <li>
                <Link to="/context">Context</Link>
              </li>
              <li>
                <Link to="/product-table-demo">Product Table Demo</Link>
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

            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}