if (typeof $ == 'undefined') {
   var $ = jQuery;
}
var flixQuickstart = function () {

  this.formular = $('#flixConnect')

  this.form = function () {
    this.formular.submit(function () {
      var data = {};
      this.formular.serializeArray().forEach(function (ret) {
        data[ret.name] = ret.value;
      })
      this.postForm(data);
      return false;
    }.bind(this));
  }
  this.postForm = function (data) {
    $.post(
      'https://api.bookingflix.com/de/user/get_login/',
      data,
      function (ret) {
        if (ret[0]) {
          $('#flixSuccess').show();
          this.saveLogin(ret[1])
        }
      }.bind(this)
    )
  }
  this.saveLogin = function (data) {
    $.post(
      this.formular.attr('action'),
      {
        data: {
          email: data.email,
          user: data.md5_id,
          wp: this.formular.attr('data-user')
        },
        action: 'setConnect'
      },
      function (ret) {
        window.open("?page=terminflix", "_self");
      }
    )
  },
  this.saveLogin2 = function (form, data, ret) {
    var data = {
      redirect: 'https://bookingflix.com/dashboard.html',
      user: ret.md5_id,
      date: new Date().getTime()
    }

    var url = 'https://bookingflix.com/admin/redirect/' + btoa(JSON.stringify(data)) + '.html'
    $('#flixSuccess').html('<iframe style="width: 100%; height: 100vh" src="'+ url +'"></iframe>')
  }
}

var fQ = new flixQuickstart()
fQ.form()
