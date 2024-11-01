if (typeof $ == 'undefined') {
   var $ = jQuery;
}
var flixSignOut = function () {

  this.formular = $('#flixDisconnect')

  this.form = function () {
    this.formular.submit(function () {
      this.deleteLogin();
      return false;
    }.bind(this));
  }

  this.deleteLogin = function () {
    $.post(
      this.formular.attr('action'),
      {
        data: {
          wp: this.formular.attr('data-user')
        },
        action: 'setDisconnect'
      },
      function (ret) {
        localStorage.removeItem("flix_login")
        localStorage.removeItem("flix_login_shares")
        localStorage.removeItem("flix_login_share_email")
        window.open("?page=terminflix", "_self");
      }
    )
  }

}

var fQ = new flixSignOut()
fQ.form()
