function gerarChecklist() {
    document.getElementById('checklistContainer').innerHTML = '';
  
    const numeroSalas = document.getElementById('numeroSalas').value;
  
    for (let i = 1; i <= numeroSalas; i++) {
      const checkboxId = `Sala ${i}`;
      const label = document.createElement('label');
      label.innerHTML = `<input type="checkbox" id="${checkboxId}" onclick="exibirInputNumeroSerie('${checkboxId}')"> Sala ${i}`;
      document.getElementById('checklistContainer').appendChild(label);
    }
  }
  
  function exibirInputNumeroSerie(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
  
    if (checkbox.checked) {
      const numeroSerieInput = document.createElement('input');
      numeroSerieInput.type = 'text';
      numeroSerieInput.placeholder = 'Número de Série da Antena';
      numeroSerieInput.name = `Numero de Série Antena ${checkboxId}`;
      numeroSerieInput.id = `numeroSerie${checkboxId}`;
  
      const label = document.getElementById(checkboxId).closest('label');
      label.appendChild(numeroSerieInput);
    } else {
      const numeroSerieInput = document.getElementById(`numeroSerie${checkboxId}`);
      if (numeroSerieInput) {
        numeroSerieInput.remove();
      }
    }
  }
  
  function enviarChecklist() {
    const numeroSalas = document.getElementById('numeroSalas').value;
  
    let peloMenosUmNumeroSerie = false;
    for (let i = 1; i <= numeroSalas; i++) {
      const checkbox = document.getElementById(`sala${i}`);
      if (checkbox.checked) {
        const numeroSerieInput = document.getElementById(`numeroSerie${checkbox.id}`);
        if (numeroSerieInput && numeroSerieInput.value.trim() !== '') {
          peloMenosUmNumeroSerie = true;
          break;
        }
      }
    }

    if (peloMenosUmNumeroSerie) {
      alert('Checklist enviado com sucesso!');
      // Adicione aqui o código para enviar a checklist
    } else {
      alert('Por favor, insira pelo menos um número de série antes de enviar a checklist.');
    }
  }
  