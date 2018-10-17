import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {

$(document).ready(function(){
  // const Url = 'http://34.213.106.173/api/user/adminLogin';
  $('.btn').click(function(){
    const data = {
          "email" : $("#inputEmail").val(),
          "password" : $("#inputPassword").val()
        }
        console.log(data);
    $.ajax({
      url : 'http://34.213.106.173/api/user/adminLogin',
      type : "POST",
      data : data,
      success : function(result){
        console.log(result)
        localStorage.setItem('token',result.id)
        window.location.href="/loginDashboard"
      },
      error : function(error){
        console.log(error)
        $(`p#errorMessage`).html('Email or Password Incorrect')
      }
    })
    return false;
  })
})
  }
}
