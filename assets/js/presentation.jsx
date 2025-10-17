const { useEffect } = React;

const SlideShell = ({ variant = "", children }) => (
  <section className={`ds-slide ${variant ? `ds-slide--${variant}` : ""}`}>
    {children}
  </section>
);

const SlideEyebrow = ({ icon, children }) => (
  <div className="ds-slide__eyebrow">
    {icon && <span className="ds-eyebrow-icon" aria-hidden="true">{icon}</span>}
    <span>{children}</span>
  </div>
);

const SlideTitle = ({ children }) => (
  <h2 className="ds-slide__title">{children}</h2>
);

const SlideSubtitle = ({ children }) => (
  <p className="ds-slide__subtitle">{children}</p>
);

const SlideLead = ({ children }) => (
  <p className="ds-slide__lead">{children}</p>
);

const SlideMeta = ({ children }) => (
  <div className="ds-slide__meta">{children}</div>
);

const SlideList = ({ items }) => (
  <ul className="ds-slide__list">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const SlideQuote = ({ children }) => (
  <blockquote className="ds-slide__quote">{children}</blockquote>
);

const SlideSplit = ({ children }) => (
  <div className="ds-slide__split">{children}</div>
);

const SlideCallout = ({ tone = "", title, children }) => (
  <div className={`ds-callout ${tone ? `ds-callout--${tone}` : ""}`}>
    {title && <strong>{title}</strong>}
    <div>{children}</div>
  </div>
);

const SlideMetric = ({ tone = "", label, value, description }) => (
  <div className={`ds-metric ${tone ? `ds-metric--${tone}` : ""}`}>
    <span className="ds-figure__title">{label}</span>
    <span className="ds-figure__value">{value}</span>
    {description && <span className="ds-slide__subtitle">{description}</span>}
  </div>
);

const SlideTable = ({ rows }) => (
  <table className="ds-table">
    <thead>
      <tr>
        <th>Papel</th>
        <th>Transforma</th>
        <th>Para</th>
      </tr>
    </thead>
    <tbody>
      {rows.map(([role, from, to], index) => (
        <tr key={index}>
          <td>{role}</td>
          <td>{from}</td>
          <td>{to}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SlideFlow = ({ steps }) => (
  <div className="ds-flow">
    {steps.map(({ label, detail }, index) => (
      <div key={index} className="ds-flow__item">
        <strong>{label}</strong>
        <span>{detail}</span>
      </div>
    ))}
  </div>
);

const slides = [
  () => (
    <SlideShell variant="title">
      <SlideEyebrow icon="✨">Apresentação</SlideEyebrow>
      <SlideTitle>O Novo Código</SlideTitle>
      <SlideLead>O desenvolvimento de software vai muito além de apenas escrever código.</SlideLead>
      <SlideMeta>
        <span className="ds-chip">Memória coletiva • Especificações vivas • Equipes alinhadas</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🤔">O Problema</SlideEyebrow>
      <SlideTitle>Quanto tempo sua equipe gasta reconstruindo contexto?</SlideTitle>
      <SlideLead>"Por que decidimos fazer assim mesmo?"</SlideLead>
      <SlideCallout tone="warning" title="Sinais claros">
        Slack, Jira, PRs, documentos desatualizados, código e memórias individuais viram arqueologia de decisões.
      </SlideCallout>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">0:13 &ndash; 0:29</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🧠">Conceito</SlideEyebrow>
      <SlideTitle>Amnésia Organizacional</SlideTitle>
      <SlideLead>
        Falha da memória coletiva que leva a <strong>retrabalho</strong> e <strong>documentação desatualizada</strong>.
      </SlideLead>
      <SlideCallout>
        Transforme intenção em registro vivo, ou tudo vira ruído quando o time muda.
      </SlideCallout>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">0:29 &ndash; 0:46</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="💬">Provocação</SlideEyebrow>
      <SlideQuote>
        Inteligência sem <strong>memória</strong> é apenas <strong>aleatoriedade sofisticada</strong>.
      </SlideQuote>
      <SlideSubtitle>Construir o futuro depende de registrar o que aprendemos hoje.</SlideSubtitle>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">0:46 &ndash; 1:01</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="1️⃣">Seção 1</SlideEyebrow>
      <SlideTitle>Dívida de conhecimento</SlideTitle>
      <SlideLead>
        Informações cruciais se perdem ou envelhecem &mdash; a versão cognitiva da dívida técnica.
      </SlideLead>
      <SlideList
        items={[
          <span><strong>Quem lembra?</strong> Dependência de memória individual.</span>,
          <span><strong>Onde está?</strong> Fontes espalhadas e inconsistentes.</span>,
          <span><strong>Quando mudou?</strong> Históricos sem narrativa.</span>
        ]}
      />
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">1:01 &ndash; 1:17</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="📉">Impactos</SlideEyebrow>
      <SlideTitle>Quando a memória falha, o produto desacelera</SlideTitle>
      <SlideSplit>
        <SlideMetric label="Retrabalho" value="34%" description="Equipes refazem soluções já descobertas." tone="warning" />
        <SlideMetric label="Bugs" value="33%" description="Decisões esquecidas quebram comportamento." tone="danger" />
      </SlideSplit>
      <SlideMetric label="Desalinhamento" value="33%" description="Produto, engenharia e QA jogam telefone sem fio." tone="accent" />
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">1:17 &ndash; 1:37</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🗨️">Citação</SlideEyebrow>
      <SlideQuote>
        O código em si é uma <strong>projeção com perdas</strong> da especificação.
      </SlideQuote>
      <SlideSubtitle>Sem o contexto, o código não conta a história completa.</SlideSubtitle>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">1:37 &ndash; 1:58</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="📊">Métricas</SlideEyebrow>
      <SlideTitle>20% código • 80% comunicação estruturada</SlideTitle>
      <SlideSplit>
        <div className="ds-card ds-card--muted">
          <SlideSubtitle>Artefato final</SlideSubtitle>
          <SlideLead>
            <strong>20%</strong> do valor visível. Sem a história, vira apenas sintaxe.
          </SlideLead>
        </div>
        <div className="ds-card">
          <SlideSubtitle>Comunicação</SlideSubtitle>
          <SlideLead>
            <strong>80%</strong> está em entender, planejar, alinhar e validar continuamente.
          </SlideLead>
        </div>
      </SlideSplit>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">1:58 &ndash; 2:27</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="⚠️">Paradigma</SlideEyebrow>
      <SlideTitle>O erro com IA</SlideTitle>
      <SlideSplit>
        <div className="ds-card">
          <span className="ds-chip ds-chip--accent">Cenário errado</span>
          <SlideLead>Gerar código a partir de um prompt e descartar a intenção.</SlideLead>
          <SlideSubtitle>Perdemos o "fonte" do porquê.</SlideSubtitle>
        </div>
        <div className="ds-card ds-card--muted">
          <span className="ds-chip ds-chip--success">Cenário certo</span>
          <SlideLead>Preservar o ciclo de feedback com documentação viva.</SlideLead>
          <SlideSubtitle>Prompt + especificação viram capital intelectual.</SlideSubtitle>
        </div>
      </SlideSplit>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">2:27 &ndash; 2:46</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="2️⃣">Seção 2</SlideEyebrow>
      <SlideTitle>Além do código: a especificação</SlideTitle>
      <SlideLead>
        A nova fonte da verdade conecta engenharia, produto, jurídico e negócios.
      </SlideLead>
      <SlideList
        items={[
          <span><strong>Unifica linguagem</strong> entre áreas.</span>,
          <span><strong>Escala decisões</strong> para quem chega depois.</span>,
          <span><strong>Cria rastreabilidade</strong> auditável.</span>
        ]}
      />
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">2:46 &ndash; 3:13</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="3️⃣">Seção 3</SlideEyebrow>
      <SlideTitle>Memória aumentada</SlideTitle>
      <SlideLead>IA + BDD = documentação viva que evolui com o produto.</SlideLead>
      <SlideCallout tone="success" title="Resultado">
        Uma base de conhecimento que aprende, conversa e testa junto com a equipe.
      </SlideCallout>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">3:13 &ndash; 3:44</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🛠️">Fluxo</SlideEyebrow>
      <SlideTitle>BDD aumentado por IA</SlideTitle>
      <SlideSplit>
        <SlideFlow
          steps={[
            { label: "1. Coletar contexto", detail: "Histórico de decisões e intenções." },
            { label: "2. Alimentar IA", detail: "Assistente sugere cenários em linguagem comum." },
            { label: "3. Refino colaborativo", detail: "Times ajustam especificações e exemplos." },
            { label: "4. Automatizar testes", detail: "Documentação vira suíte viva." },
            { label: "5. Aprender continuamente", detail: "Cada entrega reforça a memória coletiva." }
          ]}
        />
        <SlideCallout title="Exemplo BDD">
          <strong>DADO</strong> um item com cupom ativo<br />
          <strong>QUANDO</strong> finalizo a compra<br />
          <strong>ENTÃO</strong> o total mostra o desconto aplicado.
        </SlideCallout>
      </SlideSplit>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">3:44 &ndash; 4:32</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🌟">Benefícios</SlideEyebrow>
      <SlideTitle>O que muda no dia a dia</SlideTitle>
      <SlideList
        items={[
          <span><strong>Alinhamento</strong> contínuo entre áreas.</span>,
          <span><strong>Menos retrabalho</strong> e mais ciclos curtos.</span>,
          <span><strong>Tempo para inovar</strong>, não para relembrar decisões.</span>
        ]}
      />
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">4:32 &ndash; 4:50</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="4️⃣">Seção 4</SlideEyebrow>
      <SlideTitle>A nova era: quem é o programador?</SlideTitle>
      <SlideTable
        rows={[
          ["Programador", "Código", "Silício"],
          ["Gerente de Produto", "Produto", "Equipes"],
          ["Legislador", "Leis", "Humanos"],
          ["Nós", "Prompts", "Modelos de IA"]
        ]}
      />
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">4:50 &ndash; 5:39</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="💡">Conclusão</SlideEyebrow>
      <SlideQuote>
        A pessoa que se <strong>comunica</strong> de forma mais <strong>eficaz</strong> é a programadora mais <strong>valiosa</strong>.
      </SlideQuote>
      <SlideSubtitle>Clareza de intenção é a habilidade crítica na era da especificação.</SlideSubtitle>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">5:39 &ndash; 5:55</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell>
      <SlideEyebrow icon="🧭">Síntese</SlideEyebrow>
      <SlideTitle>Engenharia de software como clarificação</SlideTitle>
      <SlideLead>Saímos da confusão para a estrutura quando unimos intenção, narrativa e testes.</SlideLead>
      <SlideCallout title="Da confusão à estrutura">
        <SlideList
          items={[
            <span><strong>Confusão:</strong> ruído e silos.</span>,
            <span><strong>Clarificação:</strong> intenção compartilhada.</span>,
            <span><strong>Estrutura:</strong> especificações executáveis.</span>
          ]}
        />
      </SlideCallout>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">5:55 &ndash; 6:12</span>
      </SlideMeta>
    </SlideShell>
  ),
  () => (
    <SlideShell variant="closing">
      <SlideEyebrow icon="🚀">Provocação final</SlideEyebrow>
      <SlideTitle>Se a IDE foi a ferramenta da era do código...</SlideTitle>
      <SlideLead>Qual será a ferramenta da era da especificação? Um clarificador de pensamento integrado?</SlideLead>
      <p className="ds-tagline">Vamos projetar essa memória aumentada juntos.</p>
      <SlideMeta>
        <span className="ds-chip ds-chip--accent">6:12 &ndash; 6:42</span>
      </SlideMeta>
    </SlideShell>
  )
];

const Presentation = () => {
  useEffect(() => {
    if (window.Reveal) {
      Reveal.initialize({
        hash: true,
        transition: "fade",
        controls: true,
        progress: true,
        slideNumber: true,
        width: 1280,
        height: 720,
        margin: 0.1
      });
    }
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        {slides.map((Slide, index) => (
          <Slide key={index} />
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("app");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Presentation />);
}
