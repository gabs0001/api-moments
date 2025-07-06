## 🎞️ Moments — Compartilhe o que importa

**Moments** é uma aplicação full-stack para registrar, editar e compartilhar momentos marcantes. Cada momento pode conter:

- 🖼️ Uma foto
- 📝 Uma descrição
- 💬 Comentários (editáveis, removíveis)
- 🔍 Busca por nome

A ideia é criar um espaço afetivo e organizado para guardar lembranças e permitir que outras pessoas interajam com elas.

---

## 🚀 Tecnologias usadas

### Frontend
- **Angular** (Standalone)
- HTML, CSS, TypeScript

### Backend
- **AdonisJS** (API Restful)
- TypeScript

> **Obs.:** O projeto está organizado com `moments/` e `api-restful/` em diretórios separados, mas no mesmo repositório.

---

## 📦 Como rodar o projeto localmente

### 🔧 Requisitos
- Node.js instalado
- Angular CLI instalado (`npm install -g @angular/cli`)
- AdonisJS instalado (`npm i -g @adonisjs/cli`)

### 📂 Estrutura do projeto

```bash
api__moments/
├── moments/
└── api-restful/
```

### ▶️ Rodando o Frontend (porta `4200`)

```bash
cd moments
npm install
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

### ▶️ Rodando o Backend (porta `3333`)

```bash
cd api-restful
npm install
node ace serve --watch
```

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

---

## 📘 Sobre

Este projeto foi desenvolvido por **Gabriel** com o intuito de praticar linguagens, conceitos e ferramentas do desenvolvimento Front-End/Full-Stack. A proposta é registrar momentos que marcaram a vida, promover conexão emocional e criar uma cápsula digital de lembranças.

---

## ✨ Status

✅ Backend funcional  
✅ Frontend com navegação e estilos suaves  
📌 Em progresso: deploy na Vercel e integração com serviço externo para a API

---
