import { httpAxios } from "../../infrastructure/instances/httpAxios";
import userRepositorio from "../../infrastructure/repositories/UserRepositorio";
export default function CommonsTableUser({
  users,
  value,
  setUsers,
}: {
  users: any[];
  value: string;
  setUsers: any;
}) {
  const deleteOne = function (id: string) {
    userRepositorio(httpAxios)
      .deleteUsersById(id)
      .then((response) => {
        let userFiltered = users.filter((user) => user.id !== id);
        setUsers(userFiltered);
      });
  };

  function cargarDatos() {
    let userFiltered =
      value !== ""
        ? users.filter((user) => user.name.indexOf(value) !== -1)
        : users;
    console.log(userFiltered);
    return userFiltered !== undefined
      ? userFiltered.map((user) => (
          <div className="flex responsive-table-body" key={user.id}>
            <div className="flex-id">{user.id}</div>
            <div className="flex-name">{user.name}</div>
            <div className="flex-age">{user.age}</div>
            <div className="flex-description">{user.descripcion}</div>
            <div className="actions">
              <input
                type="button"
                name="delete"
                onClick={() => deleteOne(user.id)}
                value="Borrar"
              />
            </div>
          </div>
        ))
      : "";
  }

  return (
    <div className="CommonsTableUser">
      <div className=" flex responsive-table-head">
        <div className="flex-id">Id</div>
        <div className="flex-name">Name</div>
        <div className="flex-age">Age</div>
        <div className="flex-description">Description</div>
        <div className="flex-description">Actions</div>
      </div>
      {cargarDatos()}
    </div>
  );
}
