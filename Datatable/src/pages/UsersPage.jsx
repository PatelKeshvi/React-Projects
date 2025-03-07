import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Username", accessor: "username" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
    ],
    []
  );

  return (
    <div>
      <h2>User Data Table</h2>
      {loading ? <p>Loading...</p> : <DataTable columns={columns} data={users} />}
    </div>
  );
};

export default UsersPage;
