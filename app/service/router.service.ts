import {RouterConfig, provideRouter} from "@angular/router";
import {ListeCaveComponent} from "../composant/liste-cave.component";

/**
 * Nous créons un ensemble de règles de navigation qui vont servir
 * de configuration à notre service de routage.
 * @type {{path: string; redirectTo: string; patchMatch: string}[]}
 */
const routes: RouterConfig = [

    {
        path: '',
        redirectTo: '/caves',
        pathMatch: 'full'
    },
    {
        path: 'caves',
        component: ListeCaveComponent
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