import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  post = [
    {
      name: 'Mon premier post',
      description: 'cc',
      status: ''
    },
    {
      name: 'Mon deuxième post',
      description: 'cc',
      status: ''
    },
    {
      name: 'Encore un post',
      description: 'cc',
      status: ''
    }

  ];

}
