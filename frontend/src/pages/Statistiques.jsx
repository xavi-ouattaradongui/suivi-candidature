import { useState, useEffect } from "react";
import axios from "axios";

function Statistiques() {
  const [stats, setStats] = useState({ total: 0, enAttente: 0, accepte: 0, refuse: 0 });

  useEffect(() => {
    axios.get("http://localhost:5000/api/candidatures").then((res) => {
      const data = res.data;
      const total = data.length;
      const enAttente = data.filter((c) => c.statut === "En attente").length;
      const accepte = data.filter((c) => c.statut === "Accepté").length;
      const refuse = data.filter((c) => c.statut === "Refusé").length;
      setStats({ total, enAttente, accepte, refuse });
    });
  }, []);

  return (
    <main>
      <h1>Statistiques</h1>
      <p>Total : {stats.total}</p>
      <p>En attente : {stats.enAttente}</p>
      <p>Acceptées : {stats.accepte}</p>
      <p>Refusées : {stats.refuse}</p>
    </main>
  );
}

export default Statistiques;
