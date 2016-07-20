import {Component, Input} from "@angular/core";

import {Cave} from "../domain/cave";
import {DetailCaveComponent} from "./detail-cave.component";

@Component({
    selector: 'liste-cave',
    templateUrl: 'app/composant/liste-cave.component.html',
    directives: [DetailCaveComponent]
})

export class ListeCaveComponent {

    // Caves à afficher.
    @Input()
    public caves: Cave[];

    // Cave sélectionnée dans la liste.
    public caveSelectionnee: Cave;

    /**
     * Sélectionner une cave.
     *
     * @param cave La cave sélectionnée.
     */
    public selectionnerCave(cave: Cave) {
        this.caveSelectionnee = cave;
    }

}
