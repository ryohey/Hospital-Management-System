// Css
import "./App.css";

// Components
import { Suspense, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Four04 from "./pages/404/404";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
// Components
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";

// Main Function
function App() {
  return (
    <Fragment>
      <Navigation />
      <Suspense fallback={Four04}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/services" component={Service} exact />
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
}

export default App;
