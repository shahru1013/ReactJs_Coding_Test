import React from "react";
import { Switch, Route } from "react-router-dom";
import Lists from "./Homepage/Body/Lists";
import Navbar from "./Nav/Navbar";
import SingleItem from "./Homepage/SingleItem/SingleItem";
import DeletePost from "./Homepage/DeleteItem/DeletePost";
function Index(props) {
  const routes = [
    { url: "", component: Lists },
    { url: "post/:id?", component: SingleItem },
    { url: "delete/:id?", component: DeletePost },
  ];
  return (
    <div>
      {/* Setup the route of Homepage Lists and Item*/}
      <Navbar />
      <Switch>
        {routes.map((data, i) => (
          <Route
            key={i}
            exact
            path={`/${data.url}`}
            component={data.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default Index;
