import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";

import { Switch, Route } from "react-router-dom";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
