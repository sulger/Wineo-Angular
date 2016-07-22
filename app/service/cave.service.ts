import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Cave} from "../domain/cave";
import {Bouteille} from "../domain/bouteille";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CaveService {

    constructor(private http: Http) { };

    public obtenirCaves(): Promise<Cave[]> {

        return null;
    }

}
