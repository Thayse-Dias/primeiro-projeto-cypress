# My Cypress Automation

## 📋 Estrutura dos Testes

### 🎯 Objetivo
Automação de testes E2E para o sistema Orange HRM, cobrindo fluxos de login e atualização de dados pessoais.

### 🏗️ Arquitetura
- **Page Objects**: Seletores centralizados para fácil manutenção
- **Data-Driven**: Dados de teste externos em JSON
- **Asserções**: Validações em pontos críticos do fluxo

### 🔧 Configuração Técnica
- **Cypress**: Framework de teste E2E
- **Mochawesome**: Geração de relatórios
- **Selectors**: Estratégia por atributos e classes

### 📊 Fluxos Testados
1. ✅ Login válido + atualização de dados pessoais
2. ❌ Login com credenciais inválidas

### 📁 Estrutura de Arquivos
- `userData.json`: Credenciais e dados de teste
- `cypress.config.js`: Configuração do Cypress e reporter
- Relatórios: Gerados em `cypress/reports/`