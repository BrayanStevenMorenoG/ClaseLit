import { LitElement, html } from 'lit-element';
import styleScc from "./menu-style";

export class ContainerMenu extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    
      
      <br><br><br><br><br><br>
      
          <div class="container-fluid">
              <div class="row">
                <opciones-menu></opciones-menu>
                <col-menu></col-menu>
              </div>
          </div>
      
      `;
    }
  }

customElements.define('container-menu', ContainerMenu);