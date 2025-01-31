import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../../../core/services/url.service';
import { CommonModule } from '@angular/common';

enum copyState {
  Copy = "Copy",
  Copied = "Copied"
}

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  inputValue: string = ''
  isloading: boolean = false
  isGenerated: boolean = false
  copyState: copyState = copyState.Copy
  urlError: string = "";
  constructor(private urlService:UrlService){}

  generateLink(){
    if(this.inputValue){
      if(this.urlValidator(this.inputValue)){
        this.isloading = true
        this.urlService.shortenUrl(this.inputValue).subscribe({
          next:(res)=>{
            console.log(res);
            this.isloading = false
            this.isGenerated = true
            this.inputValue = res.shortUrl
    
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }else{
        this.urlError = "Invalid URL"
      }
    }

  }

  reset(){
    this.isGenerated = false;
    this.inputValue = ""
    this.copyState = copyState.Copy
  }

  copyLink(){
    navigator.clipboard.writeText(this.inputValue).then(()=>{
      console.log("copied");
      this.copyState = copyState.Copied
    })
  }

   urlValidator(url:string) {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)' + // protocol
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.?)+[a-zA-Z]{2,}|' + // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-zA-Z\\d_]*)?$', // fragment locator
      'i'
    );
  
    const isValid = urlPattern.test(url);
    console.log(isValid);
    
    return isValid
  }
}
