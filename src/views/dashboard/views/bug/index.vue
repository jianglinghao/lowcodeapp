<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_VN_3`" :direction="`vertical`" style="--custom-start: auto">
            <u-linear-layout :ref="`linear_layout_VN_4`"></u-linear-layout>
            <u-linear-layout :ref="`linear_layout_VN_5`">
                <u-linear-layout :ref="`linear_layout_VN_6`" :direction="`vertical`" style="--custom-start: auto"></u-linear-layout>
            </u-linear-layout>
        </u-linear-layout>
        <u-linear-layout :ref="`linear_layout_VN_25`" :direction="`vertical`" style="--custom-start: auto">
            <u-linear-layout :ref="`linear_layout_VN_26`">
                <u-panel :ref="`panel_VN_2`" style="--custom-start: auto">
                    <template #title :ref="`template_VN_69`">
                        <u-text :ref="`text_VN_59`" :text="`查询`" style="--custom-start: auto"></u-text>
                    </template>
                    <u-linear-layout :ref="`linear_layout_VN_7`" :justify="`space-between`" style="--custom-start: auto">
                        <u-form :ref="`form_VN_1`" :layout="`inline-flex`" :repeat="4" key="form_VN_1">
                            <u-form-item :ref="`form_item_VN_1`" :layout="`center`">
                                <template #label :ref="`template_VN_1`">
                                    <u-text :ref="`text_VN_1`" :text="`缺陷ID`"></u-text>
                                </template>
                                <u-input :ref="`input_VN_1`" :placeholder="`请输入缺陷名称`" :value.sync="filter.id"></u-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_26`" :layout="`center`" style="--custom-start: auto">
                                <template #label :ref="`template_VN_75`">
                                    <u-text :ref="`text_VN_60`" :text="`缺陷名称`"></u-text>
                                </template>
                                <u-input :ref="`input_VN_9`" :placeholder="`请输入缺陷名称`" :value.sync="filter.bugName"></u-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_3`" :layout="`center`">
                                <template #label :ref="`template_VN_3`">
                                    <u-text :ref="`text_VN_3`" :text="`缺陷级别`"></u-text>
                                </template>
                                <u-select :ref="`select_VN_1`" clearable="" :placeholder="`请选择缺陷级别`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'BugLevel', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.bugLevel" key="select_VN_1"></u-select>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_4`" :layout="`center`">
                                <template #label :ref="`template_VN_4`">
                                    <u-text :ref="`text_VN_4`" :text="`项目ID`"></u-text>
                                </template>
                                <u-number-input :ref="`number_input_VN_1`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入项目ID`" :value.sync="filter.projectId"></u-number-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_5`" :layout="`center`">
                                <template #label :ref="`template_VN_5`">
                                    <u-text :ref="`text_VN_5`" :text="`创建时间`"></u-text>
                                </template>
                                <u-date-time-picker :ref="`date_time_picker_VN_1`" clearable="" :value.sync="filter.expectedRepairTime" :placeholder="`请输入预计修复时间`" :range="true" :startDate.sync="createBeginTime" :endDate.sync="createEndTime"></u-date-time-picker>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_27`" :layout="`center`" style="--custom-start: auto">
                                <template #label :ref="`template_VN_76`">
                                    <u-text :ref="`text_VN_61`" :text="`预计修复时间`"></u-text>
                                </template>
                                <u-date-time-picker :ref="`date_time_picker_VN_5`" clearable="" :value.sync="filter.expectedRepairTime" :placeholder="`请输入预计修复时间`"></u-date-time-picker>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_6`" :layout="`center`">
                                <template #label :ref="`template_VN_6`">
                                    <u-text :ref="`text_VN_6`" :text="`预计完成时间`"></u-text>
                                </template>
                                <u-date-time-picker :ref="`date_time_picker_VN_2`" clearable="" :value.sync="filter.expectedFinishTime" :placeholder="`请输入预计完成时间`"></u-date-time-picker>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_7`" :layout="`center`">
                                <template #label :ref="`template_VN_7`">
                                    <u-text :ref="`text_VN_7`" :text="`经办人`"></u-text>
                                </template>
                                <u-input :ref="`input_VN_2`" :placeholder="`请输入经办人`" :value.sync="filter.agent"></u-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_8`" :layout="`center`">
                                <template #label :ref="`template_VN_8`">
                                    <u-text :ref="`text_VN_8`" :text="`报告人`"></u-text>
                                </template>
                                <u-input :ref="`input_VN_3`" :placeholder="`请输入报告人`" :value.sync="filter.reporter"></u-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_9`" :layout="`center`">
                                <template #label :ref="`template_VN_9`">
                                    <u-text :ref="`text_VN_9`" :text="`备注`"></u-text>
                                </template>
                                <u-textarea :ref="`textarea_VN_2`" :placeholder="`请输入备注`" :value.sync="filter.remark"></u-textarea>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_10`" :layout="`center`">
                                <template #label :ref="`template_VN_10`">
                                    <u-text :ref="`text_VN_10`" :text="`关联工单ID`"></u-text>
                                </template>
                                <u-number-input :ref="`number_input_VN_2`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入关联工单ID`" :value.sync="filter.ticketID"></u-number-input>
                            </u-form-item>
                            <u-form-item :ref="`form_item_VN_11`" :layout="`center`" :labelSize="`auto`">
                                <u-button :ref="`button_VN_1`" :color="`primary`" :text="`查 询`" @click="button_VN_1_click($event)"></u-button>
                            </u-form-item>
                        </u-form>
                        <u-linear-layout :ref="`linear_layout_VN_8`">
                            <u-button :ref="`button_VN_2`" :color="`primary`" :text="`创 建`" @click="button_VN_2_click($event)"></u-button>
                        </u-linear-layout>
                    </u-linear-layout>
                </u-panel>
            </u-linear-layout>
            <u-linear-layout :ref="`linear_layout_VN_27`">
                <u-panel :ref="`panel_VN_1`" style="--custom-start: auto">
                    <template #title :ref="`template_VN_68`"></template>
                    <u-table-view :ref="`tableView_VN_1`" :dataSource="(params) => __tableView_VN_1_handleDataSourceLoad(params)" :dataSchema="`LoadBugTableView_VN_1Structure`" :valueField="`bug.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_VN_1" style="--custom-start: auto">
                        <u-table-view-column :ref="`table_view_column_VN_1`" :type="`index`" :width="`60`">
                            <template #expander="current" :ref="`template_VN_11`">
                                <u-table-view-expander :ref="`table_view_expander_VN_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_12`"></template>
                            <template #title :ref="`template_VN_13`">
                                <u-text :ref="`text_VN_11`" :text="`序号`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_2`" :field="`bug.createdTime`">
                            <template #expander="current" :ref="`template_VN_14`">
                                <u-table-view-expander :ref="`table_view_expander_VN_2_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_15`">
                                <u-linear-layout :ref="`linear_layout_VN_9_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_12_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).bug || {}).createdTime)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_16`">
                                <u-text :ref="`text_VN_13`" :text="`创建时间`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_3`" :field="`bug.updatedTime`">
                            <template #expander="current" :ref="`template_VN_17`">
                                <u-table-view-expander :ref="`table_view_expander_VN_3_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_18`">
                                <u-linear-layout :ref="`linear_layout_VN_10_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_14_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).bug || {}).updatedTime)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_19`">
                                <u-text :ref="`text_VN_15`" :text="`更新时间`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_4`" :field="`bug.bugName`">
                            <template #expander="current" :ref="`template_VN_20`">
                                <u-table-view-expander :ref="`table_view_expander_VN_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_21`">
                                <u-linear-layout :ref="`linear_layout_VN_11_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_16_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).bug || {}).bugName)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_22`">
                                <u-text :ref="`text_VN_17`" :text="`缺陷名称`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_5`" :field="`bug.bugDescription`">
                            <template #expander="current" :ref="`template_VN_23`">
                                <u-table-view-expander :ref="`table_view_expander_VN_5_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_24`">
                                <u-linear-layout :ref="`linear_layout_VN_12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_18_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).bug || {}).bugDescription)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_25`">
                                <u-text :ref="`text_VN_19`" :text="`缺陷描述`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_6`" :field="`bug.bugLevel`">
                            <template #expander="current" :ref="`template_VN_26`">
                                <u-table-view-expander :ref="`table_view_expander_VN_6_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_27`">
                                <u-linear-layout :ref="`linear_layout_VN_13_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_20_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.BugLevel', (((current || {}).item || {}).bug || {}).bugLevel)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_28`">
                                <u-text :ref="`text_VN_21`" :text="`缺陷级别`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_7`" :field="`bug.projectId`">
                            <template #expander="current" :ref="`template_VN_29`">
                                <u-table-view-expander :ref="`table_view_expander_VN_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_30`">
                                <u-linear-layout :ref="`linear_layout_VN_14_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_22_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).bug || {}).projectId)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_31`">
                                <u-text :ref="`text_VN_23`" :text="`项目ID`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_8`" :field="`bug.expectedRepairTime`">
                            <template #expander="current" :ref="`template_VN_32`">
                                <u-table-view-expander :ref="`table_view_expander_VN_8_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_33`">
                                <u-linear-layout :ref="`linear_layout_VN_15_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_24_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).bug || {}).expectedRepairTime)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_34`">
                                <u-text :ref="`text_VN_25`" :text="`预计修复时间`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_9`" :field="`bug.expectedFinishTime`">
                            <template #expander="current" :ref="`template_VN_35`">
                                <u-table-view-expander :ref="`table_view_expander_VN_9_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_36`">
                                <u-linear-layout :ref="`linear_layout_VN_16_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_26_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).bug || {}).expectedFinishTime)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_37`">
                                <u-text :ref="`text_VN_27`" :text="`预计完成时间`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_10`" :field="`bug.agent`">
                            <template #expander="current" :ref="`template_VN_38`">
                                <u-table-view-expander :ref="`table_view_expander_VN_10_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_39`">
                                <u-linear-layout :ref="`linear_layout_VN_17_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_28_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).bug || {}).agent)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_40`">
                                <u-text :ref="`text_VN_29`" :text="`经办人`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_11`" :field="`bug.reporter`">
                            <template #expander="current" :ref="`template_VN_41`">
                                <u-table-view-expander :ref="`table_view_expander_VN_11_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_42`">
                                <u-linear-layout :ref="`linear_layout_VN_18_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_30_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).bug || {}).reporter)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_43`">
                                <u-text :ref="`text_VN_31`" :text="`报告人`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_12`" :field="`bug.remark`">
                            <template #expander="current" :ref="`template_VN_44`">
                                <u-table-view-expander :ref="`table_view_expander_VN_12_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_45`">
                                <u-linear-layout :ref="`linear_layout_VN_19_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_32_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).bug || {}).remark)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_46`">
                                <u-text :ref="`text_VN_33`" :text="`备注`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_13`" :field="`bug.ticketID`">
                            <template #expander="current" :ref="`template_VN_47`">
                                <u-table-view-expander :ref="`table_view_expander_VN_13_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_48`">
                                <u-linear-layout :ref="`linear_layout_VN_20_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_VN_34_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).bug || {}).ticketID)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_49`">
                                <u-text :ref="`text_VN_35`" :text="`关联工单ID`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_VN_14`" :title="`操作`">
                            <template #expander="current" :ref="`template_VN_50`">
                                <u-table-view-expander :ref="`table_view_expander_VN_14_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_VN_51`">
                                <u-linear-layout :ref="`linear_layout_VN_21_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-link :ref="`link_VN_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_VN_1_click($event, current)"></u-link>
                                    <u-link :ref="`link_VN_2_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_VN_2_click($event, current)"></u-link>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_VN_52`">
                                <u-text :ref="`text_VN_36`" :text="`操作`"></u-text>
                            </template>
                        </u-table-view-column>
                    </u-table-view>
                </u-panel>
            </u-linear-layout>
        </u-linear-layout>
        <u-modal :ref="`saveModal_VN_1`" :size="`auto`" :is-head-slot-empty="true" style="--modal-dialog-width: 400px">
            <template #foot :ref="`template_VN_53`">
                <u-linear-layout :ref="`linear_layout_VN_22`" style="text-align: right">
                    <u-button :ref="`button_VN_3`" :key="`button_VN_3`" :color="`primary`" :text="`提交修改`" @click="button_VN_3_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_VN_7`" :text="`取消`" @click="button_VN_7_click($event)" style="--custom-start: auto"></u-button>
                    <u-button :ref="`button_VN_4`" :key="`button_VN_4`" :color="`primary`" :text="`立即创建`" @click="button_VN_4_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_VN_54`">
                <u-linear-layout :ref="`linear_layout_VN_23`" :direction="`horizontal`" style="--custom-start: auto">
                    <u-grid-layout :ref="`grid_layout_VN_4`" style="--custom-start: auto">
                        <u-grid-layout-row :ref="`grid_layout_row_VN_4`" :repeat="24">
                            <u-grid-layout-column :ref="`grid_layout_column_VN_9`" :span="16">
                                <lcap-wang-editor :ref="`lcap_wang_editor_VN_1`" style="--custom-start: auto"></lcap-wang-editor>
                            </u-grid-layout-column>
                            <u-grid-layout-column :ref="`grid_layout_column_VN_10`" :span="8">
                                <u-form :ref="`saveModalForm_VN_1`" key="saveModalForm_VN_1" style="--custom-start: auto">
                                    <u-form-item :ref="`form_item_VN_23`" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_70`">
                                            <u-text :ref="`text_VN_52`" :text="`缺陷名称`"></u-text>
                                        </template>
                                        <u-input :ref="`input_VN_7`" :placeholder="`请输入缺陷名称`" :value.sync="input.bugName"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_24`" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_71`">
                                            <u-text :ref="`text_VN_53`" :text="`状态`"></u-text>
                                        </template>
                                        <u-input :ref="`input_VN_8`" :placeholder="`请输入缺陷名称`" :value.sync="input.status"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_15`" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_58`">
                                            <u-text :ref="`text_VN_40`" :text="`缺陷级别`"></u-text>
                                        </template>
                                        <u-select :ref="`select_VN_2`" clearable="" :placeholder="`请选择缺陷级别`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'BugLevel', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.bugLevel" key="select_VN_2"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_13`" :rules="[{ validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' }]" :layout="`center`">
                                        <template #label :ref="`template_VN_56`">
                                            <u-text :ref="`text_VN_38`" :text="`缺陷描述`"></u-text>
                                        </template>
                                        <u-textarea :ref="`textarea_VN_3`" :placeholder="`请输入缺陷描述`" :value.sync="input.bugDescription"></u-textarea>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_25`" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_74`">
                                            <u-text :ref="`text_VN_58`" :text="`项目ID`"></u-text>
                                        </template>
                                        <u-number-input :ref="`number_input_VN_5`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入项目ID`" :value.sync="input.projectId"></u-number-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_17`" :layout="`center`">
                                        <template #label :ref="`template_VN_60`">
                                            <u-text :ref="`text_VN_42`" :text="`预计修复`"></u-text>
                                        </template>
                                        <u-date-time-picker :ref="`date_time_picker_VN_3`" clearable="" :value.sync="input.expectedRepairTime" :placeholder="`请输入预计修复时间`"></u-date-time-picker>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_18`" :layout="`center`">
                                        <template #label :ref="`template_VN_61`">
                                            <u-text :ref="`text_VN_43`" :text="`预计上线`"></u-text>
                                        </template>
                                        <u-date-time-picker :ref="`date_time_picker_VN_4`" clearable="" :value.sync="input.expectedFinishTime" :placeholder="`请输入预计完成时间`"></u-date-time-picker>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_16`" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_59`">
                                            <u-text :ref="`text_VN_41`" :text="`工时`"></u-text>
                                        </template>
                                        <u-number-input :ref="`number_input_VN_3`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入项目ID`" :value.sync="input.manhour"></u-number-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_19`" :layout="`center`">
                                        <template #label :ref="`template_VN_62`">
                                            <u-text :ref="`text_VN_44`" :text="`经办人`"></u-text>
                                        </template>
                                        <u-input :ref="`input_VN_5`" :placeholder="`请输入经办人`" :value.sync="input.agent"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_20`" :layout="`center`">
                                        <template #label :ref="`template_VN_63`">
                                            <u-text :ref="`text_VN_45`" :text="`报告人`"></u-text>
                                        </template>
                                        <u-input :ref="`input_VN_6`" :placeholder="`请输入报告人`" :value.sync="input.reporter"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_22`" :layout="`center`">
                                        <template #label :ref="`template_VN_65`">
                                            <u-text :ref="`text_VN_47`" :text="`关联工单ID`"></u-text>
                                        </template>
                                        <u-number-input :ref="`number_input_VN_4`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入关联工单ID`" :value.sync="input.ticketID"></u-number-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_VN_14`" :rules="[{ validate: 'maxLength', args: [4000], message: `不得超过${4000}个字符`, trigger: 'input+blur' }]" :layout="`center`" style="--custom-start: auto">
                                        <template #label :ref="`template_VN_57`">
                                            <u-text :ref="`text_VN_39`" :text="`附件`"></u-text>
                                        </template>
                                        <u-uploader :ref="`uploader_VN_2`" :listType="`card`" :accept="`.png,.jpg,.jpeg,.gif,.bmp`" :url="`/upload`" :urlField="`filePath`" :limit="999" :maxSize="`50MB`" :converter="`json`" :value.sync="input.appendix" :multiple="true" style="--custom-start: auto">
                                            <template #file-list :ref="`template_VN_73`">
                                                <i-ico :ref="`ico_VN_3`" :flag="`file-icon`" :name="`file-default`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                                <u-text :ref="`text_VN_56`" :flag="`file-name`" :text="`文件名称`" style="margin: 0px 8px 0px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inherit"></u-text>
                                                <u-text :ref="`text_VN_57`" :flag="`file-size`" :text="`文件大小`" style="margin: 0px 8px 0px 0px"></u-text>
                                                <i-ico :ref="`ico_VN_4`" :flag="`download-icon`" :name="`download`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                            </template>
                                        </u-uploader>
                                    </u-form-item>
                                </u-form>
                            </u-grid-layout-column>
                        </u-grid-layout-row>
                    </u-grid-layout>
                </u-linear-layout>
            </template>
            <u-grid-layout :ref="`grid_layout_VN_2`" style="--custom-start: auto">
                <u-grid-layout-row :ref="`grid_layout_row_VN_2`" :repeat="24">
                    <u-grid-layout-column :ref="`grid_layout_column_VN_4`" :span="8"></u-grid-layout-column>
                    <u-grid-layout-column :ref="`grid_layout_column_VN_5`" :span="16"></u-grid-layout-column>
                </u-grid-layout-row>
            </u-grid-layout>
            <template #title :ref="`template_VN_66`">
                <div :ref="`div_VN_1`" :key="`div_VN_1`" v-if="isUpdate">
                    <u-text :ref="`text_VN_48`" :text="`修改`"></u-text>
                </div>
                <div :ref="`div_VN_2`" :key="`div_VN_2`" v-if="!isUpdate">
                    <u-text :ref="`text_VN_49`" :text="`新建缺陷`"></u-text>
                </div>
            </template>
            <template #head :ref="`template_VN_67`" style="--custom-start: auto"></template>
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
            ["bug"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", undefined),
            ["isUpdate"]: undefined,
            ["createBeginTime"]: this.$genInitFromSchema("nasl.core.DateTime", undefined),
            ["createEndTime"]: this.$genInitFromSchema("nasl.core.DateTime", undefined),
            ["__select_VN_1_params"]: {},
            ["__tableView_VN_1_params"]: {},
            ["__select_VN_2_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "缺陷管理",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async bug_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_VN_3_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_VN_1`] && this.$refs[`saveModalForm_VN_1`].validate && this.$refs[`saveModalForm_VN_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Bug",
                        await this.$logics["app.dataSources.defaultDS.entities.Bug.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "563a2cb868d748d1bab8f2c3883eedc6",
                            },
                            body: {
                                entity: this.input,
                            },
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_VN_1`] && this.$refs[`saveModal_VN_1`].close && this.$refs[`saveModal_VN_1`].close());
                    await (this.$refs && this.$refs[`tableView_VN_1`] && this.$refs[`tableView_VN_1`].reload && this.$refs[`tableView_VN_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_VN_7_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`saveModal_VN_1`] && this.$refs[`saveModal_VN_1`].close && this.$refs[`saveModal_VN_1`].close());
                return;
            })();
        },
        async button_VN_4_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                validateResult = await (this.$refs && this.$refs[`saveModalForm_VN_1`] && this.$refs[`saveModalForm_VN_1`].validate && this.$refs[`saveModalForm_VN_1`].validate());
                if ((validateResult || {}).valid) {
                    this.$genInitFromSchema(
                        "app.dataSources.defaultDS.entities.Bug",
                        await this.$logics["app.dataSources.defaultDS.entities.Bug.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "28039b9c321e412ea20b09a88f2cb624",
                            },

                            body: this.input,
                        })
                    );
                    await (this.$refs && this.$refs[`saveModal_VN_1`] && this.$refs[`saveModal_VN_1`].close && this.$refs[`saveModal_VN_1`].close());
                    await (this.$refs && this.$refs[`tableView_VN_1`] && this.$refs[`tableView_VN_1`].reload && this.$refs[`tableView_VN_1`].reload());
                } else {
                }

                return;
            })();
        },
        async button_VN_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", this.$utils["Clone"](this.bug));
                await (this.$refs && this.$refs[`saveModal_VN_1`] && this.$refs[`saveModal_VN_1`].open && this.$refs[`saveModal_VN_1`].open());
                return;
            })();
        },
        async button_VN_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_VN_1`] && this.$refs[`tableView_VN_1`].reload && this.$refs[`tableView_VN_1`].reload());
                return;
            })();
        },
        async link_VN_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Bug", this.$utils["Clone"](((current || {}).item || {}).bug));
                await (this.$refs && this.$refs[`saveModal_VN_1`] && this.$refs[`saveModal_VN_1`].open && this.$refs[`saveModal_VN_1`].open());
                return;
            })();
        },
        async link_VN_2_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.Bug.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "373e9b148e5144b793316c15a5520440",
                    },
                    query: {
                        id: (((current || {}).item || {}).bug || {}).id,
                    },
                    body: {},
                });
                await (this.$refs && this.$refs[`tableView_VN_1`] && this.$refs[`tableView_VN_1`].reload && this.$refs[`tableView_VN_1`].reload());
                return;
            })();
        },
        async __tableView_VN_1_handleDataSourceLoad(params) {
            this["__tableView_VN_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{bug: app.dataSources.defaultDS.entities.Bug}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadBugTableView_VN_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "2a326644c12543baa63ef1f169c3f3a9",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_VN_1_params && this.__tableView_VN_1_params.page,
                        size: this.__tableView_VN_1_params && this.__tableView_VN_1_params.size,
                        sort: this.__tableView_VN_1_params && this.__tableView_VN_1_params.sort,
                        order: this.__tableView_VN_1_params && this.__tableView_VN_1_params.order,
                        filter: this.filter,
                        createBeginTime: this.createBeginTime,
                        createEndTime: this.createEndTime,
                    },
                })
            );
        },

        __select_VN_1_clearable() {
            return undefined;
        },

        __select_VN_1_placeholder() {
            return undefined;
        },

        __select_VN_1_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "BugLevel", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_VN_1_pageSize() {
            return 50;
        },

        __select_VN_1_value() {
            return (this.filter || {}).bugLevel;
        },

        async __tableView_VN_1_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{bug: app.dataSources.defaultDS.entities.Bug}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadBugTableView_VN_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "2a326644c12543baa63ef1f169c3f3a9",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_VN_1_params && this.__tableView_VN_1_params.page,
                        size: this.__tableView_VN_1_params && this.__tableView_VN_1_params.size,
                        sort: this.__tableView_VN_1_params && this.__tableView_VN_1_params.sort,
                        order: this.__tableView_VN_1_params && this.__tableView_VN_1_params.order,
                        filter: this.filter,
                        createBeginTime: this.createBeginTime,
                        createEndTime: this.createEndTime,
                    },
                })
            );
        },

        __tableView_VN_1_dataSchema() {
            return undefined;
        },

        __tableView_VN_1_valueField() {
            return undefined;
        },

        __tableView_VN_1_pagination() {
            return true;
        },

        __tableView_VN_1_showSizer() {
            return true;
        },

        __tableView_VN_1_pageSize() {
            return 20;
        },

        __tableView_VN_1_pageNumber() {
            return 1;
        },

        __select_VN_2_clearable() {
            return undefined;
        },

        __select_VN_2_placeholder() {
            return undefined;
        },

        __select_VN_2_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "BugLevel", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_VN_2_pageSize() {
            return 50;
        },

        __select_VN_2_value() {
            return (this.input || {}).bugLevel;
        },
    },
    async created() {
        await this.bug_created();
    },
};
</script>
