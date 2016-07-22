import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Cave} from "../domain/cave";
import {Bouteille} from "../domain/bouteille";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CaveService {

    constructor(private http: Http) { };

    public obtenirBouteilles(): Promise<Bouteille[]> {

        return this.http
            .get('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/bouteille')
            .toPromise()
            .then((response: Response) => response.json() as Bouteille[]);
    }

    public obtenirCaves(): Promise<Cave[]> {

        return null;
    }

}
