/**
 * Created by gerard on 07/08/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Bouteille} from "../../domain/bouteille";
import {DetailBouteilleComponent} from "./detail-bouteille.component";
import {BouteilleService} from "../../service/bouteille.service";


@Component({
    selector: 'creation-bouteille',
    templateUrl: 'app/composant/creation_bouteille/creation-bouteille.component.html'
})

export class CreationBouteilleComponent implements OnInit {

// Bouteille à ajouter.
    public bouteille: Bouteille = new Bouteille();


    /**
     * Ajouter une nouvelle bouteille
     */

    public constructor(private bouteilleService: BouteilleService) { }
    public creerNouvelleBouteille() {

        this.bouteille.annee = 2005;
        this.bouteille.contenance = 20;
        this.bouteille.designation = "titi";



        // Nous réinitialisons la bouteille liée au formulaire.
        this.bouteille = new Bouteille();
    }



    public ngOnInit() {
        this.bouteilleService.creerBouteilles();
    }


}
