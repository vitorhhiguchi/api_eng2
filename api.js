const http = require('http');
const url = require('url');

const isNumeroValido = (valor) => {
    if (!valor || (typeof valor === 'string' && valor.trim() === '')) return false;
    const numero = Number(valor);
    return !isNaN(numero);
};

const validarParametros = (query) => {
    const chavesPermitidas = ['a', 'b'];
    const chavesRecebidas = Object.keys(query);

    const temChaveEstranha = chavesRecebidas.some(chave => !chavesPermitidas.includes(chave));
    if (temChaveEstranha) {
        return { valido: false, erro: 'Parâmetros desconhecidos detectados. Envie apenas "a" e "b".' };
    }

    if (Array.isArray(query.a) || Array.isArray(query.b)) {
        return { valido: false, erro: 'Parâmetros duplicados não são permitidos.' };
    }

    return { valido: true };
};

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Garante que o método é GET
    if (req.method !== 'GET') {
        res.writeHead(405);
        res.end(JSON.stringify({ erro: 'Método não permitido. Use GET.' }));
        return;
    }

    if (path === '/') {
        const documentacao = {
          "mensagem": "API de Cálculos Básicos",
          "endpoints": [
            {
              "rota": "/soma",
              "metodo": "GET",
              "parametros": "a (número), b (número)",
              "exemplo": "/soma?a=10&b=5"
            },
            {
              "rota": "/subtracao",
              "metodo": "GET",
              "parametros": "a (número), b (número)",
              "exemplo": "/subtracao?a=10&b=5"
            },
            {
              "rota": "/multiplicacao",
              "metodo": "GET",
              "parametros": "a (número), b (número)",
              "exemplo": "/multiplicacao?a=10&b=5"
            },
            {
              "rota": "/maior",
              "metodo": "GET",
              "parametros": "a (número), b (número)",
              "exemplo": "/maior?a=10&b=5"
            }
          ]
        };
        
        res.writeHead(200);
        res.end(JSON.stringify(documentacao));
        return; 
    }

    const validacao = validarParametros(query);
    if (!validacao.valido) {
        res.writeHead(400);
        res.end(JSON.stringify({ erro: validacao.erro }));
        return;
    }

    const a = Number(query.a);
    const b = Number(query.b);

    if (!isNumeroValido(query.a) || !isNumeroValido(query.b)) {
        res.writeHead(400);
        res.end(JSON.stringify({ erro: 'Parâmetros inválidos. Certifique-se de enviar apenas números.' }));
        return;
    }

    let resultado = {};

    switch (path) {
        case '/soma':
            resultado = { metodo: 'soma', parametros: { a, b }, resultado: a + b };
            res.writeHead(200);
            break;

        case '/subtracao':
            resultado = { metodo: 'subtracao', parametros: { a, b }, resultado: a - b };
            res.writeHead(200);
            break;

        case '/multiplicacao':
            resultado = { metodo: 'multiplicacao', parametros: { a, b }, resultado: a * b };
            res.writeHead(200);
            break;

        case '/maior':
            resultado = { metodo: 'maior', parametros: { a, b }, resultado: Math.max(a, b) };
            res.writeHead(200);
            break;

        default:
            resultado = { erro: 'Rota não encontrada. Acesse a raiz (/) para ver a documentação.' };
            res.writeHead(404);
            break;
    }

    res.end(JSON.stringify(resultado));
};

const server = http.createServer(requestHandler);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Teste a documentação em: http://localhost:${PORT}/`);
});