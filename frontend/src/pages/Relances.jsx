import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api";

function Relances() {
  const [relances, setRelances] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/relances`).then((res) => setRelances(res.data));
  }, []);

  return (
    <main>
      <h1>Candidatures à Relancer</h1>
      <ul>
        {relances.map((c) => (
          <li key={c._id}>
            {c.entreprise} - {c.poste} (Relance prévue le {new Date(c.dateRelance).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Relances;
