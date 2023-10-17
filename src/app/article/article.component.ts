import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  
  @Input()disponiblearicle:boolean
  nblike:number=0;
  @Input()titrearticle:string
  @Input()prixarticle:number
  @Output()info=new EventEmitter<string>()
  @Input()descriptionarticle:string
  @Input()commentearticle:string
  @Input()textimagearticle:string
  @Input()imagearticle:string


 

  like(){
    this.nblike++
    this.info.emit(this.titrearticle)

  }
  deslike(){
   if (this.nblike>0) {
    this.nblike--
   }

  }
}
