<template>
    <l-root :ref="`lRoot1`">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-linear-layout :ref="`uLinearLayout1`" :direction="`vertical`">
            <u-form :ref="`uForm1`" :layout="`inline`" :labelSize="`auto`" key="uForm1">
                <u-form-item :ref="`uFormItem1`">
                    <u-button :ref="`uButton1`" :color="`primary`" :text="`新建角色`" :disabled="false" @click="uButton1_click($event)" style="margin: 0 0 0 0; text-align: left"></u-button>
                    <u-form-item :ref="`uFormItem2`" style="margin: 0 0 0 700px; text-align: left">
                        <u-input :ref="`uInput1`" :placeholder="`请输入角色名称`" :value.sync="filter.name" style="margin: 0 00px 0 0"></u-input>
                        <u-button :ref="`uButton8`" :text="`查询`" :color="`primary`" @click="uButton8_click($event)" style="margin: 0 00px 0 0"></u-button>
                        <template #label :ref="`template21`">
                            <u-text :ref="`text5`" :text="`角色名称`"></u-text>
                        </template>
                    </u-form-item>
                </u-form-item>
            </u-form>
            <u-table-view :ref="`tableView`" :valueField="`lCAPRole.id`" :dataSource="load" :showTotal="true" :sorting="{ field: undefined, order: 'desc' }" pagination="" key="tableView">
                <u-table-view-column :ref="`uTableViewColumn1`" :type="`index`" :width="`60`">
                    <template #title :ref="`template17`">
                        <u-text :ref="`text1`" :text="`序号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`uTableViewColumn2`" :width="300">
                    <template #cell="current" :ref="`template13`">
                        <u-linear-layout :ref="`uLinearLayout12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`uText8_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPRole || {}).name)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template18`">
                        <u-text :ref="`text2`" :text="`角色名称`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`uTableViewColumn3`" :width="300">
                    <template #cell="current" :ref="`template14`">
                        <u-linear-layout :ref="`uLinearLayout13_${(current || {}).__nodeKey || (current || {}).index}`" :key="`uLinearLayout13_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" v-if="(((current || {}).item || {}).lCAPRole || {}).editable == true">
                            <u-text :ref="`uText9_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPRole || {}).description)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template19`">
                        <u-text :ref="`text3`" :text="`角色描述`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`uTableViewColumn4`">
                    <template #cell="current" :ref="`template15`">
                        <u-linear-layout :ref="`uLinearLayout14_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-link :ref="`uLink1_${(current || {}).__nodeKey || (current || {}).index}`" :destination="`/dashboard/addRoleUser?roleid=${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=${(((current || {}).item || {}).lCAPRole || {}).name}`" :text="`添加成员`"></u-link>
                            <u-link :ref="`uLink2_${(current || {}).__nodeKey || (current || {}).index}`" :linkType="`href`" :text="`关联权限`" @click="uLink2_click($event, current)"></u-link>
                            <u-link :ref="`uLink3_${(current || {}).__nodeKey || (current || {}).index}`" :destination="`/dashboard/resourceManagement?roleId=${(((current || {}).item || {}).lCAPRole || {}).id}&roleName=${(((current || {}).item || {}).lCAPRole || {}).name}&editable=${(((current || {}).item || {}).lCAPRole || {}).editable}`" :text="`关联资源`" :disabled="false" :linkType="`href`"></u-link>
                            <u-link :ref="`uLink4_${(current || {}).__nodeKey || (current || {}).index}`" :disabled="(((current || {}).item || {}).lCAPRole || {}).editable != true" href="" :text="`编辑角色`" :linkType="`href`" @click="uLink4_click($event, current)"></u-link>
                            <u-link :ref="`uLink5_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除角色`" :disabled="(((current || {}).item || {}).lCAPRole || {}).editable != true" :linkType="`href`" href="" @click="uLink5_click($event, current)"></u-link>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template20`">
                        <u-text :ref="`text4`" :text="`操作`"></u-text>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
        <u-modal :ref="`deleteRolePopup`" :size="`normal`">
            <template #foot :ref="`template10`">
                <u-linear-layout :ref="`uLinearLayout8`">
                    <u-button :ref="`uButton9`" :color="`primary`" :text="`确定`" @click="uButton9_click($event)"></u-button>
                    <u-button :ref="`uButton10`" :text="`取消`" @click="uButton10_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template11`">
                <u-linear-layout :ref="`uLinearLayout9`" :direction="`vertical`">
                    <u-text :ref="`uText4`" :text="`删除后，该角色对应的成员、权限、资源关联关系都会被删除！`"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="`uLinearLayout10`" :direction="`vertical`">
                    <u-text :ref="`uText5`" :text="`确定删除角色： `"></u-text>
                    <u-text :ref="`uText6`" :text="$utils['ToString']('nasl.core.String', (deleteRoleBody || {}).name)"></u-text>
                    <u-text :ref="`uText7`" :text="`？`"></u-text>
                </u-linear-layout>
                <u-linear-layout :ref="`uLinearLayout11`" :direction="`vertical`"></u-linear-layout>
            </template>
            <template #title :ref="`template12`">
                <u-text :ref="`text12`" :text="`删除角色`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`updateRolePopup`">
            <template #foot :ref="`template1`">
                <u-linear-layout :ref="`uLinearLayout2`">
                    <u-button :ref="`uButton2`" :color="`primary`" :text="`提交修改 `" @click="uButton2_click($event)"></u-button>
                    <u-button :ref="`uButton3`" :text="`取消`" @click="uButton3_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template2`">
                <u-linear-layout :ref="`uLinearLayout3`" :direction="`vertical`">
                    <u-form :ref="`form2`" key="form2">
                        <u-form-item :ref="`uFormItem3`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]">
                            <u-input :ref="`uInput2`" :placeholder="`请输入角色名称`" :value.sync="updateRoleName"></u-input>
                            <template #label :ref="`template22`">
                                <u-text :ref="`text6`" :text="`角色名称`"></u-text>
                            </template>
                        </u-form-item>
                        <u-form-item :ref="`uFormItem4`">
                            <u-input :ref="`uInput3`" :value.sync="updateRoleDes" :placeholder="`请输入角色描述`"></u-input>
                            <template #label :ref="`template23`">
                                <u-text :ref="`text7`" :text="`角色描述`"></u-text>
                            </template>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
            </template>
            <template #title :ref="`template3`">
                <u-text :ref="`uText1`" :text="`编辑角色`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`rolePermissionPopup`">
            <template #foot :ref="`template4`">
                <u-linear-layout :ref="`uLinearLayout4`">
                    <u-button :ref="`uButton4`" :color="`primary`" :text="`确定`" @click="uButton4_click($event)"></u-button>
                    <u-button :ref="`uButton5`" :text="`取消`" @click="uButton5_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template5`">
                <u-linear-layout :ref="`uLinearLayout5`" :direction="`vertical`">
                    <u-table-view :ref="`tableView1`" :valueField="`id`" :pagination="false" :dataSource="rolePermissionList" key="tableView1">
                        <u-table-view-column :ref="`uTableViewColumn5`" :width="`60`" :type="`index`">
                            <template #title :ref="`template24`">
                                <u-text :ref="`text8`" :text="`序号`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`uTableViewColumn6`">
                            <template #cell="current" :ref="`template16`">
                                <u-linear-layout :ref="`uLinearLayout15_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`uText10_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', ((current || {}).item || {}).name)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template25`">
                                <u-text :ref="`text9`" :text="`权限名称`"></u-text>
                            </template>
                        </u-table-view-column>
                    </u-table-view>
                </u-linear-layout>
            </template>
            <template #title :ref="`template6`">
                <u-text :ref="`uText2`" :text="`关联权限`"></u-text>
            </template>
        </u-modal>
        <u-modal :ref="`createRolePopup`">
            <template #foot :ref="`template7`">
                <u-linear-layout :ref="`uLinearLayout6`">
                    <u-button :ref="`uButton6`" :text="`立即创建`" :color="`primary`" @click="uButton6_click($event)"></u-button>
                    <u-button :ref="`uButton7`" :text="`取消`" @click="uButton7_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template8`">
                <u-linear-layout :ref="`uLinearLayout7`" :direction="`vertical`">
                    <u-form :ref="`form1`" key="form1">
                        <u-form-item :ref="`uFormItem5`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]">
                            <u-input :ref="`uInput4`" :placeholder="`请输入角色名称`" :value.sync="inputRoleBody.name"></u-input>
                            <template #label :ref="`template26`">
                                <u-text :ref="`text10`" :text="`角色名称`"></u-text>
                            </template>
                        </u-form-item>
                        <u-form-item :ref="`uFormItem6`">
                            <u-input :ref="`uInput5`" :value.sync="inputRoleBody.description" :placeholder="`请输入角色描述`"></u-input>
                            <template #label :ref="`template27`">
                                <u-text :ref="`text11`" :text="`角色描述`"></u-text>
                            </template>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
            </template>
            <template #title :ref="`template9`">
                <u-text :ref="`uText3`" :text="`新建角色`"></u-text>
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
            ["rolePermissionBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", undefined),
            ["updateRoleDes"]: ``,
            ["rolePermissionMappingBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", undefined),
            ["deleteRoleBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["rolePermissionList"]: this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", undefined),
            ["updateRoleName"]: ``,
            ["lCAPRole"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["permissionDescription"]: ``,
            ["updateRoleId"]: undefined,
            ["inputRoleBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined),
            ["isNameRepeated"]: undefined,
            ["__tableView_params"]: {},
            ["__tableView1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "角色管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async submit() {
            let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

            if ((validateResult || {}).valid) {
                if (this.$utils["Convert"]((this.inputRoleBody || {}).id, { concept: "TypeAnnotation", typeKind: "primitive", typeNamespace: "nasl.core", typeName: "Boolean", typeArguments: null, returnType: null, properties: null, name: "" })) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPRole",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "a98cfe9d-0682-48bc-b66e-1e4ba6fb4c0b",
                            },
                            body: {
                                entity: this.inputRoleBody,
                            },
                        })
                    );
                } else {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPRole",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "0aadf133-d7f1-4076-bb34-082fee328de4",
                            },

                            body: this.inputRoleBody,
                        })
                    );
                }

                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
            } else {
            }

            return;
        },
        async getRolePermission() {
            let result = this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", undefined);

            result = this.$genInitFromSchema(
                "nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>",
                await this.$logics["app.logics.LCAPGetPermissionByRoleId"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "4d1006ca-8660-4ad3-8aa0-d41ad53c67ee",
                    },
                    path: {},
                    body: {
                        roleId: (this.inputRoleBody || {}).id,
                    },
                })
            );
            return result;
        },
        async modify(current) {
            current = this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>", current === undefined ? (this.$route.query.hasOwnProperty("current") ? this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>", this.$route.query.current) : undefined) : current);
            let resultRoleId = undefined;

            this.inputRoleBody = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clone"](((current || {}).item || {}).lCAPRole));
            resultRoleId = (((current || {}).item || {}).lCAPRole || {}).id;
            return resultRoleId;
        },
        async load(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPLoadRoleManagementTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "90ca3080-8afa-492e-a565-357178a07ac6",
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
        async isRoleNameRepeated(roleName) {
            roleName = roleName === undefined ? (this.$route.query.hasOwnProperty("roleName") ? this.$genInitFromSchema("nasl.core.String", this.$route.query.roleName) : undefined) : roleName;
            let result = undefined;

            result = await this.$logics["app.logics.LCAPIsRoleNameRepeated"]({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "30010bed-2475-4eb0-b1c3-2beb360992d3",
                },
                path: {},
                body: {
                    roleName: roleName,
                },
            });
            return result;
        },
        async create() {
            this.inputRoleBody = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clone"](this.lCAPRole));
            return;
        },
        async remove(current) {
            current = this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>", current === undefined ? (this.$route.query.hasOwnProperty("current") ? this.$genInitFromSchema("nasl.ui.Current<{lCAPRole: app.dataSources.defaultDS.entities.LCAPRole}>", this.$route.query.current) : undefined) : current);

            await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.delete"]({
                config: {
                    download: false,
                },
                query: {},
                headers: {
                    "lcap-calllogic-uuid": "ffd8506d-9740-4d25-aec1-33ff1fc840f5",
                },
                query: {
                    id: (((current || {}).item || {}).lCAPRole || {}).id,
                },
                body: {},
            });
            await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
            return;
        },
        async roleManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async uButton1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].open && this.$refs[`createRolePopup`].open());
                return;
            })();
        },
        async uButton9_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "e0af2e9e-2700-4945-80ce-d96fc04985f3",
                    },
                    query: {
                        id: (this.deleteRoleBody || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `删除成功！`));
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async uButton10_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].close && this.$refs[`deleteRolePopup`].close());
                return;
            })();
        },
        async uButton2_click(event) {
            await (async () => {
                let updateRoleBody = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined);
                let variable1 = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", undefined);

                this.isNameRepeated = await this.isRoleNameRepeated(this.updateRoleName);
                variable1 = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.LCAPRole",
                    await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "20c3eef0-9181-4c61-b9f9-10ce934dd792",
                        },
                        query: {
                            id: this.updateRoleId,
                        },
                        body: {},
                    })
                );
                if (this.isNameRepeated == true && this.updateRoleName != (variable1 || {}).name) {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `重复的角色名！`));
                } else {
                    updateRoleBody = variable1;
                    updateRoleBody.id = this.updateRoleId;
                    updateRoleBody.name = this.updateRoleName;
                    updateRoleBody.description = this.updateRoleDes;
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPRole",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "7de8a19a-e4fe-4961-b509-b5ac21464c8c",
                            },
                            body: {
                                entity: updateRoleBody,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].close && this.$refs[`updateRolePopup`].close());
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `修改成功！`));
                }

                return;
            })();
        },
        async uButton3_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].close && this.$refs[`updateRolePopup`].close());
                return;
            })();
        },
        async uButton4_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].close && this.$refs[`rolePermissionPopup`].close());
                return;
            })();
        },
        async uButton5_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].close && this.$refs[`rolePermissionPopup`].close());
                return;
            })();
        },
        async uButton6_click(event) {
            await (async () => {
                this.isNameRepeated = await this.isRoleNameRepeated((this.inputRoleBody || {}).name);
                if (this.isNameRepeated == true) {
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `重复的角色名！`));
                } else {
                    this.inputRoleBody = this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPRole",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRole.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "5e3f254a-f4f6-4e58-884f-588320af761a",
                            },

                            body: this.inputRoleBody,
                        })
                    );
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    this.rolePermissionBody.name = (this.inputRoleBody || {}).name;
                    this.permissionDescription = this.$utils["ToString"]("nasl.core.String", `角色`) + this.$utils["ToString"]("nasl.core.String", (this.inputRoleBody || {}).name);
                    this.permissionDescription = this.$utils["ToString"]("nasl.core.String", this.permissionDescription) + this.$utils["ToString"]("nasl.core.String", `对应的权限`);
                    this.rolePermissionBody.description = this.permissionDescription;
                    this.rolePermissionBody = this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPPermission",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPPermission.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "b49f23e8-4bf4-43cd-99d9-47880a433427",
                            },

                            body: this.rolePermissionBody,
                        })
                    );
                    this.rolePermissionMappingBody.permissionId = (this.rolePermissionBody || {}).id;
                    this.rolePermissionMappingBody.roleId = (this.inputRoleBody || {}).id;
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPRolePerMapping",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPRolePerMapping.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "f925062a-4d25-4d73-a821-fb8d7f5bb9d0",
                            },

                            body: this.rolePermissionMappingBody,
                        })
                    );
                    this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRoleBody));
                    this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPPermission", this.$utils["Clear"](this.rolePermissionBody));
                    this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRolePerMapping", this.$utils["Clear"](this.rolePermissionMappingBody));
                    await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].close && this.$refs[`createRolePopup`].close());
                    await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                    await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `创建成功！`));
                }

                return;
            })();
        },
        async uButton7_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`createRolePopup`] && this.$refs[`createRolePopup`].close && this.$refs[`createRolePopup`].close());
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRoleBody));
                return;
            })();
        },
        async uButton8_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async uLink2_click(event, current) {
            await (async () => {
                let variable1 = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}", undefined);
                let variable2 = this.$genInitFromSchema("nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>", undefined);

                this.inputRoleBody = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clone"](((current || {}).item || {}).lCAPRole));
                variable1 = this.$genInitFromSchema(
                    "{list: nasl.collection.List<{lCAPPermission: app.dataSources.defaultDS.entities.LCAPPermission, lCAPRolePerMapping: app.dataSources.defaultDS.entities.LCAPRolePerMapping}>, total: nasl.core.Long}",
                    await this.$logics["app.logics.LCAPGetRolePermissionList"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "28269d99-41c8-401f-b324-3b5a9f949505",
                        },
                        path: {},
                        body: {
                            inputRoleId: (((current || {}).item || {}).lCAPRole || {}).id,
                        },
                    })
                );
                variable2 = (variable1 || {}).list;
                this.$genInitFromSchema("nasl.collection.List<app.dataSources.defaultDS.entities.LCAPPermission>", this.$utils["Clear"](this.rolePermissionList));
                var $forEachListVariable5384 = variable2;
                var $forEachStartVariable5384 = 0;
                var $forEachEndVariable5384 = (variable2 || {}).length;
                if (Array.isArray($forEachListVariable5384)) {
                    for (let i = $forEachStartVariable5384; i < $forEachEndVariable5384; i++) {
                        const item = $forEachListVariable5384[i];
                        this.$utils["Add"](this.rolePermissionList, (item || {}).lCAPPermission);
                    }
                }

                await (this.$refs && this.$refs[`rolePermissionPopup`] && this.$refs[`rolePermissionPopup`].open && this.$refs[`rolePermissionPopup`].open());
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPRole", this.$utils["Clear"](this.inputRoleBody));
                return;
            })();
        },
        async uLink4_click(event, current) {
            await (async () => {
                this.updateRoleName = (((current || {}).item || {}).lCAPRole || {}).name;
                this.updateRoleId = (((current || {}).item || {}).lCAPRole || {}).id;
                this.updateRoleDes = (((current || {}).item || {}).lCAPRole || {}).description;
                await (this.$refs && this.$refs[`updateRolePopup`] && this.$refs[`updateRolePopup`].open && this.$refs[`updateRolePopup`].open());
                return;
            })();
        },
        async uLink5_click(event, current) {
            await (async () => {
                this.deleteRoleBody = ((current || {}).item || {}).lCAPRole;
                await (this.$refs && this.$refs[`deleteRolePopup`] && this.$refs[`deleteRolePopup`].open && this.$refs[`deleteRolePopup`].open());
                return;
            })();
        },
        __tableView_valueField() {
            return undefined;
        },

        __tableView_dataSource() {
            return this.load;
        },

        __tableView_showTotal() {
            return true;
        },

        __tableView_sorting() {
            return { field: undefined, order: "desc" };
        },

        __tableView_pagination() {
            return undefined;
        },

        __tableView1_valueField() {
            return undefined;
        },

        __tableView1_pagination() {
            return false;
        },

        __tableView1_dataSource() {
            return this.rolePermissionList;
        },
    },
    async created() {
        await this.roleManagement_created();
    },
};
</script>
