
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const bolos = [
            
                {
        id: 1,
        nome: 'Chocolate',
        imagem: 'images/bolodechocolate.jpeg',
        preco: 35.00,
        peso: '600g',
        calorias: '350 kcal/fatia',
        contem: ['Glúten', 'Lactose'],
       
    },
            {
                id: 2,
                nome: 'Cenoura com  Chocolate',
                imagem:'images/bolodecenoura.jpg',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten']
                
            },
            //{
               // id: 3,
               // nome: 'Bolo de Abacaxi',
               // imagem: 'images/bolodeabacaxi.jpeg',
               // preco: 35.00,
              //  peso: '500g',
              //  calorias: '280 kcal/fatia',
              //  contem: ['Glúten'],
              //  indisponivel: false, 
              //  novidade: true       
           // },
            {
                id: 4,
                nome: 'Banana',
                imagem: 'images/bolodebanana.jpeg',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten']
            },
            //{
            //    id: 5,
            //    nome: 'Bolo de Café',
            //    imagem: 'images/bolodecafe.jpg',
            //    preco: 35.00,
            //    peso: '500g',
            //    calorias: '280 kcal/fatia',
            //    contem: ['Glúten'],
            //    indisponivel: false, 
            //    novidade: true       
            //},
            {
                id: 6,
                nome: 'Fubá com Goiabada',
                imagem: 'images/bolodefuba.jpeg',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten']
            },
            {
                id: 7,
                nome: 'Fubá Cremoso',
                imagem: 'images/bolodefubacremoso.jpg',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten'],
                indisponivel: false, 
                novidade: true       
            },
            {
                id: 8,
                nome: 'Maçã e Canela',
                imagem: 'images/bolodemaçaecanela.jpeg',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten'],
                indisponivel: false, 
                novidade: true       
            },
            {
                id: 9,
                nome: 'Milho',
                imagem: 'images/bolodemilho.png',
                preco: 35.00,
                peso: '500g',
                calorias: '280 kcal/fatia',
                contem: ['Glúten']
            },

           // {
           //     id: 10,
           //     nome: 'Bolo Formigueiro',
           //     imagem: 'images/boloformigueiro.jpg',
           //     preco: 35.00,
           //     peso: '500g',
           //     calorias: '280 kcal/fatia',
           //     contem: ['Glúten']
            //},
          
           
        ];
        const paes = [
        {
            id: 11,
        nome: 'Pão Caseiro Artesanal',
        imagem: 'images/paocaseiro.jpeg',
        preco: 8.50,
        peso: '300g',
        calorias: '150 kcal/unidade',
        contem: ['Glúten'],
        indisponivel: true,  
        novidade: false
    },
            {
                id: 12,
                nome: 'Pão Caseiro Integral',
                imagem: 'images/paocaseirointegral.jpeg',
                preco: 10.00,
                peso: '200g',
                calorias: '150 kcal/unidade',
                contem: ['Glúten'],
                indisponivel: true,  
                novidade: false
            }
            ];
         // Variável para controlar o último item adicionado
    let ultimoItemAdicionado = null;

        function startDrag(e) {
            if (!cartModal.classList.contains('active')) return;

            isDragging = true;
            cartModal.style.transition = 'none';
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', endDrag);
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                cartModal.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        }

        function endDrag() {
            isDragging = false;
            cartModal.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', endDrag);
            document.querySelector('.cart-modal h2').addEventListener('mousedown', startDrag);
        }


        function atualizarCarrinho() {
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            document.querySelector('.cart-count').textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
            renderizarCarrinho();
            console.log('Carrinho atualizado:', carrinho);
        }
        const todosProdutos = [...bolos, ...paes];
        function adicionarAoCarrinho(produtoId, event) {
        const produto = todosProdutos.find(p => p.id === produtoId); // Alterado para todosProdutos
        if (!produto) return;

        const itemExistente = carrinho.find(item => item.id === produtoId);
        const btn = event.currentTarget;

        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ ...produto, quantidade: 1 });
        }

        atualizarCarrinho();

        // Feedback visual
        btn.innerHTML = '✔️ Adicionado!';
        setTimeout(() => {
            btn.innerHTML = 'Adicionar ao Carrinho';
        }, 1000);
        btn.classList.add('added');
        setTimeout(() => btn.classList.remove('added'), 800);
    }


        function removerItem(id) {
            // Encontrar o índice do item no carrinho
            const itemIndex = carrinho.findIndex(item => item.id === id);

            if (itemIndex === -1) return;

            // Encontrar todos os elementos do carrinho
            const cartItems = document.querySelectorAll('.cart-item');

            // Encontrar o elemento correto usando data-attribute
            const itemElement = Array.from(cartItems).find(item => {
                return parseInt(item.dataset.id) === id;
            });

            if (itemElement) {
                // Aplicar animação primeiro
                itemElement.classList.add('removing');

                // Esperar a animação terminar antes de remover
                setTimeout(() => {
                    if (carrinho[itemIndex].quantidade > 1) {
                        carrinho[itemIndex].quantidade--;
                    } else {
                        carrinho.splice(itemIndex, 1);
                    }

                    // Atualizar localStorage e DOM
                    localStorage.setItem('carrinho', JSON.stringify(carrinho));
                    atualizarCarrinho();
                }, 500);
            }
        }
        function renderizarProdutos(produtosArray, targetId) {
    const grid = document.getElementById(targetId);
    grid.innerHTML = produtosArray.map(produto => `
        <div class="produto-card ${produto.indisponivel ? 'indisponivel' : ''}">
            ${produto.novidade ? '<div class="produto-tag novidade">Novidade!</div>' : ''}
            ${produto.indisponivel ? '<div class="produto-tag indisponivel">Indisponível</div>' : ''}
            
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            
            <div class="produto-info">
                <h3>${produto.nome}</h3>
                <div class="produto-preco">
                    R$ ${produto.preco.toFixed(2).replace('.', ',')}
                    ${produto.indisponivel ? '<span class="preco-risco"></span>' : ''}
                </div>
                
                <div class="produto-detalhes">
                    <p>${produto.peso} • ${produto.calorias}</p>
                    <p>Contém: ${produto.contem.join(', ')}</p>
                </div>
                
                <button class="btn-adicionar" 
                    onclick="${!produto.indisponivel ? `adicionarAoCarrinho(${produto.id}, event)` : ''}" 
                    ${produto.indisponivel ? 'disabled' : ''}>
                    
                    ${produto.indisponivel ? 'Em breve' : 'Adicionar ao Carrinho'}
                </button>
            </div>
        </div>
    `).join('');
}


function renderizarCarrinho() {
    const itemsContainer = document.querySelector('.cart-items');
    const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

    itemsContainer.innerHTML = carrinho.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.imagem}" alt="${item.nome}" 
                 onerror="this.src='images/fallback.jpg'">
            <div class="item-info">
                <h4>${item.nome}</h4>
                <p>${item.quantidade}x R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <button class="btn-remover" onclick="removerItem(${item.id})">
                <i class="fas fa-trash-alt"></i>
                Remover
            </button>
        </div>
    `).join('');

    document.querySelector('.cart-total').textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

        function toggleCart() {
            document.querySelector('.cart-modal').classList.toggle('active');
        }

        function enviarPedido() {
            const numero = '5511959426239';
            const mensagem = encodeURIComponent(
                `Pedido BlôBom \n\n` +
                carrinho.map(item =>
                    `➤ ${item.nome}\n` +
                    `Quantidade: ${item.quantidade}\n` +
                    `Valor: R$ ${item.preco.toFixed(2).replace('.', ',')}\n` +
                    `Subtotal: R$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n`
                ).join('\n') +
                `\n*Total: R$ ${carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0).toFixed(2).replace('.', ',')}*` +
                `\n\n*Informações Adicionais:*\n` +
                `• Todos os bolos e pães são feitos artesanalmente\n` +
                `• Prazo de entrega: 48 horas\n` +
                `• Entregamos até 2km\n` +
                `• Retirada no local: Rua Perequê,621\n` +
                `• Formas de pagamento: PIX ou dinheiro`
            );
            window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
        }
        // Inicialização
        document.addEventListener('DOMContentLoaded', () => {
            renderizarProdutos(bolos, 'bolos-grid');
            renderizarProdutos(paes, 'paes-grid');
        });
     
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
                const loadingScreen = document.querySelector('.loading-screen');
                loadingScreen.addEventListener('transitionend', () => {
                    loadingScreen.remove();
                });
            }, 3000); 
        });
