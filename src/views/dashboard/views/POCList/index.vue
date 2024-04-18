<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 40px; --update-key: 0p95; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_2`" :icon="true" :separator="`slash`" style="--custom-start: auto">
            <u-crumb-item :ref="`crumb_item_T5_4`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_10`" :text="`POC列表`"></u-text>
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
                                <u-form :ref="`form_T5_2`" :layout="`inline`" key="form_T5_2" style="--custom-start: auto">
                                    <u-form-item :ref="`form_item_T5_9`" :layout="`center`">
                                        <template #label :ref="`template_T5_38`">
                                            <u-text :ref="`text_T5_37`" :text="`POC名称`"></u-text>
                                        </template>
                                        <u-input :ref="`input_T5_4`" :placeholder="`请输入POC名称`" :value.sync="filter.pocName"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_10`" :layout="`center`">
                                        <template #label :ref="`template_T5_39`">
                                            <u-text :ref="`text_T5_38`" :text="`关联客户`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_10`" clearable="" :placeholder="`请选择客户`" :dataSource="(params) => __select_T5_10_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_10Structure`" :textField="`customer.customerName`" :valueField="`customer.id`" :pagination="true" :value.sync="filter.customerId" key="select_T5_10" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_11`" :layout="`center`">
                                        <template #label :ref="`template_T5_40`">
                                            <u-text :ref="`text_T5_39`" :text="`POC状态`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_5`" clearable="" :placeholder="`请选择POC状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'PocStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.pocStatus" key="select_T5_5"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_13`" :layout="`center`">
                                        <template #label :ref="`template_T5_42`">
                                            <u-text :ref="`text_T5_41`" :text="`解决方案`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_9`" clearable="" :placeholder="`请选择解决方案`" :dataSource="(params) => __select_T5_9_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="filter.solution" key="select_T5_9" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_14`" :layout="`center`">
                                        <template #label :ref="`template_T5_43`">
                                            <u-text :ref="`text_T5_42`" :text="`教练`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_11`" clearable="" :placeholder="`请选择教练`" :dataSource="(params) => __select_T5_11_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="filter.coach" key="select_T5_11" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_15`" :layout="`center`" description="" :labelSize="`large`" :labelEllipsis="false" style="--update-key: fsyd">
                                        <template #label :ref="`template_T5_44`">
                                            <u-text :ref="`text_T5_43`" :text="`预计开始时间`"></u-text>
                                        </template>
                                        <u-date-time-picker :ref="`date_time_picker_T5_1`" clearable="" :value.sync="filter.expectedStartTime" :placeholder="`请输入预计开始时间`" :range="true" :startDate.sync="filter.expectedStartTime" :endDate.sync="time1"></u-date-time-picker>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_16`" :layout="`center`" :labelSize="`large`">
                                        <template #label :ref="`template_T5_45`">
                                            <u-text :ref="`text_T5_44`" :text="`预计完成时间`"></u-text>
                                        </template>
                                        <u-date-time-picker :ref="`date_time_picker_T5_2`" clearable="" :value.sync="filter.expectedFinishTime" :placeholder="`请输入预计完成时间`" :range="true" :startDate.sync="filter.expectedFinishTime" :endDate.sync="time2"></u-date-time-picker>
                                    </u-form-item>
                                </u-form>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_24`" style="text-align: right; border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 1px; --update-key: kicj; padding-bottom: 8px; border-color: #e5e6eb">
                                <u-button :ref="`button_T5_1`" :color="`primary`" :text="`查询`" @click="button_T5_1_click($event)" style="--custom-start: auto"></u-button>
                                <u-button :ref="`button_T5_5`" :color="`default`" :text="`重置`" @click="button_T5_5_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_27`" style="margin-top: -8px; --update-key: 8zgq">
                                <u-button :ref="`button_T5_8`" :color="`primary`" :text="`创建`" @click="button_T5_8_click($event)" style="--custom-start: auto"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_25`" style="--custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_T5_34`" :direction="`vertical`" style="--custom-start: auto">
                                    <u-table-view :ref="`tableView_T5_2`" :dataSource="(params) => __tableView_T5_2_handleDataSourceLoad(params)" :dataSchema="`LoadPOCListTableView_T5_2Structure`" :valueField="`pOC.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" :initialLoad="false" key="tableView_T5_2">
                                        <u-table-view-column :ref="`table_view_column_T5_9`" :type="`index`" :width="`60`">
                                            <template #expander="current" :ref="`template_T5_47`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_9_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_48`"></template>
                                            <template #title :ref="`template_T5_49`">
                                                <u-text :ref="`text_T5_46`" :text="`序号`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_12`" :field="`pOC.pocName`">
                                            <template #expander="current" :ref="`template_T5_56`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_12_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_57`">
                                                <u-linear-layout :ref="`linear_layout_T5_39_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`link_T5_6_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).pOC || {}).pocName)" :destination="`/dashboard/POCDetail?id=${(((current || {}).item || {}).pOC || {}).id}`" style="--custom-start: auto"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_58`">
                                                <u-text :ref="`text_T5_52`" :text="`POC名称`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_13`" :field="`pOC.customerId`">
                                            <template #expander="current" :ref="`template_T5_59`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_13_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_60`">
                                                <u-linear-layout :ref="`linear_layout_T5_40_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_53_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).customer || {}).customerName)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_61`">
                                                <u-text :ref="`text_T5_54`" :text="`关联客户`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_14`" :field="`pOC.pocStatus`">
                                            <template #expander="current" :ref="`template_T5_62`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_14_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_63`">
                                                <u-linear-layout :ref="`linear_layout_T5_41_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_55_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.PocStatus', (((current || {}).item || {}).pOC || {}).pocStatus)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_64`">
                                                <u-text :ref="`text_T5_56`" :text="`POC状态`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_16`" :field="`pOC.solution`">
                                            <template #expander="current" :ref="`template_T5_68`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_16_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_69`">
                                                <u-linear-layout :ref="`linear_layout_T5_43_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_67_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['MapGet'](userMap, (((current || {}).item || {}).pOC || {}).solution))"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_70`">
                                                <u-text :ref="`text_T5_60`" :text="`解决方案`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_17`" :field="`pOC.coach`">
                                            <template #expander="current" :ref="`template_T5_71`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_17_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_72`">
                                                <u-linear-layout :ref="`linear_layout_T5_44_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_81_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['MapGet'](userMap, (((current || {}).item || {}).pOC || {}).coach))" style="--custom-start: auto"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_73`">
                                                <u-text :ref="`text_T5_62`" :text="`教练`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_18`" :field="`pOC.expectedStartTime`">
                                            <template #expander="current" :ref="`template_T5_74`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_18_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_75`">
                                                <u-linear-layout :ref="`linear_layout_T5_45_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_63_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).pOC || {}).expectedStartTime)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_76`">
                                                <u-text :ref="`text_T5_64`" :text="`预计开始时间`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_19`" :field="`pOC.expectedFinishTime`">
                                            <template #expander="current" :ref="`template_T5_77`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_19_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_78`">
                                                <u-linear-layout :ref="`linear_layout_T5_46_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_65_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).pOC || {}).expectedFinishTime)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_79`">
                                                <u-text :ref="`text_T5_66`" :text="`预计完成时间`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_21`" :title="`操作`">
                                            <template #expander="current" :ref="`template_T5_83`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_21_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_84`">
                                                <u-linear-layout :ref="`linear_layout_T5_48_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`link_T5_4_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_T5_4_click($event, current)"></u-link>
                                                    <u-link :ref="`link_T5_5_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_T5_5_click($event, current)"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_85`">
                                                <u-text :ref="`text_T5_69`" :text="`操作`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                    </u-table-view>
                                </u-linear-layout>
                            </u-linear-layout>
                        </u-linear-layout>
                    </u-linear-layout>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_T5_4`"></u-linear-layout>
                <u-linear-layout :ref="`linear_layout_T5_5`" style="--custom-start: auto"></u-linear-layout>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`saveModal_T5_2`" :size="`auto`">
            <template #foot :ref="`template_T5_86`">
                <u-linear-layout :ref="`linear_layout_T5_49`" style="text-align: right">
                    <u-button :ref="`button_T5_6`" :color="`default`" :text="`取消`" @click="button_T5_6_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5; --custom-start: auto"></u-button>
                    <u-button :ref="`button_T5_9`" :key="`button_T5_9`" :color="`primary`" :text="`提交修改`" @click="button_T5_9_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_T5_10`" :key="`button_T5_10`" :color="`primary`" :text="`立即创建`" @click="button_T5_10_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_T5_87`">
                <u-linear-layout :ref="`linear_layout_T5_51`" :direction="`vertical`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout_T5_52`">
                        <u-grid-layout :ref="`grid_layout_T5_5`" style="width: 1100px">
                            <u-grid-layout-row :ref="`grid_layout_row_T5_5`" :repeat="24">
                                <u-grid-layout-column :ref="`grid_layout_column_T5_14`" :span="16">
                                    <lcap-wang-editor :ref="`lcap_wang_editor_T5_2`" :scroll="true" :value.sync="input.introduction" :placeholder="`请输入建设内容简介`" style="height: 600px"></lcap-wang-editor>
                                </u-grid-layout-column>
                                <u-grid-layout-column :ref="`grid_layout_column_T5_13`" :span="8" style="--custom-start: auto">
                                    <u-form :ref="`saveModalForm_T5_2`" :labelSize="`large`" key="saveModalForm_T5_2" style="margin-left: -48px; --update-key: mjsb">
                                        <u-form-item :ref="`form_item_T5_19`" :layout="`center`">
                                            <template #label :ref="`template_T5_88`">
                                                <u-text :ref="`text_T5_70`" :text="`POC名称`"></u-text>
                                            </template>
                                            <u-input :ref="`input_T5_7`" :placeholder="`请输入POC名称`" :value.sync="input.pocName"></u-input>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_20`" :layout="`center`">
                                            <template #label :ref="`template_T5_89`">
                                                <u-text :ref="`text_T5_71`" :text="`客户ID`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_12`" clearable="" :placeholder="`请选择客户`" :dataSource="(params) => __select_T5_12_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_10Structure`" :textField="`customer.customerName`" :valueField="`customer.id`" :pagination="true" :value.sync="input.customerId" key="select_T5_12" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_21`" :layout="`center`">
                                            <template #label :ref="`template_T5_90`">
                                                <u-text :ref="`text_T5_72`" :text="`POC状态`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_6`" clearable="" :placeholder="`请选择POC状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'PocStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.pocStatus" key="select_T5_6"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_23`" :layout="`center`">
                                            <template #label :ref="`template_T5_92`">
                                                <u-text :ref="`text_T5_74`" :text="`解决方案`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_13`" clearable="" :placeholder="`请选择解决方案`" :dataSource="(params) => __select_T5_13_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.solution" key="select_T5_13" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_24`" :layout="`center`">
                                            <template #label :ref="`template_T5_93`">
                                                <u-text :ref="`text_T5_75`" :text="`教练`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_14`" clearable="" :placeholder="`请选择教练`" :dataSource="(params) => __select_T5_14_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.coach" key="select_T5_14" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_25`" :layout="`center`">
                                            <template #label :ref="`template_T5_94`">
                                                <u-text :ref="`text_T5_76`" :text="`预计开始时间`"></u-text>
                                            </template>
                                            <u-date-time-picker :ref="`date_time_picker_T5_3`" clearable="" :value.sync="input.expectedStartTime" :placeholder="`请输入预计开始时间`"></u-date-time-picker>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_26`" :layout="`center`">
                                            <template #label :ref="`template_T5_95`">
                                                <u-text :ref="`text_T5_77`" :text="`预计完成时间`"></u-text>
                                            </template>
                                            <u-date-time-picker :ref="`date_time_picker_T5_4`" clearable="" :value.sync="input.expectedFinishTime" :placeholder="`请输入预计完成时间`"></u-date-time-picker>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_27`" :rules="[{ validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' }]" :layout="`block`">
                                            <template #label :ref="`template_T5_96`">
                                                <u-text :ref="`text_T5_78`" :text="`应用信息`"></u-text>
                                            </template>
                                            <u-textarea :ref="`textarea_T5_4`" :placeholder="`请输入应用信息`" :value.sync="input.appInformation"></u-textarea>
                                        </u-form-item>
                                    </u-form>
                                </u-grid-layout-column>
                            </u-grid-layout-row>
                        </u-grid-layout>
                    </u-linear-layout>
                    <u-linear-layout :ref="`linear_layout_T5_53`"></u-linear-layout>
                </u-linear-layout>
            </template>
            <template #title :ref="`template_T5_97`">
                <div :ref="`div_T5_3`" :key="`div_T5_3`" v-if="isUpdate">
                    <u-text :ref="`text_T5_79`" :text="`编辑POC`"></u-text>
                </div>
                <div :ref="`div_T5_4`" :key="`div_T5_4`" v-if="!isUpdate">
                    <u-text :ref="`text_T5_80`" :text="`新建POC`"></u-text>
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
            ["pOC"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", undefined),
            ["isUpdate"]: undefined,
            ["time1"]: this.$genInitFromSchema("nasl.core.DateTime", undefined),
            ["time2"]: this.$genInitFromSchema("nasl.core.DateTime", undefined),
            ["userMap"]: this.$genInitFromSchema("nasl.collection.Map<nasl.core.String, nasl.core.String>", undefined),
            ["__select_T5_10_params"]: {},
            ["__select_T5_5_params"]: {},
            ["__select_T5_9_params"]: {},
            ["__select_T5_11_params"]: {},
            ["__tableView_T5_2_params"]: {},
            ["__select_T5_12_params"]: {},
            ["__select_T5_6_params"]: {},
            ["__select_T5_13_params"]: {},
            ["__select_T5_14_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "POC管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async POCList_mounted(event) {
            await (async () => {
                this.userMap = this.$genInitFromSchema(
                    "nasl.collection.Map<nasl.core.String, nasl.core.String>",
                    await this.$logics["app.logics.LoadUser"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "066211afbf1749b49432fed043a4ac14",
                        },
                        path: {},
                        body: {},
                    })
                );
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", this.$utils["Clear"](this.filter));
                this.time1 = undefined;
                this.time2 = undefined;
                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async button_T5_6_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                return;
            })();
        },
        async button_T5_9_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_2`] && this.$refs[`saveModalForm_T5_2`].validate && this.$refs[`saveModalForm_T5_2`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.POC",
                        await this.$logics["app.dataSources.defaultDS.entities.POC.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "c68c5733aff04fa986c9a4380765111f",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                    await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_10_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_T5_2`] && this.$refs[`saveModalForm_T5_2`].validate && this.$refs[`saveModalForm_T5_2`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.POC",
                        await this.$logics["app.dataSources.defaultDS.entities.POC.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "c6adcfa569584f4685620e7a1128d6fa",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].close && this.$refs[`saveModal_T5_2`].close());
                    await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                } else {
                }

                return;
            })();
        },
        async button_T5_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async button_T5_5_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", this.$utils["Clear"](this.filter));
                this.time1 = undefined;
                this.time2 = undefined;
                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async button_T5_8_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", this.$utils["Clone"](this.pOC));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async link_T5_4_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.POC", this.$utils["Clone"](((current || {}).item || {}).pOC));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async link_T5_5_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.POC.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "d62b3ebd3078414791074f2b9e99ae7f",
                    },
                    query: {
                        id: (((current || {}).item || {}).pOC || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async __select_T5_10_handleDataSourceLoad(params) {
            this["__select_T5_10_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "ecff5c64-7591-45ba-a0fd-f66582a454f7",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_10_params && this.__select_T5_10_params.page,
                        size: this.__select_T5_10_params && this.__select_T5_10_params.size,
                    },
                })
            );
        },

        async __select_T5_9_handleDataSourceLoad(params) {
            this["__select_T5_9_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "81b4ebce-c22c-4fba-b033-51351307d309",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_9_params && this.__select_T5_9_params.page,
                        size: this.__select_T5_9_params && this.__select_T5_9_params.size,
                    },
                })
            );
        },

        async __select_T5_11_handleDataSourceLoad(params) {
            this["__select_T5_11_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "adce5ec3-0c62-4b24-8384-f78977755484",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_11_params && this.__select_T5_11_params.page,
                        size: this.__select_T5_11_params && this.__select_T5_11_params.size,
                    },
                })
            );
        },

        async __tableView_T5_2_handleDataSourceLoad(params) {
            this["__tableView_T5_2_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadPOCListTableView_T5_2"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "4c4057e7d74241f5b2c68b5c474cd98f",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_2_params && this.__tableView_T5_2_params.page,
                        size: this.__tableView_T5_2_params && this.__tableView_T5_2_params.size,
                        sort: this.__tableView_T5_2_params && this.__tableView_T5_2_params.sort,
                        order: this.__tableView_T5_2_params && this.__tableView_T5_2_params.order,
                        filter: this.filter,
                        time1: this.time1,
                        time2: this.time2,
                    },
                })
            );
        },

        async __select_T5_12_handleDataSourceLoad(params) {
            this["__select_T5_12_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6ec49ad8-306b-4636-bd12-96905cf22afd",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_12_params && this.__select_T5_12_params.page,
                        size: this.__select_T5_12_params && this.__select_T5_12_params.size,
                    },
                })
            );
        },

        async __select_T5_13_handleDataSourceLoad(params) {
            this["__select_T5_13_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "c9989b9e-8c60-4cfa-bd13-fb588194a22e",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_13_params && this.__select_T5_13_params.page,
                        size: this.__select_T5_13_params && this.__select_T5_13_params.size,
                    },
                })
            );
        },

        async __select_T5_14_handleDataSourceLoad(params) {
            this["__select_T5_14_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "db399564-2661-412e-ad83-7cd09f17d75b",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_14_params && this.__select_T5_14_params.page,
                        size: this.__select_T5_14_params && this.__select_T5_14_params.size,
                    },
                })
            );
        },

        __select_T5_10_clearable() {
            return undefined;
        },

        __select_T5_10_placeholder() {
            return undefined;
        },

        async __select_T5_10_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "ecff5c64-7591-45ba-a0fd-f66582a454f7",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_10_params && this.__select_T5_10_params.page,
                        size: this.__select_T5_10_params && this.__select_T5_10_params.size,
                    },
                })
            );
        },

        __select_T5_10_pageSize() {
            return 50;
        },

        __select_T5_10_dataSchema() {
            return undefined;
        },

        __select_T5_10_textField() {
            return undefined;
        },

        __select_T5_10_valueField() {
            return undefined;
        },

        __select_T5_10_pagination() {
            return true;
        },

        __select_T5_10_value() {
            return (this.filter || {}).customerId;
        },

        __select_T5_5_clearable() {
            return undefined;
        },

        __select_T5_5_placeholder() {
            return undefined;
        },

        __select_T5_5_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "PocStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_5_pageSize() {
            return 50;
        },

        __select_T5_5_value() {
            return (this.filter || {}).pocStatus;
        },

        __select_T5_9_clearable() {
            return undefined;
        },

        __select_T5_9_placeholder() {
            return undefined;
        },

        async __select_T5_9_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "81b4ebce-c22c-4fba-b033-51351307d309",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_9_params && this.__select_T5_9_params.page,
                        size: this.__select_T5_9_params && this.__select_T5_9_params.size,
                    },
                })
            );
        },

        __select_T5_9_pageSize() {
            return 50;
        },

        __select_T5_9_dataSchema() {
            return undefined;
        },

        __select_T5_9_textField() {
            return undefined;
        },

        __select_T5_9_valueField() {
            return undefined;
        },

        __select_T5_9_pagination() {
            return true;
        },

        __select_T5_9_value() {
            return (this.filter || {}).solution;
        },

        __select_T5_11_clearable() {
            return undefined;
        },

        __select_T5_11_placeholder() {
            return undefined;
        },

        async __select_T5_11_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "adce5ec3-0c62-4b24-8384-f78977755484",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_11_params && this.__select_T5_11_params.page,
                        size: this.__select_T5_11_params && this.__select_T5_11_params.size,
                    },
                })
            );
        },

        __select_T5_11_pageSize() {
            return 50;
        },

        __select_T5_11_dataSchema() {
            return undefined;
        },

        __select_T5_11_textField() {
            return undefined;
        },

        __select_T5_11_valueField() {
            return undefined;
        },

        __select_T5_11_pagination() {
            return true;
        },

        __select_T5_11_value() {
            return (this.filter || {}).coach;
        },

        async __tableView_T5_2_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, pOC: app.dataSources.defaultDS.entities.POC}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadPOCListTableView_T5_2"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "4c4057e7d74241f5b2c68b5c474cd98f",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_2_params && this.__tableView_T5_2_params.page,
                        size: this.__tableView_T5_2_params && this.__tableView_T5_2_params.size,
                        sort: this.__tableView_T5_2_params && this.__tableView_T5_2_params.sort,
                        order: this.__tableView_T5_2_params && this.__tableView_T5_2_params.order,
                        filter: this.filter,
                        time1: this.time1,
                        time2: this.time2,
                    },
                })
            );
        },

        __tableView_T5_2_dataSchema() {
            return undefined;
        },

        __tableView_T5_2_valueField() {
            return undefined;
        },

        __tableView_T5_2_pagination() {
            return true;
        },

        __tableView_T5_2_showSizer() {
            return true;
        },

        __tableView_T5_2_pageSize() {
            return 20;
        },

        __tableView_T5_2_pageNumber() {
            return 1;
        },

        __tableView_T5_2_initialLoad() {
            return false;
        },

        __select_T5_12_clearable() {
            return undefined;
        },

        __select_T5_12_placeholder() {
            return undefined;
        },

        async __select_T5_12_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "6ec49ad8-306b-4636-bd12-96905cf22afd",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_12_params && this.__select_T5_12_params.page,
                        size: this.__select_T5_12_params && this.__select_T5_12_params.size,
                    },
                })
            );
        },

        __select_T5_12_pageSize() {
            return 50;
        },

        __select_T5_12_dataSchema() {
            return undefined;
        },

        __select_T5_12_textField() {
            return undefined;
        },

        __select_T5_12_valueField() {
            return undefined;
        },

        __select_T5_12_pagination() {
            return true;
        },

        __select_T5_12_value() {
            return (this.input || {}).customerId;
        },

        __select_T5_6_clearable() {
            return undefined;
        },

        __select_T5_6_placeholder() {
            return undefined;
        },

        __select_T5_6_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "PocStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_6_pageSize() {
            return 50;
        },

        __select_T5_6_value() {
            return (this.input || {}).pocStatus;
        },

        __select_T5_13_clearable() {
            return undefined;
        },

        __select_T5_13_placeholder() {
            return undefined;
        },

        async __select_T5_13_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "c9989b9e-8c60-4cfa-bd13-fb588194a22e",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_13_params && this.__select_T5_13_params.page,
                        size: this.__select_T5_13_params && this.__select_T5_13_params.size,
                    },
                })
            );
        },

        __select_T5_13_pageSize() {
            return 50;
        },

        __select_T5_13_dataSchema() {
            return undefined;
        },

        __select_T5_13_textField() {
            return undefined;
        },

        __select_T5_13_valueField() {
            return undefined;
        },

        __select_T5_13_pagination() {
            return true;
        },

        __select_T5_13_value() {
            return (this.input || {}).solution;
        },

        __select_T5_14_clearable() {
            return undefined;
        },

        __select_T5_14_placeholder() {
            return undefined;
        },

        async __select_T5_14_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "db399564-2661-412e-ad83-7cd09f17d75b",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_14_params && this.__select_T5_14_params.page,
                        size: this.__select_T5_14_params && this.__select_T5_14_params.size,
                    },
                })
            );
        },

        __select_T5_14_pageSize() {
            return 50;
        },

        __select_T5_14_dataSchema() {
            return undefined;
        },

        __select_T5_14_textField() {
            return undefined;
        },

        __select_T5_14_valueField() {
            return undefined;
        },

        __select_T5_14_pagination() {
            return true;
        },

        __select_T5_14_value() {
            return (this.input || {}).coach;
        },
    },
    async mounted() {
        await this.POCList_mounted();
    },
};
</script>
