import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./user-card.css";
function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.map(u => (
        <div key={u.id} className="user-card">
     
          <Link to={`/users/${u.id}`}>
          </Link>   
          <div className="user-card-content">
          <p> ${u.username} </p>
          <p>${u.email }</p>
          <p>${u.phone}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;
