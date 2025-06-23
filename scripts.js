
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const bolos = [

  {
    id: 1,
    nome: 'Chocolate',
    imagem: 'images/bolodechocolate.png',
    preco: 25.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Glúten, Lactose'],
    permiteCobertura: true,


  },
  {
    id: 2,
    nome: 'Cenoura',
    imagem: 'images/bolodecenoura.png',
    preco: 25.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Glúten, Lactose'],
    novidade: true,
    permiteCobertura: true,

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
    imagem: 'images/bolobanana.png',
    preco: 25.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Lactose'],
    permiteCobertura: true,

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
    preco: 27.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Derivado de milho, Lactose'],
    permiteCobertura: true,
  },
  {
    id: 7,
    nome: 'Fubá',
    imagem: 'images/bolofuba.png',
    preco: 25.00,
    peso: 'aprox*700g',
    calorias: '280 kcal/fatia',
    contem: ['Derivado de milho, Lactose'],
    indisponivel: false,
    permiteCobertura: true,
  },
  {
    id: 8,
    nome: 'Paçoca',
    imagem: 'images/bolomandioca.png',
    preco: 27.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Amendoim'],
    indisponivel: false,
    novidade: true,
    permiteCobertura: true,
  },
  {
    id: 9,
    nome: 'Milho',
    imagem: 'images/bolodemilho.png',
    preco: 27.00,
    peso: '700g',
    calorias: '253 kcal/fatia',
    contem: ['Derivado de milho, Lactose'],
    permiteCobertura: true,
  },

  {
    id: 10,
    nome: 'Arroz',
    imagem: 'images/arroz.jpeg',
    preco: 30.00,
    peso: '700g',
    calorias: '280 kcal/fatia',
    contem: ['Glúten, Lactose'],
    novidade: true,
    permiteCobertura: true,
  },


];
const paes = [
  {
    id: 11,
    nome: 'Pão Caseiro  Artesanal Tradicional ',
    imagem: 'images/paocaseiro.png',
    preco: 20.00,
    peso: '700g',
    calorias: '',
    contem: ['Glúten, Lactose'],
    indisponivel: false,
    novidade: false,
    permiteCobertura: true,
    
  },
  {
    id: 12,
    nome: 'Pão Caseiro Artesanal Integral  ',
    imagem: 'images/paointegral.png',
    preco: 25.00,
    peso: '700g',
    calorias: '',
    contem: ['Glúten, Lactose'],
    indisponivel: false,
    novidade: false,
    permiteCobertura: true,
  },
    {
    id: 13,
    nome: 'Pão Caseiro Artesanal Recheado com Calabresa',
    imagem: 'images/calabresa.png',
    preco: 35.00,
    peso: '700g',
    calorias: '',
    contem: ['Glúten, Lactose'],
    indisponivel: false,
    novidade: false,
    permiteCobertura: true,
  },
    {
    id: 14,
    nome: 'Pão Caseiro Artesanal Recheado com Queijo Coalho',
    imagem: 'images/paocaseiro.png',
    preco: 35.00,
    peso: '700g',
    calorias: '',
    contem: ['Glúten,Lactose'],
    indisponivel: false,
    novidade: false,
    permiteCobertura: true,
    
  },
  
];
bolos.forEach(bolo => {
  bolo.permiteCobertura = true;
});

// Para todos os pães:
paes.forEach(pao => {
  pao.permiteCobertura = false;
});
const coberturas = [
  { id: 20, nome: 'Ganashe de Chocolate Laka', preco: 18.00, descricao: 'Ganashe de chocolate ', imagem: 'images/gchocolate.png' },
  { id: 21, nome: 'Ganashe de Chocolate Branco Laka', preco: 18.00, descricao: 'Ganashe de chocolate Branco', imagem: 'images/gcbranco.png' },
  { id: 22, nome: 'Porcelana de Leite Ninho', preco: 28.00, descricao: 'Ninho', imagem: 'images/gninho.png' },
  { id: 23, nome: 'Brigadeiro', preco: 25.00, descricao: 'brigadeiro', imagem: 'images/brigadeiro.png' },
  { id: 24, nome: 'Chocolate Intenso', preco: 15.00, descricao: 'chocolate intenso', imagem: 'images/brigadeirointenso.png' },
  { id: 25, nome: 'Brigadeiro de Paçoca', preco: 28.00, descricao: 'paçoca', imagem: 'images/gninho.png' },
];

let produtoSelecionado = null;

function selecionarParaCobertura(produtoId) {
  produtoSelecionado = todosProdutos.find(p => p.id === produtoId);

  // Renderiza as coberturas
  renderizarCoberturas();

  // Rola até a seção de coberturas
  document.getElementById('coberturas').scrollIntoView({ behavior: 'smooth' });
}
function selecionarParaCobertura(produtoId) {
  produtoSelecionado = todosProdutos.find(p => p.id === produtoId);

  // Atualiza o nome do produto selecionado
  document.getElementById('produto-selecionado-nome').textContent = produtoSelecionado.nome;

  renderizarCoberturas();
  document.getElementById('coberturas').scrollIntoView({ behavior: 'smooth' });
}
function selecionarParaCobertura(produtoId) {
  const produto = todosProdutos.find(p => p.id === produtoId);
  
  // Verificar se o produto permite cobertura
  if (!produto || !produto.permiteCobertura) {
    console.log('Cobertura não disponível para este produto');
    return;
  }
  
  // Resto do código permanece o mesmo...
  produtoSelecionado = produto;
  document.getElementById('produto-selecionado-nome').textContent = produto.nome;
  renderizarCoberturas();
  document.getElementById('coberturas').scrollIntoView({ behavior: 'smooth' });
}

function renderizarCoberturas() {
  const grid = document.getElementById('coberturas-grid');
  if (!grid || !produtoSelecionado) return;
  
  // Verificar novamente se o produto selecionado permite cobertura
  if (!produtoSelecionado.permiteCobertura) {
    grid.innerHTML = `<p class="mensagem-sem-cobertura">Coberturas não disponíveis para este produto</p>`;
    return;
  }
  
  // Renderizar coberturas normalmente...
  grid.innerHTML = coberturas.map(cobertura => `
    <div class="cobertura-card">
      <img src="${cobertura.imagem}" alt="${cobertura.nome}" class="cobertura-imagem">
      <div class="cobertura-info">
        <h3>${cobertura.nome}</h3>
        <p>${cobertura.descricao}</p>
        <div class="cobertura-preco">+ R$ ${cobertura.preco.toFixed(2).replace('.', ',')}</div>
      </div>
      <button class="btn-adicionar-cobertura" 
              onclick="adicionarComCobertura(${cobertura.id})">
        Adicionar
      </button>
    </div>
  `).join('');
}

function adicionarComCobertura(coberturaId) {
  if (!produtoSelecionado) return;

  const cobertura = coberturas.find(c => c.id === coberturaId);

  // Criar ID único baseado em timestamp
  const uniqueId = `${Date.now()}-${produtoSelecionado.id}-${cobertura.id}`;

  const itemCombinado = {
    ...produtoSelecionado,
    id: uniqueId, // ID único
    nome: `${produtoSelecionado.nome} + ${cobertura.nome}`,
    preco: produtoSelecionado.preco + cobertura.preco,
    cobertura: cobertura.nome,
    precoCobertura: cobertura.preco
  };


  // Adiciona ao carrinho
  const itemExistente = carrinho.find(item => item.id === itemCombinado.id);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({ ...itemCombinado, quantidade: 1 });
  }

  atualizarCarrinho();

  // Feedback visual
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = `✔️ ${itemCombinado.nome} adicionado!`;
  document.body.appendChild(toast);
   if (!produtoSelecionado || !produtoSelecionado.permiteCobertura) {
    console.log('Cobertura não disponível para este produto');
    return;
  }

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
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
function scrollParaNovoItem() {
  if (carrinho.length > 2) {
    const wrapper = document.querySelector('.cart-items-wrapper');
    const items = document.querySelectorAll('.cart-item');

    // Role para o último item adicionado
    if (items.length > 0) {
      const lastItem = items[items.length - 1];
      lastItem.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
}

function atualizarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  document.querySelector('.cart-count').textContent = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  renderizarCarrinho();

  // Role para o novo item após atualização
  setTimeout(scrollParaNovoItem, 100);
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
  // Converter para string para lidar com números e strings compostas
  const idString = id.toString();

  // Encontrar o índice do item no carrinho
  const itemIndex = carrinho.findIndex(item => item.id.toString() === idString);

  if (itemIndex === -1) return;

  // Encontrar todos os elementos do carrinho
  const cartItems = document.querySelectorAll('.cart-item');

  // Encontrar o elemento correto
  const itemElement = Array.from(cartItems).find(item => {
    return item.dataset.id.toString() === idString;
  });

  if (itemElement) {
    // Aplicar animação
    itemElement.classList.add('removing');

    setTimeout(() => {
      if (carrinho[itemIndex].quantidade > 1) {
        carrinho[itemIndex].quantidade--;
      } else {
        carrinho.splice(itemIndex, 1);
      }

      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      atualizarCarrinho();
    }, 500);
  }
}
function renderizarProdutos(produtosArray, targetId) {
    const grid = document.getElementById(targetId);
    grid.innerHTML = produtosArray.map(produto => `
        <div class="produto-card ${produto.indisponivel ? 'indisponivel' : ''}" data-id="${produto.id}">
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
                
                <div class="produto-botoes">
                  <button class="btn-adicionar" 
                      ${produto.indisponivel ? 'disabled' : ''}
                      onclick="adicionarAoCarrinho(${produto.id}, event)">
                      ${produto.indisponivel ? 'Em breve' : 'Adicionar'}
                  </button>
                  ${!produto.indisponivel && produto.permiteCobertura ? `
                    <button class="btn-cobertura" onclick="selecionarParaCobertura(${produto.id})">
                      Cobertura
                    </button>
                  ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}


function renderizarCarrinho() {
  const itemsContainer = document.querySelector('.cart-items');
  const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  itemsContainer.innerHTML = carrinho.map(item => `
        <div class="cart-item" data-id="${item.id}"> <!-- Mantido como string -->
            <img src="${item.imagem}" alt="${item.nome}" 
                 onerror="this.src='images/fallback.jpg'">
            <div class="item-info">
                <h4>${item.nome}</h4>
                <p>${item.quantidade}x R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
            </div>
            <button class="btn-remover" onclick="removerItem('${item.id}')"> <!-- Passar como string -->
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
function toggleCart() {
  const cartModal = document.querySelector('.cart-modal');
  const isActive = cartModal.classList.toggle('active');  

  if (isActive && carrinho.length > 0) {
    // Espere pela renderização e role
    setTimeout(() => {
      scrollParaNovoItem();
    }, 100);
  }

  // Em mobile, travar o scroll do body quando o carrinho estiver aberto
  if (window.innerWidth <= 768) {
    document.body.style.overflow = isActive ? 'hidden' : '';
  }
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
    `\n\n*Informações:*\n` +
    `• Todos os bolos e pães são feitos artesanalmente\n` +
    `• Prazo de entrega: Até 48 horas\n` +
    `• Retirada no local: Rua Perequê,621\n` +
    `• Formas de pagamento: PIX ou dinheiro`
  );
  window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}
// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderizarProdutos(bolos, 'bolos-grid');
  renderizarProdutos(paes, 'paes-grid');
  renderizarCoberturas();

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
function ajustarAlturaMobile() {
  if (window.innerWidth <= 768) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}

// Inicializar e monitorar redimensionamento
window.addEventListener('resize', ajustarAlturaMobile);
ajustarAlturaMobile();



