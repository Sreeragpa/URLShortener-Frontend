import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  inputValue: string = ''
  isloading: boolean = false
  isGenerated: boolean = false
  constructor(){}

  generateLink(){
    if(this.inputValue){
      this.isloading = true

      setTimeout(() => {
        this.isloading = false
        this.isGenerated = true
        this.inputValue = 'https://www.srg.buzz/weraWt'
      }, 1000);
    }
  }

  reset(){
    this.isGenerated = false;
    this.inputValue = ""
  }
}
