import {Component, Input, OnInit} from "@angular/core";

import {Cave} from "../../domain/cave";
import {DetailCaveComponent} from "./detail-cave.component";
import {CaveService} from "../../service/cave.service";

@Component({
    selector: 'liste-cave',
    templateUrl: 'app/composant/cave/liste-cave.component.html',
    directives: [DetailCaveComponent],
    providers: [CaveService]
})

export class ListeCaveComponent implements OnInit {

    /**
     * Constructeur définissant le fournisseur de CaveService à injecter.
     * @param caveService Le fournisseur de CaveService.
     */
    public constructor(private caveService: CaveService) { }

    // Caves à afficher.
    public caves: Cave[];

    // Cave sélectionnée dans la liste.
    public caveSelectionnee: Cave;


    public chargerCave(){

        //noinspection TypeScriptUnresolvedFunction
        this.caveService
            .obtenirCaves()
            .then(resul => this.caves = resul);
    }


    /**
     * Sélectionner une cave.
     *
     * @param cave La cave sélectionnée.
     */
    public selectionnerCave(cave: Cave) {
        this.caveSelectionnee = cave;
    }

    public ngOnInit() {
        this.chargerCave();
    }

}






