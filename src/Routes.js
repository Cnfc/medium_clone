import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";

import { Switch, Route } from "react-router-dom";
import { Auth } from "./pages/auth";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
