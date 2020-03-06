const menu = [{
    title: '首页',
    key: '/admin/home'
}, {
    title: 'UI',
    key: '/admin/ui',
    children: [
        {
            title: '按钮',
            key: '/admin/ui/buttons'
        },
        {
            title: '弹框',
            key: '/admin/ui/modals'
        },
        {
            title: 'loading',
            key: '/admin/ui/loadins'
        },
        {
            title: '通知提醒',
            key: '/admin/ui/notification'
        },
        {
            title: 'tab标签',
            key: '/admin/ui/tabs'
        },
        {
            title: '图片画廊',
            key: '/admin/ui/gallery'
        },
        {
            title: '通知提醒',
            key: '/admin/ui/carousel'
        },
    ]
},
{
    title: '表单',
    key: '/admin/form',
    children: [
        {
            title: '登录',
            key: '/admin/form/login',
        },
        {
            title: '表单',
            key: '/admin/form/reg',
        }
    ]
},
{
    title: '表格',
    key: '/admin/table'
},
{
    title: '权限设置',
    key: '/admin/premission'
}
]
export default menu;