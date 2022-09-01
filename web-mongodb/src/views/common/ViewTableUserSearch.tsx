import CommonsBox from "./CommonsBox";
import CommonsTableUser from "./CommonsTableUser";
import { useState, useEffect } from "react";
import React from "react";
import { httpAxios } from "../../infrastructure/instances/httpAxios";
import userRepositorio from "../../infrastructure/repositories/UserRepositorio";

function ViewTableUserSearchUser() {
  const name = "name";
  const defaultValue = "";
  const [field, setField] = useState(name);
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    userRepositorio(httpAxios)
      .getUsers()
      .then((response) => {
        setUsers(response);
      });
  }, []);

  return (
    <div className="ViewTableUserSearch">
      <div id="modal-cesar" className="modal">
        <div className="modal-content">
          <div className="modal-head">
            <div className="modal-title">
              <h3>TABLA CRUD MONGO DB</h3>
            </div>
          </div>
          <div className="modal-body">
            <CommonsBox
              defaultValue={defaultValue}
              field={field}
              setField={setField}
              value={value}
              setValue={setValue}
              users={users}
              setUsers={setUsers}
            />
            <CommonsTableUser users={users} value={value} setUsers={setUsers} />
          </div>
        </div>
      </div>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
      <p>fdsafadsfasdfasdfsdafasdfsadfdsaf</p>
    </div>
  );
}

export default ViewTableUserSearchUser;
