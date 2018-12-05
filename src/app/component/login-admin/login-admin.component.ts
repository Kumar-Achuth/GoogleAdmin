import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.btn').click(function () {
        var email = $('#inputEmail').val();
        var password = $('#inputPassword').val()
        var at = email.indexOf("@");
        var dot = email.indexOf(".");
        var com = email.indexOf("com");
        if (email == "") {
          $('#email').focus();
          $('#msg').text("Enter an email id");
          return false;
        }
        else if (password == "") {
          $("#inputPassword").focus();
          $('#msgp').text("Enter a password");
          return false;
        }
        else if (at < 1 || (dot - at) < 2 || com < 1) {
          $("#inputEmail").focus();
          $('#msg').text("Enter valid email id");
          return false;
        }
        const data = {
          "email": $("#inputEmail").val(),
          "password": $("#inputPassword").val()
        }
        console.log(data);
        $.ajax({
          url: 'http://34.213.106.173/api/user/adminLogin',
          type: "POST",
          data: data,
          success: function (result) {
            console.log(result)
            localStorage.setItem('token', result.id)
            document.location.href = "/loginDashboard"
          },
          error: function (error) {
            console.log(error)
            $(`p#errorMessage`).html('Email/Password Incorrect')
          }
        })
        return false;
      })
    })
  }
}
