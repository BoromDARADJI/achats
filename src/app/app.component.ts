import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  message:string='';
  onaffiche(message:string){
    this.message="Merci d'avoir liker  "+message;

}
listes=[
  {
   imagearticle:'../assets/images/image_1.jpg',
   titrearticle:'Vélo',
   prixarticle:100,
  descriptionarticle:'Description',
   disponiblearicle:true
  },
  {
   imagearticle:'../assets/images/image_2.jpg',
   titrearticle:'TV',
   prixarticle:200,
  descriptionarticle:'Description',
  disponiblearicle:false
  },
  {
   imagearticle:'../assets/images/image_3.jpg',
   titrearticle:'PLAY',
   prixarticle:300,
  descriptionarticle:'Description',
   disponiblearicle:false,
  
  },
  {
   imagearticle:'../assets/images/image_4.jpg',
   titrearticle:'Voiture',
   prixarticle:300,
  descriptionarticle:'Description',
   disponiblearicle:false,
  
  },
  {
   imagearticle:'../assets/images/image_5.jpg',
   titrearticle:'Moto',
   prixarticle:300,
  descriptionarticle:'Description',
   disponiblearicle:false,
  
  },
  {
   imagearticle:'../assets/images/image_5.jpg',
   titrearticle:'Moto',
   prixarticle:300,
  descriptionarticle:'Description',
   disponiblearicle:false,
  
  }

];

commente:string='bonjour';


textimage:string="text image"
imagear:string="https:/picsum.photos/200/300"



}
