import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteUserById() {
  const { id } = useParams();
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId.trim()) {
      axios.delete(`https://fakestoreapi.com/users/${inputId}`)
        .then(() => {
          console.log("User deleted");
          alert("User deleted");
        })
        .catch(err => console.log(err));
      setInputId("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputId}
          onChange={e => setInputId(e.target.value)}
        />
        <button type="submit">Delete User</button>
      </form>
   
    </div>
  );
}

export default DeleteUserById;
