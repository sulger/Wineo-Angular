import {Component} from "@angular/core";
import {Cave} from "./domain/cave";
import {Bouteille} from "./domain/bouteille";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {

    public cave: Cave = {
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
    }

    public nouvelleBouteille: Bouteille = new Bouteille();

    public ajouterNouvelleBouteille() {
        this.cave.bouteilles.push(this.nouvelleBouteille);
    }

}