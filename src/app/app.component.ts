import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //la partie html de ce composant ce trouve dans ce fichier
  styleUrls: ['./app.component.css']  //la partie css de ce composant ce trouve dans ce fichier
})
export class AppComponent {
  title = 'Ngsi22021';
  msg ='Bonjour je suis khouloud';
  msg2='je suis étudiante en 2 ING';
  isHidden = true;
  get monmsg(){
    return this.msg2;
  }
  SayHello(){
    alert("heloooo khouloud");
  }
  Hideen(){
    if (this.isHidden == true){
      this.isHidden = false;
    }else{
      this.isHidden= true;
    }
  }
}
