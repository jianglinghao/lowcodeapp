<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 40px; --update-key: dbvv; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_2`" :icon="true" :separator="`slash`" style="--custom-start: auto">
            <u-crumb-item :ref="`crumb_item_T5_4`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_10`" :text="`基础数据`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_6`" :icon="`list-display`" :disabled="true">
                <u-text :ref="`text_T5_12`" :text="`客户列表`" style="color: #000000"></u-text>
            </u-crumb-item>
        </u-crumb>
        <u-panel :ref="`panel_T5_1`" style="margin-top: 8px; --update-key: d1gb; height: 100%">
            <template #title :ref="`template_T5_1`">
                <u-text :ref="`text_T5_1`" :text="`查询`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_T5_2`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_T5_3`">
                    <u-linear-layout :ref="`linear_layout_T5_6`" :direction="`vertical`" style="--custom-start: auto">
                        <u-linear-layout :ref="`linear_layout_T5_22`" :direction="`vertical`" style="--custom-start: auto">
                            <u-linear-layout :ref="`linear_layout_T5_23`">
                                <u-form :ref="`form_T5_1`" :layout="`inline`" key="form_T5_1" style="--custom-start: auto">
                                    <u-form-item :ref="`form_item_T5_1`" :layout="`center`">
                                        <template #label :ref="`template_T5_3`">
                                            <u-text :ref="`text_T5_13`" :text="`客户名称`"></u-text>
                                        </template>
                                        <u-input :ref="`input_T5_1`" :placeholder="`请输入客户名称`" :value.sync="filter.customerName"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_2`" :layout="`center`">
                                        <template #label :ref="`template_T5_4`">
                                            <u-text :ref="`text_T5_14`" :text="`行业分类`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_1`" clearable="" :placeholder="`请选择行业分类`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'IndustryCategory', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.industryCategory" key="select_T5_1"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_3`" :layout="`center`">
                                        <template #label :ref="`template_T5_5`">
                                            <u-text :ref="`text_T5_15`" :text="`客户性质`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_2`" clearable="" :placeholder="`请选择客户性质`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'CustomerNature', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.customerNature" key="select_T5_2"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_5`" :layout="`center`" :labelSize="`auto`"></u-form-item>
                                </u-form>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_24`" style="text-align: right; border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 1px; --update-key: kicj; padding-bottom: 8px; border-color: #e5e6eb">
                                <u-button :ref="`button_T5_1`" :color="`primary`" :text="`查询`" @click="button_T5_1_click($event)" style="--custom-start: auto"></u-button>
                                <u-button :ref="`button_T5_5`" :color="`default`" :text="`重置`" @click="button_T5_5_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_27`" style="margin-top: -8px; --update-key: 8zgq">
                                <u-button :ref="`button_T5_2`" :color="`primary`" :text="`创建`" @click="button_T5_2_click($event)" style="--custom-start: auto"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_25`" style="--custom-start: auto"></u-linear-layout>
                        </u-linear-layout>
                        <u-table-view :ref="`tableView_T5_1`" :dataSource="(params) => __tableView_T5_1_handleDataSourceLoad(params)" :dataSchema="`LoadCustomerListTableView_T5_1Structure`" :valueField="`customer.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_T5_1">
                            <u-table-view-column :ref="`table_view_column_T5_1`" :type="`index`" :width="`60`">
                                <template #expander="current" :ref="`template_T5_7`">
                                    <u-table-view-expander :ref="`table_view_expander_T5_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                </template>
                                <template #cell="current" :ref="`template_T5_8`"></template>
                                <template #title :ref="`template_T5_9`">
                                    <u-text :ref="`text_T5_17`" :text="`序号`"></u-text>
                                </template>
                            </u-table-view-column>
                            <u-table-view-column :ref="`table_view_column_T5_4`" :field="`customer.customerName`">
                                <template #expander="current" :ref="`template_T5_16`">
                                    <u-table-view-expander :ref="`table_view_expander_T5_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                </template>
                                <template #cell="current" :ref="`template_T5_17`">
                                    <u-linear-layout :ref="`linear_layout_T5_11_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                        <u-link :ref="`link_T5_3_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).customer || {}).customerName)" :destination="`/dashboard/CustomerDetail?id=${(((current || {}).item || {}).customer || {}).id}`" style="--custom-start: auto"></u-link>
                                    </u-linear-layout>
                                </template>
                                <template #title :ref="`template_T5_18`">
                                    <u-text :ref="`text_T5_23`" :text="`客户名称`"></u-text>
                                </template>
                            </u-table-view-column>
                            <u-table-view-column :ref="`table_view_column_T5_5`" :field="`customer.industryCategory`">
                                <template #expander="current" :ref="`template_T5_19`">
                                    <u-table-view-expander :ref="`table_view_expander_T5_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                </template>
                                <template #cell="current" :ref="`template_T5_20`">
                                    <u-linear-layout :ref="`linear_layout_T5_12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                        <u-text :ref="`text_T5_24_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.IndustryCategory', (((current || {}).item || {}).customer || {}).industryCategory)"></u-text>
                                    </u-linear-layout>
                                </template>
                                <template #title :ref="`template_T5_21`">
                                    <u-text :ref="`text_T5_25`" :text="`行业分类`"></u-text>
                                </template>
                            </u-table-view-column>
                            <u-table-view-column :ref="`table_view_column_T5_6`" :field="`customer.customerNature`">
                                <template #expander="current" :ref="`template_T5_22`">
                                    <u-table-view-expander :ref="`table_view_expander_T5_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                </template>
                                <template #cell="current" :ref="`template_T5_23`">
                                    <u-linear-layout :ref="`linear_layout_T5_13_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                        <u-text :ref="`text_T5_26_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.CustomerNature', (((current || {}).item || {}).customer || {}).customerNature)"></u-text>
                                    </u-linear-layout>
                                </template>
                                <template #title :ref="`template_T5_24`">
                                    <u-text :ref="`text_T5_27`" :text="`客户性质`"></u-text>
                                </template>
                            </u-table-view-column>
                            <u-table-view-column :ref="`table_view_column_T5_8`" :title="`操作`">
                                <template #expander="current" :ref="`template_T5_28`">
                                    <u-table-view-expander :ref="`table_view_expander_T5_8_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                </template>
                                <template #cell="current" :ref="`template_T5_29`">
                                    <u-linear-layout :ref="`linear_layout_T5_15_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                        <u-link :ref="`link_T5_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_T5_1_click($event, current)"></u-link>
                                        <u-link :ref="`link_T5_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_T5_2_click($event, current)"></u-link>
                                    </u-linear-layout>
                                </template>
                                <template #title :ref="`template_T5_30`">
                                    <u-text :ref="`text_T5_30`" :text="`操作`"></u-text>
                                </template>
                            </u-table-view-column>
                        </u-table-view>
                    </u-linear-layout>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_T5_4`"></u-linear-layout>
                <u-linear-layout :ref="`linear_layout_T5_5`" style="--custom-start: auto"></u-linear-layout>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_T5_1`" :size="`auto`">
            <template #foot :ref="`template_T5_31`">
                <u-linear-layout :ref="`linear_layout_T5_16`" style="text-align: right">
                    <u-button :ref="`button_T5_6`" :color="`default`" :text="`取消`" @click="button_T5_6_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5; --custom-start: auto"></u-button>
                    <u-button :ref="`button_T5_3`" :key="`button_T5_3`" :color="`primary`" :text="`提交修改`" @click="button_T5_3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_T5_4`" :key="`button_T5_4`" :color="`primary`" :text="`立即创建`" @click="button_T5_4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_T5_32`">
                <u-linear-layout :ref="`linear_layout_T5_31`" :direction="`vertical`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout_T5_32`">
                        <u-grid-layout :ref="`grid_layout_T5_3`" style="--custom-start: auto">
                            <u-grid-layout-row :ref="`grid_layout_row_T5_3`" :repeat="24" style="width: 1000px">
                                <u-grid-layout-column :ref="`grid_layout_column_T5_9`" :span="16" style="--custom-start: auto">
                                    <lcap-wang-editor :ref="`lcap_wang_editor_T5_1`" :value.sync="input.remark" :placeholder="`请输入备注`" style="--custom-start: auto"></lcap-wang-editor>
                                </u-grid-layout-column>
                                <u-grid-layout-column :ref="`grid_layout_column_T5_8`" :span="8">
                                    <u-form :ref="`saveModalForm_T5_1`" key="saveModalForm_T5_1" style="--custom-start: auto">
                                        <u-form-item :ref="`form_item_T5_6`" :layout="`center`">
                                            <template #label :ref="`template_T5_33`">
                                                <u-text :ref="`text_T5_31`" :text="`客户名称`"></u-text>
                                            </template>
                                            <u-input :ref="`input_T5_3`" :placeholder="`请输入客户名称`" :value.sync="input.customerName"></u-input>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_7`" :layout="`center`">
                                            <template #label :ref="`template_T5_34`">
                                                <u-text :ref="`text_T5_32`" :text="`行业分类`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_3`" clearable="" :placeholder="`请选择行业分类`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'IndustryCategory', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.industryCategory" key="select_T5_3"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_8`" :layout="`center`">
                                            <template #label :ref="`template_T5_35`">
                                                <u-text :ref="`text_T5_33`" :text="`客户性质`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_4`" clearable="" :placeholder="`请选择客户性质`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'CustomerNature', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.customerNature" key="select_T5_4"></u-select>
                                        </u-form-item>
                                    </u-form>
                                </u-grid-layout-column>
                            </u-grid-layout-row>
                        </u-grid-layout>
                    </u-linear-layout>
                    <u-linear-layout :ref="`linear_layout_T5_33`"></u-linear-layout>
                </u-linear-layout>
            </template>
            <template #title :ref="`template_T5_37`">
                <div :ref="`div_T5_1`" :key="`div_T5_1`" v-if="isUpdate">
                    <u-text :ref="`text_T5_35`" :text="`编辑客户`"></u-text>
                </div>
                <div :ref="`div_T5_2`" :key="`div_T5_2`" v-if="!isUpdate">
                    <u-text :ref="`text_T5_36`" :text="`新建客户`"></u-text>
                </div>
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
            ["customer"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", undefined),
            ["isUpdate"]: undefined,
            ["__select_T5_1_params"]: {},
            ["__select_T5_2_params"]: {},
            ["__tableView_T5_1_params"]: {},
            ["__select_T5_3_params"]: {},
            ["__select_T5_4_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "客户列表",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async CustomerList_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_T5_6_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`saveModal_T5_1`] && this.$refs[`saveModal_T5_1`].close && this.$refs[`saveModal_T5_1`].close());
                return;
            })();
        },
        async button_T5_3_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_1`] && this.$refs[`saveModalForm_T5_1`].validate && this.$refs[`saveModalForm_T5_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Customer",
                        await this.$logics["app.dataSources.defaultDS.entities.Customer.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "67af009e18e04ff29fecfeb3028d91e4",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_1`] && this.$refs[`saveModal_T5_1`].close && this.$refs[`saveModal_T5_1`].close());
                    await (this.$refs && this.$refs[`tableView_T5_1`] && this.$refs[`tableView_T5_1`].reload && this.$refs[`tableView_T5_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_4_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_1`] && this.$refs[`saveModalForm_T5_1`].validate && this.$refs[`saveModalForm_T5_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Customer",
                        await this.$logics["app.dataSources.defaultDS.entities.Customer.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "7ba0ccce25b7443cb7c4ed177d6c568f",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_1`] && this.$refs[`saveModal_T5_1`].close && this.$refs[`saveModal_T5_1`].close());
                    await (this.$refs && this.$refs[`tableView_T5_1`] && this.$refs[`tableView_T5_1`].reload && this.$refs[`tableView_T5_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_T5_1`] && this.$refs[`tableView_T5_1`].reload && this.$refs[`tableView_T5_1`].reload());
                return;
            })();
        },
        async button_T5_5_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", this.$utils["Clear"](this.filter));
                await (this.$refs && this.$refs[`tableView_T5_1`] && this.$refs[`tableView_T5_1`].reload && this.$refs[`tableView_T5_1`].reload());
                return;
            })();
        },
        async button_T5_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", this.$utils["Clone"](this.customer));
                await (this.$refs && this.$refs[`saveModal_T5_1`] && this.$refs[`saveModal_T5_1`].open && this.$refs[`saveModal_T5_1`].open());
                return;
            })();
        },
        async link_T5_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", this.$utils["Clone"](((current || {}).item || {}).customer));
                await (this.$refs && this.$refs[`saveModal_T5_1`] && this.$refs[`saveModal_T5_1`].open && this.$refs[`saveModal_T5_1`].open());
                return;
            })();
        },
        async link_T5_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.Customer.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "a1c5f96a40a542dabc9eb1d89abda401",
                    },
                    query: {
                        id: (((current || {}).item || {}).customer || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_T5_1`] && this.$refs[`tableView_T5_1`].reload && this.$refs[`tableView_T5_1`].reload());
                return;
            })();
        },
        async __tableView_T5_1_handleDataSourceLoad(params) {
            this["__tableView_T5_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCustomerListTableView_T5_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "520399d6fe6a4b66984c253d180d88f3",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_1_params && this.__tableView_T5_1_params.page,
                        size: this.__tableView_T5_1_params && this.__tableView_T5_1_params.size,
                        sort: this.__tableView_T5_1_params && this.__tableView_T5_1_params.sort,
                        order: this.__tableView_T5_1_params && this.__tableView_T5_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        __select_T5_1_clearable() {
            return undefined;
        },

        __select_T5_1_placeholder() {
            return undefined;
        },

        __select_T5_1_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "IndustryCategory", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_1_pageSize() {
            return 50;
        },

        __select_T5_1_value() {
            return (this.filter || {}).industryCategory;
        },

        __select_T5_2_clearable() {
            return undefined;
        },

        __select_T5_2_placeholder() {
            return undefined;
        },

        __select_T5_2_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "CustomerNature", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_2_pageSize() {
            return 50;
        },

        __select_T5_2_value() {
            return (this.filter || {}).customerNature;
        },

        async __tableView_T5_1_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadCustomerListTableView_T5_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "520399d6fe6a4b66984c253d180d88f3",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_1_params && this.__tableView_T5_1_params.page,
                        size: this.__tableView_T5_1_params && this.__tableView_T5_1_params.size,
                        sort: this.__tableView_T5_1_params && this.__tableView_T5_1_params.sort,
                        order: this.__tableView_T5_1_params && this.__tableView_T5_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        __tableView_T5_1_dataSchema() {
            return undefined;
        },

        __tableView_T5_1_valueField() {
            return undefined;
        },

        __tableView_T5_1_pagination() {
            return true;
        },

        __tableView_T5_1_showSizer() {
            return true;
        },

        __tableView_T5_1_pageSize() {
            return 20;
        },

        __tableView_T5_1_pageNumber() {
            return 1;
        },

        __select_T5_3_clearable() {
            return undefined;
        },

        __select_T5_3_placeholder() {
            return undefined;
        },

        __select_T5_3_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "IndustryCategory", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_3_pageSize() {
            return 50;
        },

        __select_T5_3_value() {
            return (this.input || {}).industryCategory;
        },

        __select_T5_4_clearable() {
            return undefined;
        },

        __select_T5_4_placeholder() {
            return undefined;
        },

        __select_T5_4_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "CustomerNature", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_4_pageSize() {
            return 50;
        },

        __select_T5_4_value() {
            return (this.input || {}).customerNature;
        },
    },
    async created() {
        await this.CustomerList_created();
    },
};
</script>
