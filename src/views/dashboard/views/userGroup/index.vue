<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_mk_1`" :direction="`vertical`" style="--custom-start: auto">
            <u-linear-layout :ref="`linear_layout_mk_2`" :justify="`space-between`">
                <u-form :ref="`form_mk_1`" :layout="`inline`" key="form_mk_1">
                    <u-form-item :ref="`form_item_mk_1`" :layout="`center`">
                        <template #label :ref="`template_mk_2`">
                            <u-text :ref="`text_mk_5`" :text="`用户组名称`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_1`" :placeholder="`请输入用户组名称`" :value.sync="filter.groupName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_2`" :layout="`center`" :labelSize="`auto`">
                        <u-button :ref="`button_mk_1`" :color="`primary`" :text="`查 询`" @click="button_mk_1_click($event)"></u-button>
                    </u-form-item>
                </u-form>
                <u-linear-layout :ref="`linear_layout_mk_3`">
                    <u-button :ref="`button_mk_2`" :color="`primary`" :text="`创 建`" @click="button_mk_2_click($event)"></u-button>
                </u-linear-layout>
            </u-linear-layout>
            <u-table-view :ref="`tableView_mk_1`" :dataSource="(params) => __tableView_mk_1_handleDataSourceLoad(params)" :dataSchema="`LoadUserGroupTableView_mk_1Structure`" :valueField="`userGroup.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_mk_1">
                <u-table-view-column :ref="`table_view_column_mk_1`" :type="`index`" :width="`60`">
                    <template #expander="current" :ref="`template_mk_3`">
                        <u-table-view-expander :ref="`table_view_expander_mk_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_4`"></template>
                    <template #title :ref="`template_mk_5`">
                        <u-text :ref="`text_mk_6`" :text="`序号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_2`" :field="`userGroup.createdTime`">
                    <template #expander="current" :ref="`template_mk_6`">
                        <u-table-view-expander :ref="`table_view_expander_mk_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_7`">
                        <u-linear-layout :ref="`linear_layout_mk_4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_7_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).userGroup || {}).createdTime)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_8`">
                        <u-text :ref="`text_mk_8`" :text="`创建时间`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_3`" :field="`userGroup.createdBy`">
                    <template #expander="current" :ref="`template_mk_9`">
                        <u-table-view-expander :ref="`table_view_expander_mk_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_10`">
                        <u-linear-layout :ref="`linear_layout_mk_5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_9_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).userGroup || {}).createdBy)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_11`">
                        <u-text :ref="`text_mk_10`" :text="`创建者`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_4`" :field="`userGroup.groupName`">
                    <template #expander="current" :ref="`template_mk_12`">
                        <u-table-view-expander :ref="`table_view_expander_mk_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_13`">
                        <u-linear-layout :ref="`linear_layout_mk_6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_11_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).userGroup || {}).groupName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_14`">
                        <u-text :ref="`text_mk_12`" :text="`用户组名称`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_5`" :title="`操作`">
                    <template #expander="current" :ref="`template_mk_15`">
                        <u-table-view-expander :ref="`table_view_expander_mk_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_16`">
                        <u-linear-layout :ref="`linear_layout_mk_7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-link :ref="`link_mk_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`添加用户`" @click="link_mk_1_click($event, current)"></u-link>
                            <u-link :ref="`link_mk_3_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_mk_3_click($event, current)" style="--custom-start: auto"></u-link>
                            <u-link :ref="`link_mk_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_mk_2_click($event, current)"></u-link>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_17`">
                        <u-text :ref="`text_mk_13`" :text="`操作`"></u-text>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
        <u-modal :ref="`saveModal_mk_1`">
            <template #foot :ref="`template_mk_18`">
                <u-linear-layout :ref="`linear_layout_mk_8`">
                    <u-button :ref="`button_mk_3`" :key="`button_mk_3`" :color="`primary`" :text="`提交修改`" @click="button_mk_3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_mk_4`" :key="`button_mk_4`" :color="`primary`" :text="`立即创建`" @click="button_mk_4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_mk_19`">
                <u-form :ref="`saveModalForm_mk_1`" key="saveModalForm_mk_1">
                    <u-form-item :ref="`form_item_mk_3`" :layout="`center`">
                        <template #label :ref="`template_mk_20`">
                            <u-text :ref="`text_mk_14`" :text="`用户组名称`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_2`" :placeholder="`请输入用户组名称`" :value.sync="input.groupName"></u-input>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_mk_21`">
                <div :ref="`div_mk_1`" :key="`div_mk_1`" v-if="isUpdate">
                    <u-text :ref="`text_mk_15`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_mk_2`" :key="`div_mk_2`" v-if="!isUpdate">
                    <u-text :ref="`text_mk_16`" :text="`创建`"></u-text>
                </div>
            </template>
        </u-modal>
        <u-modal :ref="`modal_mk_1`" style="--custom-start: auto">
            <template #foot :ref="`template_mk_22`">
                <u-linear-layout :ref="`linear_layout_mk_9`" :vusion-disabled-cut="true" :justify="`center`">
                    <u-button :ref="`button_mk_5`" :color="`primary`" :text="`确 定`"></u-button>
                    <u-button :ref="`button_mk_6`" :text="`取 消`" @click="button_mk_6_click($event)"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_mk_23`">
                <u-text :ref="`text_mk_17`" :text="`内容`"></u-text>
            </template>
            <template #title :ref="`template_mk_24`">
                <u-text :ref="`text_mk_18`" :text="`添加用户`"></u-text>
            </template>
        </u-modal>
    </u-linear-layout>
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
            ["userGroup"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", undefined),
            ["isUpdate"]: undefined,
            ["__tableView_mk_1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "用户组管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async userGroup_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_mk_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", this.$utils["Clone"](this.userGroup));
                await (this.$refs && this.$refs[`saveModal_mk_1`] && this.$refs[`saveModal_mk_1`].open && this.$refs[`saveModal_mk_1`].open());
                return;
            })();
        },
        async button_mk_3_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_mk_1`] && this.$refs[`saveModalForm_mk_1`].validate && this.$refs[`saveModalForm_mk_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.UserGroup",
                        await this.$logics["app.dataSources.defaultDS.entities.UserGroup.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "cc67ad1aa2ff4d06a38316b0765e068d",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_mk_1`] && this.$refs[`saveModal_mk_1`].close && this.$refs[`saveModal_mk_1`].close());
                    await (this.$refs && this.$refs[`tableView_mk_1`] && this.$refs[`tableView_mk_1`].reload && this.$refs[`tableView_mk_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_mk_4_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_mk_1`] && this.$refs[`saveModalForm_mk_1`].validate && this.$refs[`saveModalForm_mk_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.UserGroup",
                        await this.$logics["app.dataSources.defaultDS.entities.UserGroup.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "58d42626917842f5ad8d1722d37e68aa",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_mk_1`] && this.$refs[`saveModal_mk_1`].close && this.$refs[`saveModal_mk_1`].close());
                    await (this.$refs && this.$refs[`tableView_mk_1`] && this.$refs[`tableView_mk_1`].reload && this.$refs[`tableView_mk_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_mk_6_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`modal_mk_1`] && this.$refs[`modal_mk_1`].close && this.$refs[`modal_mk_1`].close());
                return;
            })();
        },
        async button_mk_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_mk_1`] && this.$refs[`tableView_mk_1`].reload && this.$refs[`tableView_mk_1`].reload());
                return;
            })();
        },
        async link_mk_1_click(event, current) {
            await (async () => {
                return;
            })();
        },
        async link_mk_3_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.UserGroup", this.$utils["Clone"](((current || {}).item || {}).userGroup));
                await (this.$refs && this.$refs[`saveModal_mk_1`] && this.$refs[`saveModal_mk_1`].open && this.$refs[`saveModal_mk_1`].open());
                return;
            })();
        },
        async link_mk_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.UserGroup.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "823591db1bd24ce69337bb6092623967",
                    },
                    query: {
                        id: (((current || {}).item || {}).userGroup || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_mk_1`] && this.$refs[`tableView_mk_1`].reload && this.$refs[`tableView_mk_1`].reload());
                return;
            })();
        },
        async __tableView_mk_1_handleDataSourceLoad(params) {
            this["__tableView_mk_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{userGroup: app.dataSources.defaultDS.entities.UserGroup}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadUserGroupTableView_mk_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "b90ed2b0792b4a93b7df6b2fb7073356",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_mk_1_params && this.__tableView_mk_1_params.page,
                        size: this.__tableView_mk_1_params && this.__tableView_mk_1_params.size,
                        sort: this.__tableView_mk_1_params && this.__tableView_mk_1_params.sort,
                        order: this.__tableView_mk_1_params && this.__tableView_mk_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        async __tableView_mk_1_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{userGroup: app.dataSources.defaultDS.entities.UserGroup}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadUserGroupTableView_mk_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "b90ed2b0792b4a93b7df6b2fb7073356",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_mk_1_params && this.__tableView_mk_1_params.page,
                        size: this.__tableView_mk_1_params && this.__tableView_mk_1_params.size,
                        sort: this.__tableView_mk_1_params && this.__tableView_mk_1_params.sort,
                        order: this.__tableView_mk_1_params && this.__tableView_mk_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        __tableView_mk_1_dataSchema() {
            return undefined;
        },

        __tableView_mk_1_valueField() {
            return undefined;
        },

        __tableView_mk_1_pagination() {
            return true;
        },

        __tableView_mk_1_showSizer() {
            return true;
        },

        __tableView_mk_1_pageSize() {
            return 20;
        },

        __tableView_mk_1_pageNumber() {
            return 1;
        },
    },
    async created() {
        await this.userGroup_created();
    },
};
</script>
