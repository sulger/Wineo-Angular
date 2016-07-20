import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {routerService} from "./service/router.service";

bootstrap(AppComponent, [routerService]);
