import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Cave} from "../domain/cave";
import {Bouteille} from "../domain/bouteille";
import "rxjs/Rx";

@Injectable()
export class CaveService {

    constructor(private http: Http) { };

    public obtenirBouteilles(): Bouteille[] {

        let request = new XMLHttpRequest();

        request.open('GET', 'http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille', false);
        request.send();

        let response = request.responseText;

        console.log(response);

        let bouteilles = JSON.parse(response);

        console.log(bouteilles)

        return bouteilles;
    }

    public obtenirCaves(): Promise<Cave[]> {

        return null;
    }

}
