const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nomeCompleto: String,
  dataNascimento: String,
  celular: String,
  email: String,
  profissao: String,
  endereco: String,
  tratamentoCapilar: String,
  tratamentoCapilarTexto: String,
  frequenciaLavar: String,
  frequenciaLavarTexto: String,
  quedaCapilar: String,
  quedaCapilarTexto: String,
  origemHereditária: String,
  tipoCabelo: String,
  condicaoCabelo: String,
  tipoOleosidade: String,
  alergiaCosmetico: String,
  alergiaCosmeticoTexto: String,
  rotinaCabelos: String,
  alergiaMedicamento: String,
  alergiaMedicamentoTexto: String,
  usoMedicamento: String,
  usoMedicamentoTexto: String,
  problemasCardiacos: String,
  problemasCardiacosTexto: String,
  condicoesMedicas: String,
  condicoesMedicasTexto: String,
  cirurgiaRecente: String,
  cirurgiaRecenteTexto: String,
  estresse: String,
  dietaRestrita: String,
  condicaoAutoImune: String,
  condicaoAutoImuneTexto: String
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;