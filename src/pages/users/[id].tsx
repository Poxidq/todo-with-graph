import { useRouter } from "next/router";
import { api } from "&utils/api";

const UserPage = () => {
  const { query } = useRouter();
  console.log("user id: ", query.id);
  let userQuery = null;
  if (query?.id.length > 0) {
    userQuery = api.users.getById.useQuery(query.id);
  }
  return <div>{userQuery && <h1>User: {userQuery.data?.name}</h1>}</div>;
};

export default UserPage;
