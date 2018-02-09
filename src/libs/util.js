const util = {}

util.title = function (title) {
  title = title || 'HI superX'
  window.document.title = title
}

export default util
