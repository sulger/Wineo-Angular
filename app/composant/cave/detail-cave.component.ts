import {Component, Input} from "@angular/core";

import {Cave} from "../../domain/cave";
import {Bouteille} from "../../domain/bouteille";

import {DetailBouteilleComponent} from "../bouteille/detail-bouteille.component";
import {AjoutBouteilleComponent} from "../bouteille/ajout-bouteille.component";

@Component({
    selector: 'detail-cave',
    templateUrl: 'app/composant/cave/detail-cave.component.html',
    directives: [DetailBouteilleComponent, AjoutBouteilleComponent]
})

export class DetailCaveComponent {

    // Cave à détailler.
    @Input()
    public cave: Cave;

    /**
     * Bouteille sélectionnée dans la liste
     * des bouteilles de la cave détaillée.
     */
    public bouteilleSelectionnee: Bouteille;

    /**
     * Sélectionner une bouteille.
     *
     * @param bouteille La bouteille sélectionnée.
     */
    public selectionnerBouteille(bouteille: Bouteille) {
        this.bouteilleSelectionnee = bouteille;
    }

}
