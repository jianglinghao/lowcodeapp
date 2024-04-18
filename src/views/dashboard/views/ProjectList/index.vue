<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`root`" :gap="`none`" style="height: 100%; padding-bottom: 40px; --update-key: x9gh; --custom-start: auto; min-height: 200px">
        <u-router-view :ref="`router_view1`"></u-router-view>
        <u-crumb :ref="`crumb_T5_2`" :icon="true" :separator="`slash`" style="color: #9c9c9c">
            <u-crumb-item :ref="`crumb_item_T5_4`" :icon="`home`" :disabled="true">
                <u-text :ref="`text_T5_10`" :text="`基础数据`"></u-text>
            </u-crumb-item>
            <u-crumb-item :ref="`crumb_item_T5_6`" :icon="`list-display`" :disabled="true">
                <u-text :ref="`text_T5_12`" :text="`项目列表`" style="color: #000000"></u-text>
            </u-crumb-item>
        </u-crumb>
        <u-panel :ref="`panel_T5_1`" style="margin-top: 8px; --update-key: lp13; height: 100%">
            <template #title :ref="`template_T5_1`">
                <u-text :ref="`text_T5_1`" :text="`查询`"></u-text>
            </template>
            <u-linear-layout :ref="`linear_layout_T5_2`" :direction="`vertical`" style="--custom-start: auto">
                <u-linear-layout :ref="`linear_layout_T5_3`">
                    <u-linear-layout :ref="`linear_layout_T5_6`" :direction="`vertical`" style="--custom-start: auto">
                        <u-linear-layout :ref="`linear_layout_T5_22`" :direction="`vertical`" style="--custom-start: auto">
                            <u-linear-layout :ref="`linear_layout_T5_23`">
                                <u-form :ref="`form_T5_2`" :layout="`inline`" key="form_T5_2" style="--custom-start: auto">
                                    <u-form-item :ref="`form_item_T5_10`" :layout="`center`">
                                        <template #label :ref="`template_T5_38`">
                                            <u-text :ref="`text_T5_46`" :text="`项目名称`"></u-text>
                                        </template>
                                        <u-input :ref="`input_T5_5`" :placeholder="`请输入项目名称`" :value.sync="filter.projectName"></u-input>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_11`" :layout="`center`">
                                        <template #label :ref="`template_T5_39`">
                                            <u-text :ref="`text_T5_47`" :text="`客户ID`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_10`" clearable="" :placeholder="`请选择客户`" :dataSource="(params) => __select_T5_10_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_10Structure`" :textField="`customer.customerName`" :valueField="`customer.id`" :pagination="true" :value.sync="filter.customerId" key="select_T5_10" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_12`" :layout="`center`">
                                        <template #label :ref="`template_T5_40`">
                                            <u-text :ref="`text_T5_48`" :text="`项目状态`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_5`" clearable="" :placeholder="`请选择项目状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'ProjectStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="filter.projectStatus" key="select_T5_5"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_13`" :layout="`center`">
                                        <template #label :ref="`template_T5_41`">
                                            <u-text :ref="`text_T5_49`" :text="`销售人员`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_7`" clearable="" :placeholder="`请选择销售人员`" :dataSource="(params) => __select_T5_7_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="filter.salesperson" key="select_T5_7" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_14`" :layout="`center`">
                                        <template #label :ref="`template_T5_42`">
                                            <u-text :ref="`text_T5_50`" :text="`解决方案`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_9`" clearable="" :placeholder="`请选择解决方案`" :dataSource="(params) => __select_T5_9_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="filter.solution" key="select_T5_9" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                    <u-form-item :ref="`form_item_T5_15`" :layout="`center`">
                                        <template #label :ref="`template_T5_43`">
                                            <u-text :ref="`text_T5_51`" :text="`项目经理`"></u-text>
                                        </template>
                                        <u-select :ref="`select_T5_8`" clearable="" :placeholder="`请选择项目经理`" :dataSource="(params) => __select_T5_8_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="filter.projectManager" key="select_T5_8" style="--custom-start: auto"></u-select>
                                    </u-form-item>
                                </u-form>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_24`" style="text-align: right; border-style: solid; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 1px; --update-key: kicj; padding-bottom: 8px; border-color: #e5e6eb">
                                <u-button :ref="`button_T5_7`" :color="`primary`" :text="`查询`" @click="button_T5_7_click($event)" style="--custom-start: auto"></u-button>
                                <u-button :ref="`button_T5_5`" :color="`default`" :text="`重置`" @click="button_T5_5_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_27`" style="margin-top: -8px; --update-key: 8zgq">
                                <u-button :ref="`button_T5_8`" :color="`primary`" :text="`创建`" @click="button_T5_8_click($event)" style="--custom-start: auto"></u-button>
                            </u-linear-layout>
                            <u-linear-layout :ref="`linear_layout_T5_25`" style="--custom-start: auto">
                                <u-linear-layout :ref="`linear_layout_T5_34`" :direction="`vertical`" style="--custom-start: auto">
                                    <u-table-view :ref="`tableView_T5_2`" :dataSource="(params) => __tableView_T5_2_handleDataSourceLoad(params)" :dataSchema="`LoadProjectListTableView_T5_2Structure`" :valueField="`project.id`" :pagination="true" :showSizer="true" :pageSize="20" :pageNumber="1" :initialLoad="false" key="tableView_T5_2">
                                        <u-table-view-column :ref="`table_view_column_T5_9`" :type="`index`" :width="`60`">
                                            <template #expander="current" :ref="`template_T5_45`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_9_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_46`"></template>
                                            <template #title :ref="`template_T5_47`">
                                                <u-text :ref="`text_T5_53`" :text="`序号`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_12`" :field="`project.projectName`">
                                            <template #expander="current" :ref="`template_T5_54`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_12_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_55`">
                                                <u-linear-layout :ref="`linear_layout_T5_39_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`link_T5_6_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).project || {}).projectName)" :destination="`/dashboard/ProjectDetail?id=${(((current || {}).item || {}).project || {}).id}`" style="--custom-start: auto"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_56`">
                                                <u-text :ref="`text_T5_59`" :text="`项目名称`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_13`" :field="`project.customerId`">
                                            <template #expander="current" :ref="`template_T5_57`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_13_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_58`">
                                                <u-linear-layout :ref="`linear_layout_T5_40_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_60_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', (((current || {}).item || {}).customer || {}).customerName)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_59`">
                                                <u-text :ref="`text_T5_61`" :text="`所属客户`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_14`" :field="`project.projectStatus`">
                                            <template #expander="current" :ref="`template_T5_60`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_14_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_61`">
                                                <u-linear-layout :ref="`linear_layout_T5_41_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_62_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('app.enums.ProjectStatus', (((current || {}).item || {}).project || {}).projectStatus)"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_62`">
                                                <u-text :ref="`text_T5_63`" :text="`项目状态`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_15`" :field="`project.salesperson`">
                                            <template #expander="current" :ref="`template_T5_63`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_15_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_64`">
                                                <u-linear-layout :ref="`linear_layout_T5_42_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_64_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['MapGet'](userMap, (((current || {}).item || {}).project || {}).salesperson))"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_65`">
                                                <u-text :ref="`text_T5_65`" :text="`销售人员`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_16`" :field="`project.solution`">
                                            <template #expander="current" :ref="`template_T5_66`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_16_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_67`">
                                                <u-linear-layout :ref="`linear_layout_T5_43_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_66_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['MapGet'](userMap, (((current || {}).item || {}).project || {}).solution))"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_68`">
                                                <u-text :ref="`text_T5_67`" :text="`解决方案`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_17`" :field="`project.projectManager`">
                                            <template #expander="current" :ref="`template_T5_69`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_17_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_70`">
                                                <u-linear-layout :ref="`linear_layout_T5_44_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-text :ref="`text_T5_68_${(current || {}).__nodeKey || (current || {}).index}`" :text="$utils['ToString']('nasl.core.String', $utils['MapGet'](userMap, (((current || {}).item || {}).project || {}).projectManager))"></u-text>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_71`">
                                                <u-text :ref="`text_T5_69`" :text="`项目经理`"></u-text>
                                            </template>
                                        </u-table-view-column>
                                        <u-table-view-column :ref="`table_view_column_T5_19`" :title="`操作`">
                                            <template #expander="current" :ref="`template_T5_75`">
                                                <u-table-view-expander :ref="`table_view_expander_T5_19_${(current || {}).__nodeKey || (current || {}).index}`" :item="(current || {}).item"></u-table-view-expander>
                                            </template>
                                            <template #cell="current" :ref="`template_T5_76`">
                                                <u-linear-layout :ref="`linear_layout_T5_46_${(current || {}).__nodeKey || (current || {}).index}`" :gap="`small`">
                                                    <u-link :ref="`link_T5_4_${(current || {}).__nodeKey || (current || {}).index}`" :text="`修改`" @click="link_T5_4_click($event, current)"></u-link>
                                                    <u-link :ref="`link_T5_5_${(current || {}).__nodeKey || (current || {}).index}`" :text="`删除`" @click="link_T5_5_click($event, current)"></u-link>
                                                </u-linear-layout>
                                            </template>
                                            <template #title :ref="`template_T5_77`">
                                                <u-text :ref="`text_T5_72`" :text="`操作`"></u-text>
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
            <template #foot :ref="`template_T5_78`">
                <u-linear-layout :ref="`linear_layout_T5_47`" style="text-align: right">
                    <u-button :ref="`button_T5_6`" :color="`default`" :text="`取消`" @click="button_T5_6_click($event)" style="background-color: #f2f3f5; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-style: solid; --update-key: k3c5; --custom-start: auto"></u-button>
                    <u-button :ref="`button_T5_9`" :key="`button_T5_9`" :color="`primary`" :text="`提交修改`" @click="button_T5_9_click($event)" v-if="isUpdate"></u-button>
                    <u-button :ref="`button_T5_10`" :key="`button_T5_10`" :color="`primary`" :text="`立即创建`" @click="button_T5_10_click($event)" v-if="!isUpdate"></u-button>
                </u-linear-layout>
            </template>
            <template #body :ref="`template_T5_79`">
                <u-linear-layout :ref="`linear_layout_T5_54`" :direction="`vertical`" style="--custom-start: auto">
                    <u-linear-layout :ref="`linear_layout_T5_55`">
                        <u-grid-layout :ref="`grid_layout_T5_5`" style="width: 1000px">
                            <u-grid-layout-row :ref="`grid_layout_row_T5_5`" :repeat="24">
                                <u-grid-layout-column :ref="`grid_layout_column_T5_14`" :span="16" style="--custom-start: auto">
                                    <lcap-wang-editor :ref="`lcap_wang_editor_T5_2`" :value.sync="input.remark" :placeholder="`请输入备注`" style="height: 600px"></lcap-wang-editor>
                                </u-grid-layout-column>
                                <u-grid-layout-column :ref="`grid_layout_column_T5_13`" :span="8">
                                    <u-form :ref="`saveModalForm_T5_2`" key="saveModalForm_T5_2" style="--custom-start: auto">
                                        <u-form-item :ref="`form_item_T5_18`" :layout="`center`">
                                            <template #label :ref="`template_T5_80`">
                                                <u-text :ref="`text_T5_73`" :text="`项目名称`"></u-text>
                                            </template>
                                            <u-input :ref="`input_T5_10`" :placeholder="`请输入项目名称`" :value.sync="input.projectName"></u-input>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_19`" :layout="`center`">
                                            <template #label :ref="`template_T5_81`">
                                                <u-text :ref="`text_T5_74`" :text="`所属客户`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_11`" clearable="" :placeholder="`请选择客户`" :dataSource="(params) => __select_T5_11_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_10Structure`" :textField="`customer.customerName`" :valueField="`customer.id`" :pagination="true" :value.sync="input.customerId" key="select_T5_11" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_20`" :layout="`center`">
                                            <template #label :ref="`template_T5_82`">
                                                <u-text :ref="`text_T5_75`" :text="`项目状态`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_6`" clearable="" :placeholder="`请选择项目状态`" :dataSource="$utils['EnumToList']({ concept: 'TypeAnnotation', typeKind: 'reference', typeNamespace: 'app.enums', typeName: 'ProjectStatus', typeArguments: null, returnType: null, properties: null, name: '' })" :pageSize="50" :value.sync="input.projectStatus" key="select_T5_6"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_21`" :layout="`center`">
                                            <template #label :ref="`template_T5_83`">
                                                <u-text :ref="`text_T5_76`" :text="`销售人员`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_12`" clearable="" :placeholder="`请选择销售人员`" :dataSource="(params) => __select_T5_12_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.salesperson" key="select_T5_12" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_22`" :layout="`center`">
                                            <template #label :ref="`template_T5_84`">
                                                <u-text :ref="`text_T5_77`" :text="`解决方案`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_13`" clearable="" :placeholder="`请选择解决方案`" :dataSource="(params) => __select_T5_13_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.solution" key="select_T5_13" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                        <u-form-item :ref="`form_item_T5_23`" :layout="`center`">
                                            <template #label :ref="`template_T5_85`">
                                                <u-text :ref="`text_T5_78`" :text="`项目经理`"></u-text>
                                            </template>
                                            <u-select :ref="`select_T5_14`" clearable="" :placeholder="`请选择项目经理`" :dataSource="(params) => __select_T5_14_handleDataSourceLoad(params)" :pageSize="50" :dataSchema="`LoadProjectListSelect_T5_7Structure`" :textField="`lCAPUser.displayName`" :valueField="`lCAPUser.userName`" :pagination="true" :value.sync="input.projectManager" key="select_T5_14" style="--custom-start: auto"></u-select>
                                        </u-form-item>
                                    </u-form>
                                </u-grid-layout-column>
                            </u-grid-layout-row>
                        </u-grid-layout>
                    </u-linear-layout>
                </u-linear-layout>
            </template>
            <template #title :ref="`template_T5_87`">
                <div :ref="`div_T5_3`" :key="`div_T5_3`" v-if="isUpdate">
                    <u-text :ref="`text_T5_80`" :text="`编辑项目`"></u-text>
                </div>
                <div :ref="`div_T5_4`" :key="`div_T5_4`" v-if="!isUpdate">
                    <u-text :ref="`text_T5_81`" :text="`新建项目`"></u-text>
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
            ["project"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", undefined),
            ["input"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", undefined),
            ["filter"]: this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", undefined),
            ["isUpdate"]: undefined,
            ["userMap"]: this.$genInitFromSchema("nasl.collection.Map<nasl.core.String, nasl.core.String>", undefined),
            ["__select_T5_10_params"]: {},
            ["__select_T5_5_params"]: {},
            ["__select_T5_7_params"]: {},
            ["__select_T5_9_params"]: {},
            ["__select_T5_8_params"]: {},
            ["__tableView_T5_2_params"]: {},
            ["__select_T5_11_params"]: {},
            ["__select_T5_6_params"]: {},
            ["__select_T5_12_params"]: {},
            ["__select_T5_13_params"]: {},
            ["__select_T5_14_params"]: {},
        };
    },
    computed: {},
    meta: {
        title: "项目列表",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async ProjectList_created(event) {
            await (async () => {
                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", this.$utils["Clear"](this.filter));
                this.userMap = this.$genInitFromSchema(
                    "nasl.collection.Map<nasl.core.String, nasl.core.String>",
                    await this.$logics["app.logics.LoadUser"]({
                        config: {
                            download: false,
                        },
                        query: {},
                        headers: {
                            "lcap-calllogic-uuid": "9373c5f7413d4268b4b5b82fdd510bec",
                        },
                        path: {},
                        body: {},
                    })
                );
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
                        "app.dataSources.defaultDS.entities.Project",
                        await this.$logics["app.dataSources.defaultDS.entities.Project.logics.update"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "63a2f8727d5d4d56bcc78dae7965abbd",
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
                        "app.dataSources.defaultDS.entities.Project",
                        await this.$logics["app.dataSources.defaultDS.entities.Project.logics.create"]({
                            config: {
                                download: false,
                            },
                            query: {},
                            headers: {
                                "lcap-calllogic-uuid": "aa4eff0ab58e450696f7e768f1ca4a85",
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
        async button_T5_7_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async button_T5_5_click(event) {
            await (async () => {
                let validateResult = this.$genInitFromSchema("nasl.ui.ValidateEvent", undefined);

                this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", this.$utils["Clear"](this.filter));
                await (this.$refs && this.$refs[`tableView_T5_2`] && this.$refs[`tableView_T5_2`].reload && this.$refs[`tableView_T5_2`].reload());
                return;
            })();
        },
        async button_T5_8_click(event) {
            await (async () => {
                this.isUpdate = false;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", this.$utils["Clone"](this.project));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async link_T5_4_click(event, current) {
            await (async () => {
                this.isUpdate = true;
                this.input = this.$genInitFromSchema("app.dataSources.defaultDS.entities.Project", this.$utils["Clone"](((current || {}).item || {}).project));
                await (this.$refs && this.$refs[`saveModal_T5_2`] && this.$refs[`saveModal_T5_2`].open && this.$refs[`saveModal_T5_2`].open());
                return;
            })();
        },
        async link_T5_5_click(event, current) {
            await (async () => {
                await this.$logics["app.dataSources.defaultDS.entities.Project.logics.delete"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "648ca446dd0943ae95e61229867a95ff",
                    },
                    query: {
                        id: (((current || {}).item || {}).project || {}).id,
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
                        "lcap-calllogic-uuid": "99ad932167804cfcbea256eb0a96557d",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_10_params && this.__select_T5_10_params.page,
                        size: this.__select_T5_10_params && this.__select_T5_10_params.size,
                    },
                })
            );
        },

        async __select_T5_7_handleDataSourceLoad(params) {
            this["__select_T5_7_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "842df536ac2e47b385380917e6d4a68a",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_7_params && this.__select_T5_7_params.page,
                        size: this.__select_T5_7_params && this.__select_T5_7_params.size,
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
                        "lcap-calllogic-uuid": "93c47acb19134a09b1393a6f652a5f8f",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_9_params && this.__select_T5_9_params.page,
                        size: this.__select_T5_9_params && this.__select_T5_9_params.size,
                    },
                })
            );
        },

        async __select_T5_8_handleDataSourceLoad(params) {
            this["__select_T5_8_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "8a6b3714a48e48fbb426602832fb5ef6",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_8_params && this.__select_T5_8_params.page,
                        size: this.__select_T5_8_params && this.__select_T5_8_params.size,
                    },
                })
            );
        },

        async __tableView_T5_2_handleDataSourceLoad(params) {
            this["__tableView_T5_2_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListTableView_T5_2"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "239f18c990ec4d238390a477b79443b8",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_2_params && this.__tableView_T5_2_params.page,
                        size: this.__tableView_T5_2_params && this.__tableView_T5_2_params.size,
                        sort: this.__tableView_T5_2_params && this.__tableView_T5_2_params.sort,
                        order: this.__tableView_T5_2_params && this.__tableView_T5_2_params.order,
                        filter: this.filter,
                    },
                })
            );
        },

        async __select_T5_11_handleDataSourceLoad(params) {
            this["__select_T5_11_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "5be2cfca-1c55-464e-8e62-4c1507ad322f",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_11_params && this.__select_T5_11_params.page,
                        size: this.__select_T5_11_params && this.__select_T5_11_params.size,
                    },
                })
            );
        },

        async __select_T5_12_handleDataSourceLoad(params) {
            this["__select_T5_12_params"] = { ...params };
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "b2861882-ffd0-4656-9244-17ee8354ae19",
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
                        "lcap-calllogic-uuid": "fbf8bb81-b11b-416c-8146-ec2f43c2cc82",
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
                        "lcap-calllogic-uuid": "4a26e35e-7b6e-4d7b-8c0f-150ef3cb4d60",
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
                        "lcap-calllogic-uuid": "99ad932167804cfcbea256eb0a96557d",
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
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "ProjectStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_5_pageSize() {
            return 50;
        },

        __select_T5_5_value() {
            return (this.filter || {}).projectStatus;
        },

        __select_T5_7_clearable() {
            return undefined;
        },

        __select_T5_7_placeholder() {
            return undefined;
        },

        async __select_T5_7_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "842df536ac2e47b385380917e6d4a68a",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_7_params && this.__select_T5_7_params.page,
                        size: this.__select_T5_7_params && this.__select_T5_7_params.size,
                    },
                })
            );
        },

        __select_T5_7_pageSize() {
            return 50;
        },

        __select_T5_7_dataSchema() {
            return undefined;
        },

        __select_T5_7_textField() {
            return undefined;
        },

        __select_T5_7_valueField() {
            return undefined;
        },

        __select_T5_7_pagination() {
            return true;
        },

        __select_T5_7_value() {
            return (this.filter || {}).salesperson;
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
                        "lcap-calllogic-uuid": "93c47acb19134a09b1393a6f652a5f8f",
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

        __select_T5_8_clearable() {
            return undefined;
        },

        __select_T5_8_placeholder() {
            return undefined;
        },

        async __select_T5_8_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "8a6b3714a48e48fbb426602832fb5ef6",
                    },
                    path: {},
                    body: {
                        page: this.__select_T5_8_params && this.__select_T5_8_params.page,
                        size: this.__select_T5_8_params && this.__select_T5_8_params.size,
                    },
                })
            );
        },

        __select_T5_8_pageSize() {
            return 50;
        },

        __select_T5_8_dataSchema() {
            return undefined;
        },

        __select_T5_8_textField() {
            return undefined;
        },

        __select_T5_8_valueField() {
            return undefined;
        },

        __select_T5_8_pagination() {
            return true;
        },

        __select_T5_8_value() {
            return (this.filter || {}).projectManager;
        },

        async __tableView_T5_2_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer, project: app.dataSources.defaultDS.entities.Project}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListTableView_T5_2"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "239f18c990ec4d238390a477b79443b8",
                    },
                    path: {},
                    body: {
                        page: this.__tableView_T5_2_params && this.__tableView_T5_2_params.page,
                        size: this.__tableView_T5_2_params && this.__tableView_T5_2_params.size,
                        sort: this.__tableView_T5_2_params && this.__tableView_T5_2_params.sort,
                        order: this.__tableView_T5_2_params && this.__tableView_T5_2_params.order,
                        filter: this.filter,
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

        __select_T5_11_clearable() {
            return undefined;
        },

        __select_T5_11_placeholder() {
            return undefined;
        },

        async __select_T5_11_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{customer: app.dataSources.defaultDS.entities.Customer}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_10"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "5be2cfca-1c55-464e-8e62-4c1507ad322f",
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
            return (this.input || {}).customerId;
        },

        __select_T5_6_clearable() {
            return undefined;
        },

        __select_T5_6_placeholder() {
            return undefined;
        },

        __select_T5_6_dataSource() {
            return this.$genInitFromSchema("nasl.collection.List<{text: nasl.core.String, value: nasl.core.String}>", this.$utils["EnumToList"]({ concept: "TypeAnnotation", typeKind: "reference", typeNamespace: "app.enums", typeName: "ProjectStatus", typeArguments: null, returnType: null, properties: null, name: "" }));
        },

        __select_T5_6_pageSize() {
            return 50;
        },

        __select_T5_6_value() {
            return (this.input || {}).projectStatus;
        },

        __select_T5_12_clearable() {
            return undefined;
        },

        __select_T5_12_placeholder() {
            return undefined;
        },

        async __select_T5_12_dataSource(params) {
            return this.$genInitFromSchema(
                "{list: nasl.collection.List<{lCAPUser: app.dataSources.defaultDS.entities.LCAPUser}>, total: nasl.core.Long}",
                await this.$logics["app.logics.loadProjectListSelect_T5_7"]({
                    config: {
                        download: false,
                    },
                    query: {},
                    headers: {
                        "lcap-calllogic-uuid": "b2861882-ffd0-4656-9244-17ee8354ae19",
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
            return (this.input || {}).salesperson;
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
                        "lcap-calllogic-uuid": "fbf8bb81-b11b-416c-8146-ec2f43c2cc82",
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
                        "lcap-calllogic-uuid": "4a26e35e-7b6e-4d7b-8c0f-150ef3cb4d60",
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
            return (this.input || {}).projectManager;
        },
    },
    async created() {
        await this.ProjectList_created();
    },
};
</script>
