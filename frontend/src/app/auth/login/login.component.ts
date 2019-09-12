import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSpinnerService } from '../../shared/modules/mat-spinner/mat-spinner.service';
import { UserService } from '../../services/api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  pwd: string;

  constructor(private router: Router,
              private spinner: MatSpinnerService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.spinner.show();
    const params = {username: this.username, pwd: this.pwd};
    this.userService.login(params).subscribe((res: any) => {
      if (res.length > 0) {
        this.router.navigate(['/home']).then();
      } else {
        // no user
      }
    });
  }

  private handlerError() {
    sessionStorage.clear();
  }
}
