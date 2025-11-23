const http = require('http');
const url = require('url');

// Função para manipular as requisições
const requestHandler = (req, res) => {
    // Define o cabeçalho da resposta
    res.setHeader('Content-Type', 'application/json');

    // Faz o parse da URL e extrai o caminho (pathname) e os parâmetros de consulta (query)
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Garante que o método HTTP é GET (para simplicidade)
    if (req.method !== 'GET') {
        res.writeHead(405);
        res.end(JSON.stringify({
            erro: 'Método não permitido. Use GET.'
        }));
        return;
    }

    let resultado = {};
    const a = parseFloat(query.a);
    const b = parseFloat(query.b);

    switch (path) {
        // Método 1: Soma (e.g., /soma?a=10&b=5)
        case '/soma':
            if (!isNaN(a) && !isNaN(b)) {
                resultado = {
                    metodo: 'soma',
                    parametros: { a: a, b: b },
                    resultado: a + b
                };
                res.writeHead(200);
            } else {
                resultado = { erro: 'Parâmetros inválidos. Use /soma?a=numero1&b=numero2' };
                res.writeHead(400);
            }
            break;

        // Método 2: Subtração (e.g., /subtracao?a=10&b=5)
        case '/subtracao':
            if (!isNaN(a) && !isNaN(b)) {
                resultado = {
                    metodo: 'subtracao',
                    parametros: { a: a, b: b },
                    resultado: a - b
                };
                res.writeHead(200);
            } else {
                resultado = { erro: 'Parâmetros inválidos. Use /subtracao?a=numero1&b=numero2' };
                res.writeHead(400);
            }
            break;

        // Método 3: Multiplicação (e.g., /multiplicacao?a=10&b=5)
        case '/multiplicacao':
            if (!isNaN(a) && !isNaN(b)) {
                resultado = {
                    metodo: 'multiplicacao',
                    parametros: { a: a, b: b },
                    resultado: a * b
                };
                res.writeHead(200);
            } else {
                resultado = { erro: 'Parâmetros inválidos. Use /multiplicacao?a=numero1&b=numero2' };
                res.writeHead(400);
            }
            break;

        // Método 4: Comparação (Retorna o maior) (e.g., /maior?a=10&b=5)
        case '/maior':
            if (!isNaN(a) && !isNaN(b)) {
                resultado = {
                    metodo: 'maior',
                    parametros: { a: a, b: b },
                    resultado: Math.max(a, b)
                };
                res.writeHead(200);
            } else {
                resultado = { erro: 'Parâmetros inválidos. Use /maior?a=numero1&b=numero2' };
                res.writeHead(400);
            }
            break;

        default:
            // Rota não encontrada
            resultado = {
                erro: 'Rota não encontrada. Métodos disponíveis: /soma, /subtracao, /multiplicacao, /maior'
            };
            res.writeHead(404);
            break;
    }

    // Envia a resposta como JSON
    res.end(JSON.stringify(resultado));
};

// Cria o servidor
const server = http.createServer(requestHandler);

// Define a porta em que o servidor irá rodar
const PORT = 3000;

// Inicia o servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Para testar localmente: http://localhost:${PORT}/soma?a=5&b=3`);
});