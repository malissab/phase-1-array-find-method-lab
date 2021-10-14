function isWin (record) {
     return record.result === 'W'
}
const superbowlWin = record => {
     let win = record.find(isWin)
     if (win) {
          return win.year
     } else {
          return win
     }
}