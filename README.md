# Angular Alura — Quadro de Pensamentos

Aplicação Angular para gerenciamento de pensamentos — registre, edite e exclua suas ideias em uma dashboard intuitiva.

Projeto desenvolvido durante o curso de Angular da [Alura](https://www.alura.com.br/).

---

## Sobre o projeto

O **Quadro de Pensamentos** é uma aplicação CRUD que permite ao usuário organizar suas ideias em um painel visual. O foco é explorar os fundamentos do Angular de forma prática, construindo uma interface funcional e responsiva do zero.

### Funcionalidades

- Registrar novos pensamentos
- Editar pensamentos existentes
- Excluir pensamentos
- Dashboard intuitiva para visualização

---

## Tecnologias

- [Angular](https://angular.dev/) v21
- [TypeScript](https://www.typescriptlang.org/)
- Angular Router
- Angular Forms

---

## Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [Angular CLI](https://angular.dev/tools/cli)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Raulgonc/Angular-Alura.git

# Acesse o diretório
cd Angular-Alura

# Instale as dependências
npm install
```

### Rodando localmente

```bash
npm start
```

Acesse `http://localhost:4200` no navegador.

### Build para produção

```bash
ng build
```

Os arquivos gerados estarão na pasta `dist/`.

### Testes

```bash
ng test
```

---

## Estrutura do projeto

```
src/
├── app/
│   ├── app.ts            # Componente raiz
│   ├── app.routes.ts     # Configuração de rotas
│   ├── app.config.ts     # Configuração da aplicação
│   └── app.html          # Template raiz
├── index.html
├── main.ts
└── styles.css
```

---

## Licença

Projeto desenvolvido para fins educacionais.
