# 🎤 NeoKaraoke - Sistema de Busca de Músicas

Um sistema moderno de busca de músicas para karaokê com design escuro elegante, desenvolvido com HTML, CSS e JavaScript puro.

## 🌐 Demo Online

**Acesse o site:** [https://seu-usuario.github.io/neokaraoke](https://seu-usuario.github.io/neokaraoke)

## 🚀 Como Hospedar no GitHub Pages

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome: `neokaraoke` (ou o nome que preferir)
4. Descrição: "Sistema de busca de músicas para karaokê"
5. Marque como **Public**
6. Clique em "Create repository"

### 2. Fazer Upload dos Arquivos

#### Opção A: Via GitHub Web Interface
1. No repositório criado, clique em "uploading an existing file"
2. Arraste todos os arquivos do projeto:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `config.js`
   - `BD.csv`
   - `README.md`
   - `.github/workflows/deploy.yml`
3. Clique em "Commit changes"

#### Opção B: Via Git (Recomendado)
```bash
# No diretório do projeto
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/neokaraoke.git
git push -u origin main
```

### 3. Configurar GitHub Pages

1. No repositório, vá em **Settings**
2. Role até **Pages** (na barra lateral)
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **gh-pages** e **/(root)**
5. Clique em **Save**

### 4. Verificar Deploy

- O GitHub Actions irá fazer o deploy automaticamente
- Aguarde alguns minutos
- Acesse: `https://seu-usuario.github.io/neokaraoke`

## 📁 Estrutura do Projeto

```
neokaraoke/
├── index.html              # Página principal
├── styles.css              # Estilos CSS (modo escuro)
├── script.js               # Lógica JavaScript
├── config.js               # Configurações
├── BD.csv                  # Base de dados das músicas
├── README.md               # Documentação
├── README-GITHUB.md        # Este arquivo
└── .github/workflows/      # GitHub Actions
    └── deploy.yml          # Workflow de deploy
```

## ⚙️ Configurações Importantes

### Personalizar URL
Para mudar a URL do site, edite o arquivo `config.js`:

```javascript
app: {
    name: 'Seu Nome do Karaokê',
    version: '1.0.0',
    description: 'Sua descrição personalizada'
}
```

### Atualizar Base de Dados
1. Substitua o arquivo `BD.csv` pelo seu
2. Faça commit das mudanças
3. O site será atualizado automaticamente

## 🔧 Solução de Problemas

### CORS Error
Se aparecer erro de CORS:
1. Verifique se o arquivo `BD.csv` está no repositório
2. Certifique-se de que o GitHub Pages está ativo
3. Aguarde alguns minutos para o cache atualizar

### Site não Carrega
1. Verifique se o repositório é público
2. Confirme se o GitHub Pages está configurado
3. Verifique os logs do GitHub Actions

## 📱 Funcionalidades

- ✅ Busca inteligente em tempo real
- ✅ Design responsivo (mobile/desktop)
- ✅ Modo escuro elegante
- ✅ Modal de detalhes da música
- ✅ Sistema de favoritos
- ✅ Interface moderna com blur effects

## 🎨 Personalização

### Cores
Edite o arquivo `styles.css`:
```css
/* Cor principal */
--primary-color: #ffd700;

/* Cor de fundo */
background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('sua-imagem.jpg');
```

### Mensagens
Edite o arquivo `config.js`:
```javascript
messages: {
    noResults: 'Sua mensagem personalizada',
    loading: 'Carregando...'
}
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**🎤 Divirta-se cantando com o NeoKaraoke! 🎵**

**Site:** [https://seu-usuario.github.io/neokaraoke](https://seu-usuario.github.io/neokaraoke) 