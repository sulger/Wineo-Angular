import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Bouteille} from "../domain/bouteille";

@Injectable()
export class BouteilleService{

    constructor (private http: Http) { }

    public obtenirBouteilles(): Promise<Bouteille[]> {

        return this.http
            .get('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille')
            .toPromise()
            .then(response => response.json() as Bouteille[]);
    }

}
