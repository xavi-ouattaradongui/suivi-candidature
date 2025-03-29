const mongoose = require("mongoose");

const candidatureSchema = new mongoose.Schema({
  entreprise: { type: String, required: true },
  poste: { type: String, required: true },
  statut: { type: String, enum: ["En attente", "Accepté", "Refusé"], default: "En attente" },
  dateCandidature: { type: Date, default: Date.now },
  dateRelance: { type: Date, required: true },
  lienOffre: { type: String, required: false }, 
});

// Méthode statique pour trouver les candidatures à relancer
candidatureSchema.statics.findToRelance = function () {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  return this.find({ dateRelance: { $lte: sevenDaysAgo } });
};

module.exports = mongoose.model("Candidature", candidatureSchema);
