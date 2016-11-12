var spark = require('./source/sparkline')

var data = [1, 2, 3, 4, 1, 6]
var newData = [1, 2, 3, 4, 1, 6, 6, 4]

var graph = spark.draw(data)

document.body.appendChild(graph)

setTimeout(
  function () {
    var newGrpah = spark.draw(newData)
    document.body.appendChild(newGrpah)
  },
  2000
)
