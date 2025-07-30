# Script de Deploy para GitHub Pages - Windows PowerShell
# NeoKaraoke - Sistema de Busca de Músicas

Write-Host "🎤 NeoKaraoke - Deploy para GitHub Pages" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Verificar se o Git está instalado
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Git não está instalado. Instale o Git primeiro." -ForegroundColor Red
    exit 1
}

# Verificar se estamos em um repositório Git
if (-not (Test-Path ".git")) {
    Write-Host "📁 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
}

# Adicionar todos os arquivos
Write-Host "📦 Adicionando arquivos..." -ForegroundColor Green
git add .

# Fazer commit
Write-Host "💾 Fazendo commit..." -ForegroundColor Green
$date = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Deploy NeoKaraoke - $date"

# Verificar se o remote existe
try {
    git remote get-url origin | Out-Null
} catch {
    Write-Host "🔗 Adicionando remote origin..." -ForegroundColor Yellow
    $repo_url = Read-Host "Digite a URL do seu repositório GitHub"
    git remote add origin $repo_url
}

# Fazer push
Write-Host "🚀 Fazendo push para GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host ""
Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Seu site estará disponível em:" -ForegroundColor Cyan
Write-Host "   https://seu-usuario.github.io/neokaraoke" -ForegroundColor White
Write-Host ""
Write-Host "📝 Lembre-se de:" -ForegroundColor Yellow
Write-Host "   1. Configurar GitHub Pages nas Settings do repositório" -ForegroundColor White
Write-Host "   2. Selecionar branch 'gh-pages' como source" -ForegroundColor White
Write-Host "   3. Aguardar alguns minutos para o deploy" -ForegroundColor White
Write-Host ""
Write-Host "🎤 Divirta-se cantando! 🎵" -ForegroundColor Magenta 