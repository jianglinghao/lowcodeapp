<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_mk_1`" :direction="`vertical`" style="--custom-start: auto">
            <u-linear-layout :ref="`linear_layout_mk_2`" :justify="`space-between`">
                <u-form :ref="`form_mk_1`" :layout="`inline`" key="form_mk_1">
                    <u-form-item :ref="`form_item_mk_1`" :layout="`center`">
                        <template #label :ref="`template_mk_1`">
                            <u-text :ref="`text_mk_1`" :text="`用户名`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_1`" :placeholder="`请输入用户名`" :value.sync="filter.userName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_2`" :layout="`center`">
                        <template #label :ref="`template_mk_2`">
                            <u-text :ref="`text_mk_2`" :text="`手机号`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_2`" :placeholder="`请输入手机号`" :value.sync="filter.phone"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_3`" :layout="`center`">
                        <template #label :ref="`template_mk_3`">
                            <u-text :ref="`text_mk_3`" :text="`昵称`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_3`" :placeholder="`请输入昵称`" :value.sync="filter.displayName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_4`" :layout="`center`">
                        <template #label :ref="`template_mk_4`">
                            <u-text :ref="`text_mk_4`" :text="`工时`"></u-text>
                        </template>
                        <u-number-input :ref="`number_input_mk_1`" :highPrecision="true" :step="0.01" :decimalLength="2" :decimalPlaces="{ places: 2, omit: false }" :placeholder="`请输入工时`" :value.sync="filter.workTime"></u-number-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_5`" :layout="`center`" :labelSize="`auto`">
                        <u-button :ref="`button_mk_1`" :color="`primary`" :text="`查 询`" @click="button_mk_1_click($event)"></u-button>
                    </u-form-item>
                </u-form>
                <u-linear-layout :ref="`linear_layout_mk_3`">
                    <u-button :ref="`button_mk_2`" :color="`primary`" :text="`创 建`" @click="button_mk_2_click($event)"></u-button>
                </u-linear-layout>
            </u-linear-layout>
            <u-table-view :ref="`tableView_mk_1`" :dataSource="(params) => __tableView_mk_1_handleDataSourceLoad(params)" :dataSchema="`LoadWorkHourStatisticsTableView_mk_1Structure`" :valueField="`lCAPUser.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_mk_1">
                <u-table-view-column :ref="`table_view_column_mk_1`" :type="`index`" :width="`60`">
                    <template #expander="current" :ref="`template_mk_5`">
                        <u-table-view-expander :ref="`table_view_expander_mk_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_6`"></template>
                    <template #title :ref="`template_mk_7`">
                        <u-text :ref="`text_mk_5`" :text="`序号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_2`" :field="`lCAPUser.userName`">
                    <template #expander="current" :ref="`template_mk_8`">
                        <u-table-view-expander :ref="`table_view_expander_mk_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_9`">
                        <u-linear-layout :ref="`linear_layout_mk_4_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_6_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).userName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_10`">
                        <u-text :ref="`text_mk_7`" :text="`用户名`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_3`" :field="`lCAPUser.phone`">
                    <template #expander="current" :ref="`template_mk_11`">
                        <u-table-view-expander :ref="`table_view_expander_mk_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_12`">
                        <u-linear-layout :ref="`linear_layout_mk_5_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_8_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).phone)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_13`">
                        <u-text :ref="`text_mk_9`" :text="`手机号`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_4`" :field="`lCAPUser.email`">
                    <template #expander="current" :ref="`template_mk_14`">
                        <u-table-view-expander :ref="`table_view_expander_mk_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_15`">
                        <u-linear-layout :ref="`linear_layout_mk_6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_10_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).email)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_16`">
                        <u-text :ref="`text_mk_11`" :text="`邮箱`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_5`" :field="`lCAPUser.displayName`">
                    <template #expander="current" :ref="`template_mk_17`">
                        <u-table-view-expander :ref="`table_view_expander_mk_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_18`">
                        <u-linear-layout :ref="`linear_layout_mk_7_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_12_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).displayName)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_19`">
                        <u-text :ref="`text_mk_13`" :text="`昵称`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_6`" :field="`lCAPUser.status`">
                    <template #expander="current" :ref="`template_mk_20`">
                        <u-table-view-expander :ref="`table_view_expander_mk_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_21`">
                        <u-linear-layout :ref="`linear_layout_mk_8_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_14_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.UserStatusEnum', (((current || {}).item || {}).lCAPUser || {}).status)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_22`">
                        <u-text :ref="`text_mk_15`" :text="`状态`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_7`" :field="`lCAPUser.workTime`">
                    <template #expander="current" :ref="`template_mk_23`">
                        <u-table-view-expander :ref="`table_view_expander_mk_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_24`">
                        <u-linear-layout :ref="`linear_layout_mk_9_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-text :ref="`text_mk_16_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Decimal', (((current || {}).item || {}).lCAPUser || {}).workTime)"></u-text>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_25`">
                        <u-text :ref="`text_mk_17`" :text="`工时`"></u-text>
                    </template>
                </u-table-view-column>
                <u-table-view-column :ref="`table_view_column_mk_8`" :title="`操作`">
                    <template #expander="current" :ref="`template_mk_26`">
                        <u-table-view-expander :ref="`table_view_expander_mk_8_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                    </template>
                    <template #cell="current" :ref="`template_mk_27`">
                        <u-linear-layout :ref="`linear_layout_mk_10_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                            <u-link :ref="`link_mk_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_mk_1_click($event, current)"></u-link>
                            <u-link :ref="`link_mk_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_mk_2_click($event, current)"></u-link>
                        </u-linear-layout>
                    </template>
                    <template #title :ref="`template_mk_28`">
                        <u-text :ref="`text_mk_18`" :text="`操作`"></u-text>
                    </template>
                </u-table-view-column>
            </u-table-view>
        </u-linear-layout>
        <u-modal :ref="`saveModal_mk_1`">
            <template #foot :ref="`template_mk_29`">
                <u-linear-layout :ref="`linear_layout_mk_11`">
                    <u-button :ref="`button_mk_3`" :key="`button_mk_3`" :color="`primary`" :text="`提交修改`" @click="button_mk_3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_mk_4`" :key="`button_mk_4`" :color="`primary`" :text="`立即创建`" @click="button_mk_4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_mk_30`">
                <u-form :ref="`saveModalForm_mk_1`" key="saveModalForm_mk_1">
                    <u-form-item :ref="`form_item_mk_6`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`">
                        <template #label :ref="`template_mk_31`">
                            <u-text :ref="`text_mk_19`" :text="`用户名`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_4`" :placeholder="`请输入用户名`" :value.sync="input.userName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_7`" :layout="`center`">
                        <template #label :ref="`template_mk_32`">
                            <u-text :ref="`text_mk_20`" :text="`登录密码`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_5`" :placeholder="`请输入登录密码`" :value.sync="input.password"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_8`" :layout="`center`">
                        <template #label :ref="`template_mk_33`">
                            <u-text :ref="`text_mk_21`" :text="`手机号`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_6`" :placeholder="`请输入手机号`" :value.sync="input.phone"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_9`" :layout="`center`">
                        <template #label :ref="`template_mk_34`">
                            <u-text :ref="`text_mk_22`" :text="`邮箱`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_7`" :placeholder="`请输入邮箱`" :value.sync="input.email"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_10`" :layout="`center`">
                        <template #label :ref="`template_mk_35`">
                            <u-text :ref="`text_mk_23`" :text="`昵称`"></u-text>
                        </template>
                        <u-input :ref="`input_mk_8`" :placeholder="`请输入昵称`" :value.sync="input.displayName"></u-input>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_11`" :layout="`center`">
                        <template #label :ref="`template_mk_36`">
                            <u-text :ref="`text_mk_24`" :text="`状态`"></u-text>
                        </template>
                        <u-select :ref="`select_mk_1`" clearable="" :placeholder="`请选择状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserStatusEnum', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.status" key="select_mk_1"></u-select>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_12`" :required="true" :rules="[{ validate: 'required', message: `表单项不得为空`, trigger: 'input+blur', required: true }]" :layout="`center`">
                        <template #label :ref="`template_mk_37`">
                            <u-text :ref="`text_mk_25`" :text="`用户来源`"></u-text>
                        </template>
                        <u-select :ref="`select_mk_2`" clearable="" :placeholder="`请选择用户来源`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'UserSourceEnum', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.source" key="select_mk_2"></u-select>
                    </u-form-item>
                    <u-form-item :ref="`form_item_mk_13`" :layout="`center`">
                        <template #label :ref="`template_mk_38`">
                            <u-text :ref="`text_mk_26`" :text="`工时`"></u-text>
                        </template>
                        <u-number-input :ref="`number_input_mk_2`" :highPrecision="true" :step="0.01" :decimalLength="2" :decimalPlaces="{ places: 2, omit: false }" :placeholder="`请输入工时`" :value.sync="input.workTime"></u-number-input>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_mk_39`">
                <div :ref="`div_mk_1`" :key="`div_mk_1`" v-if="isUpdate">
                    <u-text :ref="`text_mk_27`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_mk_2`" :key="`div_mk_2`" v-if="!isUpdate">
                    <u-text :ref="`text_mk_28`" :text="`创建`"></u-text>
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
            ["lCAPUser"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", undefined),
            ["isUpdate"]: undefined,
            ["__tableView_mk_1_params"]: {},
            ["__select_mk_1_params"]: {},
            ["__select_mk_2_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "工时统计",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async workHourStatistics_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_mk_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](this.lCAPUser));
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
                        "app.dataSources.defaultDS.entities.LCAPUser",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "4258c26bdd2c4f079835344686bfa0cf",
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
                        "app.dataSources.defaultDS.entities.LCAPUser",
                        await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "c5e8b755a9ac434aaf7fbfc203079a26",
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
        async button_mk_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_mk_1`] && this.$refs[`tableView_mk_1`].reload && this.$refs[`tableView_mk_1`].reload());
                return;
            })();
        },
        async link_mk_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.LCAPUser", this.$utils["Clone"](((current || {}).item || {}).lCAPUser));
                await (this.$refs && this.$refs[`saveModal_mk_1`] && this.$refs[`saveModal_mk_1`].open && this.$refs[`saveModal_mk_1`].open());
                return;
            })();
        },
        async link_mk_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.LCAPUser.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6158255fe7f84b9db15fec990be0dae6",
                    },
                    query: {
                        id: (((current || {}).item || {}).lCAPUser || {}).id,
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
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadWorkHourStatisticsTableView_mk_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6651ea4907b1402abfb4d49cadcbc638",
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
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadWorkHourStatisticsTableView_mk_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6651ea4907b1402abfb4d49cadcbc638",
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

        __select_mk_1_clearable() {
            return undefined;
        },

        __select_mk_1_placeholder() {
            return undefined;
        },

        __select_mk_1_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "UserStatusEnum", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_mk_1_pageSize() {
            return 50;
        },

        __select_mk_1_value() {
            return (this.input || {}).status;
        },

        __select_mk_2_clearable() {
            return undefined;
        },

        __select_mk_2_placeholder() {
            return undefined;
        },

        __select_mk_2_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "UserSourceEnum", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_mk_2_pageSize() {
            return 50;
        },

        __select_mk_2_value() {
            return (this.input || {}).source;
        },
    },
    async created() {
        await this.workHourStatistics_created();
    },
};
</script>
