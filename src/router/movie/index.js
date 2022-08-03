export default {
    // @表示为src目录
    path: '/movie',
    component: () =>
        import ('@/views/Movie'),
    // 配置二级子路由
    children: [{
            path: "city",
            component: () =>
                import ('@/components/City')
        },
        {
            path: "comingsoon",
            component: () =>
                import ('@/components/ComingSoon')
        },
        {
            path: "nowplaying",
            component: () =>
                import ('@/components/NowPlaying')
        },
        {
            path: "search",
            component: () =>
                import ('@/components/Search')
        },
        {
            path: "/movie",
            redirect: '/movie/nowplaying'
        }
    ]
}