import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState();
  console.log(users);
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])

  return (
    <div className="font-raleway container mx-auto my-10">
      <h1>Users:</h1>
    </div>
  );
};

export default Users;
