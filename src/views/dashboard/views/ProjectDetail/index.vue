<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 0px; --update-key: brnn; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_3`" :icon="true" :separator="`slash`" style="--custom-start: auto">
            <u-crumb-item :ref="`crumb_item_T5_5`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_11`" :text="`基础数据`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_7`" :icon="`list-display`" :disabled="true">
                <u-text :ref="`text_T5_13`" :text="`项目列表`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_9`" :icon="`menu`" :disabled="true" style="--custom-start: auto">
                <u-text :ref="`text_T5_80`" :text="`项目详情`" style="color: #000000"></u-text>
            </u-crumb-item>
        </u-crumb>
        <u-panel :ref="`panel_T5_1`" style="margin-top: 8px; --update-key: f7fw; height: 100%">
            <template #title :ref="`template_T5_16`">
                <u-text :ref="`text_T5_32`" :text="$utils['ToString']('nasl.core.String', (project || {}).projectName)" style="--custom-start: auto"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_T5_28`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_T5_30`">
                    <u-grid-layout :ref="`grid_layout_T5_2`" style="--custom-start: auto">
                        <u-grid-layout-row :ref="`grid_layout_row_T5_2`" :repeat="24">
                            <u-grid-layout-column :ref="`grid_layout_column_T5_5`" :span="16">
                                <u-info-list :ref="`info_list_T5_2`" style="--custom-start: auto">
                                    <u-info-list-group :ref="`info_list_group_T5_2`" :repeat="1">
                                        <template #title :ref="`template_T5_29`">
                                            <u-text :ref="`text_T5_31`" :text="`项目备注`"></u-text>
                                        </template>
                                        <u-info-list-item :ref="`info_list_item_T5_5`">
                                            <template #label :ref="`template_T5_33`"></template>
                                            <lcap-wang-editor :ref="`lcap_wang_editor_T5_1`" :scroll="true" :value.sync="project.remark" :readOnly="true" style="border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; --update-key: ryj5; border-color: #999999; margin-left: -40px"></lcap-wang-editor>
                                        </u-info-list-item>
                                    </u-info-list-group>
                                </u-info-list>
                            </u-grid-layout-column>
                            <u-grid-layout-column :ref="`grid_layout_column_T5_4`" :span="8" style="--custom-start: auto">
                                <u-info-list :ref="`info_list_T5_3`" :repeat="1" style="--custom-start: auto">
                                    <u-info-list-group :ref="`info_list_group_T5_3`">
                                        <template #title :ref="`template_T5_87`">
                                            <u-text :ref="`text_T5_81`" :text="`基本信息`"></u-text>
                                        </template>
                                        <u-info-list-item :ref="`info_list_item_T5_9`">
                                            <template #label :ref="`template_T5_89`">
                                                <u-text :ref="`text_T5_84`" :text="`客户ID`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_85`" :text="$utils['ToString']('nasl.core.String', (customer || {}).customerName)"></u-text>
                                        </u-info-list-item>
                                        <u-info-list-item :ref="`info_list_item_T5_10`">
                                            <template #label :ref="`template_T5_90`">
                                                <u-text :ref="`text_T5_86`" :text="`项目状态`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_91`" :text="$utils['ToString']('app.enums.ProjectStatus', (project || {}).projectStatus)" style="--custom-start: auto"></u-text>
                                        </u-info-list-item>
                                        <u-info-list-item :ref="`info_list_item_T5_11`">
                                            <template #label :ref="`template_T5_91`">
                                                <u-text :ref="`text_T5_88`" :text="`销售人员`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_87`" :text="$utils['ToString']('nasl.core.String', (project || {}).salesperson)" style="--custom-start: auto"></u-text>
                                        </u-info-list-item>
                                        <u-info-list-item :ref="`info_list_item_T5_12`">
                                            <template #label :ref="`template_T5_92`">
                                                <u-text :ref="`text_T5_90`" :text="`解决方案`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_89`" :text="$utils['ToString']('nasl.core.String', (project || {}).solution)" style="--custom-start: auto"></u-text>
                                        </u-info-list-item>
                                        <u-info-list-item :ref="`info_list_item_T5_13`">
                                            <template #label :ref="`template_T5_93`">
                                                <u-text :ref="`text_T5_92`" :text="`项目经理`"></u-text>
                                            </template>
                                            <u-text :ref="`text_T5_93`" :text="$utils['ToString']('nasl.core.String', (project || {}).projectManager)"></u-text>
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
            ["project"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", undefined),
            ["customer"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", undefined),
            ["id"]: this.$route.query.hasOwnProperty("id") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.id) : undefined,
        };
    },
    computed: {},
    meta: {
        title: "项目详情",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async ProjectDetail_created(event) {
            await (async () => {
                this.project = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.Project",
                    await this.$logics["app.dataSources.defaultDS.entities.Project.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "f3f36d62-254e-4d8d-8192-22bbb58f465d",
                        },
                        query: {
                            id: this.id,
                        },
                        body: {},
                    })
                );
                this.customer = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.Customer",
                    await this.$logics["app.dataSources.defaultDS.entities.Customer.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "bc3b1245dc654f5a872efef0c157324a",
                        },
                        query: {
                            id: (this.project || {}).customerId,
                        },
                        body: {},
                    })
                );
                this.project.salesperson = await this.$logics["app.logics.getUserByUsername"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "dd7ae5d7c13d4e248fb2ea4a01595481",
                    },
                    path: {},
                    body: {
                        username: (this.project || {}).salesperson,
                    },
                });
                this.project.solution = await this.$logics["app.logics.getUserByUsername"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "60935a3347a442e9a8a8b7c75f259b79",
                    },
                    path: {},
                    body: {
                        username: (this.project || {}).solution,
                    },
                });
                this.project.projectManager = await this.$logics["app.logics.getUserByUsername"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "3f7bf89e5aca4c33890a07efc9bb99a9",
                    },
                    path: {},
                    body: {
                        username: (this.project || {}).projectManager,
                    },
                });
                return;
            })();
        },
    },
    async created() {
        await this.ProjectDetail_created();
    },
};
</script>
