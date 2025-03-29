import { useState, useEffect } from "react";
import axios from "axios";

function Candidatures() {
  const [candidatures, setCandidatures] = useState([]);
  const [relances, setRelances] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    enAttente: 0,
    accepte: 0,
    refuse: 0,
  });
  const [newCandidature, setNewCandidature] = useState({
    entreprise: "",
    poste: "",
    statut: "En attente",
    dateRelance: "",
    lienOffre: "",
  });

  const fetchCandidatures = () => {
    axios.get("http://localhost:5000/api/candidatures").then((res) => {
      setCandidatures(res.data);
      calculateStats(res.data);
    });
  };

  const fetchRelances = () => {
    axios
      .get("http://localhost:5000/api/candidatures/relances")
      .then((res) => setRelances(res.data));
  };

  const calculateStats = (data) => {
    const total = data.length;
    const enAttente = data.filter((c) => c.statut === "En attente").length;
    const accepte = data.filter((c) => c.statut === "Accepté").length;
    const refuse = data.filter((c) => c.statut === "Refusé").length;
    setStats({ total, enAttente, accepte, refuse });
  };

  const handleAddCandidature = () => {
    axios
      .post("http://localhost:5000/api/candidatures", newCandidature)
      .then(() => {
        fetchCandidatures();
        setNewCandidature({
          entreprise: "",
          poste: "",
          statut: "En attente",
          dateRelance: "",
          lienOffre: "",
        });
      });
  };

  useEffect(() => {
    fetchCandidatures();
    fetchRelances();
  }, []);

  return (
    <div>
      <main>
        <h1>Suivi des Candidatures</h1>

        <h2>Ajouter une Candidature</h2>
        <input
          type="text"
          placeholder="Entreprise"
          value={newCandidature.entreprise}
          onChange={(e) =>
            setNewCandidature({ ...newCandidature, entreprise: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poste"
          value={newCandidature.poste}
          onChange={(e) =>
            setNewCandidature({ ...newCandidature, poste: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="Lien de l'offre"
          value={newCandidature.lienOffre}
          onChange={(e) =>
            setNewCandidature({ ...newCandidature, lienOffre: e.target.value })
          }
        />
        <input
          type="date"
          value={newCandidature.dateRelance}
          onChange={(e) =>
            setNewCandidature({
              ...newCandidature,
              dateRelance: e.target.value,
            })
          }
        />

        <button onClick={handleAddCandidature}>Ajouter</button>

        <h2>Liste des Candidatures</h2>
        <ul>
          {candidatures.map((c) => (
            <li key={c._id}>
              <p>
                <strong>{c.entreprise}</strong> - {c.poste} ({c.statut})
              </p>
              {c.lienOffre && (
                <p>
                  <a
                    href={c.lienOffre}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir l'offre
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Candidatures;
