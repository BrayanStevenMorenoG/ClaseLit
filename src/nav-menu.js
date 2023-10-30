import { LitElement, html } from 'lit-element';
import styleScc from "../src/menu-style";

export class NavMenu extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    
      
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    
      
          <nav class="navbar bg-light fixed-top box-shadow">
        
      <div class="perfil">
          <div class="row usuario">
              <div class="col-sm-1">
                  <img src="img/logo.png" class="logo">
              </div>
              <div class="col-sm-11">
                  <div class="nav text-left">
                      <label class="margin">Brayan Moreno</label>
                  </div>
              </div>
          </div>
      </div>
      
      
      <button class="navbar-toggler text-white" style="margin: 12px;">
          <span class="navbar-toggler-icon text-white"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Menu</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item opciones">
                      <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                      <span class="text-list-font">Perfil</span>
                      <!-- <a class="nav-link" aria-current="page" href="#">Perfil</a> -->
                  </li>
                  <li class="nav-item opciones">
                      <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                      <span class="text-list-font">Contactenos</span>
                  </li>
                  <li class="nav-item opciones">
                      <i class="fa-solid fa-chart-simple margin-icono size-icon"></i>
                      <span class="text-list-font">Salir</span>
                  </li>
              </ul>
      
          </div>
      
      </nav>
      
      `;
    }
  }

customElements.define('nav-menu', NavMenu);