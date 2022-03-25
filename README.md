# provaSerasa
    Esse projeto tem por objetivo fazer login na plataforma Amazon

# Arquivos instalados para o uso do cucumber

    Foi instalado com o comando "npm install cypress-cucumber-preprocessor" para fazer a leitura dos arquivos feature.
    Trabalhamos com 2 branch


# Estrutura do Projeto

    Na pasta Integration colocamos uma subpasta com o nome de feature e dentro um arquivo.feature que é o nosso BDD.

    Dentro da pasta support criamos uma subpasta com o nome de step_definitions e dentro um arquivo chamado login.js
    nesse arquivo se encontra os nosso metodos.
    
    Na pasta cypress.json passamos os nossos dados de acesso como é um dado sensivel não podemos deixar a mostra, ali também podemos passar nossos ambientes de testes e urls.

# Comando para execução

    Abrindo o terminal digitar o comando "npx cypress open" após abrir o chrome o com testes clicar em cima login.feature para iniciar os testes.
