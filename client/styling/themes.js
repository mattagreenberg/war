const themes = {
  dark: {
    theme: 'dark',
    primary: '#282929',
    secondary: '#f7f7f7',
    boxShadow: '1px 1px 1px #black',
    themeToggle: {
      box: '#41444d',
      btn: '#131a29',
      btnMargin: '-1%',
    },
    diceSVG: {
      background: '#f7f7f7',
      fill: '#131a29'
    }
  },
  light: {
    theme: 'light',
    primary: '#f7f7f7',
    secondary: 'white',
    boxShadow: '1px 1px 1px #808080',
    themeToggle: {
      box: '#e3e3e3',
      btn: 'white',
      btnMargin: '60%',
    },
    diceSVG: {
      background: 'white',
      fill: '#b5b5b5'
    }
  }
}

export default themes;