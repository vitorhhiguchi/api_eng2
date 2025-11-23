# 🧮 API Simples de Cálculos

A **API de Cálculos Básicos** foi desenvolvida para o **Seminário II da disciplina de Engenharia de Software II**. O objetivo do projeto é expor métodos simples via requisições HTTP para realizar operações matemáticas elementares.

## 🚀 Tecnologias

* **Node.js** (Puro)
* Módulos Nativos: `http` e `url`

## 📋 Sobre o Projeto

O propósito desta API é fornecer 4 rotas REST (via método `GET`) que recebem parâmetros de consulta (Query Params) e retornam o resultado da operação em formato JSON.

**URL Base (Exemplo):**
`https://calculos-simples.onrender.com`
*(Substitua pela sua URL de produção ou localhost)*

---

## 🔗 Endpoints Disponíveis

As requisições devem ser feitas utilizando o método **GET**.

| Rota (Endpoint) | Parâmetros (Query) | Descrição |
| :--- | :--- | :--- |
| `/soma` | `a` (num), `b` (num) | Calcula a soma dos dois números. |
| `/subtracao` | `a` (num), `b` (num) | Calcula a subtração de **a** por **b** (`a - b`). |
| `/multiplicacao`| `a` (num), `b` (num) | Calcula o produto dos dois números. |
| `/maior` | `a` (num), `b` (num) | Compara e retorna o maior dos dois números. |

---

## 📝 Exemplos de Uso

Abaixo estão os exemplos de chamadas e as respostas esperadas para cada método.

### 1. Soma (`/soma`)
**Requisição:**
```http
GET [URL_BASE]/soma?a=50&b=25