import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {ListeBouteilleComponent} from "./composant/bouteille/liste-bouteille.component";
import {ListeCaveComponent} from "./composant/cave/liste-cave.component";
import {AccueilComponent} from "./composant/accueil.component";
import {CreationBouteilleComponent} from "./composant/bouteille/creation-bouteille.component";



@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [AccueilComponent,ListeBouteilleComponent,ListeCaveComponent,CreationBouteilleComponent]


})

export class AppComponent {

}