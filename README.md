Pré-requisitos
Antes de começar, certifique-se de que você tenha o Node.js instalado em sua máquina. O Node.js inclui o npm (Node Package Manager), que usaremos para instalar e gerenciar as dependências, incluindo o Cypress. Caso não tenha é só abrir um terminal de comando e digitar o comando 

npm install -g npm

Passo 1: Obter o Projeto
Baixe o repositorio e deixe salvo em um local facil de trabalhar (exemplo: meus documentos).

Passo 2: Instalar as Dependências
Navegue até o diretório do projeto usando o terminal:

cd caminho/para/o/projeto
Em seguida, instale as dependências do projeto, incluindo o Cypress, executando o seguinte comando:


npm install


Isso instalará todas as dependências listadas no arquivo package.json, incluindo o Cypress.

Passo 3: Abrir o Cypress
Depois que as dependências forem instaladas, você pode abrir o Cypress para começar a escrever e executar os testes. Execute o seguinte comando:


npx cypress open
Uma janela do Cypress será aberta, exibindo os testes existentes no projeto.

Passo 4: Executar os Testes
Na janela do Cypress, você verá uma lista de arquivos de teste. Clique no arquivo que deseja executar. Os testes serão executados em um navegador controlado pelo Cypress.

