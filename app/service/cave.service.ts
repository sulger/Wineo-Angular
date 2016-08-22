import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Cave} from "../domain/cave";
import {Bouteille} from "../domain/bouteille";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CaveService {

    constructor (private http: Http) { };

    //noinspection TypeScriptUnresolvedVariable
    public obtenirCaves(): Promise<Cave[]> {

        //noinspection TypeScriptUnresolvedFunction
        return this.http
            .get('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/caves')
            .toPromise()
            .then(response => response.json() as Cave[]);
    }
}
