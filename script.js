class KaraokeSearch {
    constructor() {
        this.songs = [];
        this.filteredSongs = [];
        this.currentSong = null;
        this.init();
    }

    async init() {
        await this.loadSongs();
        this.setupEventListeners();
    }

    async loadSongs() {
        try {
            const response = await fetch('BD.csv');
            const csvText = await response.text();
            this.parseCSV(csvText);
        } catch (error) {
            console.error('Erro ao carregar o arquivo CSV:', error);
            this.showError(getConfig('messages.error'));
        }
    }

    parseCSV(csvText) {
        const lines = csvText.split('\n');
        const headers = lines[0].split(',');
        
        for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim()) {
                const values = this.parseCSVLine(lines[i]);
                if (values.length >= 4) {
                    this.songs.push({
                        numero: values[0].trim(),
                        arquivo: values[1].trim(),
                        artista: values[2].trim(),
                        musica: values[3].trim()
                    });
                }
            }
        }
        
        console.log(`Carregadas ${this.songs.length} músicas`);
    }

    parseCSVLine(line) {
        const result = [];
        let current = '';
        let inQuotes = false;
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        
        result.push(current);
        return result;
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        // Busca ao pressionar Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Busca ao clicar no botão
        searchBtn.addEventListener('click', () => {
            this.performSearch();
        });

        // Busca em tempo real (opcional)
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length >= getConfig('search.minLength')) {
                this.performSearch();
            } else if (e.target.value.length === 0) {
                this.hideResults();
            }
        });

        // Modal events
        const modal = document.getElementById('songModal');
        const closeModal = document.getElementById('closeModal');
        const playBtn = document.getElementById('playBtn');
        const queueBtn = document.getElementById('queueBtn');
        const favoriteBtn = document.getElementById('favoriteBtn');

        // Fechar modal
        closeModal.addEventListener('click', () => {
            this.closeModal();
        });

        // Fechar modal ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                this.closeModal();
            }
        });

        // Botões do modal
        playBtn.addEventListener('click', () => {
            this.playSong();
        });

        queueBtn.addEventListener('click', () => {
            this.addToQueue();
        });

        favoriteBtn.addEventListener('click', () => {
            this.toggleFavorite();
        });
    }

    performSearch() {
        const query = document.getElementById('searchInput').value.trim().toLowerCase();
        
        if (query.length === 0) {
            this.hideResults();
            return;
        }

        this.showLoading();
        
        // Simular delay para melhor UX
        setTimeout(() => {
            this.filterSongs(query);
            this.displayResults();
        }, getConfig('search.debounceTime'));
    }

    filterSongs(query) {
        this.filteredSongs = this.songs.filter(song => {
            const artistMatch = song.artista.toLowerCase().includes(query);
            const songMatch = song.musica.toLowerCase().includes(query);
            const numberMatch = song.numero.includes(query);
            
            return artistMatch || songMatch || numberMatch;
        });

        // Ordenar por relevância
        this.filteredSongs.sort((a, b) => {
            const aArtist = a.artista.toLowerCase();
            const bArtist = b.artista.toLowerCase();
            const aSong = a.musica.toLowerCase();
            const bSong = b.musica.toLowerCase();
            
            // Priorizar músicas que começam com a query
            const aArtistStarts = aArtist.startsWith(query);
            const bArtistStarts = bArtist.startsWith(query);
            const aSongStarts = aSong.startsWith(query);
            const bSongStarts = bSong.startsWith(query);
            
            if (aArtistStarts && !bArtistStarts) return -1;
            if (!aArtistStarts && bArtistStarts) return 1;
            if (aSongStarts && !bSongStarts) return -1;
            if (!aSongStarts && bSongStarts) return 1;
            
            // Se não houver diferença, ordenar alfabeticamente
            return aArtist.localeCompare(bArtist) || aSong.localeCompare(bSong);
        });
    }

    displayResults() {
        const resultsSection = document.getElementById('resultsSection');
        const resultsContainer = document.getElementById('resultsContainer');
        const resultsCount = document.getElementById('resultsCount');

        if (this.filteredSongs.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>${getConfig('messages.noResults')}</h3>
                    <p>${getConfig('messages.noResultsSubtitle')}</p>
                </div>
            `;
        } else {
            resultsContainer.innerHTML = this.filteredSongs.map((song, index) => `
                <div class="result-item" onclick="karaokeSearch.selectSong('${song.numero}')">
                    <div class="result-number">${song.numero}</div>
                    <div class="result-info">
                        <div class="result-artist">${song.artista}</div>
                        <div class="result-song">${song.musica}</div>
                        <div class="result-file">${song.arquivo}</div>
                    </div>
                </div>
            `).join('');
        }

        resultsCount.textContent = `${this.filteredSongs.length} resultado${this.filteredSongs.length !== 1 ? 's' : ''}`;
        resultsSection.style.display = 'block';
    }

    showLoading() {
        const resultsSection = document.getElementById('resultsSection');
        const resultsContainer = document.getElementById('resultsContainer');
        const resultsCount = document.getElementById('resultsCount');

        resultsContainer.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
            </div>
        `;
        resultsCount.textContent = getConfig('messages.loading');
        resultsSection.style.display = 'block';
    }

    hideResults() {
        const resultsSection = document.getElementById('resultsSection');
        resultsSection.style.display = 'none';
    }



    selectSong(numero) {
        // Encontrar a música selecionada
        const song = this.songs.find(s => s.numero === numero);
        if (song) {
            this.showSongDetails(song);
        }
    }



    showSongDetails(song) {
        this.currentSong = song;
        this.openModal(song);
    }

    openModal(song) {
        const modal = document.getElementById('songModal');
        const modalNumber = document.getElementById('modalNumber');
        const modalArtist = document.getElementById('modalArtist');
        const modalSong = document.getElementById('modalSong');
        const modalFile = document.getElementById('modalFile');

        modalNumber.textContent = song.numero;
        modalArtist.textContent = song.artista;
        modalSong.textContent = song.musica;
        modalFile.textContent = song.arquivo;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('songModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    playSong() {
        if (this.currentSong) {
            // Aqui você implementaria a lógica de reprodução
            alert(`${getConfig('messages.playing')} ${this.currentSong.artista} - ${this.currentSong.musica}`);
            this.closeModal();
        }
    }

    addToQueue() {
        if (this.currentSong) {
            // Aqui você implementaria a lógica para adicionar à fila
            alert(`${this.currentSong.artista} - ${this.currentSong.musica} ${getConfig('messages.songAdded')}`);
            this.closeModal();
        }
    }

    toggleFavorite() {
        if (this.currentSong) {
            const favoriteBtn = document.getElementById('favoriteBtn');
            const icon = favoriteBtn.querySelector('i');
            
            if (icon.classList.contains('far')) {
                // Adicionar aos favoritos
                icon.classList.remove('far');
                icon.classList.add('fas');
                favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Favoritado';
                alert(`${this.currentSong.artista} - ${this.currentSong.musica} ${getConfig('messages.songFavorited')}`);
            } else {
                // Remover dos favoritos
                icon.classList.remove('fas');
                icon.classList.add('far');
                favoriteBtn.innerHTML = '<i class="far fa-heart"></i> Favoritar';
                alert(`${this.currentSong.artista} - ${this.currentSong.musica} ${getConfig('messages.songUnfavorited')}`);
            }
        }
    }

    showError(message) {
        const resultsSection = document.getElementById('resultsSection');
        const resultsContainer = document.getElementById('resultsContainer');
        const resultsCount = document.getElementById('resultsCount');

        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Erro</h3>
                <p>${message}</p>
            </div>
        `;
        resultsCount.textContent = 'Erro';
        resultsSection.style.display = 'block';
    }
}

// Inicializar a aplicação quando a página carregar
let karaokeSearch;
document.addEventListener('DOMContentLoaded', () => {
    karaokeSearch = new KaraokeSearch();
});

// Funções globais para uso nos onclick
window.karaokeSearch = karaokeSearch; 