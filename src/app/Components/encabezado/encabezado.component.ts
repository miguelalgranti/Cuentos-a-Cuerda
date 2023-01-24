import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;
  Persona: any;
  persona: persona = null;
    constructor( private personaService: PersonaService, private router: Router, private tokenService: TokenService) { }
  
    ngOnInit(): void {
      this.cargarPersona();
      if(this.tokenService.getToken()){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      }
      cargarPersona(){
        this.personaService.detail(1).subscribe(
          data => {this.persona = data}
        )
      }
    onLogOut(): void {
      this.tokenService.logOut();
      window.location.reload();
    }
    login(){
      this.router.navigate(['/login']);
    }
         
  }
  
