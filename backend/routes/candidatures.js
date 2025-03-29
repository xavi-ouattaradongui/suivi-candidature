const express = require("express");
const Candidature = require("../models/Candidature");

const router = express.Router();

//  Ajouter une candidature
router.post("/", async (req, res) => {
  try {
    const candidature = new Candidature(req.body);
    await candidature.save();
    res.status(201).json(candidature);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

//  Obtenir toutes les candidatures
router.get("/", async (req, res) => {
  try {
    const candidatures = await Candidature.find();
    res.json(candidatures);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

//  Obtenir les candidatures à relancer
router.get("/relances", async (req, res) => {
  try {
    const candidatures = await Candidature.findToRelance();
    res.json(candidatures);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

//  Mettre à jour une candidature
router.put("/:id", async (req, res) => {
  try {
    const candidature = await Candidature.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(candidature);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

//  Supprimer une candidature
router.delete("/:id", async (req, res) => {
  try {
    await Candidature.findByIdAndDelete(req.params.id);
    res.json({ message: "Candidature supprimée" });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
