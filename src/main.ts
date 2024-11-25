import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router'
import {routes} from './app/routes'
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient(),provideToastr()],
})
  .catch((err) => console.error(err));
