import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import AddClassForm from "./AddClassForm";
import MyClasses from "./MyClasses";

const InstructorDashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Instructor Dashboard</h1>
      <nav className="mb-4">
        <ul className="flex">
          <li className="mr-2">
            <Link
              to={`${url}/add-class`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add a Class
            </Link>
          </li>
          <li>
            <Link
              to={`${url}/my-classes`}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              My Classes
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path={path}>
          <h2 className="text-xl">Welcome, Instructor!</h2>
        </Route>
        <Route path={`${path}/add-class`}>
          <AddClassForm />
        </Route>
        <Route path={`${path}/my-classes`}>
          <MyClasses />
        </Route>
      </Switch>
    </div>
  );
};

export default InstructorDashboard;
