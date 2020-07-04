import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password';
  useLetter = false;
  useNumber = false;
  useSymbol = false;
  length = 0;
  password = ''


  generate() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = ''

    if (this.useLetter) {
      validChars += letters
    }

    if (this.useNumber) {
      validChars += numbers
    }

    if (this.useSymbol) {
      validChars += symbols
    }

    let generatedPassword = ''

    for (let i=0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword+= validChars[index]
    }

    this.password = generatedPassword;
  }

  useLetterChange() {
    this.useLetter = !this.useLetter
  }

  useNumberChange() {
    this.useNumber = !this.useNumber
  }

  useSymbolChange() {
    this.useSymbol = !this.useSymbol
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
