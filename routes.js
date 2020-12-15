const clientRoutes = [{
    path: "/singer",
    name: "Singer",
    layout: 'public'
}, {
    path: "/singer/:id",
    name: "Current Singer",
    layout: 'public'
}, {
    path: "/news",
    name: "News",
    layout: 'public'
}, {
    path: "/",
    name: "AboutUs",
    layout: 'public'
}, {
    path: "/news/:id",
    name: "Single New",
    layout: 'public'
}, {
    path: "*",
    name: "NotFound",
    layout: 'public'
}
];
export default clientRoutes;