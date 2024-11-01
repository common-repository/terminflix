if (typeof $ == 'undefined') {
   var $ = jQuery;
}
var flixEmbed = function () {

  this.formular = document.getElementById('flixEmbed')
  this.data = {}

  this.form = function () {
    var data = this.formular.innerHTML
    data = atob(data)
    this.data = JSON.parse(data)
    this.getForms()
  }

  this.setFocus = function (event) {
    event.target.select()
    var after = document.createElement('h2')
    after.innerHTML = 'Erfolgreich kopiert. Jetzt als Shortcode in Beitrag / Seite einfügen.'
    event.target.after(after)

    try {
      document.execCommand('copy')
      event.target.style.display = 'none'
      setTimeout(function () {
        after.remove()
        event.target.style.display = 'inherit'
      }.bind(this), 5000)
    } catch (err) {
      alert('Oops, unable to copy')
    }
  }

  this.getForms = function () {
    $.post(
      'https://api.bookingflix.com/de/assistent/get_assistents/',
      { user: this.data.user },
      function (ret) {
        if (ret[0]) {
          this.getEmbedCodes(ret[1])
        }
      }.bind(this)
    )
  }
  this.getEmbedCodes = function (data) {
    var html = []
    data.forEach(function (v) {
      html.push('<h3 style="color: ' + v.color + '">Termin-Kalender - "' + v.title + '" - als Shortcode verwenden</h3>')
      html.push('<input class="copy" type="text" style="display: inline-block; width: 100%; box-sizing: border-box; margin-bottom: 20px" value=\'[bookingflix user="' + this.data.wp + '" ID="' + v.ID + '" language="de"]\' />')
    }.bind(this))

    this.formular.innerHTML = html.join('')
    this.formular.style.display = 'inherit';
    var els = document.getElementsByClassName('copy');
    Array.prototype.forEach.call(els, function(el) {
      el.onclick = function (element) { this.setFocus(element) }.bind(this)
    }.bind(this))
  }
}

var fQ = new flixEmbed()
fQ.form()
