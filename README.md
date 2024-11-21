# Jao - Web Project

**Jao** é uma aplicação web simples que usa HTML, CSS, JavaScript e Bootstrap para criar uma interface de usuário com navegação dinâmica e alternância de temas. Este projeto está estruturado para ser facilmente adaptável para uso em plataformas como o **GitHub Pages**.

## Estrutura do Projeto

Abaixo está a estrutura do projeto, com uma breve explicação de cada pasta e arquivo:


### Descrição das Pastas e Arquivos

1. **`assets/`**  
   Contém todos os recursos estáticos necessários para o projeto, como imagens, CSS e JavaScript.

   - **`assets/css/`**: Arquivos CSS que definem o estilo visual do projeto. O arquivo principal de estilo é `style.css`.
   - **`assets/img/`**: Contém as imagens usadas no site, incluindo o logotipo (`logo.svg`).
   - **`assets/js/`**: Scripts JavaScript usados no projeto. Este diretório contém o código responsável por alternar entre os temas e controlar as interações do usuário com as páginas.

2. **`config/`**  
   Contém arquivos de configuração que controlam o comportamento do projeto, como rotas e definições de temas.

3. **`pages/`**  
   Contém as páginas HTML do projeto. Essas páginas são carregadas dinamicamente com JavaScript, com base nas rotas definidas.

4. **`favicon.ico`**  
   O ícone exibido na aba do navegador para o site.

5. **`index.html`**  
   A página principal do projeto, onde a estrutura inicial da aplicação é carregada. O arquivo carrega as bibliotecas necessárias e inicializa o layout da página.

## Como Funciona

O projeto é baseado em navegação dinâmica usando JavaScript. Quando você altera a rota na URL (por exemplo, `#/home`), o conteúdo da página é carregado sem recarregar toda a página, proporcionando uma experiência de navegação mais rápida e fluida.

### Como Usar

1. **Iniciar o Projeto**:  
   Abra o arquivo `index.html` em seu navegador para ver a aplicação em funcionamento.


3. **Navegar nas Páginas**:  
   O projeto usa rotas definidas no arquivo de configuração. Ao clicar em links de navegação, o conteúdo da página é alterado dinamicamente.

## Como Instalar

### 1. Clonando o Repositório

Para começar a usar este projeto, você precisa clonar o repositório para sua máquina local. Siga os passos abaixo:

1. **Abra o terminal** ou prompt de comando.
2. **Clone o repositório** utilizando o comando Git:

   ```bash
   git clone https://github.com/JaoPred0/Jao.git
   ```

### 2. Navegue para o Diretório do Projeto
1. Após clonar o repositório, vá até a pasta do projeto:

    ```bash
    cd Jao
    ```
### 3. Abra o Projeto em Seu Navegador
Este é um projeto de página estática, portanto, não há necessidade de instalar servidores ou frameworks backend. Para visualizar o projeto, basta abrir o arquivo index.html no seu navegador.
1. Navegue até o arquivo `index.html`.

2. Clique com o botão direito e selecione "Abrir com" para abrir no seu navegador.

### 4. (Opcional) Personalize o Projeto
Você pode personalizar o projeto editando os arquivos:

1. `index.html`: Página principal.

2. `assets/css/`: Para personalizar o estilo da página.

3. `assets/js/`: Scripts JavaScript para funcionalidades.

4. `pages/`: Adicione ou edite páginas HTML.

### 5. Publique no GitHub Pages
Para publicar o projeto no GitHub Pages:

1. Crie um novo repositório no GitHub (se ainda não tiver feito isso).

2. Envie os arquivos para o seu repositório no GitHub com o comando:

    ```bash
    git remote add origin <URL-do-seu-repositorio-no-GitHub>
    git push -u origin master
    ```

3. Ative o GitHub Pages em seu repositório:

    - Vá até as configurações do seu repositório no GitHub.
    - No menu lateral, selecione GitHub Pages.
    - Selecione a branch `master` ou `main` para publicar.

Depois disso, o seu site estará disponível no GitHub Pages.