#!/bin/bash

# Script de Deploy para GitHub Pages
# NeoKaraoke - Sistema de Busca de Músicas

echo "🎤 NeoKaraoke - Deploy para GitHub Pages"
echo "========================================"

# Verificar se o Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Instale o Git primeiro."
    exit 1
fi

# Verificar se estamos em um repositório Git
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📦 Adicionando arquivos..."
git add .

# Fazer commit
echo "💾 Fazendo commit..."
git commit -m "Deploy NeoKaraoke - $(date)"

# Verificar se o remote existe
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adicionando remote origin..."
    echo "Digite a URL do seu repositório GitHub:"
    read repo_url
    git remote add origin "$repo_url"
fi

# Fazer push
echo "🚀 Fazendo push para GitHub..."
git push -u origin main

echo ""
echo "✅ Deploy concluído!"
echo "🌐 Seu site estará disponível em:"
echo "   https://seu-usuario.github.io/neokaraoke"
echo ""
echo "📝 Lembre-se de:"
echo "   1. Configurar GitHub Pages nas Settings do repositório"
echo "   2. Selecionar branch 'gh-pages' como source"
echo "   3. Aguardar alguns minutos para o deploy"
echo ""
echo "🎤 Divirta-se cantando! 🎵" 