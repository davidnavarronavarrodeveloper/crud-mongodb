import CommonsInput from "./CommonsInput";
import CommonsLabel from "./CommonsLabel";
import React from "react";

export default function CommonsBox({
  defaultValue,
  field,
  setField,
  value,
  setValue,
  users,
  setUsers,
}: {
  defaultValue: string;
  field: string;
  setField: any;
  value: string;
  setValue: any;
  users: any[];
  setUsers: any;
}) {
  return (
    <div className="CommonsBox buscador-right">
      <CommonsLabel field={field} />
      <CommonsInput
        field={field}
        setField={setField}
        defaultValue={defaultValue}
        value={value}
        setValue={setValue}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
}
