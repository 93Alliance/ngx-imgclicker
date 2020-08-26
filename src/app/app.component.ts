import { Component } from '@angular/core';
import { Options } from '@flywine93/ngx-imgclicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'imgclicker-project';
  options: Options = {
    urlCallback: (url: string) => {
      return url;
    }
  };

}
