import {Component, OnInit} from "@angular/core";
import {Bouteille} from "../../domain/bouteille";
import {DetailBouteilleComponent} from "./detail-bouteille.component";
import {BouteilleService} from "../../service/bouteille.service";

@Component({
    selector: 'liste-bouteille',
    templateUrl: 'app/composant/bouteille/liste-bouteille.component.html',
    directives: [DetailBouteilleComponent],
    providers: [BouteilleService]
})

export class ListeBouteilleComponent implements OnInit {

    public bouteilles: Bouteille[];

    constructor(private bouteilleService: BouteilleService) { }

    public chargerBouteille(){
        this.bouteilleService
            .obtenirBouteilles()
            .then(resultat => this.bouteilles = resultat);
    }

    public ngOnInit() {
        this.chargerBouteille();
    }
}
