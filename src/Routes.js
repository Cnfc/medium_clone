/* eslint-disable react/display-name */
import React from "react";
import GlobalFeed from "./pages/globalFeed";
import Article from "./pages/article";

import { Switch, Route } from "react-router-dom";
import { Auth } from "./pages/auth";
import TagFeed from "./pages/TagFeed";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={GlobalFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/articles/:slug" component={Article} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
    </Switch>
  );
};
