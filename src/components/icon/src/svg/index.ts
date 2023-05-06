import { readdirSync, readFileSync } from 'fs'

let idPrefix = ''
const iconNames: string[] = []
const svgTitle = /<svg([^>+].*?)>/
const clearHeightWidth = /(width|height)="([^>+].*?)"/g
const hasViewBox = /(viewBox="[^>+].*?")/g
const clearReturn = /(\r)|(\n)/g // 清空换行符
const clearFill = /(fill="[^>+].*?")/g // 清理 svg 的 fill

function findSvgFile(dir: string = '../../../assets/icons/'): string[] {
  const svgRes = []
  // readdirSync,返回一个包含“指定目录下所有文件名称”的数组对象
  // [ Dirent { name: 'vue.svg', [Symbol(type)]: 1 } ]
  const dirents = readdirSync(dir, {
    withFileTypes: true
  })
  for (const dirent of dirents) {
    iconNames.push(`${idPrefix}-${dirent.name.replace('.svg', '')}`) // [ 'local-vue' ]
    // 如果path表示的是一个目录则返回true
    if (dirent.isDirectory()) {
      svgRes.push(...findSvgFile(dir + dirent.name + '/'))
    } else {
      const svg = readFileSync(dir + dirent.name)
        .toString()
        .replace(clearReturn, '')
        .replace(clearFill, 'fill=""')
        .replace(svgTitle, ($1, $2) => {
          let width = 0
          let height = 0
          let content = $2.replace(clearHeightWidth, (s1: string, s2: string, s3: number) => {
            if (s2 === 'width') {
              width = s3
            } else if (s2 === 'height') {
              height = s3
            }
            return ''
          })
          if (!hasViewBox.test($2)) {
            content += `viewBox="0 0 ${width} ${height}"`
          }
          // 去掉扩展名
          return `<symbol id="${idPrefix}-${dirent.name.replace('.svg', '')}" ${content}>`
        })
        .replace('</svg>', '</symbol>')
      svgRes.push(svg)
    }
  }
  return svgRes
}

/**
 *
 * @param path // 所有svg图标存放地址
 * @param perfix // 图标自定义前缀
 * @returns
 */
export const svgBuilder = (path: string, perfix = 'local') => {
  if (path === '') {
    return
  }
  idPrefix = perfix
  // 每个图标都是symbol标签，去掉了svg标签，只包含的svg内部嵌套标签，res是一个数组，每个元素就是一个图标
  const res = findSvgFile(path)
  return {
    name: 'svg-transform',
    transformIndexHtml(html: string) {
      /* eslint-disable */
      return html.replace(
        '<body>',
        `
        <body>
        <svg id="local-icon" data-icon-name="${iconNames.join(',')}" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        style="position: absolute; width: 0; height: 0">
        ${res.join('')}
        </svg>
        `
      )
      /* eslint-enable */
    }
  }
}
