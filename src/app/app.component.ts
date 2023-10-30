import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:'<p>Welcome </p><br><p>Mr/Mrs&nbsp;{{name}}</p>',
  // styles: ['b{color:red}','b:hover{color:blue}','div{color:red}']
  
 
  

})
export class AppComponent {
  name=window.prompt("Code Required");
 
  title = 'Srivishnu The MASS☠️ ';
  ngOnInit(){
    if(this.name!="Srivishnu"){
      window.alert("Wrong Code");
      window.location.reload();
    }
    else{
      window.alert("Welcome Boss" )
    }
    
  }
}