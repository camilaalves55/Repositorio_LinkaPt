document.addEventListener('DOMContentLoaded', async () => {
    const clienteId = localStorage.getItem('id_cliente');
    const urlParams = new URLSearchParams(window.location.search);
<<<<<<< HEAD
    const empresaId = urlParams.get('id_empresa'); 
    if (!clienteId || !empresaId) {
        console.error('ID do cliente ou da empresa não encontrado. Por favor, faça login novamente.');
=======
    const empresaId = urlParams.get('empresa_id');
    const petId = urlParams.get('id');

    if (!clienteId || !empresaId || !petId) {
        console.error('ID do cliente, da empresa ou do pet não encontrado. Por favor, faça login novamente.');
>>>>>>> 2123e1b (Página de Consultas Agendadas parte 1)
        return;
    }

    try {
<<<<<<< HEAD
        const response = await fetch(`http://localhost:3005/api/store/get/pets?cliente_id=${clienteId}`, {
=======
        const response = await fetch(`http://localhost:3005/api/get/servicos?empresa_id=${empresaId}`, {
>>>>>>> 2123e1b (Página de Consultas Agendadas parte 1)
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
<<<<<<< HEAD

        if (result.success) {
            const petsLista = document.querySelector('.pets_lista');
            petsLista.innerHTML = ''; 

            result.data.forEach(pet => {
                const card = document.createElement('div');
                card.className = 'bloco_card';

                const infoDiv = document.createElement('div');
                infoDiv.className = 'info'; 

                const info2Div = document.createElement('div');
                info2Div.className = 'info2'; 

                const h2 = document.createElement('h2');
                h2.textContent = pet.nome_pet; 

                const p_raca = document.createElement('p');
                p_raca.innerHTML = `<span class="titulo">Raça:</span> ${pet.raca}`; 

                const p_idade = document.createElement('p');
                p_idade.innerHTML = `<span class="titulo">Idade:</span> ${pet.idade}`; 

                const img = document.createElement('img');
                img.src = `http://localhost:3005/upload/${pet.imagem}`;
                img.classList.add('imagens'); 

                const p_descricao = document.createElement('p');
                p_descricao.innerHTML = `<span class="titulo">Descrição:</span> ${pet.descricao}`; 

                const p_especie = document.createElement('p');
                p_especie.innerHTML = `<span class="titulo">Animal:</span> ${pet.especie}`; 

                const dataNascimento = new Date(pet.data_nascimento);
                const formattedDate = `${String(dataNascimento.getDate()).padStart(2, '0')}/${String(dataNascimento.getMonth() + 1).padStart(2, '0')}/${dataNascimento.getFullYear()}`;

                const p_data = document.createElement('p');
                p_data.innerHTML = `<span class="titulo">Nascimento:</span> ${formattedDate}`;

                card.addEventListener('click', () => {
                    window.location.href = `detalhes_pet.html?id=${pet.id}&empresa_id=${empresaId}`;
                });
                

                infoDiv.appendChild(h2);
                infoDiv.appendChild(p_raca);
                infoDiv.appendChild(p_idade);
                info2Div.appendChild(img);
                info2Div.appendChild(p_descricao);
                info2Div.appendChild(p_especie);
                info2Div.appendChild(p_data);

                card.appendChild(infoDiv);
                card.appendChild(info2Div);

                petsLista.appendChild(card);
            });
        } else {
            console.log("Erro", result.message);
        }
    } catch (error) {
        console.error("Erro ao buscar pets:", error);
    }
});
=======
        console.log(result); 


        if (result.success) {
            const servicosDiv = document.getElementById('servicos');
            servicosDiv.innerHTML = ''; 

            result.data.forEach(servico => {
                const servicoDiv = document.createElement('div');
                servicoDiv.className = 'servico_item';

                const servico1Div = document.createElement('div');
                servico1Div.className = 'servico_info';

                const servico2Div = document.createElement('div');
                servico2Div.className = 'servico_botao';

                const nomeServico = document.createElement('h3');
                nomeServico.textContent = `${servico.servico}`;

                const precoServico = document.createElement('p');
                precoServico.innerHTML = `<span class="titulo">Preço:</span> ${servico.preco}`;


                const button = document.createElement('button');
                button.textContent = 'Continuar';
                button.addEventListener('click', () => {
                    window.location.href = `agendar.html?empresa_id=${empresaId}&pet_id=${petId}&servico_id=${servico.servico_id}`;
                });

                servico1Div.appendChild(nomeServico);
                servico1Div.appendChild(precoServico);
                servico2Div.appendChild(button);

                servicoDiv.appendChild(servico1Div);
                servicoDiv.appendChild(servico2Div);

                servicosDiv.appendChild(servicoDiv);
            });
        } else {
            console.log("Erro ao buscar serviços:", result.message);
        }
    } catch (error) {
        console.error("Erro ao buscar serviços:", error);
    }
});
>>>>>>> 2123e1b (Página de Consultas Agendadas parte 1)
