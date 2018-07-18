var iwj = {
  // “Array” Methods
  chunk: function(array, n) {
    // 块：将数组按照指定长度进行分块
    var result = []
    while (array.length > 0) {
      result.push(array.splice(0, n))
    }
    return result
  },

  compact: function(array) {
    // 紧凑（裁员）：去掉数组里不优雅的元素 false, null, 0, "", undefined, and NaN
    var i = 0, result = []
    while (i < array.length) {
      if (!(array[i] === false || array[i] === null || array[i] === 0 || array[i] === "" || array[i] === undefined || array[i] !== array[i])) {
        result.push(array[i])
      }
      i++
    }
    return result
  },

  concat: function() {
    // 拼接元素，得到一个新数组
    if (arguments.length === 0) {
      return []
    }
    var result = []
    for (var i = 0, item; item = arguments[i++];) {
      result = result.concat(item)
    }
    return result
  },
  
}

