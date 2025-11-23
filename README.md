# 🧮 API Simples de Cálculos

A **API de Cálculos Básicos** foi desenvolvida para o **Seminário II da disciplina de Engenharia de Software II**. O objetivo do projeto é expor métodos simples via requisições HTTP para realizar operações matemáticas elementares.

## 🚀 Tecnologias

* **Node.js** (Puro)
* Módulos Nativos: `http` e `url`

## 📋 Sobre o Projeto

O propósito desta API é fornecer 4 rotas REST (via método `GET`) que recebem parâmetros de consulta (Query Params) e retornam o resultado da operação em formato JSON.

**URL do projeto:**
`https://calculos-simples.onrender.com`

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
```

**Resultado Esperado**
```JSON
{
  "metodo": "soma",
  "parametros": {
    "a": 50,
    "b": 25
  },
  "resultado": 75
}
```

### 2. Subtração (`/subtracao`)
**Requisição:**
```http
GET [URL_BASE]/subtracao?a=100&b=30
```

**Resultado Esperado**
```JSON
{
  "metodo": "subtracao",
  "parametros": {
    "a": 100,
    "b": 30
  },
  "resultado": 70
}
```

### 3. Multiplicação (`/multiplicacao`)
**Requisição:**
```http
GET [URL_BASE]/multiplicacao?a=10&b=5
```

**Resultado Esperado**
```JSON
{
  "metodo": "multiplicacao",
  "parametros": {
    "a": 10,
    "b": 5
  },
  "resultado": 50
}
```

### 4. Maior Número (`/maior`)
**Requisição:**
```http
GET [URL_BASE]/maior?a=7&b=15
```

**Resultado Esperado**
```JSON
{
  "metodo": "maior",
  "parametros": {
    "a": 7,
    "b": 15
  },
  "resultado": 15
}
```

## ⚠️ Códigos de Resposta (Status Codes)

A API retorna os seguintes códigos HTTP para indicar o status da requisição:

| Status Code | Descrição |
| :--- | :--- |
| **200 OK** | A requisição foi bem-sucedida. O resultado está no corpo da resposta. |
| **400 Bad Request** | Parâmetros inválidos ou ausentes (ex: não forneceu números). |
| **404 Not Found** | A rota (endpoint) solicitada não existe. |
| **405 Method Not Allowed** | Método HTTP usado não é o `GET`. |

---

## 💻 Como Rodar Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório.
3. Execute o arquivo principal:

```bash
node api.js
```