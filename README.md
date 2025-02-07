# Boas vindas ao repositório do projeto MOTOURISM!

## O que foi desenvolvido:

O projeto foi proposto pela Hackathon entre as turmas 11 e 12 da <a href="https://app.betrybe.com/">Trybe</a>.

## O tema escolhido:

![desafio2](https://user-images.githubusercontent.com/78225894/145867515-b8401fac-bfcc-4ed2-a63e-fd0870b9c82a.png)

## Equipe 4:

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/danielbped/">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U01SZ8JQXRQ-8e0ccfe91d5d-512" width="100px;" alt="Foto da Lais Simenikim no GitHub"/><br>
        <sub>
          <a href="https://www.linkedin.com/in/danielbped/">Daniel Batista</a>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/douglasdns/">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U01KU84DW93-fc7f8b422205-512" width="100px;" alt="Foto do Marconi Moreira no GitHub"/><br>
        <sub>
          <a href="https://www.linkedin.com/in/douglasdns/">Douglas Santana</a>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/gui-pereira/">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U01Q7G668A0-35043df532b2-512" width="100px;" alt="Foto da Natalia de Souza no GitHub"/><br>
        <sub>
          <a href="https://www.linkedin.com/in/gui-pereira/">Guilherme Pereira</a>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/luisffg/">
        <img src="https://ca.slack-edge.com/TMDDFEPFU-U01SZ8K0L0J-75fc4f3c65d9-512" width="100px;" alt="Foto da Natalia de Souza no GitHub"/><br>
        <sub>
          <a href="https://www.linkedin.com/in/luisffg/">Luis Fernando Fonseca</a>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SamuelSilvaMelo">
        <img src="https://avatars.githubusercontent.com/u/80549416?v=4" width="100px;" alt="Foto do Samuel Melo no GitHub"/><br>
        <sub>
          <a href="https://github.com/SamuelSilvaMelo">Samuel Melo</a>
        </sub>
      </a>
    </td>
  </tr>
</table>

## A ideia:

Nossa ideia partiu de um propósito em movimentar o Eco Turismo.

"Conhecido e exaltado por suas belezas naturais e culturais pelo mundo afora, o Brasil foi o destino escolhido por cerca de 19 milhões de estrangeiros nos últimos três anos, de acordo com o Ministério do Turismo. E neste setor uma modalidade vem tomando frente: o ecoturismo (ou turismo ecológico). Ele foi o motivo de viagem de 18,6% destes turistas, que saíram de suas casas em busca de cenários paradisíacos, com fauna e flora tão próprios que só o país com uma das maiores biodiversidades do mundo possui." Fonte: <a href="https://viagemegastronomia.cnnbrasil.com.br/noticias/ecoturismo-no-brasil-a-tendencia-que-veio-para-ficar-no-pos-pandemia/">CNN</a>

Criamos um produto onde carregamos a missão de proporcionar uma experiência única de poder estacionar sua "casa" por uns dias nos lugares mais paradisíacos de todo Brasil.

Unimos as maravilhas do Eco Turismo com o aconchego do Motor Home.

Prazer, somos o Motourism.

![otimized-gif](https://user-images.githubusercontent.com/78225894/145897892-78a0bcda-11da-47ef-9cf6-5148e16b4410.gif)

## Desenvolvimento:

## Comunicação, prototipagem e organização:

### Comunicação:

Nossa comunicação foi feita através do Zoom e Slack que foram oferecidos pela <a href="https://app.betrybe.com/">Trybe</a>.

### Prototipagem:

A prototipagem foi feita no Figma:

![figma](https://user-images.githubusercontent.com/78225894/145875236-3e90864c-2c02-4396-ab0f-8b10b5aa8dda.png)

### Organização && divisão das features:

A organização das features foram divididas no Trello:

![trello-motourism](https://user-images.githubusercontent.com/78225894/145875328-a24e1ad7-dd69-4ba5-821f-808eeac9fb90.png)

## Desenvolvimento Técnico:

### Back-end:

Utilizamos o MongoDB para estruturar o Banco de Dados, construindo uma API REST aplicando todo conceito de MSC.

O deploy foi feito no Heroku.

Endpoints:

<a href="https://motourism-backend.herokuapp.com/motorhomes">Motor Homes</a>

<a href="https://motourism-backend.herokuapp.com/itineraries">Itinerários</a>

Utilizamos a biblioteca BCrypt para criptografar os dados sensíveis.

Para os testes, utilizamos as librarys: **MOCHA**, **CHAI**, **SINON**.

![image (1)](https://user-images.githubusercontent.com/78225894/145903179-68f5f67e-b8af-4849-b363-86054a711828.png)

### Front-end:

O Front foi desenvolvido em React e Tailwind CSS, aplicando o conceito Mobile First, onde o protótipo foi desenvolvido de inicio na versão mobile.

## Instruções para rodar o projeto:
1. Clone o repositório:

 * `git clone git@github.com:SamuelSilvaMelo/motourism.git`
 
2. Entre na pasta do repositório que você acabou de clonar:

    * `cd motourism`

3. Entre na pasta do frontend:

    * `cd frontend`

4. Instale as dependências e inicialize o projeto:

  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start`
