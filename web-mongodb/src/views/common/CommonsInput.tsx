import React from "react";

export default function CommonsInput({
  field,
  setField,
  defaultValue,
  users,
  setUsers,
  setValue,
  value,
}: {
  field: string;
  setField: any;
  defaultValue: string;
  users: any[];
  setUsers: any;
  setValue: any;
  value: string;
}) {
  function onChange(e: any) {
    setValue(e.target.value);
  }

  return (
    <div className="CommonsInput">
      <input
        type="text"
        name={field}
        placeholder={field}
        defaultValue={value}
        onChange={onChange}
      />
    </div>
  );
}
