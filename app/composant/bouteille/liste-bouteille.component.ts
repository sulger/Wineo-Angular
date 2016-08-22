import {Component, OnInit} from "@angular/core";
import {Bouteille} from "../../domain/bouteille";
import {DetailBouteilleComponent} from "./detail-bouteille.component";
import {BouteilleService} from "../../service/bouteille.service";


import {DataTable, Column, TabPanel, TabView, Header, Footer, Dialog, Button, InputText} from "primeng/primeng";

import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";
@Component({
    selector: 'liste-bouteille',
    templateUrl: 'app/composant/bouteille/liste-bouteille.component.html',
    directives: [DetailBouteilleComponent ,DataTable, Column, TabPanel, TabView, Header, Footer, Dialog, Button, InputText, ROUTER_DIRECTIVES,]
    ,
    providers: [BouteilleService]
})

export class ListeBouteilleComponent implements OnInit {

    public bouteilles: Bouteille[];

    public bouteilleSelectionnee:Bouteille;

    public nouvelleBouteille:Bouteille = new Bouteille();

    public ngOnInit() {
        this.chargerBouteille();
    }

    constructor(private bouteilleService: BouteilleService) {

    }


    public chargerBouteille() {
        this.bouteilleService
            .obtenirBouteilles()
            .then(resultat => this.bouteilles = resultat);
    }

    public creerNouvelleBouteille() {
        this.bouteilleService.ajouterBouteilles(this.nouvelleBouteille);

    }

    public supprimerBouteille() {

        this.bouteilleService
            .supprimerBouteilles(this.bouteilleSelectionnee.reference);
        // .then();
    }

    public modifier() {
        this.bouteilleService.modifierBouteilles(this.bouteilles);
    }


}
