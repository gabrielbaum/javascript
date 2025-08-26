const fases = {
  animais: [
    { nome: "Leão", img: "https://cdn.pixabay.com/photo/2015/03/26/09/54/lion-690174_960_720.jpg" },
    { nome: "Elefante", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/elephant-1867575_960_720.jpg" },
    { nome: "Girafa", img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/giraffe-2084305_960_720.jpg" },
    { nome: "Macaco", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/monkey-1867576_960_720.jpg" },
    { nome: "Zebra", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/zebra-1867577_960_720.jpg" },
    { nome: "Tigre", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/tiger-1867578_960_720.jpg" },
    { nome: "Urso", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/bear-1867579_960_720.jpg" },
    { nome: "Canguru", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/kangaroo-1867580_960_720.jpg" },
    { nome: "Coala", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/koala-1867581_960_720.jpg" },
    { nome: "Girafa", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/giraffe-1867582_960_720.jpg" },
    { nome: "Cavalo", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/horse-1867583_960_720.jpg" },
    { nome: "Cachorro", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/dog-1867584_960_720.jpg" },
    { nome: "Gato", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/cat-1867585_960_720.jpg" },
    { nome: "Coelho", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/rabbit-1867586_960_720.jpg" },
    { nome: "Ovelha", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/sheep-1867587_960_720.jpg" },
    { nome: "Porquinho", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/pig-1867588_960_720.jpg" },
    { nome: "Pato", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/duck-1867589_960_720.jpg" },
    { nome: "Galo", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/rooster-1867590_960_720.jpg" },
    { nome: "Cisne", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/swan-1867591_960_720.jpg" },
    { nome: "Águia", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/eagle-1867592_960_720.jpg" }
  ],
    objetos: [
    { nome: "Cadeira", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/chair-1867580_960_720.jpg" },
    { nome: "Mesa", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/table-1867581_960_720.jpg" },
    { nome: "Caneca", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/mug-1867577_960_720.jpg" },
    { nome: "Livro", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/book-1867578_960_720.jpg" },
    { nome: "Relógio", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/clock-1867579_960_720.jpg" },
    { nome: "Lâmpada", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/lamp-1867580_960_720.jpg" },
    { nome: "Óculos", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/glasses-1867581_960_720.jpg" },
    { nome: "Computador", img: "https://cdn.pixabay.com/photo/2017/01/06/19/15/apple-1957113_960_720.jpg" },
    { nome: "Caderno", img: "https://cdn.pixabay.com/photo/2017/02/01/17/03/notebook-2032642_960_720.jpg" },
    { nome: "Caneta", img: "https://cdn.pixabay.com/photo/2017/05/05/15/10/pen-2280192_960_720.jpg" },
    { nome: "Telefone", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/telephone-1867582_960_720.jpg" },
    { nome: "Lixeira", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/bin-1867583_960_720.jpg" },
    { nome: "Fone de Ouvido", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1867584_960_720.jpg" },
    { nome: "Câmera", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/camera-1867585_960_720.jpg" },
    { nome: "Relógio de Pulso", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/watch-1867586_960_720.jpg" },
    { nome: "Escova de Dentes", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/toothbrush-1867587_960_720.jpg" },
    { nome: "Escova de Cabelo", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/brush-1867588_960_720.jpg" },
    { nome: "Tesoura", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/scissors-1867589_960_720.jpg" },
    { nome: "Chave", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/key-1867590_960_720.jpg" },
    { nome: "Cinto", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/belt-1867591_960_720.jpg" }
  ],
  vegetais: [
    { nome: "Cenoura", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/carrot-1867580_960_720.jpg" },
    { nome: "Batata", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/potato-1867581_960_720.jpg" },
    { nome: "Alface", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/lettuce-1867582_960_720.jpg" },
    { nome: "Tomate", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/tomato-1867583_960_720.jpg" },
    { nome: "Pepino", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/cucumber-1867584_960_720.jpg" },
    { nome: "Brócolis", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/broccoli-1867585_960_720.jpg" },
    { nome: "Cebola", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/onion-1867586_960_720.jpg" },
    { nome: "Alho", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/garlic-1867587_960_720.jpg" },
    { nome: "Pimentão", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/pepper-1867588_960_720.jpg" },
    { nome: "Abobrinha", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/zucchini-1867589_960_720.jpg" },
    { nome: "Berinjela", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/eggplant-1867590_960_720.jpg" },
    { nome: "Milho", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/corn-1867591_960_720.jpg" },
    { nome: "Ervilha", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/peas-1867592_960_720.jpg" },
    { nome: "Rabanete", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/radish-1867593_960_720.jpg" },
    { nome: "Espinafre", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/spinach-1867594_960_720.jpg" },
    { nome: "Couve-flor", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/cauliflower-1867595_960_720.jpg" },
    { nome: "Abóbora", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/pumpkin-1867596_960_720.jpg" },
    { nome: "Repolho", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/cabbage-1867597_960_720.jpg" },
    { nome: "Beterraba", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/beet-1867598_960_720.jpg" },
    { nome: "Nabo", img: "https://cdn.pixabay.com/photo/2016/11/29/09/08/rutabaga-1867599_960_720.jpg" }
],
brinquedos: [
    { nome: "Urso de Pelúcia", img: "https://cdn.pixabay.com/photo/2014/12/15/13/40/teddy-569376_960_720.jpg" },
    { nome: "Boneca", img: "https://cdn.pixabay.com/photo/2017/01/31/23/28/doll-2026794_960_720.jpg" },
    { nome: "Bola", img: "https://cdn.pixabay.com/photo/2016/03/31/19/57/ball-1293151_960_720.jpg" },
    { nome: "Carrinho", img: "https://cdn.pixabay.com/photo/2013/07/13/12/42/toy-159260_960_720.png" },
    { nome: "Quebra-cabeça", img: "https://cdn.pixabay.com/photo/2014/04/05/11/38/puzzle-316718_960_720.jpg" },
    { nome: "Trenzinho", img: "https://cdn.pixabay.com/photo/2012/04/11/12/00/train-28665_960_720.jpg" },
    { nome: "Cubo Mágico", img: "https://cdn.pixabay.com/photo/2016/03/26/23/18/rubiks-cube-1283507_960_720.jpg" },
    { nome: "Ioiô", img: "https://cdn.pixabay.com/photo/2012/04/13/00/30/yoyo-31137_960_720.png" },
    { nome: "Boneco de Ação", img: "https://cdn.pixabay.com/photo/2015/01/28/23/35/action-615822_960_720.jpg" },
    { nome: "Pião", img: "https://cdn.pixabay.com/photo/2017/05/15/15/00/spinning-top-2316946_960_720.jpg" },
    { nome: "Foguete de Brinquedo", img: "https://cdn.pixabay.com/photo/2016/04/01/09/27/toy-1308560_960_720.jpg" },
    { nome: "Trem de Madeira", img: "https://cdn.pixabay.com/photo/2017/01/20/00/30/train-1996426_960_720.jpg" },
    { nome: "Kits de Montar", img: "https://cdn.pixabay.com/photo/2014/03/14/20/57/lego-287087_960_720.jpg" },
    { nome: "Carrinho de Controle Remoto", img: "https://cdn.pixabay.com/photo/2015/07/09/22/43/toy-838643_960_720.jpg" },
    { nome: "Play-Doh", img: "https://cdn.pixabay.com/photo/2014/11/21/18/11/modeling-clay-540167_960_720.jpg" },
    { nome: "Boneca Barbie", img: "https://cdn.pixabay.com/photo/2016/05/23/00/50/barbie-1413330_960_720.jpg" },
    { nome: "Carrinho de Fórmula 1", img: "https://cdn.pixabay.com/photo/2013/07/12/18/00/race-car-149138_960_720.png" },
    { nome: "Pista de Corrida", img: "https://cdn.pixabay.com/photo/2013/07/13/10/26/toy-157192_960_720.png" },
    { nome: "Toboágua de Brinquedo", img: "https://cdn.pixabay.com/photo/2016/06/09/19/34/toy-1446986_960_720.jpg" },
    { nome: "Bicicleta Infantil", img: "https://cdn.pixabay.com/photo/2016/03/31/19/57/bike-1293152_960_720.jpg" }
]
};
  
const fasesOrdem = ["animais","objetos","vegetais","brinquedos"];
let faseAtual = 0;
let rodada = 0;
let pontuacao = 0;
const rodadasPorFase = 8;

// Sons
const somVitoria = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_fa6ecb4fa9.mp3?filename=success-fanfare-trumpets-6185.mp3");
const somFase = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_b524d3efc4.mp3?filename=short-triumph-fanfare-6169.mp3");

// --- Efeitos visuais ---
function criarConfete() {
  for(let i=0;i<20;i++){
    const c = document.createElement('div');
    c.className='confete';
    c.style.left = Math.random()*window.innerWidth+'px';
    c.style.top = '0px';
    c.style.backgroundColor = ['red','blue','green','yellow','pink'][Math.floor(Math.random()*5)];
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),1000);
  }
}

// --- Lógica do jogo ---
function sortearRodada() {
  const faseNome = fasesOrdem[faseAtual];
  const itens = fases[faseNome];

  // Sorteia item correto
  const itemCorreto = itens[Math.floor(Math.random()*itens.length)];

  // Gera opções sem repetir
  let opcoes = [itemCorreto];
  while(opcoes.length < 3){
    const opcaoAleatoria = itens[Math.floor(Math.random()*itens.length)];
    if(!opcoes.includes(opcaoAleatoria)) opcoes.push(opcaoAleatoria);
  }
  opcoes.sort(()=>Math.random()-0.5);

  // Atualiza imagem sem recriar container
  const imgEl = document.getElementById("img-principal");
  imgEl.src = itemCorreto.img;
  imgEl.alt = itemCorreto.nome;
  imgEl.className = "";

  // Atualiza botões
  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";
  opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao.nome;
    btn.onclick = ()=> checarResposta(opcao, itemCorreto);
    opcoesDiv.appendChild(btn);
  });

  // Atualiza progresso
  document.getElementById("progresso").textContent = `Rodada: ${rodada+1}/${rodadasPorFase} | Fase: ${faseNome}`;
  document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
}

function checarResposta(opcao, correto){
  const imgEl = document.getElementById("img-principal");

  if(opcao === correto){
    pontuacao++;
    imgEl.className="acertou";
    criarConfete();
    somVitoria.play();
    rodada++;

    if(rodada < rodadasPorFase){
      setTimeout(sortearRodada, 700);
    } else {
      // Fim de fase
      somFase.play();
      faseAtual++;
      if(faseAtual < fasesOrdem.length){
        rodada = 0;
        setTimeout(sortearRodada, 700);
      } else {
        // Tela final
        mostrarTelaFinal();
      }
    }
  } else {
    imgEl.className="errou";
    setTimeout(()=>{
      alert("Resposta errada! Voltando ao início.");
      rodada = 0;
      pontuacao = 0;
      faseAtual = 0;
      sortearRodada();
    }, 500);
  }
}

// Tela final customizada
function mostrarTelaFinal(){
  const tela = document.createElement("div");
  tela.className = "tela-final";
  tela.innerHTML = `
    <h2>Parabéns!</h2>
    <p>Você acertou ${pontuacao} de ${rodadasPorFase * fasesOrdem.length} perguntas!</p>
    <button id="reiniciar">Jogar Novamente</button>
  `;
  document.body.appendChild(tela);
  document.getElementById("reiniciar").onclick = () => {
    rodada = 0;
    pontuacao = 0;
    faseAtual = 0;
    tela.remove();
    sortearRodada();
  };
}

// Inicializa o jogo
sortearRodada();