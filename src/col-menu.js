import { LitElement, html } from 'lit-element';
import styleScc from "./menu-style";

export class ColMenu extends LitElement {

    static get styles(){
      return [styleScc];
    }

    render() {
      return html`

          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">    
      
          <div class="col-sm-9" style="margin-left: 400px;margin-top: -120px;">
            <row1-menu></row1-menu>
            <br>
            <row2-menu></row2-menu>
          </div>
      
      `;
    }
  }

customElements.define('col-menu', ColMenu);