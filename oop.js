// 实现Map，Set，Array类

function MyMap(arg1 = [], arg2 = []) {
  var keysArray = []
  var valuesArray = []
  for(var i = 0; i < arg1.length; i++) {
    keysArray.push(arg1[i])
  }
  for(var j = 0; j < arg2.length; j++) {
    valuesArray.push(arg2[j])
  }
  this.keysArray = keysArray
  this.valuesArray = valuesArray
  this.size = keysArray.length
}

MyMap.prototype = {
  clear: function() {
    this.keysArray = []
    this.valuesArray = []
    this.size = 0
  },

  delete: function(item) {
    if(this.keysArray.indexOf(item) !== -1){
      var location = this.keysArray.indexOf(item)
      this.keysArray = this.keysArray.slice(0, location).concat(this.keysArray.slice(location + 1))
      this.valuesArray = this.valuesArray.slice(0, location).concat(this.valuesArray.slice(location + 1))
      this.size -= 1
      return true
    } else {
      return false
    }
  },

  entries: function() {
    var array = []
    for (var i = 0; i < this.size; i++) {
      array.push([this.keysArray[i], this.valuesArray[i]])
    }
    var nextIndex = 0
    return {
      next: function() {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} : {done: true};
      }
    };
  },

  forEach: function(arg) {
    // the 'arg' is a callback function
    var array = []
    for (var i = 0; i < this.size; i++) {
      array.push([this.keysArray[i], this.valuesArray[i]])
    }
    for (var i = 0; i < this.size; i++) {
      arg(this.keysArray[i], this.valuesArray[i], array)
    }
  },

  get: function(arg) {
    var location = this.keysArray.indexOf(arg)
    return this.valuesArray[location]
  },

  has: function(arg) {
    if (this.keysArray.indexOf(arg) == -1) {
      return false
    } else {
      return true
    }
  },

  keys: function() {
    var array = []
    for (var i = 0;i < this.size; i++) {
      array.push(this.keysArray[i])
    }
    var nextIndex = 0
    return {
      next: function() {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} : {done: true}
      }
    }
  },

  set: function(arg1, arg2) {
    this.keysArray.push(arg1)
    this.valuesArray.push(arg2)
    var mapContent = ''
    for (var i = 0; i < this.keysArray.length; i++) {
      mapContent += this.keysArray[i]
      mapContent += ' => '
      mapContent += this.valuesArray[i]
      mapContent += ', '
    }
    return '▶Map(' + ++this.size + ') {' + mapContent + '}'
  },

  values: function() {
    var array = []
    for(var i = 0; i < this.size; i++) {
      array.push(this.valuesArray[i])
    }
    var nextIndex = 0
    return {
      next: function() {
        return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} : {done: true}
      }
    }
  },
}
