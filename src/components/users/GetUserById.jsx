import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function GetUserById() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [inputId, setInputId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/users/${id}`)
        .then(res => setUser(res.data))
        .catch(err => setUser(null));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputId.trim()) {
      navigate(`/users/${inputId}`);
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
        <button type="submit">Get User</button>
      </form>
 { user? (
        <>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <p><b>${user.phone}</b></p>
          
        </>
  ) : (<p>loading</p>)
}    
    </div>
  );
}

export default GetUserById;
