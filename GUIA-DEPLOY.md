# 🚀 Guia Visual - Deploy no GitHub Pages

## 📋 Pré-requisitos

- ✅ Conta no GitHub
- ✅ Git instalado no computador
- ✅ Todos os arquivos do projeto

## 🎯 Passo a Passo

### 1️⃣ Criar Repositório no GitHub

1. **Acesse** [github.com](https://github.com)
2. **Clique** no botão verde "New" ou "+" → "New repository"
3. **Preencha**:
   - Repository name: `neokaraoke`
   - Description: `Sistema de busca de músicas para karaokê`
   - ✅ Public
   - ❌ Não marque "Add a README file"
4. **Clique** "Create repository"

### 2️⃣ Upload dos Arquivos

#### Opção A: Interface Web (Mais Fácil)

1. **No repositório criado**, clique em "uploading an existing file"
2. **Arraste** todos estes arquivos:
   ```
   📁 neokaraoke/
   ├── 📄 index.html
   ├── 📄 styles.css
   ├── 📄 script.js
   ├── 📄 config.js
   ├── 📄 BD.csv
   ├── 📄 README.md
   ├── 📄 README-GITHUB.md
   ├── 📄 GUIA-DEPLOY.md
   ├── 📄 .gitignore
   ├── 📄 deploy.sh
   ├── 📄 deploy.ps1
   └── 📁 .github/workflows/
       └── 📄 deploy.yml
   ```
3. **Clique** "Commit changes"

#### Opção B: Git (Recomendado)

**No PowerShell ou Terminal, no diretório do projeto:**

```powershell
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Initial commit - NeoKaraoke"

# Renomear branch para main
git branch -M main

# Adicionar remote (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/neokaraoke.git

# Fazer push
git push -u origin main
```

### 3️⃣ Configurar GitHub Pages

1. **No repositório**, clique em "Settings" (aba superior)
2. **Role para baixo** até encontrar "Pages" (barra lateral esquerda)
3. **Em "Source"**, selecione "Deploy from a branch"
4. **Em "Branch"**, selecione:
   - Branch: `gh-pages`
   - Folder: `/(root)`
5. **Clique** "Save"

### 4️⃣ Verificar Deploy

1. **Aguarde** 2-5 minutos
2. **Acesse**: `https://seu-usuario.github.io/neokaraoke`
3. **Verifique** se o site carregou corretamente

## 🔧 Solução de Problemas

### ❌ Erro: "Page not found"
- Verifique se o repositório é **público**
- Confirme se o GitHub Pages está **ativado**
- Aguarde mais alguns minutos

### ❌ Erro: "CORS policy"
- Verifique se o arquivo `BD.csv` está no repositório
- Certifique-se de que todos os arquivos foram enviados

### ❌ Site não carrega
- Verifique os logs em **Actions** → **Deploy to GitHub Pages**
- Confirme se não há erros no código

## 📱 Testando o Site

1. **Acesse** o site no navegador
2. **Teste** a busca:
   - Digite "Ivete" ou "Chitaozinho"
   - Clique em uma música
   - Teste o modal
3. **Teste** no mobile:
   - Abra o site no celular
   - Verifique se está responsivo

## 🎨 Personalizando

### Mudar Nome do Site
Edite `config.js`:
```javascript
app: {
    name: 'Meu Karaokê',
    version: '1.0.0'
}
```

### Mudar Cores
Edite `styles.css`:
```css
/* Cor principal */
--primary-color: #sua-cor;
```

### Atualizar Músicas
1. Substitua o arquivo `BD.csv`
2. Faça commit das mudanças
3. O site será atualizado automaticamente

## 🌐 URLs Importantes

- **Site**: `https://seu-usuario.github.io/neokaraoke`
- **Repositório**: `https://github.com/seu-usuario/neokaraoke`
- **Actions**: `https://github.com/seu-usuario/neokaraoke/actions`

## 📞 Suporte

Se tiver problemas:
1. Verifique este guia
2. Consulte o `README-GITHUB.md`
3. Verifique os logs do GitHub Actions
4. Certifique-se de que todos os arquivos estão corretos

---

**🎤 Seu NeoKaraoke está online! Divirta-se cantando! 🎵** 