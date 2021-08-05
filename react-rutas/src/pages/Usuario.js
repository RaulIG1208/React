import { useParams } from "react-router-dom";

function Usuario() {
  let { username } = useParams();

  return (
    <div>
      <h3>Perfil del Usuario</h3>
      <p>
        Nombre del <b>{username}</b>
      </p>
    </div>
  );
}

export default Usuario;
