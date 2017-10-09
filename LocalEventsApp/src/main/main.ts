import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../AppModule/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
