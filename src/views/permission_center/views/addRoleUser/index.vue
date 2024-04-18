<template>
    <l-root :ref="`lRoot1`">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-form-item :ref="`uFormItem1`" :placement="`right`" style="margin: 0 0 0 0">
            <u-input :ref="`uInput1`" :readonly="true" :placeholder="`请输入用户名`" :value="roleName" style="border-color: #fefefe"></u-input>
            <template #label :ref="`template10`">
                <u-text :ref="`text5`" :text="`角色名`"></u-text>
            </template>
        </u-form-item>
        <u-linear-layout :ref="`uLinearLayout1`" :direction="`vertical`">
            <u-button :ref="`uButton1`" :text="`添加成员`" :color="`primary`" @click="uButton1_click($event)" style="text-align: left; margin: 0 0 0 0"></u-button>
            <u-linear-layout :ref="`uLinearLayout2`" :justify="`space-between`" style="margin: 10px 0px 0px 0px; text-align: left"></u-linear-layout>
            <u-table-view :ref="`tableView`" :dataSource="load" :valueField="`lCAPUserRoleMapping.id`" :showTotal="true" pagination="" key="tableView">
                <u-table-view-column :ref="`uTableViewColumn1`" :type="`index`" :width="`60`">
                    <template #title :ref="`template6`">
                        <u-text :ref="`text1`" :text="`序号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`uTableViewColumn2`">
                    <template #cell="current" :ref="`template4`">
                        <u-linear-layout :ref="`uLinearLayout4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`uText2_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUserRoleMapping || {}).userName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template7`">
                        <u-text :ref="`text2`" :text="`用户名`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`uTableViewColumn3`">
                    <template #cell="current" :ref="`template5`">
                        <u-linear-layout :ref="`uLinearLayout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-link :ref="`uLink1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`移除 `" @click="uLink1_click($event, current)"></u-link>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template8`">
                        <u-text :ref="`text3`" :text="`操作`"></u-text>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
        <u-modal :ref="`saveModal`">
            <template #foot :ref="`template1`">
                <u-linear-layout :ref="`uLinearLayout3`">
                    <u-button :ref="`uButton2`" :key="`uButton2`" :text="`添加`" :color="`primary`" @click="uButton2_click($event)" v-if="(input || {}).id == undefined"></u-button>
                    <u-button :ref="`uButton3`" :key="`uButton3`" :text="`取消`" :color="`primary`" @click="uButton3_click($event)" v-if="(input || {}).id == undefined" style="border-color: #327ef8; color: #8d8787; background-color: #f8f8f8"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template2`">
                <u-form :ref="`form1`" key="form1">
                    <u-form-item :ref="`uFormItem2`">
                        <u-select :ref="`uSelect1`" :placeholder="`请选择用户名，支持搜索`" :dataSource="getUsersListFromNumis" :filterable="false" :value.sync="userIdListBySelect" :multiple="true" :remoteFiltering="true" :valueField="`lCAPUser.userId`" :pageable="true" :textField="`lCAPUser.userName`" :remotePaging="false" :clearable="true" :showRenderFooter="false" :pagination="true" :pageSize="10" key="uSelect1"></u-select>
                        <template #label :ref="`template9`">
                            <u-text :ref="`text4`" :text="`用户名`"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template3`">
                <div :ref="`div1`" :key="`div1`" v-if="(input || {}).id"></div>
                <div :ref="`div2`" :key="`div2`" v-if="(input || {}).id == undefined">
                    <u-text :ref="`uText1`" :text="`请添加用户 `"></u-text>
                </div>
            </template>
        </u-modal>
    </l-root>
</template>
<script>
const keyboardEventMixin = {
    mounted() {
        document.addEventListener("keydown", this.onKeyDown);
        document.addEventListener("keyup", this.onKeyUp);
    },
    beforeDestory() {
        document.removeEventListener("keydown", this.onKeyDown);
        document.removeEventListener("keyup", this.onKeyUp);
    },
    methods: {
        async onKeyDown(e) {},
        async onKeyUp(e) {},
    },
};
export default {
    mixins: [keyboardEventMixin],
    data() {
        return {
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined),
            ["alreadyBindRoleUserList"]: this.$genInitFromSchema("nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined),
            ["lCAPUserRoleMapping"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined),
            ["userIdListBySelect"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["itemInputVariable"]: undefined,
            ["itemInputVariable1"]: undefined,
            ["roleid"]: this.$route.query.hasOwnProperty("roleid") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.roleid) : 1,
            ["roleName"]: this.$route.query.hasOwnProperty("roleName") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.roleName) : ``,
            ["__tableView_params"]: {},
            ["__uSelect1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "为角色添加成员",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async getRoleNameByRoleId() {
            await this.$toast.show(this.$utils["ToString"]("nasl.core.Long", this.roleid));
            return;
        },
        async create() {
            this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", this.$utils["Clone"](this.lCAPUserRoleMapping));
            return;
        },
        async roleAddUserReduplicate(inputUserId, inputRoleId) {
            inputUserId = inputUserId === undefined ? (this.$route.query.hasOwnProperty("inputUserId") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.inputUserId) : undefined) : inputUserId;
            inputRoleId = inputRoleId === undefined ? (this.$route.query.hasOwnProperty("inputRoleId") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.inputRoleId) : undefined) : inputRoleId;
            let userIdList = this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined);
            let result = undefined;

            this.alreadyBindRoleUserList = this.$genInitFromSchema(
                "nasl.collection.List<{lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>",
                await this.$logics["app.logics.LCAPGetRoleBindUserList"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "b52127a8a3924adbbde249442fac8983",
                    },
                    path: {},
                    body: {
                        inputRoleId: inputRoleId,
                    },
                })
            );
            var $forEachListVariable8319 = this.alreadyBindRoleUserList;
            var $forEachStartVariable8319 = 0;
            var $forEachEndVariable8319 = (this.alreadyBindRoleUserList || {}).length;
            if (Array.isArray($forEachListVariable8319)) {
                for (let i = $forEachStartVariable8319; i < $forEachEndVariable8319; i++) {
                    const item = $forEachListVariable8319[i];
                    this.$utils["Add"](userIdList, ((item || {}).lCAPUserRoleMapping || {}).userId);
                }
            }

            result = this.$utils["Contains"](userIdList, inputUserId);
            return result;
        },
        async submit() {
            let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

            validateResult = await (this.$refs && this.$refs[`form1`] && this.$refs[`form1`].validate && this.$refs[`form1`].validate());
            if ((validateResult || {}).valid) {
                if (this.$utils["Convert"]((this.input || {}).id, { concept: "TypeAnnotation", typeKind: "primitive", typeNamespace: "nasl.core", typeName: "Boolean", typeArguments: null, returnType: null, properties: null, name: "" })) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPUserRoleMapping",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "fe5252b664ee4575ade12c4da2ba5ec6",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                } else {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPUserRoleMapping",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "04aa301b15ec4ed9bd9f05fe539456f8",
                            },

                            body: this.input,
                        })
                    );
                }

                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
            } else {
            }

            return;
        },
        async modify(current) {
            current = this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>", current === undefined ? (this.$route.query.hasOwnProperty("current") ? this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>", this.$route.query.current) : undefined) : current);

            this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", this.$utils["Clone"](((current || {}).item || {}).lCAPUserRoleMapping));
            await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
            return;
        },
        async getUsersListFromNumis() {
            let returnBody = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>", undefined);

            returnBody = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetAllUsers"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "36ea8f560eb24517a50069e0c21ffe17",
                    },
                    path: {},
                    body: {},
                })
            );
            result = (returnBody || {}).list;
            await console.log(this.$utils["ToString"]("nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>", result));
            this.$utils["ListDistinct"](this.userIdListBySelect);
            return result;
        },
        async load(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}", undefined);

            this.filter.roleId = this.roleid;
            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole, lCAPUserRoleMapping: app.dataSources.defaultDS.entities.LCAPUserRoleMapping}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadUserRoleMappingTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "1564ff5e9c6449e98669fb25cd3e8edf",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                        filter: this.filter,
                    },
                })
            );
            return result;
        },
        async addRoleUser_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async uButton1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async uButton2_click(event) {
            await (async () => {
                let createUserAndRole = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUserRoleMapping", undefined);
                let isDuplicateUserId = undefined;
                let UserName = ``;
                let returnOfGetUser = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined);

                var $forEachListVariable3911 = this.userIdListBySelect;
                var $forEachStartVariable3911 = 0;
                var $forEachEndVariable3911 = (this.userIdListBySelect || {}).length;
                if (Array.isArray($forEachListVariable3911)) {
                    for (let i = $forEachStartVariable3911; i < $forEachEndVariable3911; i++) {
                        const item = $forEachListVariable3911[i];
                        isDuplicateUserId = await this.roleAddUserReduplicate(item, this.roleid);
                        returnOfGetUser = this.$genInitFromSchema(
                            "app.dataSources.defaultDS.entities.LCAPUser",
                            await this.$logics["app.logics.LCAPGetUserByUserId"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "38d3629ca7d64149bbf9e788d364b108",
                                },
                                path: {},
                                body: {
                                    userId: item,
                                },
                            })
                        );
                        UserName = (returnOfGetUser || {}).userName;
                        if (isDuplicateUserId == true) {
                        } else {
                            createUserAndRole.roleId = this.roleid;
                            createUserAndRole.userName = UserName;
                            createUserAndRole.userId = item;
                            this.$genInitFromSchema(
                                "app.dataSources.defaultDS.entities.LCAPUserRoleMapping",
                                await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.create"]({
                                    config: {
                                        download: false,
                                    },
                                    query: {},
                                    headers: {
                                        "lcap-calllogic-uuid": "4ff4bbb303244b18b800eff5cd794405",
                                    },

                                    body: createUserAndRole,
                                })
                            );
                        }
                    }
                }

                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                this.userIdListBySelect = undefined;
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `添加成功！`));
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async uButton3_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                return;
            })();
        },
        async uLink1_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUserRoleMapping.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "f639b13331354c5b82c034355e590564",
                    },
                    query: {
                        id: (((current || {}).item || {}).lCAPUserRoleMapping || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `移除成功！`));
                return;
            })();
        },
        __tableView_dataSource() {
            return this.load;
        },

        __tableView_valueField() {
            return undefined;
        },

        __tableView_showTotal() {
            return true;
        },

        __tableView_pagination() {
            return undefined;
        },

        __uSelect1_placeholder() {
            return undefined;
        },

        __uSelect1_dataSource() {
            return this.getUsersListFromNumis;
        },

        __uSelect1_filterable() {
            return false;
        },

        __uSelect1_value() {
            return this.userIdListBySelect;
        },

        __uSelect1_multiple() {
            return true;
        },

        __uSelect1_remoteFiltering() {
            return true;
        },

        __uSelect1_valueField() {
            return undefined;
        },

        __uSelect1_pageable() {
            return true;
        },

        __uSelect1_textField() {
            return undefined;
        },

        __uSelect1_remotePaging() {
            return false;
        },

        __uSelect1_clearable() {
            return true;
        },

        __uSelect1_showRenderFooter() {
            return false;
        },

        __uSelect1_pagination() {
            return true;
        },

        __uSelect1_pageSize() {
            return 10;
        },
    },
    async created() {
        await this.addRoleUser_created();
    },
};
</script>
