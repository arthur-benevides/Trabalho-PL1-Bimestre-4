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
