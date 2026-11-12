# Suivi de candidatures

Application web pour **organiser sa recherche de stage ou d'emploi** : on enregistre chaque candidature, on voit d'un coup d'œil celles qu'il faut relancer, et on suit ses statistiques.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)

## Fonctionnalités

- **Ajouter une candidature** : entreprise, poste, statut, date de relance, lien de l'offre
- **Liste des candidatures** avec leur statut (En attente, Accepté, Refusé)
- **Relances** : les candidatures dont la date de relance est dépassée depuis plus de 7 jours
- **Statistiques** sur l'ensemble des candidatures

## Stack

| Partie | Technologies |
|---|---|
| Frontend | React 19, Vite, React Router, Axios |
| Backend | Node.js, Express, Mongoose |
| Base de données | MongoDB |

## Installation

Prérequis : Node.js 18+ et MongoDB (en local ou sur MongoDB Atlas).

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env    # renseigner MONGO_URI
npm run dev             # http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env    # adresse de l'API, par défaut http://localhost:5000/api/candidatures
npm run dev             # http://localhost:5173
```

## API

Base : `/api/candidatures`

| Méthode | Route | Description |
|---|---|---|
| `GET` | `/` | Toutes les candidatures |
| `POST` | `/` | Ajouter une candidature |
| `GET` | `/relances` | Candidatures à relancer |
| `PUT` | `/:id` | Modifier une candidature |
| `DELETE` | `/:id` | Supprimer une candidature |

## Structure

```
├── backend/
│   ├── models/Candidature.js     schéma Mongoose
│   ├── routes/candidatures.js    routes de l'API
│   └── server.js                 serveur Express
└── frontend/
    └── src/
        ├── api.js                adresse de l'API
        ├── components/Sidebar.jsx
        └── pages/                Candidatures, Liste, Relances, Statistiques
```

## Auteur

**OUATTARA Dongui** — [@xavi-ouattaradongui](https://github.com/xavi-ouattaradongui)
