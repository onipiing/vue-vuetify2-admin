const settings = {
  state: {
    language: 'ru',
    dense: true,
    navbar: {
      show: true,
      logo: false
    },
    fullscreen: {
      show: false,
      btn: true
    },
    settingsPanel: {
      show: false,
      btn: true
    }
  },

  getters: {
    language: state => state.language,
    toolbarDense: state => state.dense,
    navbarShow: state => state.navbar.show,
    navbarLogo: state => state.navbar.logo,
    fullscreenBtn: state => state.fullscreen.btn,
    fullscreenShow: state => state.fullscreen.show,
    settingsPanelBtn: state => state.settingsPanel.btn,
    settingsPanelShow: state => state.settingsPanel.show
  },

  mutations: {
    SET_SETTINGS: (state, payload) => {
      state.language = payload.language || state.language;
      state.dense = payload.dense || state.dense;
      state.navbar = payload.navbar || state.navbar;
      state.fullscreen = payload.fullscreen || state.fullscreen;
      state.settingsPanel = payload.settingsPanel || state.settingsPanel;
    },
    LANGUAGE_TOGGLE: (state, payload) => {
      state.language = payload.state;
    },
    TOOLBAR_DENSE_TOGGLE: state => {
      state.dense = !state.dense;
    },
    NAVBAR_LOGO_TOGGLE: state => {
      state.navbar.logo = !state.navbar.logo;
    },
    NAVBAR_TOGGLE: state => {
      state.navbar.show = !state.navbar.show;
    },
    NAVBAR_STATE: (state, payload) => {
      state.navbar.show = payload.state;
    },
    FULLSCREEN_TOGGLE: (state, payload) => {
      state.fullscreen.show = payload.state;
    },
    FULLSCREEN_BTN: (state, payload) => {
      state.fullscreen.btn = payload.state;
    },
    SETTINGS_PANEL_BTN_TOGGLE: state => {
      state.settingsPanel.btn = !state.settingsPanel.btn;
    },
    SETTINGS_PANEL_TOGGLE: state => {
      state.settingsPanel.show = !state.settingsPanel.show;
    },
    SETTINGS_PANEL_STATE: (state, payload) => {
      state.settingsPanel.show = payload.state;
    }
  },
  actions: {
    LanguageToggle: async (context, payload) => {
      context.commit('LANGUAGE_TOGGLE', payload);
    },
    ToolbarDenseToggle: async context => {
      context.commit('TOOLBAR_DENSE_TOGGLE');
    },
    NavbarLogoToggle: async (context, payload) => {
      context.commit('NAVBAR_LOGO_TOGGLE', payload);
    },
    NavbarToggle: async (context, payload) => {
      context.commit('NAVBAR_TOGGLE', payload);
    },
    NavbarState: async (context, payload) => {
      context.commit('NAVBAR_STATE', payload);
    },
    FullscreenToggle: async (context, payload) => {
      context.commit('FULLSCREEN_TOGGLE', payload);
    },
    FullscreenBtn: async (context, payload) => {
      context.commit('FULLSCREEN_BTN', payload);
    },
    SettingsPanelBtnToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_BTN_TOGGLE', payload);
    },
    SettingsPanelToggle: async (context, payload) => {
      context.commit('SETTINGS_PANEL_TOGGLE', payload);
    },
    SettingsPanelState: async (context, payload) => {
      context.commit('SETTINGS_PANEL_STATE', payload);
    }
  }
};

export default settings;
