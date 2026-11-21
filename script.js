//Tema
const nomePortal = "Data Centers no Brasil";
const turma = 117;

const itensMenu = [
    {
        nome: "Página Atual",
        link: "https://www.youtube.com/"
    },
    {
        nome: "Mapeamento Territorial",
        link: "#mapeamento"
    },
    {
        nome: "Regiões e Impactos",
        link: "#impactos"
    }
];  
const menu = document.querySelector(".navbar-nav");

itensMenu.forEach(item => {
    menu.innerHTML += `
        <li class="nav-item">
            <a class="nav-link" href="${item.link}">
                ${item.nome}
            </a>
        </li>
    `;
});
const estados = [
    {
        nome: "São Paulo",
        regiao: "Sudeste",
        cidades: "São Paulo, Barueri, Campinas e Jundiaí",
        vantagem: "Grande infraestrutura de internet e energia.",
        impacto: "Alta demanda por energia, água e terrenos."
    },
    {
        nome: "Ceará",
        regiao: "Nordeste",
        cidades: "Fortaleza e Caucaia",
        vantagem: "Potencial de energia eólica e solar.",
        impacto: "Necessidade de infraestrutura de transmissão."
    },
    {
        nome: "Paraná",
        regiao: "Sul",
        cidades: "Curitiba",
        vantagem: "Clima mais ameno.",
        impacto: "Consumo de energia e água."
    }
];
function criarCartao(estado) {
    return `
        <div class="col-md-4 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${estado.nome}</h5>
                    <p><strong>Região:</strong> ${estado.regiao}</p>
                    <p><strong>Cidades:</strong> ${estado.cidades}</p>
                    <p><strong>Vantagem:</strong> ${estado.vantagem}</p>
                    <p><strong>Impacto:</strong> ${estado.impacto}</p>
                </div>
            </div>
        </div>
    `;
}
const conteudo = document.querySelector("main");

conteudo.innerHTML = `
    <section id="mapeamento" class="container my-5">
        <h2>Mapeamento Territorial</h2>
        <div class="row">
            ${estados.map(estado => criarCartao(estado)).join("")}
        </div>
    </section>`;  

    //Conclusão 

    const referenciasBibliograficas = [
        {
            autor: "Unifesp",
            titulo: "Data Centers acendem debate sobre água no Brasil",
            localAno: "São Paulo, 2021",
            url: "https://portal.unifesp.br/destaques/data-centers-acendem-debate-sobre-agua-brasil."
        },
        {
            autor: "Associação Brasileira de Data Centers (ABDC)",
            titulo: "Mapa Data Center",
            localAno: "São Paulo, 2021",
            url: "https://datacenter.org.br/mapa-datacenter/."
        },
        {
            autor: "Veja",
            titulo: "Corrida da IA multiplica investimentos em data centers no mundo e abre oportunidade ao Brasil",
            localAno: "São Paulo, 2021",
            url: "https://www.veja.abril.com.br/economia/corrida-da-ia-multiplica-investimentos-em-data-centers-no-mundo-e-abre-oportunidade-ao-brasil/"
        },
        {
            autor: "BRASIL. Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC).",
            titulo: "Diretrizes do Regime Especial de Tributação para Serviços de Data Center (Programa Redata).",
            localAno: "Brasília, DF: Governo Federal, 2025/2026.",
            url: "https://www.gov.br/mdic/pt-br"
        },
        {
            autor: "Ministério da Fazenda",
            titulo: "Regulamentação para Serviços de Data Center",
            localAno: "Brasília, DF: Governo Federal, 2025/2026.",
            url: "https://www.gov.br/fazenda/pt-br"
        },
        {
            autor: "Operador Nacional do Sistema Elétrico (ONS)",
            titulo: "Relatórios de Operação e Análise de Restrições de Geração (Constrained-off / Curtailment).",
            localAno: "Brasília, DF: ONS, 2025/2026.",
            url: "https://www.ons.org.br/"
        },
        {
            autor: "AGÊNCIA NACIONAL DE ÁGUAS E SANEAMENTO BÁSICO (ANA).",
            titulo: "Conjuntura dos Recursos Hídricos no Brasil.",
            localAno: "Brasília, DF: ANA",
            url: "https://www.ana.gov.br/"
        },
        {
            autor: "The Green Grid",
            titulo: "PUE™ and WUE™: Data Center Sustainability Metrics.",
            localAno: "Beaverton: The Green Grid",
            url: "https://www.thegreengrid.org/"
        },
        {
            autor: "ASHRAE",
            titulo: "ASHRAE Technical Committee 9.9: Mission Critical Facilities, Technology Spaces and Electronic Equipment.",
            localAno: "Atlanta: ASHRAE",
            url: "https://www.ashrae.org/"
        }
    ];

    function formatarItemReferencia(ref) {
        const linkHtml = ref.url ? `<a href="${ref.url}" target="_blank">${ref.url}</a>` : '';
        return `<li>${ref.autor}. <em>${ref.titulo}</em>. ${ref.localAno}. ${linkHtml}</li>`;
    }
    
    const ulLista = document.getElementById("lista-fontes");
    const campoBusca = document.getElementById("busca-fontes");

    function renderizar(lista) {
    if (!ulLista) return;

    ulLista.innerHTML = lista.length 
    ? lista.map(formatarItemReferencia).join("") 
    : "<li>Nenhuma fonte encontrada.</li>";
    }

    renderizar(referenciasBibliograficas);

    if (campoBusca) {
    campoBusca.addEventListener("input", (evento) => {
        const termo = evento.target.value.toLowerCase();

        const resultados = referenciasBibliograficas.filter(ref =>
            ref.autor.toLowerCase().includes(termo) ||
            ref.titulo.toLowerCase().includes(termo)
        ); 
    })
    }

    const PUE_PADRAO = 1.2;

    const criteriosResfriamento = [
        { nome: "PUE", resumo: "Eficiência energética; ideal próximo de 1,0 e eficiente abaixo de 1,2." },
        { nome: "WUE", resumo: "Consumo de água em L/kWh; circuitos fechados buscam próximo de 0,0 L/kWh." },
        { nome: "Resfriamento a Ar", resumo: "Eficiente até ~15 kW–20 kW por rack; maior gasto em ventiladores e chillers." },
        { nome: "Resfriamento Líquido", resumo: "Suporta 40 kW a >120 kW por rack; PUE entre 1,1 e 1,25 e reaproveitamento de calor." }
    ];

    function calcularPotenciaTotal(kwTi, pueInformado = PUE_PADRAO) {
    const ti = Number(kwTi);
    const pue = pueInformado === "" ? PUE_PADRAO : Number(pueInformado);

    if (Number.isNaN(ti) || ti <= 0 || Number.isNaN(pue) || pue < 1) {
        return null;
    }

        return (ti * pue).toFixed(2);
    }

    const montarListaCriterios = (lista) => {
    const ul = document.getElementById("lista-criterios-js");
    if (!ul) return;

    ul.innerHTML = lista
    .map((item) => `<li><strong>${item.nome}:</strong> ${item.resumo}</li>`)
    .join("");
    };

    document.addEventListener("DOMContentLoaded", () => {
    montarListaCriterios(criteriosResfriamento);

    const inputBusca = document.getElementById("campo-busca-metrica");
    const btnBuscaExata = document.getElementById("btn-buscar-exato");
    const divBusca = document.getElementById("resultado-busca");
    

    if (inputBusca && divBusca) {
    inputBusca.addEventListener("input", () => {
      const termo = inputBusca.value.toLowerCase().trim();
      const encontrados = criteriosResfriamento.filter(
        (c) => c.nome.toLowerCase().includes(termo) || c.resumo.toLowerCase().includes(termo)
      );

      if (encontrados.length === 0) {
        divBusca.innerHTML = "<p>Nenhum item encontrado.</p>";
      } else {
        divBusca.innerHTML = encontrados
          .map((item) => `<p><strong>${item.nome}:</strong> ${item.resumo}</p>`)
          .join("");
      }
    });
  }

  if (btnBuscaExata && inputBusca && divBusca) {
    btnBuscaExata.addEventListener("click", () => {
      const termo = inputBusca.value.toLowerCase().trim();
      const itemExato = criteriosResfriamento.find((c) => c.nome.toLowerCase() === termo);

      if (itemExato) {
        divBusca.innerHTML = `<p>Encontrado: <strong>${itemExato.nome}</strong> — ${itemExato.resumo}</p>`;
      } else {
        divBusca.innerHTML = "<p>Nenhuma correspondência exata pelo nome.</p>";
      }
    });
  }

  const btnCalcular = document.getElementById("btn-calcular-pue");
  const divResultadoPue = document.getElementById("resultado-pue");
  if (btnCalcular && divResultadoPue) {
    btnCalcular.addEventListener("click", () => {
      const kwVal = document.getElementById("kw-ti")?.value;
      const pueVal = document.getElementById("valor-pue")?.value;
      const total = calcularPotenciaTotal(kwVal, pueVal);

      if (total === null) {
        divResultadoPue.innerHTML = "<p>Digite valores válidos (TI > 0 e PUE >= 1).</p>";
      } else {
        divResultadoPue.innerHTML = `<p>Potência total estimada: <strong>${total} kW</strong></p>`;
      }
    });
  }

  const btnMenu = document.getElementById("btn-toggle-menu");
  const nav = document.querySelector("nav");
  if (btnMenu && nav) {
    btnMenu.addEventListener("click", () => {
      if (nav.hidden) {
        nav.hidden = false;
      } else {
        nav.hidden = true;
      }
    });
  }

  const btnResumo = document.getElementById("btn-toggle-resumo");
  const listaResumo = document.getElementById("lista-criterios-js");
  if (btnResumo && listaResumo) {
    btnResumo.addEventListener("click", () => {
      listaResumo.hidden = !listaResumo.hidden;
    });
  }
});

const eixosImpacto = [
    {
        id: "agua-evaporativa",
        categoria: "Água",
        classe: "agua",
        titulo: "Torres evaporativas consomem água potável",
        resumo: "Servidores e GPUs transformam quase toda a energia em calor, e a água evapora para dissipá-lo.",
        detalhe: "Nos sistemas tradicionais, grandes volumes de água potável absorvem o calor e o liberam na atmosfera por evaporação. Essa água não volta à bacia: ela é consumida."
    },
    {
        id: "agua-desigual",
        categoria: "Água",
        classe: "agua",
        titulo: "12% da água doce, mas mal distribuída",
        resumo: "O Brasil concentra cerca de 12% da água doce superficial do planeta.",
        detalhe: "Cerca de 80% desse volume está na bacia Amazônica, longe dos grandes centros. O Sudeste, onde ficam a maioria dos data centers, enfrenta crises hídricas recorrentes e disputa pela água entre abastecimento, agricultura e indústria."
    },
    {
        id: "agua-transparencia",
        categoria: "Transparência",
        classe: "transparencia",
        titulo: "Ninguém sabe ao certo quanta água é usada",
        resumo: "Faltam regras que obriguem a divulgar a água captada, consumida e devolvida.",
        detalhe: "Sem dados públicos e auditáveis, fica difícil fiscalizar o impacto ambiental e planejar o uso da água nos comitês de bacia hidrográfica."
    },
    {
        id: "energia-carga",
        categoria: "Energia",
        classe: "energia",
        titulo: "Uma carga do tamanho de uma cidade",
        resumo: "Um data center hyperscale de IA pode demandar de 50 MW a mais de 200 MW contínuos.",
        detalhe: "É uma carga equivalente ao consumo residencial de cidades de médio porte, funcionando 24 horas por dia, 7 dias por semana."
    },
    {
        id: "energia-rede",
        categoria: "Energia",
        classe: "energia",
        titulo: "Matriz limpa não elimina o desafio da rede",
        resumo: "O crescimento abrupto da demanda exige planejamento junto ao ONS.",
        detalhe: "Sem planejamento, há risco de sobrecarga nas redes de distribuição locais e de acionamento de termelétricas fósseis em períodos de estiagem severa."
    },
    {
        id: "clima-ilhas",
        categoria: "Clima local",
        classe: "clima",
        titulo: "Ar quente que vai para a vizinhança",
        resumo: "A exaustão contínua de ar quente altera o balanço térmico do entorno.",
        detalhe: "Isso contribui para a intensificação de ilhas de calor urbanas e afeta o conforto térmico das comunidades vizinhas."
    },
    {
        id: "solucao-liquido",
        categoria: "Soluções",
        classe: "solucao",
        titulo: "Resfriamento líquido em circuito fechado",
        resumo: "Reduz drasticamente o consumo contínuo de água (WUE próximo de zero).",
        detalhe: "Além de suportar de 40 kW a mais de 120 kW por rack, permite reaproveitar o calor. O desafio é o custo inicial, que o Programa Redata busca reduzir."
    },
    {
        id: "solucao-transparencia",
        categoria: "Soluções",
        classe: "solucao",
        titulo: "Metas públicas de PUE e WUE",
        resumo: "Divulgar indicadores permite fiscalizar e comparar empreendimentos.",
        detalhe: "O Redata vincula benefícios fiscais a energia renovável e a metas de eficiência energética e hídrica, evitando que a renúncia fiscal subsidie projetos predatórios."
    },
    {
        id: "solucao-localizacao",
        categoria: "Soluções",
        classe: "solucao",
        titulo: "Descentralizar a localização",
        resumo: "Escolher regiões com energia renovável abundante alivia o Sudeste.",
        detalhe: "Estados como o Ceará têm potencial eólico e solar, mas precisam de infraestrutura de transmissão. Cada região traz vantagens e novos impactos."
    }
];

// Estado atual do filtro
let categoriaAtiva = "Todos";

// Filtra os eixos por categoria (filter). Categoria tem valor padrão.
function filtrarEixos(lista, categoria = "Todos") {
    return lista.filter(eixo => categoria === "Todos" || eixo.categoria === categoria);
}

function criarCartaoImpacto(eixo) {
    return `
        <article class="imp-cartao imp-${eixo.classe}">
            <span class="imp-etiqueta">${eixo.categoria}</span>
            <h5>${eixo.titulo}</h5>
            <p>${eixo.resumo}</p>
            <button type="button" class="imp-botao-link" data-id="${eixo.id}"
                aria-expanded="false" aria-controls="detalhe-${eixo.id}">Saiba mais</button>
            <p class="imp-detalhe" id="detalhe-${eixo.id}" hidden>${eixo.detalhe}</p>
        </article>
    `;
}

function renderizarCartoes() {
    const caixa = document.getElementById("imp-cartoes");
    const contagem = document.getElementById("imp-contagem");
    const lista = filtrarEixos(eixosImpacto, categoriaAtiva);

    caixa.innerHTML = lista.length
        ? lista.map(criarCartaoImpacto).join("")
        : "<p>Nenhum impacto encontrado para esse filtro.</p>";
    contagem.textContent = `${lista.length} de ${eixosImpacto.length} impactos exibidos`;
}

function iniciarCartoes() {
    const caixaFiltros = document.getElementById("imp-filtros");
    const caixa = document.getElementById("imp-cartoes");
    if (!caixaFiltros || !caixa) return;

    // Categorias únicas, geradas a partir do próprio array
    const categorias = ["Todos", ...new Set(eixosImpacto.map(eixo => eixo.categoria))];

    caixaFiltros.innerHTML = categorias.map(cat => `
        <button type="button" class="imp-filtro" data-categoria="${cat}"
            aria-pressed="${cat === categoriaAtiva}">${cat}</button>
    `).join("");

    caixaFiltros.addEventListener("click", (evento) => {
        const botao = evento.target.closest("button[data-categoria]");
        if (!botao) return;
        categoriaAtiva = botao.dataset.categoria;
        caixaFiltros.querySelectorAll("button").forEach(b =>
            b.setAttribute("aria-pressed", b === botao));
        renderizarCartoes();
    });

    // Abre e fecha o "Saiba mais" de cada cartão
    caixa.addEventListener("click", (evento) => {
        const botao = evento.target.closest("button[data-id]");
        if (!botao) return;
        const detalhe = document.getElementById(`detalhe-${botao.dataset.id}`);
        const abrir = detalhe.hidden;
        detalhe.hidden = !abrir;
        botao.setAttribute("aria-expanded", abrir);
        botao.textContent = abrir ? "Mostrar menos" : "Saiba mais";
    });

    renderizarCartoes();
}

// ---------- 2) Mito ou fato? ----------
const mitosEFatos = [
    {
        mito: "O Brasil tem tanta água que data centers não são um problema.",
        fato: "A água é abundante no total, mas cerca de 80% está na Amazônia. O Sudeste, que concentra os data centers, tem crises hídricas recorrentes."
    },
    {
        mito: "Com matriz elétrica limpa, o impacto energético é zero.",
        fato: "A matriz é majoritariamente limpa, mas o crescimento abrupto da demanda pode sobrecarregar redes locais e acionar termelétricas fósseis na estiagem."
    },
    {
        mito: "Data center só consome recursos; não afeta quem mora ao redor.",
        fato: "A exaustão contínua de ar quente altera o balanço térmico do entorno e pode intensificar ilhas de calor urbanas."
    },
    {
        mito: "Já sabemos exatamente quanta água cada data center consome.",
        fato: "Ainda faltam marcos regulatórios que obriguem a divulgação pública e auditável da água captada, consumida e devolvida."
    }
];

function iniciarMitos() {
    const caixa = document.getElementById("imp-mitos");
    if (!caixa) return;

    caixa.innerHTML = mitosEFatos.map((item, i) => `
        <div class="imp-mito">
            <p><strong>Mito:</strong> ${item.mito}</p>
            <button type="button" class="imp-botao" data-indice="${i}"
                aria-expanded="false" aria-controls="fato-${i}">Revelar o fato</button>
            <p class="imp-fato" id="fato-${i}" hidden><strong>Fato:</strong> ${item.fato}</p>
        </div>
    `).join("");

    caixa.addEventListener("click", (evento) => {
        const botao = evento.target.closest("button[data-indice]");
        if (!botao) return;
        const fato = document.getElementById(`fato-${botao.dataset.indice}`);
        fato.hidden = !fato.hidden;
        botao.setAttribute("aria-expanded", !fato.hidden);
        botao.textContent = fato.hidden ? "Revelar o fato" : "Esconder o fato";
    });
}

// ---------- Ponto de entrada: só roda onde a seção existe ----------
function iniciarImpactos() {
    if (!document.getElementById("impactos-ambientais")) return;
    iniciarCartoes();
    iniciarMitos();
}
document.addEventListener("DOMContentLoaded", iniciarImpactos);

