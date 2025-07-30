// Configurações do NeoKaraoke
const CONFIG = {
    // Configurações da aplicação
    app: {
        name: 'NeoKaraoke',
        version: '1.0.0',
        description: 'Sistema de busca de músicas para karaokê'
    },

    // Configurações de busca
    search: {
        minLength: 3, // Comprimento mínimo para busca automática
        maxResults: 50, // Máximo de resultados exibidos
        debounceTime: 300 // Tempo de debounce para busca em tempo real
    },

    // Configurações visuais
    theme: {
        primaryColor: '#667eea',
        secondaryColor: '#764ba2',
        accentColor: '#ffd700',
        successColor: '#28a745',
        dangerColor: '#dc3545',
        warningColor: '#ffc107'
    },



    // Configurações de animação
    animations: {
        enabled: true,
        duration: 300,
        easing: 'ease-out'
    },

    // Configurações de armazenamento
    storage: {
        favoritesKey: 'neokaraoke_favorites',
        historyKey: 'neokaraoke_history',
        settingsKey: 'neokaraoke_settings'
    },

    // Mensagens do sistema
    messages: {
        noResults: 'Nenhum resultado encontrado',
        noResultsSubtitle: 'Tente buscar por outro termo ou verifique a ortografia',
        loading: 'Buscando...',
        error: 'Erro ao carregar a base de dados',
        songAdded: 'Música adicionada à fila!',
        songFavorited: 'Música adicionada aos favoritos!',
        songUnfavorited: 'Música removida dos favoritos!',
        playing: 'Reproduzindo:'
    },

    // Configurações de desenvolvimento
    debug: {
        enabled: false,
        logLevel: 'info' // 'debug', 'info', 'warn', 'error'
    }
};

// Função para obter configuração
function getConfig(key) {
    const keys = key.split('.');
    let value = CONFIG;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// Função para definir configuração
function setConfig(key, value) {
    const keys = key.split('.');
    let config = CONFIG;
    
    for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in config)) {
            config[keys[i]] = {};
        }
        config = config[keys[i]];
    }
    
    config[keys[keys.length - 1]] = value;
}

// Função para salvar configurações no localStorage
function saveConfig() {
    try {
        localStorage.setItem(CONFIG.storage.settingsKey, JSON.stringify(CONFIG));
    } catch (error) {
        console.warn('Não foi possível salvar as configurações:', error);
    }
}

// Função para carregar configurações do localStorage
function loadConfig() {
    try {
        const saved = localStorage.getItem(CONFIG.storage.settingsKey);
        if (saved) {
            const savedConfig = JSON.parse(saved);
            Object.assign(CONFIG, savedConfig);
        }
    } catch (error) {
        console.warn('Não foi possível carregar as configurações:', error);
    }
}

// Carregar configurações ao inicializar
loadConfig(); 