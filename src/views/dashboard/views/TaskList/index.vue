<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-linear-layout :ref="`linear_layout_Hm_1`" :direction="`vertical`" style="--custom-start: auto">
            <u-crumb :ref="`crumb_Hm_1`" :icon="false" :separator="`slash`" style="--custom-start: auto">
                <u-crumb-item :ref="`crumb_item_Hm_1`" :icon="`home`">
                    <u-text :ref="`text_Hm_75`" :text="`项目管理`"></u-text>
                </u-crumb-item>
                <u-crumb-item :ref="`crumb_item_Hm_2`" :icon="`user`">
                    <u-text :ref="`text_Hm_76`" :text="`任务列表`"></u-text>
                </u-crumb-item>
            </u-crumb>
        </u-linear-layout>
        <u-panel :ref="`panel_Hm_1`" style="--custom-start: auto">
            <template #title :ref="`template_Hm_89`">
                <u-text :ref="`text_Hm_69`" :text="`查询`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_Hm_25`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_Hm_26`">
                    <u-form :ref="`form_Hm_1`" :layout="`inline-flex`" :repeat="5" key="form_Hm_1" style="--custom-start: auto">
                        <u-form-item :ref="`form_item_Hm_1`" :layout="`center`">
                            <template #label :ref="`template_Hm_1`">
                                <u-text :ref="`text_Hm_1`" :text="`任务ID`"></u-text>
                            </template>
                            <u-number-input :ref="`number_input_Hm_1`" :highPrecision="true" :step="0" :decimalLength="0" :decimalPlaces="{ places: 0, omit: false }" :placeholder="`请输入主键`" :value.sync="filter.id"></u-number-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_5`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_5`">
                                <u-text :ref="`text_Hm_5`" :text="`任务名称`"></u-text>
                            </template>
                            <u-input :ref="`input_Hm_2`" :placeholder="`请输入任务名称`" :value.sync="filter.taskName"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_7`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_7`">
                                <u-text :ref="`text_Hm_7`" :text="`任务类型`"></u-text>
                            </template>
                            <u-select :ref="`select_Hm_2`" clearable="" :placeholder="`请选择任务类型`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'TaskType', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.taskType" key="select_Hm_2"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_9`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_9`">
                                <u-text :ref="`text_Hm_9`" :text="`状态`"></u-text>
                            </template>
                            <u-select :ref="`select_Hm_3`" clearable="" :placeholder="`请选择状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'TaskStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.status" key="select_Hm_3"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_6`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_6`">
                                <u-text :ref="`text_Hm_6`" :text="`优先级`"></u-text>
                            </template>
                            <u-select :ref="`select_Hm_1`" clearable="" :placeholder="`请选择优先级`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'Priority', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.priority" key="select_Hm_1"></u-select>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_4`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_4`">
                                <u-text :ref="`text_Hm_4`" :text="`创建人`"></u-text>
                            </template>
                            <u-input :ref="`input_Hm_1`" :placeholder="`请输入创建人`" :value.sync="filter.createdBy"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_8`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_8`">
                                <u-text :ref="`text_Hm_8`" :text="`经办人`"></u-text>
                            </template>
                            <u-input :ref="`input_Hm_3`" :placeholder="`请输入经办人`" :value.sync="filter.agent"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_30`" :layout="`center`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_93`">
                                <u-text :ref="`text_Hm_73`" :text="`报告人 `"></u-text>
                            </template>
                            <u-input :ref="`input_Hm_8`" :placeholder="`请输入经办人`" :value.sync="filter.agent"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_28`" :layout="`center`" :span="`2`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_91`">
                                <u-text :ref="`text_Hm_71`" :text="`关联项`"></u-text>
                            </template>
                            <u-input :ref="`input_Hm_7`" :placeholder="`请输入经办人`" :value.sync="filter.agent" :width="`huge`"></u-input>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_27`" :layout="`center`" :span="`1.4`" style="--custom-start: auto">
                            <template #label :ref="`template_Hm_90`">
                                <u-text :ref="`text_Hm_70`" :text="`工时`"></u-text>
                            </template>
                            <u-linear-layout :ref="`linear_layout_Hm_33`" :direction="`horizontal`" :mode="`flex`" :justify="`start`" :alignment="`center`" :gap="`small`" style="--custom-start: auto">
                                <u-combo-slider :ref="`combo_slider_Hm_1`" :multiple="true" :hideButtons="true" :showTooltip="true" style="--custom-start: auto"></u-combo-slider>
                                <u-input :ref="`input_Hm_10`" placeholder="" :width="`small`" style="width: 30px; --custom-start: auto"></u-input>
                                <u-text :ref="`text_Hm_74`" :text="`— `" style="--custom-start: auto"></u-text>
                                <u-input :ref="`input_Hm_9`" placeholder="" :width="`small`" style="width: 30px; --custom-start: auto"></u-input>
                            </u-linear-layout>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_2`" :layout="`center`" :span="`1.8`">
                            <template #label :ref="`template_Hm_2`">
                                <u-text :ref="`text_Hm_2`" :text="`创建时间`"></u-text>
                            </template>
                            <u-date-picker :ref="`date_picker_Hm_1`" :range="true" style="--custom-start: auto"></u-date-picker>
                        </u-form-item>
                        <u-form-item :ref="`form_item_Hm_29`" :layout="`center`" :span="`1.8`" :labelSize="`large`" style="--update-key: 9h27; margin-left: -50px">
                            <template #label :ref="`template_Hm_92`">
                                <u-text :ref="`text_Hm_72`" :text="`预计完成时间`"></u-text>
                            </template>
                            <u-date-picker :ref="`date_picker_Hm_2`" :range="true" :advancedFormat="{ enable: false }" :width="`full`" style="--custom-start: auto"></u-date-picker>
                        </u-form-item>
                    </u-form>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_29`" style="text-align: right">
                    <u-button :ref="`button_Hm_1`" :color="`primary`" :text="`查 询`" @click="button_Hm_1_click($event)" style="border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; --update-key: u4t2"></u-button>
                    <u-button :ref="`button_Hm_5`" :color="`default`" :text="`重置 `" @click="button_Hm_5_click($event)" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_31`" style="--custom-start: auto">
                    <u-divider :ref="`divider_Hm_1`" :dashed="`a`" style="--custom-start: auto"></u-divider>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_32`" style="--custom-start: auto">
                    <u-button :ref="`button_Hm_2`" :color="`primary`" :text="`创 建`" @click="button_Hm_2_click($event)" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                    <u-button :ref="`button_Hm_6`" :color="`primary_secondary`" :text="`甘特图`" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_35`" :justify="`space-between`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout_Hm_36`">
                        <u-alert :ref="`alert_Hm_2`" :type="`info`" style="background-color: #ffffff; border-top-width: 1px; border-left-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-style: solid; --update-key: ue1p; border-color: #ebedf0">
                            <template #title :ref="`template_Hm_96`">
                                <u-linear-layout :ref="`linear_layout_Hm_38`" :direction="`horizontal`" :gap="`small`" style="--custom-start: auto">
                                    <u-text :ref="`text_Hm_83`" :text="`未开始`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_88`" :text="`1`" style="color: #c2292e; --custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_89`" :text="`|`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_85`" :text="`进行中 `" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_90`" :text="`2`" style="color: #c2292e; --custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_91`" :text="`|`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_92`" :text="`总工时`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_93`" :text="`233`" style="color: #c2292e; --custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_94`" :text="`|`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_95`" :text="`总消耗工时`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_96`" :text="`200`" style="color: #c2292e; --custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_86`" :text="`|`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_84`" :text="`剩余工时`" style="--custom-start: auto"></u-text>
                                    <u-text :ref="`text_Hm_87`" :text="`33`" style="color: #c2292e; --custom-start: auto"></u-text>
                                </u-linear-layout>
                            </template>
                        </u-alert>
                    </u-linear-layout>
                    <u-linear-layout :ref="`linear_layout_Hm_37`" :gap="`small`">
                        <u-button :ref="`button_Hm_8`" :text="`下载`" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                        <u-button :ref="`button_Hm_10`" :text="`批量导入`" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                        <u-button :ref="`button_Hm_9`" :text="`修改字段 `" style="--custom-start: auto; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px"></u-button>
                    </u-linear-layout>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_28`" style="--custom-start: auto">
                    <u-table-view :ref="`tableView_Hm_1`" :dataSource="(params) => __tableView_Hm_1_handleDataSourceLoad(params)" :dataSchema="`LoadTaskListTableView_Hm_1Structure`" :valueField="`task.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" key="tableView_Hm_1" style="--table-view-th-line-height: 10px">
                        <u-table-view-column :ref="`table_view_column_Hm_1`" :type="`checkbox`" :width="`60`">
                            <template #expander="current" :ref="`template_Hm_10`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_1_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_11`"></template>
                            <template #title :ref="`template_Hm_12`"></template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_4`" :field="`task.taskName`">
                            <template #expander="current" :ref="`template_Hm_19`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_4_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_20`">
                                <u-linear-layout :ref="`linear_layout_Hm_6_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_15_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).task || {}).taskName)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_21`">
                                <u-text :ref="`text_Hm_16`" :text="`任务名称`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_10`" :field="`task.taskType`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_37`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_10_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_38`">
                                <u-linear-layout :ref="`linear_layout_Hm_12_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_27_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.TaskType', (((current || {}).item || {}).task || {}).taskType)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_39`">
                                <u-text :ref="`text_Hm_28`" :text="`任务类型`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_7`" :field="`task.priority`">
                            <template #expander="current" :ref="`template_Hm_28`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_7_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_29`">
                                <u-linear-layout :ref="`linear_layout_Hm_9_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_21_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.Priority', (((current || {}).item || {}).task || {}).priority)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_30`">
                                <u-text :ref="`text_Hm_22`" :text="`优先级`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_19`" :field="`task.status`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_64`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_19_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_65`">
                                <u-linear-layout :ref="`linear_layout_Hm_21_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_46_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.TaskStatus', (((current || {}).item || {}).task || {}).status)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_66`">
                                <u-text :ref="`text_Hm_47`" :text="`状态`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_18`" :field="`task.agent`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_61`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_18_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_62`">
                                <u-linear-layout :ref="`linear_layout_Hm_20_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_44_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).task || {}).agent)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_63`">
                                <u-text :ref="`text_Hm_45`" :text="`经办人`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_9`" :field="`task.pocId`">
                            <template #expander="current" :ref="`template_Hm_34`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_9_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_35`">
                                <u-linear-layout :ref="`linear_layout_Hm_11_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_25_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).task || {}).pocId)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_36`">
                                <u-text :ref="`text_Hm_26`" :text="`报告人`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_16`" :field="`task.actualWorkHour`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_55`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_16_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_56`">
                                <u-linear-layout :ref="`linear_layout_Hm_18_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_39_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).task || {}).actualWorkHour)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_57`">
                                <u-text :ref="`text_Hm_40`" :text="`实际工时`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_12`" :field="`task.expectedFinishTime`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_43`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_12_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_44`">
                                <u-linear-layout :ref="`linear_layout_Hm_14_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_31_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.DateTime', (((current || {}).item || {}).task || {}).expectedFinishTime)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_45`">
                                <u-text :ref="`text_Hm_32`" :text="`预计完成时间`"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_8`" :field="`task.projectId`" style="--custom-start: auto">
                            <template #expander="current" :ref="`template_Hm_31`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_8_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_32`">
                                <u-linear-layout :ref="`linear_layout_Hm_10_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-text :ref="`text_Hm_23_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.Long', (((current || {}).item || {}).task || {}).projectId)"></u-text>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_33`">
                                <u-text :ref="`text_Hm_24`" :text="`关联项目 `"></u-text>
                            </template>
                        </u-table-view-column>
                        <u-table-view-column :ref="`table_view_column_Hm_20`" :title="`操作`" :fixed="true">
                            <template #expander="current" :ref="`template_Hm_67`">
                                <u-table-view-expander :ref="`table_view_expander_Hm_20_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                            </template>
                            <template #cell="current" :ref="`template_Hm_68`">
                                <u-linear-layout :ref="`linear_layout_Hm_22_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                    <u-link :ref="`link_Hm_1_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_Hm_1_click($event, current)"></u-link>
                                </u-linear-layout>
                            </template>
                            <template #title :ref="`template_Hm_69`">
                                <u-text :ref="`text_Hm_48`" :text="`操作`"></u-text>
                            </template>
                        </u-table-view-column>
                    </u-table-view>
                </u-linear-layout>
                <u-linear-layout :ref="`linear_layout_Hm_27`">
                    <u-linear-progress :ref="`linear_progress_Hm_1`" :percent="36" style="--custom-start: auto"></u-linear-progress>
                </u-linear-layout>
            </u-linear-layout>
        </u-panel>
        <u-modal :ref="`modal_Hm_1`" :size="`auto`" style="--custom-start: auto">
            <template #foot :ref="`template_Hm_97`">
                <u-linear-layout :ref="`linear_layout_Hm_39`" :vusion-disabled-cut="true" :justify="`end`">
                    <u-button :ref="`button_Hm_12`" :text="`取 消`" @click="button_Hm_12_click($event)" style="--custom-start: auto"></u-button>
                    <u-button :ref="`button_Hm_11`" :color="`primary`" :text="`确定新建`"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_Hm_98`">
                <u-grid-layout :ref="`grid_layout_Hm_1`" style="--custom-start: auto">
                    <u-grid-layout-row :ref="`grid_layout_row_Hm_1`" :repeat="20">
                        <u-grid-layout-column :ref="`grid_layout_column_Hm_1`" :span="14">
                            <u-linear-layout :ref="`linear_layout_Hm_41`" :direction="`vertical`" style="--custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_Hm_42`"></u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_45`" style="--custom-start: auto">
                                    <u-input :ref="`input_Hm_11`" :placeholder="`请输入任务名称`" :value.sync="task.taskName" :width="`full`" style="--custom-start: auto"></u-input>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_44`" style="--custom-start: auto">
                                    <lcap-wang-editor :ref="`lcap_wang_editor_Hm_1`" :value.sync="input.taskDescription" style="height: 620px"></lcap-wang-editor>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_55`" style="--custom-start: auto">
                                    <u-uploader :ref="`uploader_Hm_5`" :display="`inline`" :url="`/upload`" :urlField="`filePath`" :limit="999" :maxSize="`50MB`" :converter="`json`" style="--custom-start: auto">
                                        <template #file-list :ref="`template_Hm_122`">
                                            <i-ico :ref="`ico_Hm_11`" :flag="`file-icon`" :name="`file-default`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                            <u-text :ref="`text_Hm_128`" :flag="`file-name`" :text="`文件名称`" style="margin: 0px 8px 0px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inherit"></u-text>
                                            <u-text :ref="`text_Hm_129`" :flag="`file-size`" :text="`文件大小`" style="margin: 0px 8px 0px 0px"></u-text>
                                            <i-ico :ref="`ico_Hm_12`" :flag="`download-icon`" :name="`download`" :icotype="`only`" style="margin: 0px 8px 0px 0px"></i-ico>
                                        </template>
                                        <u-button :ref="`button_Hm_19`" :color="`default`" :icon="`upload`" :text="`上传附件`"></u-button>
                                    </u-uploader>
                                </u-linear-layout>
                            </u-linear-layout>
                        </u-grid-layout-column>
                        <u-grid-layout-column :ref="`grid_layout_column_Hm_3`" :span="6">
                            <u-linear-layout :ref="`linear_layout_Hm_47`" :direction="`vertical`" style="--custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_Hm_48`">
                                    <u-text :ref="`text_Hm_108`" :text="`基本属性`" style="font-size: 16px; --custom-start: auto; font-weight: bold"></u-text>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_50`" style="--custom-start: auto">
                                    <u-form :ref="`form_Hm_2`" key="form_Hm_2" style="--custom-start: auto">
                                        <u-form-item :ref="`form_item_Hm_31`" :required="false" :layout="`center`">
                                            <template #label :ref="`template_Hm_100`">
                                                <u-text :ref="`text_Hm_100`" :text="`任务类型`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_8`" :clearable="true" :placeholder="`请选择任务类型`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'TaskType', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.taskType" key="select_Hm_8" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_35`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_105`">
                                                <u-text :ref="`text_Hm_105`" :text="`状态`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_9`" :clearable="true" :placeholder="`请选择任务状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'TaskStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.status" key="select_Hm_9" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_34`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_104`">
                                                <u-text :ref="`text_Hm_104`" :text="`优先级`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_10`" :clearable="true" :placeholder="`请选择优先级`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'Priority', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.priority" key="select_Hm_10" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_36`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_106`">
                                                <u-text :ref="`text_Hm_106`" :text="`关联项`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_11`" clearable="" :placeholder="`请选择关联项`" :dataSource="(params) => __select_Hm_11_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadTaskListSelect_Hm_11Structure`" :textField="`project.projectName`" :valueField="`project.id`" :pagination="true" :value.sync="input.projectId" key="select_Hm_11" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                    </u-form>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_49`">
                                    <u-divider :ref="`divider_Hm_2`" :dashed="`a`" style="--custom-start: auto"></u-divider>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_51`" style="--custom-start: auto">
                                    <u-text :ref="`text_Hm_99`" :text="`迭代属性 `" style="font-size: 16px; --custom-start: auto; font-weight: bold"></u-text>
                                </u-linear-layout>
                                <u-linear-layout :ref="`linear_layout_Hm_52`" style="--custom-start: auto">
                                    <u-form :ref="`form_Hm_3`" key="form_Hm_3" style="--custom-start: auto">
                                        <u-form-item :ref="`form_item_Hm_37`" :required="false" :layout="`center`">
                                            <template #label :ref="`template_Hm_107`">
                                                <u-text :ref="`text_Hm_110`" :text="`开始日期`"></u-text>
                                            </template>
                                            <u-date-picker :ref="`date_picker_Hm_4`" :value.sync="input.expectedStartTime" preIcon="" :suffixIcon="`calendar`" :showFormatter="`YYYY-MM-DD`" :placeholder="`请选择开始日期`" style="--custom-start: auto"></u-date-picker>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_42`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_113`">
                                                <u-text :ref="`text_Hm_116`" :text="`预计完成日期`"></u-text>
                                            </template>
                                            <u-date-picker :ref="`date_picker_Hm_3`" :value.sync="input.expectedFinishTime" preIcon="" :suffixIcon="`calendar`" :showFormatter="`YYYY-MM-DD`" :placeholder="`请选择预计完成日期`" style="--custom-start: auto"></u-date-picker>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_41`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_112`">
                                                <u-text :ref="`text_Hm_115`" :text="`工时`"></u-text>
                                            </template>
                                            <u-number-input :ref="`number_input_Hm_6`" :value.sync="input.expectedWorkHour" :hideButtons="true" :placeholder="`请输入工时`" :unit="{ type: 'suffix', value: 'h' }" :decimalLength="0.1" :min="0" style="--custom-start: auto"></u-number-input>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_40`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_111`">
                                                <u-text :ref="`text_Hm_114`" :text="`是否提测`"></u-text>
                                            </template>
                                            <u-checkboxes :ref="`checkboxes_Hm_1`" :value.sync="input.testOrNot" style="--custom-start: auto">
                                                <template #item="current" :ref="`template_Hm_116`"></template>
                                                <u-checkbox :ref="`checkbox_Hm_1`" value="" :label="true" @change="checkbox_Hm_1_change($event)" style="--custom-start: auto">
                                                    <template #item :ref="`template_Hm_117`"></template>
                                                </u-checkbox>
                                            </u-checkboxes>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_44`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_115`">
                                                <u-text :ref="`text_Hm_118`" :text="`经办人`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_13`" clearable="" :placeholder="`请选择经办人`" :dataSource="(params) => __select_Hm_13_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadTaskListSelect_Hm_12Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.agent" key="select_Hm_13" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_Hm_43`" :required="false" :layout="`center`" style="--custom-start: auto">
                                            <template #label :ref="`template_Hm_114`">
                                                <u-text :ref="`text_Hm_117`" :text="`报告人`"></u-text>
                                            </template>
                                            <u-select :ref="`select_Hm_12`" clearable="" :placeholder="`请选择报告人`" :dataSource="(params) => __select_Hm_12_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadTaskListSelect_Hm_12Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="taskUserList" :multiple="true" key="select_Hm_12" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                    </u-form>
                                </u-linear-layout>
                            </u-linear-layout>
                        </u-grid-layout-column>
                    </u-grid-layout-row>
                </u-grid-layout>
            </template>
            <template #title :ref="`template_Hm_99`">
                <u-text :ref="`text_Hm_98`" :text="`新建任务`"></u-text>
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
            ["task"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", undefined),
            ["isUpdate"]: undefined,
            ["taskUserList"]: this.$genInitFromSchema("nasl.collection.List<nasl.core.String>", undefined),
            ["__select_Hm_2_params"]: {},
            ["__select_Hm_3_params"]: {},
            ["__select_Hm_1_params"]: {},
            ["__tableView_Hm_1_params"]: {},
            ["__select_Hm_8_params"]: {},
            ["__select_Hm_9_params"]: {},
            ["__select_Hm_10_params"]: {},
            ["__select_Hm_11_params"]: {},
            ["__checkboxes_Hm_1_params"]: {},
            ["__select_Hm_13_params"]: {},
            ["__select_Hm_12_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "任务列表",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async TaskList_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", this.$utils["Clear"](this.filter));
                return;
            })();
        },
        async button_Hm_1_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_Hm_1`] && this.$refs[`tableView_Hm_1`].reload && this.$refs[`tableView_Hm_1`].reload());
                return;
            })();
        },
        async button_Hm_5_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_Hm_1`] && this.$refs[`tableView_Hm_1`].reload && this.$refs[`tableView_Hm_1`].reload());
                return;
            })();
        },
        async button_Hm_2_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", this.$utils["Clone"](this.task));
                await (this.$refs && this.$refs[`modal_Hm_1`] && this.$refs[`modal_Hm_1`].open && this.$refs[`modal_Hm_1`].open());
                return;
            })();
        },
        async button_Hm_12_click(event) {
            await (async () => {
                await (this.$refs && this.$refs[`modal_Hm_1`] && this.$refs[`modal_Hm_1`].close && this.$refs[`modal_Hm_1`].close());
                return;
            })();
        },
        async link_Hm_1_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Task", this.$utils["Clone"](((current || {}).item || {}).task));
                await (this.$refs && this.$refs[`modal_Hm_1`] && this.$refs[`modal_Hm_1`].open && this.$refs[`modal_Hm_1`].open());
                return;
            })();
        },
        async checkbox_Hm_1_change(event) {
            await (async () => {
                if ((this.input || {}).testOrNot) {
                    this.input.testOrNot = false;
                } else {
                    this.input.testOrNot = true;
                }

                return;
            })();
        },
        async __tableView_Hm_1_handleDataSourceLoad(params) {
            this["__tableView_Hm_1_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{task: app.dataSources.defaultDS.entities.Task}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListTableView_Hm_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "caa7285f19f4416d8dab6d7de869aaf3",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.page,
                        size: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.size,
                        sort: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.sort,
                        order: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        async __select_Hm_11_handleDataSourceLoad(params) {
            this["__select_Hm_11_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_11"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "5a3307a5987348aeb86e99c30a60dd38",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_11_params && this.__select_Hm_11_params.page,
                        size: this.__select_Hm_11_params && this.__select_Hm_11_params.size,
                    },
                })
            );
        },

        async __select_Hm_13_handleDataSourceLoad(params) {
            this["__select_Hm_13_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_12"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "a510f698e2a24eccaf30ce02cb8486ab",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_13_params && this.__select_Hm_13_params.page,
                        size: this.__select_Hm_13_params && this.__select_Hm_13_params.size,
                        displayName: this["__select_Hm_13_params"]?.filterText,
                    },
                })
            );
        },

        async __select_Hm_12_handleDataSourceLoad(params) {
            this["__select_Hm_12_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_12"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "59721e574d6c4ad89525af228c8144f7",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_12_params && this.__select_Hm_12_params.page,
                        size: this.__select_Hm_12_params && this.__select_Hm_12_params.size,
                        displayName: this["__select_Hm_12_params"]?.filterText,
                    },
                })
            );
        },

        __select_Hm_2_clearable() {
            return undefined;
        },

        __select_Hm_2_placeholder() {
            return undefined;
        },

        __select_Hm_2_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "TaskType", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_2_pageSize() {
            return 50;
        },

        __select_Hm_2_value() {
            return (this.filter || {}).taskType;
        },

        __select_Hm_3_clearable() {
            return undefined;
        },

        __select_Hm_3_placeholder() {
            return undefined;
        },

        __select_Hm_3_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "TaskStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_3_pageSize() {
            return 50;
        },

        __select_Hm_3_value() {
            return (this.filter || {}).status;
        },

        __select_Hm_1_clearable() {
            return undefined;
        },

        __select_Hm_1_placeholder() {
            return undefined;
        },

        __select_Hm_1_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "Priority", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_1_pageSize() {
            return 50;
        },

        __select_Hm_1_value() {
            return (this.filter || {}).priority;
        },

        async __tableView_Hm_1_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{task: app.dataSources.defaultDS.entities.Task}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListTableView_Hm_1"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "caa7285f19f4416d8dab6d7de869aaf3",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.page,
                        size: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.size,
                        sort: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.sort,
                        order: this.__tableView_Hm_1_params && this.__tableView_Hm_1_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        __tableView_Hm_1_dataSchema() {
            return undefined;
        },

        __tableView_Hm_1_valueField() {
            return undefined;
        },

        __tableView_Hm_1_pagination() {
            return true;
        },

        __tableView_Hm_1_showSizer() {
            return true;
        },

        __tableView_Hm_1_pageSize() {
            return 20;
        },

        __tableView_Hm_1_pageNumber() {
            return 1;
        },

        __select_Hm_8_clearable() {
            return true;
        },

        __select_Hm_8_placeholder() {
            return undefined;
        },

        __select_Hm_8_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "TaskType", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_8_pageSize() {
            return 50;
        },

        __select_Hm_8_value() {
            return (this.input || {}).taskType;
        },

        __select_Hm_8_opened() {
            return undefined;
        },

        __select_Hm_9_clearable() {
            return true;
        },

        __select_Hm_9_placeholder() {
            return undefined;
        },

        __select_Hm_9_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "TaskStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_9_pageSize() {
            return 50;
        },

        __select_Hm_9_value() {
            return (this.input || {}).status;
        },

        __select_Hm_9_opened() {
            return undefined;
        },

        __select_Hm_10_clearable() {
            return true;
        },

        __select_Hm_10_placeholder() {
            return undefined;
        },

        __select_Hm_10_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "Priority", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_Hm_10_pageSize() {
            return 50;
        },

        __select_Hm_10_value() {
            return (this.input || {}).priority;
        },

        __select_Hm_10_opened() {
            return undefined;
        },

        __select_Hm_11_clearable() {
            return undefined;
        },

        __select_Hm_11_placeholder() {
            return undefined;
        },

        async __select_Hm_11_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_11"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "5a3307a5987348aeb86e99c30a60dd38",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_11_params && this.__select_Hm_11_params.page,
                        size: this.__select_Hm_11_params && this.__select_Hm_11_params.size,
                    },
                })
            );
        },

        __select_Hm_11_pageSize() {
            return 50;
        },

        __select_Hm_11_dataSchema() {
            return undefined;
        },

        __select_Hm_11_textField() {
            return undefined;
        },

        __select_Hm_11_valueField() {
            return undefined;
        },

        __select_Hm_11_pagination() {
            return true;
        },

        __select_Hm_11_value() {
            return (this.input || {}).projectId;
        },

        __select_Hm_11_opened() {
            return undefined;
        },

        __checkboxes_Hm_1_value() {
            return (this.input || {}).testOrNot;
        },

        __select_Hm_13_clearable() {
            return undefined;
        },

        __select_Hm_13_placeholder() {
            return undefined;
        },

        async __select_Hm_13_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_12"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "a510f698e2a24eccaf30ce02cb8486ab",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_13_params && this.__select_Hm_13_params.page,
                        size: this.__select_Hm_13_params && this.__select_Hm_13_params.size,
                        displayName: this["__select_Hm_13_params"]?.filterText,
                    },
                })
            );
        },

        __select_Hm_13_pageSize() {
            return 50;
        },

        __select_Hm_13_dataSchema() {
            return undefined;
        },

        __select_Hm_13_textField() {
            return undefined;
        },

        __select_Hm_13_valueField() {
            return undefined;
        },

        __select_Hm_13_pagination() {
            return true;
        },

        __select_Hm_13_value() {
            return (this.input || {}).agent;
        },

        __select_Hm_13_opened() {
            return undefined;
        },

        __select_Hm_12_clearable() {
            return undefined;
        },

        __select_Hm_12_placeholder() {
            return undefined;
        },

        async __select_Hm_12_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadTaskListSelect_Hm_12"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "59721e574d6c4ad89525af228c8144f7",
                    },
                    path: {},
                    body: {
                        page: this.__select_Hm_12_params && this.__select_Hm_12_params.page,
                        size: this.__select_Hm_12_params && this.__select_Hm_12_params.size,
                        displayName: this["__select_Hm_12_params"]?.filterText,
                    },
                })
            );
        },

        __select_Hm_12_pageSize() {
            return 50;
        },

        __select_Hm_12_dataSchema() {
            return undefined;
        },

        __select_Hm_12_textField() {
            return undefined;
        },

        __select_Hm_12_valueField() {
            return undefined;
        },

        __select_Hm_12_pagination() {
            return true;
        },

        __select_Hm_12_value() {
            return this.taskUserList;
        },

        __select_Hm_12_opened() {
            return undefined;
        },

        __select_Hm_12_multiple() {
            return true;
        },
    },
    async created() {
        await this.TaskList_created();
    },
};
</script>
