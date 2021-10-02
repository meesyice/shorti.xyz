import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import UrlShortner from "./pages/UrlShortner";
import NumberOfClicks from "./pages/NumberOfClicks";
import ReportUrl from "./pages/ReportUrl";
import Contact from "./pages/Contact";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UrlShortner} />
        <Route exact path="/ClickTracker" component={NumberOfClicks} />
        <Route exact path="/ReportUrl" component={ReportUrl} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/:shorti" component={Redirect} />
      </Switch>
    </Router>
  );
}

export default App;
