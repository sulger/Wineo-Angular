import {Component, OnInit} from "@angular/core";

import {Cave} from "./domain/cave";
import {Bouteille} from "./domain/bouteille";

import {CaveService} from "./service/cave.service";

import {ListeCaveComponent} from "./composant/liste-cave.component";

@Component({
    selector: 'wineo',
    templateUrl: 'app/app.component.html',
    directives: [ListeCaveComponent],
    providers: [CaveService]
})

export class AppComponent implements OnInit {

    public constructor(private caveService: CaveService) { }

    public caves: Cave[];

    public ngOnInit() {
        this.caves = this.caveService.obtenirCaves();
    }

}