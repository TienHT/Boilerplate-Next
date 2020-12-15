const clientRoutes = [{
        path: "/ca-si",
        name: "singer",
        title: 'Ca sĩ',
        layout: 'public'
    },
    {
        path: "/tin-tuc",
        name: "news",
        title: 'Bài viết',
        layout: 'public',
        children: [{
                path: '/tin-tuc/kien-thuc',
                name: '',
                title: 'Kiến thức'
            },
            {
                path: '/tin-tuc/hoi-dap',
                name: '',
                title: 'Hỏi đáp'
            },
            {
                path: '/tin-tuc/kien-thuc',
                name: '',
                title: 'Kiến thức'
            },
            {
                path: '/tin-tuc/kien-thuc',
                name: '',
                title: 'Giới thiệu ca sĩ'
            },
            {
                path: '/tin-tuc/thanh-nhac',
                name: '',
                title: 'Thanh nhạc'
            }
        ],
    }, {
        path: '/thanh-vien',
        name: '',
        title: 'Thành viên'
    },
    {
        path: '/khoa-hoc',
        name: '',
        title: 'Khoá học'
    }
];
export default clientRoutes;