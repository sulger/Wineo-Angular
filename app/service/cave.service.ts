import { Cave } from "../domain/cave";
import {Injectable} from "@angular/core";

@Injectable()
export class CaveService {

    // Mock d'une liste de cave
    public caves: Cave[] = [
        {
            nomProprietaire: 'Toto',
            capaciteMaximale: 100,
            emplacement: 'AltF4',
            bouteilles: [
                {
                    reference: 'KIFJG',
                    designation: 'Chablis',
                    contenance: 0.75,
                    annee: 2014
                },
                {
                    reference: 'FHEBIE',
                    designation: 'Champagne',
                    contenance: 1,
                    annee: 2015
                },
                {
                    reference: 'EFEFK',
                    designation: 'Bordeaux',
                    contenance: 0.75,
                    annee: 2011
                }
            ]
        },
        {
            nomProprietaire: 'Titi',
            capaciteMaximale: 25,
            emplacement: 'F5',
            bouteilles: [
                {
                    reference: 'JDLFJ',
                    designation: 'Chardonnais',
                    contenance: 0.75,
                    annee: 2012
                },
                {
                    reference: 'LYFHGT',
                    designation: 'Coca-Cola',
                    contenance: 2,
                    annee: 2016
                }
            ]
        },
        {
            nomProprietaire: 'Michu',
            capaciteMaximale: 5,
            emplacement: 'D2',
            bouteilles: [
                {
                    reference: 'MDSCN',
                    designation: 'Lambrusco',
                    contenance: 0.75,
                    annee: 2014
                },
                {
                    reference: 'PCEIEZC',
                    designation: 'Saint-Julien',
                    contenance: 0.75,
                    annee: 1998
                },
                {
                    reference: 'CSCSCR',
                    designation: 'Bordeaux',
                    contenance: 0.75,
                    annee: 2014
                }
            ]
        }
    ]

    public obtenirCaves(): Cave[] {
        return this.caves;
    }

}
