# 日历组件（LibCalendar）
基于fullcalendar插件封装的日历组件
## 组件实现

```vue
<LibCalendar />
```
## 组件示例
:::preview
demo-preview=../examples/LibCalendarExample.vue
:::
## 组件属性
### 基础属性
| 参数 | 说明 | 类型 | 默认值 | 
| :--- | :-----------: | :---: | :---: |
| local | 日历显示信息 | String | 'zh-cn' |
| initialView | 视图模式 | String | 'dayGridMonth' |
| buttonText | 按钮文字 | Object | &#123; today: '今天',month: '月',week: '周',day: '日',prevYear: '上一年',nextYear: '下一年',prev: '上一月',next: '下一月' &#125; |
| headerToolbar | 头部工具栏 | Object | &#123;start: 'title',center: '',end: 'prev today next' &#125; |
| footerToolbar | 底部工具栏 | Object | ----- |
| events | 日历事件 | EventItem[] | () => [] |
| eventContent | 自定义渲染内容方法 | Function | ----- |
