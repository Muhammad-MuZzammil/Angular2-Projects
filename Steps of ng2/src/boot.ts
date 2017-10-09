import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app/app';

import { APP_ROUTER_PROVIDERS } from './routes/routes';




bootstrap(AppComponent,[
    APP_ROUTER_PROVIDERS
]).catch(err=>console.log(err)
);