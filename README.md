# Desafio Grupo Citar

Olá, para executar o projeto basta clonar o repositório, entrar no diretório clonado e instalar as dependências do node.

# Instalação

    git clone https://github.com/OsmarFilho/desafio_front_end_grupo_citar.git
    cd desafio_front_end_grupo_citar
    npm install
    npm serve

# Configuração de Acesso

Para interagir com repositórios é necessário autenticar as requisições, então, insira o nome de usuário e senha do GitHub, e tambem usuário(owner) e um repositorio(repo) no arquivo .env do projeto antes de executa-lo.

# Configuração para testes

Para rodar os testes basta preencher as variavelis locais (username, password, owner, repo, id, issue, body), que estão descritas no testeIssue.js, e apos o preenchimento das mesmas, rodar o comando "npm test".