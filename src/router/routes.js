const routes = [
    {
        path: "/login",
        component: require("../views/login/index.vue").default,
    },
    {
        path: "/dashboard",
        component: require("../views/dashboard/index.vue").default,
        children: [
            {
                path: "userGroup",
                component:
                    require("../views/dashboard/views/userGroup/index.vue")
                        .default,
            },
            {
                path: "roleManagement",
                component:
                    require("../views/dashboard/views/roleManagement/index.vue")
                        .default,
            },
            {
                path: "resourceManagement",
                component:
                    require("../views/dashboard/views/resourceManagement/index.vue")
                        .default,
            },
            {
                path: "ProjectDetail",
                component:
                    require("../views/dashboard/views/ProjectDetail/index.vue")
                        .default,
            },
            {
                path: "TaskList",
                component:
                    require("../views/dashboard/views/TaskList/index.vue")
                        .default,
            },
            {
                path: "CustomerDetail",
                component:
                    require("../views/dashboard/views/CustomerDetail/index.vue")
                        .default,
            },
            {
                path: "bug",
                component: require("../views/dashboard/views/bug/index.vue")
                    .default,
            },
            {
                path: "risk",
                component: require("../views/dashboard/views/risk/index.vue")
                    .default,
            },
            {
                path: "CustomerList",
                component:
                    require("../views/dashboard/views/CustomerList/index.vue")
                        .default,
            },
            {
                path: "ProjectList",
                component:
                    require("../views/dashboard/views/ProjectList/index.vue")
                        .default,
            },
            {
                path: "POCList",
                component: require("../views/dashboard/views/POCList/index.vue")
                    .default,
            },
            {
                path: "addRoleUser",
                component:
                    require("../views/dashboard/views/addRoleUser/index.vue")
                        .default,
            },
            {
                path: "workHourStatistics",
                component:
                    require("../views/dashboard/views/workHourStatistics/index.vue")
                        .default,
            },
            {
                path: "userManagement",
                component:
                    require("../views/dashboard/views/userManagement/index.vue")
                        .default,
            },
            {
                path: "POCDetail",
                component:
                    require("../views/dashboard/views/POCDetail/index.vue")
                        .default,
            },
        ],
    },
    {
        path: "/permission_center",
        component: require("../views/permission_center/index.vue").default,
        children: [
            {
                path: "addRoleUser",
                component:
                    require("../views/permission_center/views/addRoleUser/index.vue")
                        .default,
            },
            {
                path: "resourceManagement",
                component:
                    require("../views/permission_center/views/resourceManagement/index.vue")
                        .default,
            },
            {
                path: "roleManagement",
                component:
                    require("../views/permission_center/views/roleManagement/index.vue")
                        .default,
            },
            {
                path: "userManagement",
                component:
                    require("../views/permission_center/views/userManagement/index.vue")
                        .default,
            },
            {
                path: "",
                redirect: "userManagement",
            },
        ],
    },
    {
        path: "/",
        redirect: "/permission_center",
    },
    {
        path: "/noAuth",
        component: require("../views/noAuth/index.vue").default,
    },
    {
        path: "/notFound",
        component: require("../views/notFound/index.vue").default,
    },
    {
        path: "/index",
        component: require("../views/index/index.vue").default,
    },
    {
        path: "*",
        redirect: "/notFound",
    },
];
export { routes };
