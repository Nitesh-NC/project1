import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faHouse, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, fa42Group} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faCoffee = faCoffee
  faHouse = faHouse
  faFacebook = faFacebook
  faTwitter = faTwitter
  fa42Group = fa42Group
  faRightFromBracket = faRightFromBracket



}
