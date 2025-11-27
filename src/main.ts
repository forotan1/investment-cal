import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.modules';

platformBrowser().bootstrapModule(AppModule).catch(err => console.error(err));
