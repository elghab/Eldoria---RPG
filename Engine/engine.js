class Popup {
    constructor(nomeSeletor, popupSeletor) {
      this.nomeElemento = document.querySelector(nomeSeletor);
      this.popupElemento = document.querySelector(popupSeletor);
      this.fecharBotao = this.popupElemento.querySelector('.fecharPopup');
  
      this.adicionarEventoClick();
    }
  
    adicionarEventoClick() {
      this.nomeElemento.addEventListener('click', () => {
        this.mostrarPopup();
      });
  
      this.fecharBotao.addEventListener('click', () => {
        this.fecharPopup();
      });
    }
  
    mostrarPopup() {
      this.popupElemento.style.display = 'block';
    }
  
    fecharPopup() {
      this.popupElemento.style.display = 'none';
    }
  }

/*NPCS - Porto Negro*/
  const popup1 = new Popup('.popup', '#popup');
  const popup2 = new Popup('.popup2', '#popup2');
  const popup3 = new Popup('.popup3', '#popup3');
  const popup4 = new Popup('.popup4', '#popup4');
  const popup5 = new Popup('.popup5', '#popup5');
  const popup6 = new Popup('.popup6', '#popup6');
  const popup7 = new Popup('.popup7', '#popup7');
  const popup8 = new Popup('.popup8', '#popup8');
  const popup9 = new Popup('.popup9', '#popup9');
  const popup10 = new Popup('.popup10', '#popup10');
