import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, numquam
        voluptatum. Ullam, omnis. Qui ipsum repellendus a laudantium at.
        Sapiente aperiam laudantium totam ab odit ullam voluptates cumque
        laboriosam iusto.
      </p>
    </div>
  );
};

function ReactTopics() {
  //let match = useRouteMatch();
  //console.log(match);
  //path nos permite construir rutas relativas <Route>, mientras que "url" nos permite construir enlaces relativos <Link> o <NavLink>.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componente`}>Componente</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            neque dignissimos voluptate possimus iusto laudantium, cumque error
            harum autem velit dolorum libero vero, itaque magni dicta
            exercitationem, unde sapiente quaerat.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
}

export default ReactTopics;
