import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ListeBouteilleComponent} from "./composant/liste-bouteille.component";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [ListeBouteilleComponent]
})

export class AppComponent {

}