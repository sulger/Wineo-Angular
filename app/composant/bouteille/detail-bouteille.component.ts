import {Component, Input} from "@angular/core";
import {Bouteille} from "../../domain/bouteille";


@Component({
    selector: 'detail-bouteille',
    templateUrl: 'app/composant/bouteille/detail-bouteille.component.html'
})

export class DetailBouteilleComponent {

    /**
     * Ce composant exprime son besoin de
     * se voir fournir une bouteille lors de son utilisation.
     * Nous devons lui définir quelle bouteille il doit afficher.
     */
    @Input()
    public bouteille: Bouteille;

}