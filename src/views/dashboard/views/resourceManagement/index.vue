<template>
    <l-root :ref="`lRoot1`">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-button :ref="`uButton1`" :text="`新增关联资源 `" :disabled="editable == false" :color="`primary`" @click="uButton1_click($event)" style="margin: 0 0 15px 0"></u-button>
        <u-form :ref="`uForm1`" :gap="`large`" key="uForm1">
            <u-form-item :ref="`uFormItem1`" :required="false" style="margin: 0 0 0 0; text-align: left">
                <u-input :ref="`uInput1`" :placeholder="roleId" :disabled="false" :value.sync="roleName" :readonly="true" style="border-color: #fcfcfc"></u-input>
                <template #label :ref="`template12`">
                    <u-text :ref="`text1`" :text="`角色名`"></u-text>
                </template>
            </u-form-item>
        </u-form>
        <u-table-view :ref="`tableView`" :dataSource="loadResourceByRoleId" :showSizer="true" values="" :valueField="`id`" :showTotal="true" :pagination="true" key="tableView">
            <u-table-view-column :ref="`uTableViewColumn1`" :width="50" :type="`index`" style="height: auto; width: 40px">
                <template #title :ref="`template13`">
                    <u-text :ref="`text2`" :text="`序号`"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="`uTableViewColumn2`" :type="`normal`">
                <template #cell="current" :ref="`template7`">
                    <u-linear-layout :ref="`uLinearLayout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                        <u-text :ref="`uText4_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).name)"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="`template14`">
                    <u-text :ref="`text3`" :text="`资源路径`"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="`uTableViewColumn3`">
                <template #cell="current" :ref="`template8`">
                    <u-linear-layout :ref="`uLinearLayout6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                        <u-text :ref="`uText5_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).description)"></u-text>
                    </u-linear-layout>
                </template>
                <template #title :ref="`template15`">
                    <u-text :ref="`text4`" :text="`资源描述`"></u-text>
                </template>
            </u-table-view-column>
            <u-table-view-column :ref="`uTableViewColumn4`">
                <template #cell="current" :ref="`template9`">
                    <u-linear-layout :ref="`uLinearLayout7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                        <u-link :ref="`uLink1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`移除该资源 `" :disabled="editable == false" @click="uLink1_click($event, current)"></u-link>
                    </u-linear-layout>
                </template>
                <template #title :ref="`template16`">
                    <u-text :ref="`text5`" :text="`操作`"></u-text>
                </template>
            </u-table-view-column>
        </u-table-view>
        <u-modal :ref="`removeResourcePopup`">
            <template #foot :ref="`template1`">
                <u-linear-layout :ref="`uLinearLayout1`">
                    <u-button :ref="`uButton2`" :text="`确定`" :color="`primary`" @click="uButton2_click($event)"></u-button>
                    <u-button :ref="`uButton3`" :text="`取消`" @click="uButton3_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template2`">
                <u-linear-layout :ref="`uLinearLayout2`" :direction="`vertical`">
                    <u-text :ref="`uText3`" :text="$utils['ToString']('nasl.core.String', removeResourceName)"></u-text>
                </u-linear-layout>
            </template>
            <template #title :ref="`template3`">
                <u-text :ref="`uText1`" :text="`确定移除下面资源？`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`selectResourcePopup`" :size="`huge`">
            <template #foot :ref="`template4`">
                <u-linear-layout :ref="`uLinearLayout3`">
                    <u-button :ref="`uButton4`" :color="`primary`" :text="`确定`" @click="uButton4_click($event)"></u-button>
                    <u-button :ref="`uButton5`" :text="`取消`" @click="uButton5_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template5`">
                <u-linear-layout :ref="`uLinearLayout4`" :direction="`vertical`">
                    <u-table-view :ref="`tableView1`" :values="alreadySelectedResourceIdList" :valueField="`lCAPResource.id`" :pagination="true" :showSizer="true" :dataSource="load" key="tableView1">
                        <u-table-view-column :ref="`uTableViewColumn5`" :type="`checkbox`" :width="100">
                            <template #title :ref="`template17`">
                                <u-text :ref="`text6`" :text="`序号`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`uTableViewColumn6`">
                            <template #cell="current" :ref="`template10`">
                                <u-linear-layout :ref="`uLinearLayout8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`uText6_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPResource || {}).name)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template18`">
                                <u-text :ref="`text7`" :text="`资源路径`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`uTableViewColumn7`">
                            <template #cell="current" :ref="`template11`">
                                <u-linear-layout :ref="`uLinearLayout9_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`uText7_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPResource || {}).description)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template19`">
                                <u-text :ref="`text8`" :text="`资源描述`"></u-text>
                            </template>
                        </u-table-view-column>
                    </u-table-view>
                </u-linear-layout>
            </template>
            <template #title :ref="`template6`">
                <u-text :ref="`uText2`" :text="`请勾选需要控制的资源 `"></u-text>
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
            ["removeResourceId"]: undefined,
            ["variable"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPResource", undefined),
            ["removeResourceName"]: undefined,
            ["alreadySelectedResourceIdList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined),
            ["roleId"]: this.$route.query.hasOwnProperty("roleId") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.roleId) : 1,
            ["roleName"]: this.$route.query.hasOwnProperty("roleName") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.roleName) : ``,
            ["editable"]: this.$route.query.hasOwnProperty("editable") ? this.$genInitFromSchema("nasl.core.Boolean", this.$route.query.editable) : undefined,
            ["__tableView_params"]: {},
            ["__tableView1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "资源管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async addResource() {
            this.variable.name = `13123`;
            this.$genInitFromSchema(
                "app.dataSources.defaultDS.entities.LCAPResource",
                await this.$logics["app.dataSources.defaultDS.entities.LCAPResource.logics.create"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d4fa3aa4-48a7-4587-b4e5-b2c65a3586c1",
                    },

                    body: this.variable,
                })
            );
            return;
        },
        async load(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadResourceTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "ca6d71c2-beaf-49dc-ac65-067779fe8596",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                        sort: (params || {}).sort,
                        order: (params || {}).order,
                    },
                })
            );
            return result;
        },
        async loadResourceByRoleId() {
            let variable2 = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}", undefined);
            let variable4 = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPResource", undefined);
            let variable5 = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>", undefined);
            let result = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPResource>", undefined);

            variable2 = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPPerResMapping: app.dataSources.defaultDS.entities.LCAPPerResMapping, lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPResource: app.dataSources.defaultDS.entities.LCAPResource, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetScopeResourceByRoleId"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "37f9c428-1eb4-4599-be0a-310e6ff1ef78",
                    },
                    path: {},
                    body: {
                        roleId: this.roleId,
                    },
                })
            );
            var $forEachListVariable8351 = (variable2 || {}).list;
            var $forEachStartVariable8351 = 0;
            var $forEachEndVariable8351 = ((variable2 || {}).list || {}).length;
            if (Array.isArray($forEachListVariable8351)) {
                for (let i = $forEachStartVariable8351; i < $forEachEndVariable8351; i++) {
                    const item = $forEachListVariable8351[i];
                    variable4 = (item || {}).lCAPResource;
                    this.$utils["Add"](variable5, variable4);
                }
            }

            result = variable5;
            return result;
        },
        async remove(current) {
            current = this.$genInitFromSchema("nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>", current === undefined ? (this.$route.query.hasOwnProperty("current") ? this.$genInitFromSchema("nasl.ui.Current<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>", this.$route.query.current) : undefined) : current);

            await this.$logics["app.dataSources.defaultDS.entities.LCAPResource.logics.delete"]({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "d68e9407-055b-4814-afc4-85818f74c623",
                },
                query: {
                    id: (((current || {}).item || {}).lCAPResource || {}).id,
                },
                body: {},
            });
            await (this.$refs && this.$refs[`tableView1`] && this.$refs[`tableView1`].reload && this.$refs[`tableView1`].reload());
            return;
        },
        async loadListView(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPResource: app.dataSources.defaultDS.entities.LCAPResource}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadPermissionResourceListView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "9be25168-3f2d-4052-8f0a-64a862595421",
                    },
                    path: {},
                    body: {
                        page: (params || {}).page,
                        size: (params || {}).size,
                    },
                })
            );
            return result;
        },
        async uButton1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].open && this.$refs[`selectResourcePopup`].open());
                return;
            })();
        },
        async uButton2_click(event) {
            await (async () => {
                let permissionList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", undefined);
                let mappingIdList = this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined);

                permissionList = this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>",
                    await this.$logics["app.logics.LCAPGetPermissionByRoleId"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "81221755-9040-4d51-b064-026592e32936",
                        },
                        path: {},
                        body: {
                            roleId: this.roleId,
                        },
                    })
                );
                var $forEachListVariable2663 = permissionList;
                var $forEachStartVariable2663 = 0;
                var $forEachEndVariable2663 = (permissionList || {}).length;
                if (Array.isArray($forEachListVariable2663)) {
                    for (let i = $forEachStartVariable2663; i < $forEachEndVariable2663; i++) {
                        const item = $forEachListVariable2663[i];
                        mappingIdList = this.$genInitFromSchema(
                            "nasl.collection.List<nasl.core.Long>",
                            await this.$logics["app.logics.LCAPGetMappingByPermissionIdAndResourceId"]({
                                config: {
                                    download: false,
                                },
                                query: {},
                                headers: {
                                    "lcap-calllogic-uuid": "4f03cf7c-9341-4a62-8439-c99c98ffdaf4",
                                },
                                path: {},
                                body: {
                                    permissionId: (item || {}).id,
                                    resourceId: this.removeResourceId,
                                },
                            })
                        );
                        var $forEachListVariable3859 = mappingIdList;
                        var $forEachStartVariable3859 = 0;
                        var $forEachEndVariable3859 = (mappingIdList || {}).length;
                        if (Array.isArray($forEachListVariable3859)) {
                            for (let j = $forEachStartVariable3859; j < $forEachEndVariable3859; j++) {
                                const item1 = $forEachListVariable3859[j];
                                await this.$logics["app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.delete"]({
                                    config: {
                                        download: false,
                                    },
                                    query: {},
                                    headers: {
                                        "lcap-calllogic-uuid": "4979443b-7303-4778-9649-760f901ffd08",
                                    },
                                    query: {
                                        id: item1,
                                    },
                                    body: {},
                                });
                            }
                        }
                    }
                }

                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close());
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `移除成功！`));
                return;
            })();
        },
        async uButton3_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].close && this.$refs[`removeResourcePopup`].close());
                return;
            })();
        },
        async uButton4_click(event) {
            await (async () => {
                let permissionList = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", undefined);
                let mapping = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPerResMapping", undefined);
                let mappingIdList = this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", undefined);

                permissionList = this.$genInitFromSchema(
                    "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>",
                    await this.$logics["app.logics.LCAPGetPermissionByRoleId"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "90dcc122-0570-491e-aea8-fc516873f7fb",
                        },
                        path: {},
                        body: {
                            roleId: this.roleId,
                        },
                    })
                );
                var $forEachListVariable8856 = permissionList;
                var $forEachStartVariable8856 = 0;
                var $forEachEndVariable8856 = (permissionList || {}).length;
                if (Array.isArray($forEachListVariable8856)) {
                    for (let i = $forEachStartVariable8856; i < $forEachEndVariable8856; i++) {
                        const item = $forEachListVariable8856[i];
                        var $forEachListVariable3163 = this.alreadySelectedResourceIdList;
                        var $forEachStartVariable3163 = 0;
                        var $forEachEndVariable3163 = (this.alreadySelectedResourceIdList || {}).length;
                        if (Array.isArray($forEachListVariable3163)) {
                            for (let j = $forEachStartVariable3163; j < $forEachEndVariable3163; j++) {
                                const item1 = $forEachListVariable3163[j];
                                mapping.permissionId = (item || {}).id;
                                mapping.resourceId = item1;
                                mappingIdList = this.$genInitFromSchema(
                                    "nasl.collection.List<nasl.core.Long>",
                                    await this.$logics["app.logics.LCAPGetMappingByPermissionIdAndResourceId"]({
                                        config: {
                                            download: false,
                                        },
                                        query: {},
                                        headers: {
                                            "lcap-calllogic-uuid": "0f9627d9-ef98-42af-857c-be211e185740",
                                        },
                                        path: {},
                                        body: {
                                            permissionId: (mapping || {}).permissionId,
                                            resourceId: (mapping || {}).resourceId,
                                        },
                                    })
                                );
                                if ((mappingIdList || {}).length > 0) {
                                } else {
                                    this.$genInitFromSchema(
                                        "app.dataSources.defaultDS.entities.LCAPPerResMapping",
                                        await this.$logics["app.dataSources.defaultDS.entities.LCAPPerResMapping.logics.create"]({
                                            config: {
                                                download: false,
                                            },
                                            query: {},
                                            headers: {
                                                "lcap-calllogic-uuid": "df994d93-cb61-454b-a25f-a2bd854970e9",
                                            },

                                            body: mapping,
                                        })
                                    );
                                }
                            }
                        }
                    }
                }

                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close());
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `资源添加成功！`));
                return;
            })();
        },
        async uButton5_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`selectResourcePopup`] && this.$refs[`selectResourcePopup`].close && this.$refs[`selectResourcePopup`].close());
                this.$genInitFromSchema("nasl.collection.List<nasl.core.Long>", this.$utils["Clear"](this.alreadySelectedResourceIdList));
                return;
            })();
        },
        async uLink1_click(event, current) {
            await (async () => {
                this.removeResourceName = ((current || {}).item || {}).name;
                this.removeResourceId = ((current || {}).item || {}).id;
                await (this.$refs && this.$refs[`removeResourcePopup`] && this.$refs[`removeResourcePopup`].open && this.$refs[`removeResourcePopup`].open());
                return;
            })();
        },
        __tableView_dataSource() {
            return this.loadResourceByRoleId;
        },

        __tableView_showSizer() {
            return true;
        },

        __tableView_values() {
            return undefined;
        },

        __tableView_valueField() {
            return undefined;
        },

        __tableView_showTotal() {
            return true;
        },

        __tableView_pagination() {
            return true;
        },

        __tableView1_values() {
            return this.alreadySelectedResourceIdList;
        },

        __tableView1_valueField() {
            return undefined;
        },

        __tableView1_pagination() {
            return true;
        },

        __tableView1_showSizer() {
            return true;
        },

        __tableView1_dataSource() {
            return this.load;
        },
    },
};
</script>
