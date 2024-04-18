<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 0px; --update-key: brnn; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_3`" :icon="true" :separator="`slash`" style="--custom-start: auto">
            <u-crumb-item :ref="`crumb_item_T5_5`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_11`" :text="`POC列表`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_9`" :icon="`menu`" :disabled="true" style="--custom-start: auto">
                <u-text :ref="`text_T5_80`" :text="`POC详情`" style="color: #000000"></u-text>
            </u-crumb-item>
        </u-crumb>
        <u-panel :ref="`panel_T5_1`" style="margin-top: 8px; --update-key: f7fw; height: 100%">
            <template #title :ref="`template_T5_16`">
                <u-text :ref="`text_T5_96`" :text="$utils['ToString']('nasl.core.String', (pOC || {}).pocName)" style="--custom-start: auto"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_T5_28`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_T5_30`">
                    <u-grid-layout :ref="`grid_layout_T5_2`" style="--custom-start: auto">
                        <u-grid-layout-row :ref="`grid_layout_row_T5_2`" :repeat="24">
                            <u-grid-layout-column :ref="`grid_layout_column_T5_5`" :span="16">
                                <u-info-list :ref="`info_list_T5_2`" style="--custom-start: auto">
                                    <u-info-list-group :ref="`info_list_group_T5_2`" :repeat="1">
                                        <template #title :ref="`template_T5_29`">
                                            <u-text :ref="`text_T5_31`" :text="`建设内容简介`"></u-text>
                                        </template>
                                        <u-info-list-item :ref="`info_list_item_T5_5`">
                                            <template #label :ref="`template_T5_33`"></template>
                                            <lcap-wang-editor :ref="`lcap_wang_editor_T5_1`" :scroll="true" :value.sync="pOC.introduction" :readOnly="true" style="border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; --update-key: ryj5; border-color: #999999; margin-left: -40px"></lcap-wang-editor>
                                        </u-info-list-item>
                                    </u-info-list-group>
                                </u-info-list>
                            </u-grid-layout-column>
                            <u-grid-layout-column :ref="`grid_layout_column_T5_4`" :span="8" style="--custom-start: auto">
                                <u-tabs :ref="`tabs_T5_2`" :appear="`line`" style="--custom-start: auto">
                                    <u-tab :ref="`tab_T5_4`">
                                        <template #title :ref="`template_T5_110`">
                                            <u-text :ref="`text_T5_119`" :text="`基本信息`"></u-text>
                                        </template>
                                        <u-info-list :ref="`info_list_T5_4`" :repeat="1" style="--custom-start: auto">
                                            <u-info-list-group :ref="`info_list_group_T5_4`">
                                                <template #title :ref="`template_T5_97`">
                                                    <u-text :ref="`text_T5_94`" :text="`基本信息`"></u-text>
                                                </template>
                                                <u-info-list-item :ref="`info_list_item_T5_15`">
                                                    <template #label :ref="`template_T5_99`">
                                                        <u-text :ref="`text_T5_97`" :text="`关联客户`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_98`" :text="$utils['ToString']('nasl.core.String', (customer || {}).customerName)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_16`">
                                                    <template #label :ref="`template_T5_100`">
                                                        <u-text :ref="`text_T5_99`" :text="`POC状态`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_100`" :text="$utils['ToString']('app.enums.PocStatus', (pOC || {}).pocStatus)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_18`">
                                                    <template #label :ref="`template_T5_102`">
                                                        <u-text :ref="`text_T5_103`" :text="`解决方案`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_104`" :text="$utils['ToString']('nasl.core.String', (pOC || {}).solution)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_19`">
                                                    <template #label :ref="`template_T5_103`">
                                                        <u-text :ref="`text_T5_105`" :text="`教练`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_106`" :text="$utils['ToString']('nasl.core.String', (pOC || {}).coach)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_20`">
                                                    <template #label :ref="`template_T5_104`">
                                                        <u-text :ref="`text_T5_107`" :text="`预计开始时间`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_108`" :text="$utils['ToString']('nasl.core.DateTime', (pOC || {}).expectedStartTime)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_21`">
                                                    <template #label :ref="`template_T5_105`">
                                                        <u-text :ref="`text_T5_109`" :text="`预计完成时间`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_110`" :text="$utils['ToString']('nasl.core.DateTime', (pOC || {}).expectedFinishTime)"></u-text>
                                                </u-info-list-item>
                                                <u-info-list-item :ref="`info_list_item_T5_22`">
                                                    <template #label :ref="`template_T5_106`">
                                                        <u-text :ref="`text_T5_111`" :text="`应用信息`"></u-text>
                                                    </template>
                                                    <u-text :ref="`text_T5_112`" :text="$utils['ToString']('nasl.core.String', (pOC || {}).appInformation)"></u-text>
                                                </u-info-list-item>
                                            </u-info-list-group>
                                        </u-info-list>
                                    </u-tab>
                                    <u-tab :ref="`tab_T5_5`">
                                        <template #title :ref="`template_T5_111`">
                                            <u-text :ref="`text_T5_121`" :text="`评论`"></u-text>
                                        </template>
                                        <u-linear-layout :ref="`linear_layout_T5_52`" :direction="`vertical`" style="--custom-start: auto">
                                            <u-linear-layout :ref="`linear_layout_T5_54`">
                                                <u-linear-layout :ref="`linear_layout_T5_55`" :direction="`vertical`" style="--custom-start: auto">
                                                    <u-linear-layout :ref="`linear_layout_T5_56`" :justify="`space-between`">
                                                        <u-linear-layout :ref="`linear_layout_T5_57`">
                                                            <u-button :ref="`button_T5_10`" :color="`primary`" :text="`创 建`" @click="button_T5_10_click($event)"></u-button>
                                                        </u-linear-layout>
                                                    </u-linear-layout>
                                                    <u-grid-view :ref="`gridView_T5_1`" :dataSource="(params) => __gridView_T5_1_handleDataSourceLoad(params)" :dataSchema="`LoadPOCDetailGridView_T5_1Structure`" :valueField="`comments.id`" :pageSize="50" :pageNumber="1" :pageable="true" :remotePaging="true" :showSizer="true" :repeat="1" :border="false" :readonly="true" :showFoot="true" key="gridView_T5_1" style="height: auto; margin-top: -16px; --update-key: vzg2">
                                                        <template #item="current" :ref="`template_T5_116`">
                                                            <u-card :ref="`card_T5_1_${(current || {}).__nodeKey || (current || {}).index}`" title="" :shadow="`never`">
                                                                <u-linear-layout :ref="`linear_layout_T5_58_${(current || {}).__nodeKey || (current || {}).index}`" :direction="`vertical`" :gap="`small`">
                                                                    <u-linear-layout :ref="`linear_layout_T5_60_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                                        <i-ico :ref="`ico_T5_2_${(current || {}).__nodeKey || (current || {}).index}`" :name="`user`" :icotype="`left`" style="font-weight: bold">
                                                                            <u-text :ref="`text_T5_142_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).lCAPUser || {}).displayName)"></u-text>
                                                                        </i-ico>
                                                                        <u-text :ref="`text_T5_129_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).comments || {}).createdTime)" style="--custom-start: auto"></u-text>
                                                                    </u-linear-layout>
                                                                    <u-linear-layout :ref="`linear_layout_T5_65_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" style="--custom-start: auto">
                                                                        <u-text :ref="`text_T5_143_${(current || {}).__nodeKey || (current || {}).index}`" :text="`评论内容:`"></u-text>
                                                                    </u-linear-layout>
                                                                    <u-linear-layout :ref="`linear_layout_T5_66_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" style="--custom-start: auto">
                                                                        <lcap-wang-editor :ref="`lcap_wang_editor_T5_3_${(current || {}).__nodeKey || (current || {}).index}`" :scroll="true" :value.sync="current.item.comments.content" :readOnly="true" style="border-style: dashed; border-color: #d7d7d7; border-top-width: 1px; border-left-width: 1px; border-right-width: 1px; border-bottom-width: 1px; --update-key: qfp2"></lcap-wang-editor>
                                                                    </u-linear-layout>
                                                                    <u-linear-layout :ref="`linear_layout_T5_63_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`" style="text-align: right">
                                                                        <u-link :ref="`link_T5_4_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_T5_4_click($event, current)"></u-link>
                                                                    </u-linear-layout>
                                                                </u-linear-layout>
                                                                <template #title :ref="`template_T5_123_${(current || {}).__nodeKey || (current || {}).index}`" style="--custom-start: auto"></template>
                                                            </u-card>
                                                        </template>
                                                    </u-grid-view>
                                                </u-linear-layout>
                                            </u-linear-layout>
                                        </u-linear-layout>
                                    </u-tab>
                                </u-tabs>
                            </u-grid-layout-column>
                        </u-grid-layout-row>
                    </u-grid-layout>
                </u-linear-layout>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_T5_2`" :size="`huge`">
            <template #foot :ref="`template_T5_117`">
                <u-linear-layout :ref="`linear_layout_T5_64`" style="text-align: right">
                    <u-button :ref="`button_T5_5`" :color="`default`" :text="`取消`" @click="button_T5_5_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5; --custom-start: auto"></u-button>
                    <u-button :ref="`button_T5_11`" :key="`button_T5_11`" :color="`primary`" :text="`提交修改`" @click="button_T5_11_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_T5_12`" :key="`button_T5_12`" :color="`primary`" :text="`立即创建`" @click="button_T5_12_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_T5_118`">
                <u-form :ref="`saveModalForm_T5_3`" key="saveModalForm_T5_3">
                    <u-form-item :ref="`form_item_T5_32`" :rules="[{ validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' }]" :layout="`center`" :labelLayout="`block`">
                        <template #label :ref="`template_T5_119`">
                            <u-text :ref="`text_T5_136`" :text="`评论内容`"></u-text>
                        </template>
                        <lcap-wang-editor :ref="`lcap_wang_editor_T5_2`" :scroll="true" :value.sync="input.content" :placeholder="`请输入评论`" style="--custom-start: auto"></lcap-wang-editor>
                    </u-form-item>
                </u-form>
            </template>
            <template #title :ref="`template_T5_122`">
                <div :ref="`div_T5_3`" :key="`div_T5_3`" v-if="isUpdate">
                    <u-text :ref="`text_T5_139`" :text="`修改评论`"></u-text>
                </div>
                <div :ref="`div_T5_4`" :key="`div_T5_4`" v-if="!isUpdate">
                    <u-text :ref="`text_T5_140`" :text="`新建评论`"></u-text>
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
            ["poc"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", undefined),
            ["customer"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Customer", undefined),
            ["pOC"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", undefined),
            ["comments"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", undefined),
            ["isUpdate"]: undefined,
            ["id"]: this.$route.query.hasOwnProperty("id") ? this.$genInitFromSchema("nasl.core.Long", this.$route.query.id) : undefined,
            ["__gridView_T5_1_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "POC详情",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async POCDetail_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", this.$utils["Clear"](this.filter));
                return;
            })();
            await (async () => {
                this.pOC = this.$genInitFromSchema(
                    "app.dataSources.defaultDS.entities.POC",
                    await this.$logics["app.dataSources.defaultDS.entities.POC.logics.get"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "42eacf1adbde4018abd902fa927c343e",
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
                            "lcap-calllogic-uuid": "6838b971-f5f6-4f34-9a40-e7b5af7a7021",
                        },
                        query: {
                            id: (this.poc || {}).customerId,
                        },
                        body: {},
                    })
                );
                this.pOC.solution = await this.$logics["app.logics.getUserByUsername"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "57915d94-d618-4253-9c80-72cfd3d7d5df",
                    },
                    path: {},
                    body: {
                        username: (this.pOC || {}).solution,
                    },
                });
                this.pOC.coach = await this.$logics["app.logics.getUserByUsername"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "a65ab7d0-f4a0-4c84-8961-199c9f9d843c",
                    },
                    path: {},
                    body: {
                        username: (this.pOC || {}).coach,
                    },
                });
                return;
            })();
        },
        async button_T5_5_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                return;
            })();
        },
        async button_T5_11_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_3`] && this.$refs[`saveModalForm_T5_3`].validate && this.$refs[`saveModalForm_T5_3`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Comments",
                        await this.$logics["app.dataSources.defaultDS.entities.Comments.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "696a76737e124b86af62ed1ad0a4f381",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                    await (this.$refs && this.$refs[`gridView_T5_1`] && this.$refs[`gridView_T5_1`].reload && this.$refs[`gridView_T5_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_12_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_3`] && this.$refs[`saveModalForm_T5_3`].validate && this.$refs[`saveModalForm_T5_3`].validate());
                if ((validateResult || {}).valid) {
                    this.input.createdBy = (this.$global.userInfo || {}).UserName;
                    this.input.commentType = "1";
                    this.input.associationID = this.id;
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Comments",
                        await this.$logics["app.dataSources.defaultDS.entities.Comments.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "7ff8a12cfdbf444cb1e97ac7b7313f5b",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                    await (this.$refs && this.$refs[`gridView_T5_1`] && this.$refs[`gridView_T5_1`].reload && this.$refs[`gridView_T5_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_10_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", this.$utils["Clone"](this.comments));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async link_T5_4_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Comments", this.$utils["Clone"](((current || {}).item || {}).comments));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async __gridView_T5_1_handleDataSourceLoad(params) {
            this["__gridView_T5_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadPOCDetailGridView_T5_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d2f1d6e421c94fc9b5094158d03f856d",
                    },
                    path: {},
                    body: {
                        page: this.__gridView_T5_1_params && this.__gridView_T5_1_params.page,
                        size: this.__gridView_T5_1_params && this.__gridView_T5_1_params.size,
                        sort: this.__gridView_T5_1_params && this.__gridView_T5_1_params.sort,
                        order: this.__gridView_T5_1_params && this.__gridView_T5_1_params.order,
                        id: this.id,
                    },
                })
            );
        },

        async __gridView_T5_1_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{comments: app.dataSources.defaultDS.entities.Comments, lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadPOCDetailGridView_T5_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d2f1d6e421c94fc9b5094158d03f856d",
                    },
                    path: {},
                    body: {
                        page: this.__gridView_T5_1_params && this.__gridView_T5_1_params.page,
                        size: this.__gridView_T5_1_params && this.__gridView_T5_1_params.size,
                        sort: this.__gridView_T5_1_params && this.__gridView_T5_1_params.sort,
                        order: this.__gridView_T5_1_params && this.__gridView_T5_1_params.order,
                        id: this.id,
                    },
                })
            );
        },

        __gridView_T5_1_dataSchema() {
            return undefined;
        },

        __gridView_T5_1_valueField() {
            return undefined;
        },

        __gridView_T5_1_pageSize() {
            return 50;
        },

        __gridView_T5_1_pageNumber() {
            return 1;
        },

        __gridView_T5_1_pageable() {
            return true;
        },

        __gridView_T5_1_remotePaging() {
            return true;
        },

        __gridView_T5_1_showSizer() {
            return true;
        },

        __gridView_T5_1_repeat() {
            return 1;
        },

        __gridView_T5_1_border() {
            return false;
        },

        __gridView_T5_1_readonly() {
            return true;
        },

        __gridView_T5_1_showFoot() {
            return true;
        },
    },
    async created() {
        await this.POCDetail_created();
    },
};
</script>
