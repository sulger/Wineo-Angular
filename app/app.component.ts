import {Component, OnInit} from "@angular/core";
import {Cave} from "./domain/cave";
import {Bouteille} from "./domain/bouteille";
import {CaveService} from "./service/cave.service";
import {DetailBouteilleComponent} from "./composant/detail-bouteille.component";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html',
    directives: [DetailBouteilleComponent],
    providers: [CaveService]
})

export class AppComponent implements OnInit {

    public constructor(private caveService: CaveService) { }

    public caves: Cave[];

    // Cave sélectionnée dans la liste.
    public caveSelectionnee: Cave;

    // Bouteille sélectionnée dans la liste.
    public bouteilleSelectionnee: Bouteille;

    // Bouteille à créer.
    public nouvelleBouteille: Bouteille = new Bouteille();

    /**
     * Ajouter une nouvelle bouteille
     */
    public ajouterNouvelleBouteille() {
        this.caveSelectionnee.bouteilles.push(Object.assign({ }, this.nouvelleBouteille));
    }

    /**
     * Sélectionner une cave.
     *
     * @param cave La cave sélectionnée.
     */
    public selectionnerCave(cave: Cave) {
        this.caveSelectionnee = cave;
    }

    /**
     * Sélectionner une bouteille.
     *
     * @param bouteille La bouteille sélectionnée.
     */
    public selectionnerBouteille(bouteille: Bouteille) {
        this.bouteilleSelectionnee = bouteille;
    }

    public ngOnInit() {
        this.caves = this.caveService.obtenirCaves();
    }

}