

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

> **Obs.:** O projeto está organizado com `frontend/` e `backend/` em diretórios separados, mas no mesmo repositório.

---

## 📦 Como rodar o projeto localmente

### 🔧 Requisitos
- Node.js instalado
- Angular CLI instalado (`npm install -g @angular/cli`)
- AdonisJS instalado (`npm i -g @adonisjs/cli`)

### 📂 Estrutura do projeto

```bash
api-moments/
├── frontend/
└── backend/
```

### ▶️ Rodando o Frontend (porta `4200`)

```bash
cd frontend
npm install
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

### ▶️ Rodando o Backend (porta `3333`)

```bash
cd backend
npm install
node ace serve --watch
```

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

---

## 📘 Sobre

Este projeto foi desenvolvido por **Mim** com o intuito de praticar a utilização de ferramentas e conceitos de desenvolvimento front-end/full-stack. A proposta é registrar momentos que marcaram a vida, promover conexão emocional e criar uma cápsula digital de lembranças.

---

## ✨ Status

✅ Backend funcional  
✅ Frontend com navegação e estilos suaves  
📌 Em progresso: deploy na Vercel e integração com serviço externo para a API

---
