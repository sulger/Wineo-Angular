import {Component, Input} from "@angular/core";

import {Cave} from "../../domain/cave";
import {Bouteille} from "../../domain/bouteille";

@Component({
    selector: 'ajout-bouteille',
    templateUrl: 'app/composant/bouteille/ajout-bouteille.component.html'
})

export class AjoutBouteilleComponent {

    // Cave cible de l'ajout.
    @Input()
    public cave: Cave;

    // Bouteille à ajouter.
    public bouteille: Bouteille = new Bouteille();

    /**
     * Ajouter une nouvelle bouteille
     */
    public ajouterNouvelleBouteille() {
        //noinspection TypeScriptUnresolvedFunction
        this.cave.bouteilles.push(Object.assign({ }, this.bouteille));
        // Nous réinitialisons la bouteille liée au formulaire.
        this.bouteille = new Bouteille();
    }

}
