wx.cloud.init()
const db = wx.cloud.database()
const notes = db.collection('notes')

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 加载notes, page=1 形参 limit=10(一次加载), fn
const loadNotes = (fn, page = 1, limit = 10) => {
  const skip = (page - 1) * limit
  let total = 0
  notes
    .count()
    .then(res => {
      total = res.total
      return notes
        .limit(limit)
        .skip(skip)
        .get()
    })
    .then(res => {
      fn({
        total,
        data: res.data
      })
    })
}

module.exports = {
  formatTime: formatTime,
  loadNotes
}



// 加载notes, pages=1形参 limit=10, fn
// 参数默认值放在后面
    // return 数据集 异步，
    // 在promise里面return一个异步 可以继续then