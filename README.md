# My Cypress Automation

## 🧡 Orange HRM Test Automation
Este projeto realiza testes end-to-end (E2E) no sistema Orange HRM utilizando Cypress, seguindo padrões de Page Objects e Data-Driven Testing.

📦 Pré-requisitos
- Node.js 16+ instalado

⚙️ Instalação

``` bash
npm install
```
🏃‍♂️ Execução dos Testes

Modo Desenvolvimento (Interface Gráfica)
```bash
npx cypress open
```
Modo Headless (Terminal)
```bash
npx cypress run
```
Executar Testes Específicos
```bash
# Executar apenas testes de login

npx cypress run --spec "cypress/e2e/login.spec.js"

# Executar todos os testes

npx cypress run --spec "cypress/e2e/**/*"
```
## 📋 Estrutura dos Testes

### 🎯 Objetivo
- Automação de testes E2E para o sistema Orange HRM, cobrindo fluxos críticos de:
- Autenticação e controle de acesso
- Gestão de informações pessoais
- Navegação entre módulos do sistema.

### 🏗️ Arquitetura
- **Page Objects**: Seletores centralizados para fácil manutenção
- **Data-Driven**: Dados de teste externos em JSON
- **Selectors Centralizados**: Mapeamento único para fácil manutenção
- **Asserções**: Validações em pontos críticos do fluxo

### 🚀 Tecnologias Utilizadas
- **Cypress**: Framework de teste E2E
- **JavaScript**: Linguagem de programação
- **Mochawesome**: Geração de relatórios HTML
- **JSON**: Estrutura de dados para massa de teste

### 📊 Cenários de Teste Implementados

1. ✅ Login válido + atualização de dados pessoais
    - Login com credenciais válidas
    - Navegação para "My Info"
    - Atualização de informações pessoais:
        - Nome e sobrenome
        - IDs de funcionário
        - Carteira de motorista
        - Datas (expiração e nascimento)
        - Nacionalidade e estado civil
    - Validação de salvamento bem-sucedido
    - Navegação para módulos Performance e Directory

2. ❌ Login com credenciais inválidas
    - Tentativa de login com credenciais incorretas
    - Validação de mensagem de erro`

### 🗂️ Estrutura do Projeto

cypress/
├── e2e/
│   ├── orangeHRM.spec.cy.js      # Testes principais (My Info, Performance, Directory)
│   └── login.spec.cy.js          # Testes específicos de autenticação
├── fixtures/
│   └── userData.json             # Massa de dados para testes
├── pages/                        # Page Objects
│   ├── loginPage.js
│   ├── dashboardPage.js
│   ├── menuPage.js
│   ├── myInfoPage.js
│   └── performancePage.js
├── support/
│   ├── commands.js
│   └── e2e.js
└── downloads/                    # Arquivos baixados durante testes



### 💡 Práticas de Qualidade
    - Código Limpo: Nomenclatura clara e estrutura consistente
    - Manutenibilidade: Seletores centralizados e reutilizáveis
    - Confiança: Validações em múltiplos pontos do fluxo
    - Data-Driven: Separação entre teste e dados de teste
    - Relatórios: Evidências detalhadas de execução

📄 Licença
>
Este projeto é para fins educacionais e de demonstração.
