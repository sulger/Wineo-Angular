/**
 * Created by gerard on 07/08/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Bouteille} from "../../domain/bouteille";
import {DetailBouteilleComponent} from "./detail-bouteille.component";
import {BouteilleService} from "../../service/bouteille.service";
import {Json} from "@angular/common/esm/src/facade/lang";


@Component({
    selector: 'creation-bouteille',
    templateUrl: 'app/composant/bouteille/creation-bouteille.component.html',
    directives: [CreationBouteilleComponent],
    providers: [BouteilleService]
})

export class CreationBouteilleComponent implements OnInit {

// Bouteille à ajouter.

    // Bouteille à ajouter.
    public bouteille: Bouteille = new Bouteille();

    /**
     * Ajouter une nouvelle bouteille
     */


    public constructor(private bouteilleService: BouteilleService) { }



    public creerNouvelleBouteille(){


              this.bouteilleService
                 .creerBouteille()
                 .then(resultat => this.bouteille= resultat);
               this.bouteilleService
                    .consignerBouteille()
                   .then(resultat => this.bouteille.reference);


        }

        // Nous réinitialisons la bouteille liée au formulaire.
     //this.bouteille= new Bouteille();


    public ngOnInit() {
        this.creerNouvelleBouteille();
    }


}
