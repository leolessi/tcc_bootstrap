const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Adicionado para habilitar CORS
const app = express();
const port = 3000;

// Conecte ao MongoDB
mongoose.connect('mongodb+srv://ja:n5hRqxtbpP9CDQBu@ja-banco.q4zvt.mongodb.net/?retryWrites=true&w=majority&appName=JA-banco', {
    
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
});

// Defina o esquema do Mongoose para o cliente
const clienteSchema = new mongoose.Schema({
    nomeCompleto: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    celular: { type: String, required: true },
    email: { type: String, required: true },
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

// Middleware
app.use(cors()); // Habilita CORS
app.use(express.json()); // Para receber dados no formato JSON

// Rota para receber os dados do formulário
app.post('/rota', async (req, res) => {
    console.log('Dados recebidos:', req.body); // Log para depuração
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        console.log('Cliente salvo com sucesso:', cliente); // Log para depuração
        res.status(200).send('Dados salvos com sucesso!');
    } catch (err) {
        console.error('Erro ao salvar no MongoDB:', err); // Log para depuração
        res.status(500).send(err.message);
    }
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`App rodando na porta ${port}..`);
});