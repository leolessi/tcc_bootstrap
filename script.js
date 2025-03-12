// funções para mostrar e esconder campos de acordo com a resposta do usuário
// e para resetar o formulário ao recarregar a página

document.addEventListener('DOMContentLoaded', function () {
    function toggleConditionalInput(radioGroupName, conditionalInputId) {
        const radioGroup = document.getElementsByName(radioGroupName);
        const conditionalInput = document.getElementById(conditionalInputId);
        radioGroup.forEach(radio => {
            radio.addEventListener('change', function () {
                if (radio.value === 'sim' || radio.value === 'outro') {
                    conditionalInput.style.display = 'block';
                } else {
                    conditionalInput.style.display = 'none';
                }
            });
        });
    }

    //resetar o formulário ao recarregar a página
    document.querySelector('form').reset();

    toggleConditionalInput('tratamentoCapilar', 'tratamentoCapilarTexto');
    toggleConditionalInput('frequenciaLavar', 'frequenciaLavarTexto');
    toggleConditionalInput('quedaCapilar', 'quedaCapilarTexto');
    toggleConditionalInput('alergiaCosmetico', 'alergiaCosmeticoTexto');
    toggleConditionalInput('alergiaMedicamento', 'alergiaMedicamentoTexto');
    toggleConditionalInput('usoMedicamento', 'usoMedicamentoTexto');
    toggleConditionalInput('condicoesMedicas', 'condicoesMedicasTexto');
    toggleConditionalInput('problemasCardiacos', 'problemasCardiacosTexto');
    toggleConditionalInput('cirurgiaRecente', 'cirurgiaRecenteTexto');
});