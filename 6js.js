class Chelovek {
    constructor(imya, vozrast, strana) {
      this.imya = imya;
      this.vozrast = vozrast;
      this.strana = strana;
    }
  
    otobrazitSvedeniya() {
      console.log(`Имя: ${this.imya}`);
      console.log(`Возраст: ${this.vozrast} лет`);
      console.log(`Страна: ${this.strana}`);
    }
  }
  
  const chelovek1 = new Chelovek("Иван", 30, "Россия");
  const chelovek2 = new Chelovek("Мария", 25, "Беларусь");
  
  chelovek1.otobrazitSvedeniya();
  console.log(); 
  chelovek2.otobrazitSvedeniya();
  