import {Http, Headers, RequestOptions} from "@angular/http";
import {Cave} from "../domain/cave";
import {Json} from "@angular/forms/src/facade/lang";
import {Injectable} from "@angular/core";

@Injectable()
export class CaveService {

    constructor(private http: Http) { };

    public obtenirCaves(): Promise<Cave[]> {

               //noinspection TypeScriptUnresolvedFunction
        return this.http
                .get('http://localhost:8080/middleware-0.1-SNAPSHOT/ws/cave')

                .toPromise()
                .then(response => response.json() as Cave[]);


    }

}
