import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-login-dashboard',
  templateUrl: './login-dashboard.component.html',
  styleUrls: ['./login-dashboard.component.css']
})
export class LoginDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

$("#btn").click(function () {
  $(location).attr('href', "questionAdmin")
  })
    var token = localStorage.getItem('token');

    /** Api for getting UserList  */

    $(document).ready(function () {
      $(function () {
        $.ajax({
          url: 'http://34.213.106.173/api/user/getAdminUserList',
          type: "GET",
          data: token,
          success: function (result) {
            // console.log(result) ;
            var users = [];
            for (var i = 0; i < result.data.data.length; i++) {
              users.push([i + 1, result.data.data[i].firstName, result.data.data[i].lastName,
              result.data.data[i].email,
              result.data.data[i].service])
            }
            var table = $('#userList').DataTable({
              data: users,
              scrollY: 200,
            })
            $('#userList tbody').on('click', 'tr', function () {
              var id = this.id;
              console.log(id);
              var myindex = table.row(this).index();
              var index = $.inArray(id, users);
              console.log(myindex);
              if (index === -1) {
                users.push(id);
              } else {
                users.splice(index, 1);
              }
              console.log(result.data.data[myindex].firstName)
              $("#firstName").text(result.data.data[myindex].firstName);
              $("#lastName").text(result.data.data[myindex].lastName);
              $("#phoneNumber").text(result.data.data[myindex].phoneNumber);
              $("#role").text(result.data.data[myindex].role);
              $("#service").text(result.data.data[myindex].service);
              $("#createdDate").text(result.data.data[myindex].createdDate);
              $("#modifiedDate").text(result.data.data[myindex].modifiedDate);
              $("#userName").text(result.data.data[myindex].userName);
              $("#email").text(result.data.data[myindex].email);
              $("#myDataPopup").click();
            });
            console.log(users)
          },
          error: function (error) {
            console.log(error)
          }
        })
        return false;
      })
    })

    /** Api for  User Services */

    $(document).ready(function () {
      $(function () {
        $.ajax({
          type: "GET",
          url: 'http://34.213.106.173/api/user/UserStatics',
          headers: {
            'Authorization': token,
          },
          error: function (response) {
            console.log('Error in login');
          },
          success: function (response) {
            console.log("successfull");
            console.log(response);
            var arr = response.data.details;
            var html = '';
            for (let index = 0; index < arr.length; index++) {
              html += "<div class=' col-mr-4 col-md-6 col-sm-6 col-xs-6 col-lg-6 '>";
              html += "<div class='card '>";
              html += "<div class='card text-black bg-success mb-3 '>" + arr[index].service + "</div>";
              html += "<div class='card-body '>" + arr[index].count + "</div>";
              html += "</div";
              $("#services").html(html);
            }
          }
        })
      })
    })
    /** Api for logout  */
    $(document).ready(function () {
      $('#log').click(function () {
        $.ajax({
          url: 'http://34.213.106.173/api/user/logout',
          type: "POST",
          headers: {
            'Authorization': token,
          },
          success: function () {
            console.log("Logout Successfull");
            localStorage.removeItem('token')
            document.location.href = '/loginAdmin'
          },
        })
      })
    })


    $(document).ready(function () {
      $.ajax({
        type: 'GET',
        url: 'http://34.213.106.173/api/questionAndAnswerNotes/getUnApprovedAnswer',
        headers:
        {
          'Authorization': token
        },
        success: function (result) {
          console.log('unapproved')
          console.log(result);
        },
        error: function (error) {
          console.log(error);
        }
      })
    })
  }
}

