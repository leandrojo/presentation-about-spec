# Guia de Apresentação - Pitch Spec

## Timing Sugerido (Meta: 8 minutos)

### Versão Compacta (7-8 min)
Apresentação direta, sem nested slides:
- Use apenas os slides principais (→)
- Mantenha ritmo constante
- Reserve 1 min para perguntas ao final

### Versão Flexível (8-10 min)
Apresentação adaptativa com 1-3 nested slides:
- Use ↓ apenas quando sentir interesse/dúvida da audiência
- Slides nested recomendados:
  - Slide 12 ↓ (IA como facilitador) - **essencial**
  - Slide 13 ↓ (Times pequenos) - **muito relevante**
  - Slide 6 ↓ (Telefone sem fio) - se audiência parece confusa

### Versão Completa (10-12 min)
Apresentação educativa com todos nested slides:
- Para audiências técnicas ou workshops
- Use todos os aprofundamentos
- Reserve 3-5 min para Q&A

---

## Navegação no Reveal.js

### Controles do teclado:
- **→ / Espaço** - Próximo slide horizontal
- **← / Shift+Espaço** - Slide horizontal anterior
- **↓** - Aprofundar (nested slide)
- **↑** - Voltar do nested
- **Esc / O** - Visão geral de todos slides
- **S** - Modo apresentador (timer e notas)
- **F** - Fullscreen

### Dica visual:
Os slides com nested têm o indicador:
> ↓ Texto descritivo

Use isso para decidir se quer aprofundar.

---

## Momentos-Chave para Enfatizar

### 1. Introdução (0:13-0:29)
**Tom:** Empático e conectivo

**Pergunta central:**
> "Quanto tempo sua equipe gasta **reconstruindo contexto**?"

**Liste devagar (com pausas):**
> Slack, Jira, PRs antigos, documentos desatualizados, código, pessoas que já saíram...

**Pause na frase-chave:**
> "**Arqueologia de decisões** em vez de criar o futuro."

**Olhe para a audiência** - deixe a frase ressoar. Muitos vão acenar com a cabeça reconhecendo o problema.

---

### 2. Citação - Projeção com Perdas (1:37-1:58)
**Tom:** Reflexivo

**Enfatize:**
> "A cada passo, perdemos um pouco da **intenção**. Falta uma **memória viva**."

**Gesto:** Pode usar as mãos mostrando etapas (conversa → doc → código)

---

### 3. Receita de Bolo (3:25-4:14)
**Tom:** Acessível e prático

**Analogia central - fale devagar:**
> "BDD é nossa **Linguagem Universal** - pensem nisso como uma receita"

**Exemplo DADO-QUANDO-ENTÃO:**
- Leia com clareza
- Aponte para o slide
- "Todos conseguem ler e entender"

**Decisão de nested:** Se audiência parecer confusa sobre BDD, use ↓ (Slide 11)

---

### 4. IA como Facilitador (3:44-4:14)
**Tom:** Empoderador

**Mensagem-chave (fale com convicção):**
> "A tecnologia nos libera da tarefa de 'lembrar' para focarmos em 'pensar' e 'criar juntos'"

**Recomendação:** **SEMPRE** desça para o nested (Slide 12 ↓) aqui - é crucial

---

### 5. Times Pequenos (4:32)
**Tom:** Pragmático e empolgante

**Enfatize:**
> "Pequenos times com grande potencial"
> "Sem precisar escalar linearmente a equipe para escalar o produto"

**Decisão de nested:** Se audiência são gestores/founders, **definitivamente** use ↓ (Slide 13)

---

### 6. Convite Final (6:12)
**Tom:** Inspirador mas não forçado

**Pause antes da última frase:**
> "E queremos construir isso **com você**."

**Olhe para a audiência** - convide interação.

---

## Linguagem Corporal

### Abertura (Slides 1-3)
- Postura aberta
- Contato visual distribuído
- Gestos moderados

### Problema (Slides 4-7)
- Incline-se levemente para frente
- Expressão empática
- Gestos que mostram "perda" ou "desconexão"

### Solução (Slides 11-13)
- Energia aumenta sutilmente
- Gestos que "constroem" ou "conectam"
- Sorria naturalmente

### Fechamento (Slides 16-17)
- Volte à postura aberta
- Contato visual forte
- Gesto de "convite" na última frase

---

## Adaptação por Audiência

### Para Equipe Técnica (Devs, QA)
**Enfatize:**
- **Slide 6 nested (A Caça ao Contexto)** - eles vão se identificar MUITO
- Slide 7 (Projeção com perdas) - eles vão se identificar
- Slide 9 nested (Exemplo IA errada vs certa)
- Slide 11 nested (Contexto histórico do BDD)
- Slide 12 nested (Papel da IA)

**Recomendação:** SEMPRE mostre o Slide 6 ↓ para audiência técnica. É o exemplo que mais ressoa.

**Linguagem:**
- Pode usar termos técnicos com confiança
- BDD, testes automatizados, documentação viva
- Fale de "código-fonte" vs "binário"
- Mencione "PR archaeology" ou "git blame driven development"

---

### Para Gestores/Founders
**Enfatize:**
- Slide 2 (Arqueologia de decisões - desperdício de talento e tempo)
- **Slide 6 nested (A Caça ao Contexto) - quantifique: "3 horas por pessoa, toda vez"**
- **Slide 13 nested (Times pequenos) - CRUCIAL**
- Benefícios de negócio: menos retrabalho, mais inovação

**Recomendação:** Mostre o Slide 6 ↓ e traduza em custo: "Se 10 pessoas fazem isso por mês, são 30 horas = quase 1 semana de trabalho desperdiçada só reconstruindo contexto"

**Linguagem:**
- Foque em impacto nos negócios
- "Equipes enxutas", "escalar sem escalar o time"
- ROI implícito: menos bugs, menos retrabalho, **tempo recuperado**
- "Onboarding mais rápido" (novo membro não precisa fazer arqueologia)

---

### Para Audiência Mista
**Enfatize:**
- Slide 12 nested (IA como facilitador) - todos entendem
- Slide 13 nested (Times pequenos) - relevante para todos
- Use a analogia da Receita de Bolo forte
- Evite jargão técnico excessivo

**Linguagem:**
- Balanceada: nem muito técnica, nem muito simplória
- Use as analogias: "Receita", "Telefone sem fio", "Constituição"

---

## Perguntas Frequentes Esperadas

### 1. "Como isso funciona com nosso processo atual?"
**Resposta sugerida:**
> "BDD se integra naturalmente. Vocês já têm conversas sobre requisitos - BDD apenas estrutura essas conversas em uma linguagem que vira teste automatizado. A IA ajuda a escrever e manter esses cenários."

---

### 2. "Quanto tempo leva para implementar?"
**Resposta sugerida:**
> "Começar é rápido - uma feature já pode ter cenários BDD em dias. O valor composto vem com o tempo: cada cenário é memória que nunca se perde."

---

### 3. "A IA não vai substituir nossa equipe?"
**Resposta sugerida (remeta ao Slide 12):**
> "Ao contrário - a IA potencializa a equipe. Ela faz o trabalho mecânico de lembrar regras. Vocês focam no que humanos fazem melhor: pensar, criar, decidir. [Se não mostrou, mostre o Slide 12 nested]"

---

### 4. "Isso serve para projetos legados?"
**Resposta sugerida:**
> "Especialmente para projetos legados! A IA pode ler código existente e sugerir especificações. É como criar a 'memória' que falta no sistema."

---

### 5. "Qual o custo?"
**Resposta contextual:**
- Se for produto: "Queremos discutir como isso se encaixa na sua operação primeiro"
- Se for interno: "O investimento maior é cultural, não financeiro"

---

## Checklist Pré-Apresentação

### Técnico
- [ ] Testar apresentação no computador/projetor
- [ ] Verificar resolução (1920x1080 configurada)
- [ ] Testar navegação → e ↓
- [ ] Modo apresentador funcionando (tecla S)
- [ ] Backup: PDF dos slides principais

### Conteúdo
- [ ] Revisar script uma vez
- [ ] Praticar transições para nested slides
- [ ] Definir quais nested vai usar (baseado na audiência)
- [ ] Tempo a apresentação (meta: 7-8 min sem nested)

### Logística
- [ ] Água por perto
- [ ] Timer/relógio visível
- [ ] Espaço para gesticular
- [ ] Iluminação adequada

---

## Pós-Apresentação

### Próximos Passos com a Audiência
1. **Perguntas e respostas** (3-5 min)
2. **Demo opcional** (se houver protótipo/ferramenta)
3. **Deixar contato** para discussões mais profundas
4. **Compartilhar slides** (considerar criar versão PDF)

### Auto-avaliação
- O que funcionou bem?
- Quais nested slides foram mais úteis?
- Timing funcionou?
- Perguntas recebidas (preparar para próxima vez)

---

## Publicação no GitHub Pages

1. Garanta que o branch `main` contenha a versão atualizada do site (arquivos `index.html`, `roteiro.html`, `view-spec.md`, etc.).
2. No GitHub, acesse **Settings → Pages**, escolha **Source: GitHub Actions** e salve.
3. O workflow em `.github/workflows/gh-pages.yml` roda a cada push no `main` e publica automaticamente o conteúdo estático.
4. A primeira execução leva alguns minutos; acompanhe em **Actions**. O link final aparece em **Deployments → GitHub Pages**.

Para reprocessar manualmente, vá em **Actions → Deploy site to GitHub Pages → Run workflow** e confirme a execução com o branch desejado.

---

## Mensagem Final

**Lembre-se:**
Você não está vendendo uma ferramenta.
Você está mostrando uma **nova forma de trabalhar**.

O objetivo é:
1. ✅ Fazer as pessoas **se identificarem** com o problema
2. ✅ Mostrar que há uma **solução prática**
3. ✅ **Convidar** para construir juntos

A apresentação já está sólida. Agora é sobre **conexão humana**.

Boa sorte! 🚀
