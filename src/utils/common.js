function getTimeUnits(u) {
  const units = {
    'd': '天',
    'h': '时',
    'm': '分',
    's': '秒'
  }
  if (getUserLang() === 'zh-CN') {
    return units[u]
  }
  return u
}

export function timeOffset(a, b) {
  const start = safeDate(a)
  const end = safeDate(b)
  const offset = (end - start) / 1000
  return readableSecond(offset)
}

function readableSecond(offset) {
  const days = offset / 3600 / 24
  const hours = offset / 3600
  const minutes = offset / 60
  const seconds = offset

  if (days > 1) {
    return days.toFixed(1) + ' ' + getTimeUnits('d')
  } else if (hours > 1) {
    return hours.toFixed(1) + ' ' + getTimeUnits('h')
  } else if (minutes > 1) {
    return minutes.toFixed(1) + ' ' + getTimeUnits('m')
  } else if (seconds > 1) {
    return seconds.toFixed(1) + ' ' + getTimeUnits('s')
  }
  return ''
}

function getUserLang() {
  const userLangEN = document.cookie.indexOf('django_language=en')
  if (userLangEN === -1) {
    return 'zh-CN'
  } else {
    return 'en-US'
  }
}

function safeDate(s) {
  s = cleanDateStr(s)
  return new Date(s)
}

function cleanDateStr(d) {
  for (let i = 0; i < 3; i++) {
    if (!isNaN(Date.parse(d))) {
      return d
    }
    if (!isNaN(Number(d))) {
      return d
    }
    switch (i) {
      case 0:
        d = d.split('/').join('-')
        break
      case 1:
        d = d.split('+')[0].trimRight()
        break
    }
  }
  return null
}

export function toSafeLocalDateStr(d) {
  const date = safeDate(d)
  // var date_s = date.toLocaleString(getUserLang(), {hour12: false});
  const date_s = date.toLocaleString(getUserLang(), { hourCycle: 'h23' })
  return date_s
}

export function getApiPath(that) {
  const pagePath = that.$route.path
  const isOrgPath = pagePath.split('/').indexOf('orgs') !== -1
  if (isOrgPath) {
    return `/api/v1/orgs/orgs/${pagePath.split('/').pop()}/`
  }
  return `/api/v1${pagePath}/`
}

export function confirm({ msg, title, perform, success, failed, type = 'warning' }) {
  this.$alert(msg, title, {
    type: type,
    confirmButtonClass: 'el-button--info',
    showCancelButton: true,
    beforeClose: async(action, instance, done) => {
      if (action !== 'confirm') return done()
      instance.confirmButtonLoading = true
      try {
        await perform()
        done()
        if (typeof success === 'string') {
          this.$message.success(success)
        }
      } finally {
        instance.confirmButtonLoading = false
      }
    }
  })
}

export function formatDate(inputTime) {
  const date = new Date(inputTime)
  const y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let minute = date.getMinutes()
  // let second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  // second = second < 10 ? ('0' + second) : second
  // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
  return y + '-' + m + '-' + d + 'T' + h + ':' + minute
}

const uuidPattern = /[0-9a-zA-Z\-]{36}/
export function hasUUID(s) {
  return s.search(uuidPattern) !== -1
}
