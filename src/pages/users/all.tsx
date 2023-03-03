import { api } from "&utils/api";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

const UsersList = () => {
  const users = api.users.getAll.useQuery();
  console.log(users.data);
  return (
    <div>
      <h1>Users: </h1>
      {users.data && users.data.map((user) => <span>{user?.name}</span>)}
    </div>
  );
};

export default UsersList;
