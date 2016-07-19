import {Component} from "@angular/core";
import {Cave} from "./domain/cave";
import {Bouteille} from "./domain/bouteille";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    // Ensembles des caves
    public caves: Cave[] = [
        {
            nomProprietaire: 'Toto',
            capaciteMaximale: 100,
            emplacement: 'AltF4',
            bouteilles: [
                {
                    reference: 'KIFJG',
                    designation: 'Chablis',
                    contenance: 0.75,
                    annee: 2014
                },
                {
                    reference: 'FHEBIE',
                    designation: 'Champagne',
                    contenance: 1,
                    annee: 2015
                },
                {
                    reference: 'EFEFK',
                    designation: 'Bordeaux',
                    contenance: 0.75,
                    annee: 2011
                }
            ]
        },
        {
            nomProprietaire: 'Titi',
            capaciteMaximale: 25,
            emplacement: 'F5',
            bouteilles: [
                {
                    reference: 'JDLFJ',
                    designation: 'Chardonnais',
                    contenance: 0.75,
                    annee: 2012
                },
                {
                    reference: 'LYFHGT',
                    designation: 'Coca-Cola',
                    contenance: 2,
                    annee: 2016
                }
            ]
        },
        {
            nomProprietaire: 'Michu',
            capaciteMaximale: 5,
            emplacement: 'D2',
            bouteilles: [
                {
                    reference: 'MDSCN',
                    designation: 'Lambrusco',
                    contenance: 0.75,
                    annee: 2014
                },
                {
                    reference: 'PCEIEZC',
                    designation: 'Saint-Julien',
                    contenance: 0.75,
                    annee: 1998
                },
                {
                    reference: 'CSCSCR',
                    designation: 'Bordeaux',
                    contenance: 0.75,
                    annee: 2014
                }
            ]
        }
    ]

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

}