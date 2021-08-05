import { Redirect, Route } from "react-router-dom";

// function PrivateRoute(props) {
//   return (
//     <Route exact={props.exact} path={props.path} component={props.component} />
//   );
// }

// function PrivateRoute(props) {
//   return <Route {...props} />;
// }

let auth;
auth = true;
//auth = null;

function PrivateRoute({ Component, ...rest }) {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
}

export default PrivateRoute;
