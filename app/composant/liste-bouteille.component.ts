import {Component, OnInit} from "@angular/core";
import {Bouteille} from "../domain/bouteille";
import {CaveService} from "../service/cave.service";
import {DetailBouteilleComponent} from "./detail-bouteille.component";

@Component({
    selector: 'liste-bouteille',
    templateUrl: 'app/composant/liste-bouteille.component.html',
    directives: [DetailBouteilleComponent],
    providers: [CaveService]
})

export class ListeBouteilleComponent implements OnInit {

    constructor(private caveService: CaveService) {

    }

    public chargerBouteille(){
        this.bouteilles = this.caveService
            .obtenirBouteilles();
    }

    public bouteilles: Bouteille[] = [ ];

    public ngOnInit() {
    }
}
