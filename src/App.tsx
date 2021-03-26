import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AccessibilityDemo from "./Demos/AccessibilityDemo";
import LazyLoading from "./Demos/LazyLoadingDemo";
import ProductTableDemo from "./ProductTableDemo/ProductTableDemo";

export default class App extends React.Component {
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