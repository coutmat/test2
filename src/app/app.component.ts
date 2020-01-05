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
      description: 'Lorem ipsum dolor sit amet,consecteur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolcre magna aliqua.Ut enim minim ad miniù veniaù, quis',
      status: ''
    },
    {
      name: 'Mon deuxième post',
      description: 'Lorem ipsum dolor sit amet,consecteur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolcre magna aliqua.Ut enim minim ad miniù veniaù, quis',
      status: ''
    },
    {
      name: 'Encore un post',
      description: 'Lorem ipsum dolor sit amet,consecteur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolcre magna aliqua.Ut enim minim ad miniù veniaù, quis',
      status: ''
    }

  ];

}
