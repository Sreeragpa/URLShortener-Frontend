import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/widgets/footer/footer.component";
import { ContentComponent } from "../../shared/widgets/content/content.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent, ContentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
