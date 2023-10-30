import { LitElement, html } from 'lit-element';
import styleScc from "./menu-style";

export class Col1Menu extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    

          <div class="col-sm">
          <div class="card box-shadow" style="width: 70%;margin-left: 30px; border-radius:10px; width:230px;">
              <div class="card-body">
                  <div class="text-center">
                      <div class="row">
                          <div class="col-sm">
                          </div>
                          <div class="col-sm">
                              <h5 class="text-cat-scret">Actas</h5>
                              <hr style="width: 100%;">
                          </div>
                          <div class="col-sm">

                          </div>
                      </div>
                      <img src="img/Actas.png" class="imagenes">
                  </div>
                  <br>
                  <div class="text-center">
                          <button type="submit" class="boton-solicitudes">GESTIONAR</button>
                  </div>

              </div>
          </div>
      </div>
      
      `;
    }
  }

customElements.define('col1-menu', Col1Menu);