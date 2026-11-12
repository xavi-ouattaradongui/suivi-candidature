import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../api";

function ListeCandidatures() {
  const [candidatures, setCandidatures] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setCandidatures(res.data));
  }, []);

  return (
    <main>
      <h1>Liste des Candidatures</h1>
      <ul>
        {candidatures.map((c) => (
          <li key={c._id}>
            <p>
              <strong>{c.entreprise}</strong> - {c.poste} ({c.statut})
            </p>
            {c.lienOffre && (
              <p>
                <a href={c.lienOffre} target="_blank" rel="noopener noreferrer">
                  Voir l'offre
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListeCandidatures;
