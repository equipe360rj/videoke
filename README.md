# NeoKaraoke - Sistema de Busca de Músicas

Um sistema moderno de busca de músicas para karaokê, similar ao BusKaraoke, desenvolvido com HTML, CSS e JavaScript puro.

## 🎵 Funcionalidades

- **Busca Inteligente**: Pesquise por artista, música ou número
- **Resultados em Tempo Real**: Busca instantânea conforme você digita

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Interface Moderna**: Design elegante e intuitivo

## 📁 Estrutura do Projeto

```
Videoke/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── BD.csv              # Base de dados das músicas
└── README.md           # Este arquivo
```

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em um navegador web
2. **Digite sua busca** no campo de pesquisa
3. **Clique em uma música** para ver os detalhes

## 📊 Formato da Base de Dados

O arquivo `BD.csv` deve seguir o formato:

```csv
numero,arquivo,artista,musica
01001,01001.mp4,PARALAMAS DO SUCESSO,A LHE ESPERAR
01002,01002.mp4,AVIÕES DO FORRÓ,AGORA CHORA - COM BANDA CALYPSO
...
```

### Colunas:
- **numero**: Código único da música
- **arquivo**: Nome do arquivo de vídeo/áudio
- **artista**: Nome do artista ou banda
- **musica**: Título da música

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `styles.css`:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cor de destaque */
color: #ffd700;
```



## 🔧 Requisitos Técnicos

- **Navegador**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Servidor Local**: Recomendado para evitar problemas de CORS
- **Arquivo CSV**: Deve estar no mesmo diretório do index.html

## 🌐 Servidor Local

Para evitar problemas de CORS ao carregar o arquivo CSV, use um servidor local:

### Python 3
```bash
python -m http.server 8000
```

### Node.js
```bash
npx http-server
```

### PHP
```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎯 Funcionalidades Futuras

- [ ] Sistema de favoritos
- [ ] Histórico de buscas
- [ ] Filtros por gênero
- [ ] Player de música integrado
- [ ] Sistema de avaliações
- [ ] Estatísticas de uso

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Desenvolvido por

Sistema desenvolvido para facilitar a busca de músicas em sistemas de karaokê.

---

**🎤 Divirta-se cantando! 🎵** 