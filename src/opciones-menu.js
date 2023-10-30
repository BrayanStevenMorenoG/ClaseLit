import { LitElement, html } from 'lit-element';
import styleScc from "./menu-style";

export class OpcionesMenu extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    

          <div class="col-sm-3" style="margin-top: 5px;">
          <div class="card box-shadow menu">
              <ul style="padding-left: 1px;">
                  <li class="opciones">
                      <a href="" class="boton">
                          <img src="img/Balon.png" alt="" class="img-espacio">
                          <span class="text-list-font"><b>Inicio</b></span>
                      </a>
                      <li class="opciones">
                          <a href="" class="boton">
                              <img src="img/Balon.png" alt="" class="img-espacio">
                              <span class="text-list-font"><b>Secretaria</b></span>
                          </a>
                      </li>
                  </li>
              </ul>
          </div>
    </div>
        
      `;
    }
  }

customElements.define('opciones-menu', OpcionesMenu);