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
    // 紧凑（裁员）：去掉数组里不优雅的元素 false, null, 0, "", undefined, 以及 NaN
    var i = 0, result = []
    while (i < array.length) {
      if (!(array[i] === false || array[i] === null || array[i] === 0 || 
        array[i] === "" || array[i] === undefined || array[i] !== array[i])) {
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


    var result = []
    return result.concat(...arguments)
  },

  difference: function(array, ...others) {
    // 第一个参数里，没有在后面的参数里再次数出现过的元素挑出来。拗口(。・・)ノ 简单说就相当于去重。
    var goal = []
    var result = []
    goal = goal.concat(...others)
    //console.log(...goal)
    for (var i = 0; i < array.length; i++) {
      if (goal.indexOf(array[i]) == -1) {
        result.push(array[i])
      }
    }
    return result
  },

  differenceBy: function(arrayInspect, arrayExclude, whatWay) {
    // 在前一个函数的基础上，按照指定的函数、数值键等进行筛选去重
  },
  
  differenceWith: function() {

  },

  drop: function(array, n = 1) {
    // 丢弃：丢弃左起 n 个元素
    return array.slice(n)
  },

  dropRight: function() {
    // 丢弃右侧：丢弃右侧 n 个元素
    return array.slice(0, n)
  },

  dropRightWhile: function() {},

  dropWhile: function(array, arg) {
    switch (typeof arg) {
      case "string":
      break;
      case "object":
      break;
      case "function":
      break;
      case "array":
      break;
    }
  },

  fill: function(array, value, start = 0, end) {
    if (end) {
      return array.fill(value, start, end)
    } else {
      return array.fill(value, start, array.length)
    }
  },

  findIndex: function() {},

  findLastIndex: function() {},

  head: function(array) {
    if (array === []) {
      return undefined
    } else {
      return array[0]
    }
  },

  flatten: function(array) {
    // TODO 下次尝试用 Array.map() 实现一遍
    for (var i = 0; i < array.length; i++) {
      if (array[i] instanceof Array) {
        let leftPart = array.splice(0, i)
        let rightPart = array.splice(1)
        i += (array[0].length - 1)
        array = leftPart.concat(array[0]).concat(rightPart)
      }
    }
    return array
  },
}

