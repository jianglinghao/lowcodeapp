<template>
    <l-root :ref="`lRoot1`">
        <u-router-view :ref="`uRouterView1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout11`" :direction="`horizontal`"></u-linear-layout>
        <u-linear-layout :ref="`linear_layout1`" :direction="`vertical`">
            <u-linear-layout :ref="`linear_layout2`" :justify="`space-between`">
                <u-button :ref="`button2`" :color="`primary`" :text="`创建普通用户`" @click="button2_click($event)"></u-button>
                <u-form :ref="`form1`" :layout="`inline`" :labelSize="`auto`" key="form1">
                    <u-form-item :ref="`form_item1`" style="width: 332px; text-align: left">
                        <u-input :ref="`input1`" :placeholder="`请输入用户名或昵称`" :value.sync="filter.userName"></u-input>
                        <template #label :ref="`template14`">
                            <u-text :ref="`text13`" :text="`用户名`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item5`">
                        <u-button :ref="`button1`" :color="`primary`" :text="`查询`" @click="button1_click($event)"></u-button>
                    </u-form-item>
                </u-form>
            </u-linear-layout>
            <u-table-view :ref="`tableView`" :dataSource="load" :dataSchema="`LoadTest2TableViewStructure`" :valueField="`lCAPUser.id`" :pagination="true" :showSizer="true" key="tableView">
                <u-table-view-column :ref="`table_view_column1`" :type="`index`" :width="`60`">
                    <template #title :ref="`template15`">
                        <u-text :ref="`text14`" :text="`序号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column2`" :field="`lCAPUser.userName`">
                    <template #cell="current" :ref="`template1`">
                        <u-linear-layout :ref="`linear_layout3_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text1_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).userName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template16`">
                        <u-text :ref="`text15`" :text="`用户名`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column3`" :field="`lCAPUser.phone`">
                    <template #cell="current" :ref="`template2`">
                        <u-linear-layout :ref="`linear_layout4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text2_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).phone)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template17`">
                        <u-text :ref="`text16`" :text="`手机号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column4`" :field="`lCAPUser.email`">
                    <template #cell="current" :ref="`template3`">
                        <u-linear-layout :ref="`linear_layout5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text3_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).email)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template18`">
                        <u-text :ref="`text17`" :text="`邮箱`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column5`" :field="`lCAPUser.displayName`">
                    <template #cell="current" :ref="`template4`">
                        <u-linear-layout :ref="`linear_layout6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text4_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).displayName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template19`">
                        <u-text :ref="`text18`" :text="`昵称`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column6`" :field="`lCAPUser.status`">
                    <template #cell="current" :ref="`template5`">
                        <u-linear-layout :ref="`linear_layout7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text5_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).status, { concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserStatusEnum', typeArguments: null, returnType: null, properties: null, name: '' }))"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template20`">
                        <u-text :ref="`text19`" :text="`状态`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column8`" :field="`lCAPUser.status`">
                    <template #cell="current" :ref="`template13`">
                        <u-linear-layout :ref="`linear_layout12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text12_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['EnumValueToText']((((current || {}).item || {}).lCAPUser || {}).source, { concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserSourceEnum', typeArguments: null, returnType: null, properties: null, name: '' }))"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template21`">
                        <u-text :ref="`text20`" :text="`登录方式`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column7`">
                    <template #cell="current" :ref="`template6`">
                        <u-linear-layout :ref="`linear_layout8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-link :ref="`link1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link1_click($event, current)"></u-link>
                            <u-link :ref="`link2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" :disabled="(((current || {}).item || {}).lCAPUser || {}).userName == ($global.userInfo || {}).UserName" @click="link2_click($event, current)"></u-link>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template22`">
                        <u-text :ref="`text21`" :text="`操作`"></u-text>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
        <u-modal :ref="`saveModal`">
            <template #foot :ref="`template7`">
                <u-linear-layout :ref="`linear_layout9`">
                    <u-button :ref="`button3`" :key="`button3`" :color="`primary`" :text="`提交修改`" @click="button3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button4`" :key="`button4`" :color="`primary`" :text="`立即创建`" @click="button4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template8`">
                <u-form :ref="`saveModalForm`" key="saveModalForm">
                    <u-form-item
                        :ref="`form_item6`"
                        :required="true"
                        :rules="[
                            { validate: 'filled', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                            { validate: 'excluded', args: [userList], message: `该表单项已经存在`, trigger: 'input+blur' },
                        ]"
                        :ignoreValidation="isUpdate"
                    >
                        <u-input :ref="`input4`" :placeholder="`请输入用户名`" :value.sync="input.userName" :disabled="isUpdate"></u-input>
                        <template #label :ref="`template23`">
                            <u-text :ref="`text22`" :text="`用户名`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item
                        :ref="`form_item7`"
                        :key="`form_item7`"
                        :required="true"
                        :rules="[
                            { validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true },
                            { validate: 'rangeLength', args: [8, 12], message: `请输入${8}-${12}个字符`, trigger: 'input+blur' },
                            { validate: '^azAZ09-_$', message: `以字母、数字、'-'或'_'组成`, trigger: 'input+blur' },
                        ]"
                        v-if="!isUpdate"
                    >
                        <u-input :ref="`input5`" :placeholder="`请输入8-12位普通登录密码`" :value.sync="input.password" :password="true"></u-input>
                        <template #label :ref="`template24`">
                            <u-text :ref="`text23`" :text="`登录密码`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item8`" :rules="[{ validate: 'mobile', args: [`zh-CN`, undefined], message: `请输入合法的手机号码`, trigger: 'input+blur' }]">
                        <u-input :ref="`input6`" :placeholder="`请输入手机号`" :value.sync="input.phone"></u-input>
                        <template #label :ref="`template25`">
                            <u-text :ref="`text24`" :text="`手机号`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item9`" :rules="[{ validate: 'email', message: `请输入正确的邮箱`, trigger: 'input+blur' }]">
                        <u-input :ref="`input7`" :placeholder="`请输入邮箱`" :value.sync="input.email"></u-input>
                        <template #label :ref="`template26`">
                            <u-text :ref="`text25`" :text="`邮箱`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item10`">
                        <u-input :ref="`input8`" :placeholder="`请输入昵称`" :value.sync="input.displayName"></u-input>
                        <template #label :ref="`template27`">
                            <u-text :ref="`text26`" :text="`昵称`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item3`" :key="`form_item3`" v-if="isUpdate">
                        <u-select :ref="`select1`" :placeholder="`请选择`" :valueField="`value`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserStatusEnum', typeArguments: null, returnType: null, properties: null, changedTime: 1676988664861, name: '' })" :value.sync="input.status" key="select1"></u-select>
                        <template #label :ref="`template28`">
                            <u-text :ref="`text27`" :text="`状态`"></u-text>
                        </template>
                    </u-form-item>
                    <u-form-item :ref="`form_item2`" :required="true">
                        <u-input :ref="`input2`" :placeholder="`普通登录`" :disabled="true"></u-input>
                        <template #label :ref="`template29`">
                            <u-text :ref="`text28`" :text="`用户来源`"></u-text>
                        </template>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template9`">
                <div :ref="`div1`" :key="`div1`" v-if="isUpdate">
                    <u-text :ref="`text6`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div2`" :key="`div2`" v-if="!isUpdate">
                    <u-text :ref="`text7`" :text="`创建`"></u-text>
                </div>
            </template>
        </u-modal>
        <u-modal :ref="`deleteModal`">
            <template #foot :ref="`template10`">
                <u-linear-layout :ref="`linear_layout10`">
                    <u-button :ref="`button5`" :color="`primary`" :text="`确定`" @click="button5_click($event)"></u-button>
                    <u-button :ref="`button6`" :text="`取消`" @click="button6_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template11`">
                <u-text :ref="`text8`" :text="`该用户相关的角色关联关系都会被删除！确认删除用户：`"></u-text>
                <u-text :ref="`text10`" :text="$utils['ToString']('nasl.core.String', (deleteUserBody || {}).userName)"></u-text>
                <u-text :ref="`text11`" :text="` ？`"></u-text>
            </template>
            <template #title :ref="`template12`">
                <u-text :ref="`text9`" :text="`删除用户 `"></u-text>
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
            ["lCAPUser"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["isUpdate"]: undefined,
            ["deleteUserBody"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["userList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["__tableView_params"]: {},
            ["__select1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "用户管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: "loginAuth",
    },
    methods: {
        async load(params) {
            params = this.$genInitFromSchema("nasl.ui.DataSourceParams", params === undefined ? (this.$route.query.hasOwnProperty("params") ? this.$genInitFromSchema("nasl.ui.DataSourceParams", this.$route.query.params) : undefined) : params);
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetUserTableView"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "737dc591-2b04-49ad-b60d-8e14ebb8b37f",
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
        async submit() {
            let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

            this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", await this.getUserNameList());
            this.$utils["ListDistinct"](this.userList);
            validateResult = await (this.$refs && this.$refs[`saveModalForm`] && this.$refs[`saveModalForm`].validate && this.$refs[`saveModalForm`].validate());
            if ((validateResult || {}).valid) {
                if (this.isUpdate == true) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPUser",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "e9d8db4a-137c-401c-a95b-ff34bdda963d",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                } else {
                    this.input.password = await this.$global.encryptByAES({ string: (this.input || {}).password });
                    this.input.userId = this.$utils["ToString"]("nasl.core.String", (this.input || {}).userName) + this.$utils["ToString"]("app.enums.UserSourceEnum", (this.input || {}).source);
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.LCAPUser",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "1da96513-cc80-4d1c-8991-7c8368817fdf",
                            },

                            body: this.input,
                        })
                    );
                }

                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].close && this.$refs[`saveModal`].close());
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `操作成功！`));
            } else {
            }

            return;
        },
        async getUserNameList() {
            let result = this.$genInitFromSchema("{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}", undefined);

            result = this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.LCAPGetAllUsers"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "835a5102-db00-4ba7-81b6-e5aec38e91c1",
                    },
                    path: {},
                    body: {},
                })
            );
            var $forEachListVariable1173 = (result || {}).list;
            var $forEachStartVariable1173 = 0;
            var $forEachEndVariable1173 = ((result || {}).list || {}).length;
            if (Array.isArray($forEachListVariable1173)) {
                for (let index = $forEachStartVariable1173; index < $forEachEndVariable1173; index++) {
                    const item = $forEachListVariable1173[index];
                    this.$utils["Add"](this.userList, ((item || {}).lCAPUser || {}).userName);
                }
            }

            return result;
        },
        async userManagement_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](this.lCAPUser));
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async button3_click(event) {
            await (async () => {
                await this.submit();
                return;
            })();
        },
        async button4_click(event) {
            await (async () => {
                await this.submit();
                return;
            })();
        },
        async button5_click(event) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d127d3c3-e99f-4732-b7be-f5093c1c668b",
                    },
                    query: {
                        id: (this.deleteUserBody || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                await this.$toast.show(this.$utils["ToString"]("nasl.core.String", `删除成功！`));
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.deleteUserBody));
                return;
            })();
        },
        async button6_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].close && this.$refs[`deleteModal`].close());
                return;
            })();
        },
        async button1_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`tableView`] && this.$refs[`tableView`].reload && this.$refs[`tableView`].reload());
                return;
            })();
        },
        async link1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](((current || {}).item || {}).lCAPUser));
                await (this.$refs && this.$refs[`saveModal`] && this.$refs[`saveModal`].open && this.$refs[`saveModal`].open());
                return;
            })();
        },
        async link2_click(event, current) {
            await (async () => {
                this.deleteUserBody = ((current || {}).item || {}).lCAPUser;
                await (this.$refs && this.$refs[`deleteModal`] && this.$refs[`deleteModal`].open && this.$refs[`deleteModal`].open());
                return;
            })();
        },
        __tableView_dataSource() {
            return this.load;
        },

        __tableView_dataSchema() {
            return undefined;
        },

        __tableView_valueField() {
            return undefined;
        },

        __tableView_pagination() {
            return true;
        },

        __tableView_showSizer() {
            return true;
        },

        __select1_placeholder() {
            return undefined;
        },

        __select1_valueField() {
            return undefined;
        },

        __select1_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "UserStatusEnum", typeArguments: null, returnType: null, properties: null, changedTime: 1676988664861, name: "" }));
        },

        __select1_value() {
            return (this.input || {}).status;
        },
    },
    async created() {
        await this.userManagement_created();
    },
};
</script>
