import {RouterConfig, provideRouter} from "@angular/router";
import {ListeCaveComponent} from "../composant/liste-cave.component";
import {AccueilComponent} from "../composant/accueil.component";
import {ListeBouteilleComponent} from "../composant/liste-bouteille.component";

/**
 * Nous créons un ensemble de règles de navigation qui vont servir
 * de configuration à notre service de routage.
 * @type {{path: string; redirectTo: string; patchMatch: string}[]}
 */
const routes: RouterConfig = [

    {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'caves',
        component: ListeCaveComponent
    },
    {
        path: 'bouteilles',
        component: ListeBouteilleComponent
    }

]

/**
 * Nous créons une service de routage en utilisant la configuration ci-dessus.
 * Nous devons ensuite le boostraper ou l'injecter
 * dans les composants utilisant la navigation (voir main.ts et app.component.ts).
 * @type {any[][]}
 */
export const routerService = [

    provideRouter(routes)

]