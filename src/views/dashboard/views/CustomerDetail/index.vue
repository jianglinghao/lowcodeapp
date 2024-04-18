<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 40px; --update-key: 383b; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_2`" :icon="true" :separator="`slash`" style="--custom-start: auto">
            <u-crumb-item :ref="`crumb_item_T5_4`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_10`" :text="`基础数据`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_6`" :icon="`list-display`" :disabled="true">
                <u-text :ref="`text_T5_12`" :text="`客户列表`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_8`" :icon="`menu`" :disabled="true" style="--custom-start: auto">
                <u-text :ref="`text_T5_23`" :text="`客户详情`" style="color: #000000"></u-text>
            </u-crumb-item>
        </u-crumb>
        <u-panel :ref="`panel_T5_1`" style="margin-top: 8px; --update-key: dgbe; height: 100%">
            <template #title :ref="`template_T5_16`">
                <u-text :ref="`text_T5_32`" :text="$utils['ToString']('nasl.core.String', (customer || {}).customerName)" style="--custom-start: auto"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_T5_28`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_T5_30`">
                    <u-grid-layout :ref="`grid_layout_T5_2`" style="--custom-start: auto">
                        <u-grid-layout-row :ref="`grid_layout_row_T5_2`" :repeat="24">
                            <u-grid-layout-column :ref="`grid_layout_column_T5_5`" :span="16">
                                <u-info-list :ref="`info_list_T5_2`" style="--custom-start: auto">
                                    <u-info-list-group :ref="`info_list_group_T5_2`" :repeat="1">
                                        <template #title :ref="`template_T5_29`">
                                            <u-text :ref="`text_T5_31`" :text="`客户备注`"></u-text>
                                        </template>
                                        <u-info-list-item :ref="`info_list_item_T5_5`">
                                            <template #label :ref="`template_T5_33`"></template>
                                            <lcap-wang-editor :ref="`lcap_wang_editor_T5_1`" :scroll="true" :value.sync="customer.remark" :readOnly="true" style="border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; --update-key: ryj5; border-color: #999999; margin-left: -40px"></lcap-wang-editor>
                                        </u-info-list-item>
                                    </u-info-list-group>
                                </u-info-list>
                            </u-grid-layout-column>
                            <u-grid-layout-column :ref="`grid_layout_column_T5_4`" :span="8" style="--custom-start: auto">
                                <u-info-list :ref="`info_list_T5_1`" style="--custom-start: auto">
                                    <u-info-list-group :ref="`info_list_group_T5_1`" :repeat="1">
                                        <template #title :ref="`template_T5_28`">
                                            <u-text :ref="`text_T5_30`" :text="`基本信息`"></u-text>
                                        </template>
                                        <u-info-list-item :ref="`info_list_item_T5_2`">
                                            <template #label :ref="`template_T5_30`">
                                                <u-text :ref="`text_T5_33`" :text="`行业分类`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_34`" :text="$utils['ToString']('app.enums.IndustryCategory', (customer || {}).industryCategory)"></u-text>
                                        </u-info-list-item>
                                        <u-info-list-item :ref="`info_list_item_T5_3`">
                                            <template #label :ref="`template_T5_31`">
                                                <u-text :ref="`text_T5_35`" :text="`客户性质`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_36`" :text="$utils['ToString']('app.enums.CustomerNature', (customer || {}).customerNature)"></u-text>
                                        </u-info-list-item>
                                    </u-info-list-group>
                                </u-info-list>
                            </u-grid-layout-column>
                        </u-grid-layout-row>
                    </u-grid-layout>
                </u-linear-layout>
            </u-linear-layout>
        </u-panel>
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
            ["id"]: this.$route.query.hasOwnProperty("id") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.id) : undefined,
        };
    },
    computed: {},
    meta: {
        title: "客户详情",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async CustomerDetail_created(event) {
            await (async () => {
                this.customer = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.Customer",
                    await this.$logics["app.dataSources.defaultDS.entities.Customer.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "128cfc5a168e44f5972d2f2d3859f395",
                        },
                        query: {
                            id: this.id,
                        },
                        body: {},
                    })
                );
                return;
            })();
        },
    },
    async created() {
        await this.CustomerDetail_created();
    },
};
</script>
