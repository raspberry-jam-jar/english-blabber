import React from 'react';


function UserForm () {
  return (
    <form>
      <label>
        Имя:
        <input type="text" name="name" />
        Фамилия:
        <input type="text" name="name" />
      </label>
      <button>Save</button>
    </form>
  );
};

export default UserForm;
