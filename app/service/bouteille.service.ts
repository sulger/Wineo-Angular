
import {Injectable} from "@angular/core";

import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Bouteille} from "../domain/bouteille";

import {Json} from "@angular/forms/src/facade/lang";


@Injectable()
export class BouteilleService{

    constructor (private http: Http) { }

    public ajouterBouteilles(bouteille: Bouteille): Promise<Response> {
        let headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options: RequestOptions = new RequestOptions({
            'headers': headers
        });

        return this.http
            .post('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille', Json.stringify(bouteille),options)
      //      .toPromise();
            .toPromise();
    }


    public obtenirBouteilles(): Promise<Bouteille[]> {


        return this.http
            .get('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille')
            .toPromise()
            .then(response => response.json() as Bouteille[]);
    }

    public supprimerBouteilles(identifiant:String):void {

        let urlDelete = 'http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille/' + identifiant;


        this.http
            .delete(urlDelete)
            .toPromise()
            .then()
            .catch();
    }

    public modifierBouteilles(bouteilles: Bouteille[]): Promise<Bouteille[]> {

        let headers: Headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options: RequestOptions = new RequestOptions({
            'headers': headers
        });


        return this.http
            .put('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille', Json.stringify(bouteilles),
                options)
            .toPromise()
            .then(response => response.json() as Bouteille[])
            .catch();
    }

}
