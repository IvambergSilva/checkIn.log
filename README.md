# CheckIn.log - Frontend

O CheckIn.log é uma aplicação para **gerenciamento de participantes em eventos presenciais**.

Esta ferramenta permite que o responsável pelo evento cadastre-o e crie uma página pública para inscrições.

Com este frontend, os organizadores podem visualizar os participantes dos eventos, podendo obter detalhes como tempo de inscrição, check-in e email.

## Apresentação

### Confira o deploy da aplicação <a href="https://check-in-log.vercel.app/">aqui</a>

<img src="/src/assets/images/exemplo3-CIL.gif" alt="Exemplo do projeto CheckIn Log"/><br>

Segue abaixo uma demonstração estática da aplicação. Irá mostrar 10 participantes por página

<img src="/src/assets/images/exemplo1-CIL.png" alt="Exemplo do projeto CheckIn Log"/><br>

Aqui apresenta a funcionalidade de filtro, buscando pelo nome do participante. Lembrando que caso o(a) participante tenha cadastrado o nome social, irá ter ele como o principal, a fim de atender a inclusão.

<img src="/src/assets/images/exemplo2-CIL.png" alt="Exemplo do projeto CheckIn Log"/><br>

<hr>

## Requisitos

### Requisitos funcionais

- [x] O organizador pode visualizar a lista de participantes; 
- [x] O organizador pode filtrar a lista, pesquisando pelo nome do participante; 

### Requisitos para implementação futura

- [x] O participante poderá visualizar seu crachá de inscrição;

### Regras de negócio

- [x] Se o participante tiver um nome social, como por exemplo, pessoas trans, irá mostrar apenas ele no dashboard; 

<hr>

## Tecnologias Usadas

- [x] React: Utilizado como biblioteca de UI para a construção de interfaces de usuário dinâmicas e reativas.
- [x] TypeScript: Usado para adicionar tipagem estática ao JavaScript, aumentando a segurança e a robustez do código.
- [x] Vite: Utilizado como ferramenta de build para desenvolvimento rápido de aplicações JavaScript.
- [x] Tailwind CSS: Framework CSS utilizado para estilização dos componentes, oferecendo uma abordagem baseada em classes utilitárias.
- [x] Lucide React: Biblioteca de ícones SVG utilizada para adicionar ícones de forma simples e eficiente aos componentes React.
- [x] Day.js: Utilizado para manipulação de datas e horários.
- [x] Faker.js: Utilizado para a geração de dados fictícios, facilitando o desenvolvimento e teste de aplicações com dados realistas.

<hr>

## Como utilizar:
Siga essas etapas para configurar e iniciar a aplicação localmente na sua máquina.

1) Clone o repositório:
    - Clone o repositório do FRONT-END na sua máquina local:
    ```bash
    git clone https://github.com/ivamberg/IvambergSilva/checkIn.log.git
    ```

2) Instale as dependências:
    - No diretório do FRONT-END, instale as dependências utilizando o npm:
    ```bash
    cd .\checkIn.log\
    npm install
    ```
    
3) Acessar a Aplicação:
    - Abra o seu navegador e acesse o link gerado [http://localhost:3333](http://localhost:3333) para acessar a aplicação.

<hr>

## 🤝 Autor

<p align="center">
    <a href="https://www.linkedin.com/in/ivamberg-silva/">
        <img src="https://avatars.githubusercontent.com/u/99219836" width="100px;" alt="Foto do Ivamberg Silva no GitHub" /><br>
        <b>Ivamberg Silva</b>
    </a>
</p>
<p align="center">Copyright © 2024 - Ivamberg Silva</p>