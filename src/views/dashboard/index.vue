<template>
    <l-root :ref="`lRoot1`" style="padding-bottom: 0px; --update-key: qiro">
        <u-multi-layout :ref="`multi_layout1`" :direction="`vertical`">
            <u-multi-layout-item :ref="`multi_layout_item2`">
                <u-multi-layout :ref="`multi_layout2`">
                    <u-multi-layout-item :ref="`multi_layout_item3`" :fixed="true" style="width: 200px; left: 0">
                        <u-multi-layout :ref="`multi_layout_T5_1`" :direction="`vertical`" style="overflow: hidden">
                            <u-multi-layout-item :ref="`multi_layout_item_T5_1`" style="height: 60px; background-color: #ffffff; border-style: solid; border-bottom-width: 2px; --update-key: qlnf; border-top-width: 0px; border-left-width: 0px; border-right-width: 0px; border-color: #c3c3c3">
                                <u-image :ref="`image_T5_1`" :src="`http://lcpapp-static.nos-eastchina1.126.net/user/double/1698995109030_POPO-screenshot-20231103-150444.png`" :fit="`contain`" style="margin-top: 4px; --update-key: urrr"></u-image>
                            </u-multi-layout-item>
                            <u-multi-layout-item :ref="`multi_layout_item_T5_2`">
                                <u-multi-layout :ref="`multi_layout_T5_2`">
                                    <u-multi-layout-item :ref="`multi_layout_item_T5_3`" style="width: 200px">
                                        <u-sidebar :ref="`sidebar1`" :router="true" style="--custom-start: auto">
                                            <u-sidebar-item :ref="`sidebar_item2`" :value="null" :destination="`/dashboard/bug`">
                                                <u-text :ref="`text5`" :text="`缺陷管理`"></u-text>
                                            </u-sidebar-item>
                                            <u-sidebar-item :ref="`sidebar_item_VN_1`" :value="null" :destination="`/dashboard/risk`" style="--custom-start: auto">
                                                <u-text :ref="`text_VN_1`" :text="`风险管理`"></u-text>
                                            </u-sidebar-item>
                                            <u-sidebar-group :ref="`sidebar_group_T5_1`" :expanded="false" :collapsible="true" style="--custom-start: auto">
                                                <template #title :ref="`template_T5_1`">
                                                    <u-text :ref="`text_T5_3`" :text="`基础数据`"></u-text>
                                                </template>
                                                <u-sidebar-item :ref="`sidebar_item1`" :value="null" :destination="`/dashboard/CustomerList`" style="--custom-start: auto">
                                                    <u-text :ref="`text4`" :text="`客户列表`"></u-text>
                                                </u-sidebar-item>
                                                <u-sidebar-item :ref="`sidebar_item_T5_2`" :value="null" :destination="`/dashboard/ProjectList`" style="--custom-start: auto">
                                                    <u-text :ref="`text_T5_2`" :text="`项目列表`"></u-text>
                                                </u-sidebar-item>
                                            </u-sidebar-group>
                                            <u-sidebar-group :ref="`sidebar_group_T5_2`" style="--custom-start: auto">
                                                <template #title :ref="`template_T5_2`">
                                                    <u-text :ref="`text_T5_5`" :text="`项目管理`"></u-text>
                                                </template>
                                                <u-sidebar-item :ref="`sidebar_item_T5_4`" :destination="`/dashboard/TaskList`">
                                                    <u-text :ref="`text_T5_6`" :text="`任务列表`"></u-text>
                                                </u-sidebar-item>
                                                <u-sidebar-item :ref="`sidebar_item_Hm_1`" style="--custom-start: auto">
                                                    <u-text :ref="`text_Hm_71`" :text="`侧边栏项`"></u-text>
                                                </u-sidebar-item>
                                            </u-sidebar-group>
                                            <u-sidebar-item :ref="`sidebar_item_T5_1`" :value="null" :destination="`/dashboard/POCList`" style="--custom-start: auto">
                                                <u-text :ref="`text_T5_1`" :text="`POC`" style="font-weight: bold"></u-text>
                                            </u-sidebar-item>
                                            <u-sidebar-group :ref="`sidebar_group_mk_2`" style="--custom-start: auto">
                                                <template #title :ref="`template_mk_2`">
                                                    <u-text :ref="`text_mk_5`" :text="`权限管理`"></u-text>
                                                </template>
                                                <u-sidebar-item :ref="`sidebar_item_mk_4`" :destination="`/dashboard/roleManagement`">
                                                    <u-text :ref="`text_mk_6`" :text="`角色列表`"></u-text>
                                                </u-sidebar-item>
                                                <u-sidebar-item :ref="`sidebar_item_mk_5`" :destination="`/dashboard/userManagement`" style="--custom-start: auto">
                                                    <u-text :ref="`text_mk_7`" :text="`用户列表`"></u-text>
                                                </u-sidebar-item>
                                                <u-sidebar-item :ref="`sidebar_item_mk_6`" :destination="`/dashboard/userGroup`" style="--custom-start: auto">
                                                    <u-text :ref="`text_mk_8`" :text="`用户组`"></u-text>
                                                </u-sidebar-item>
                                            </u-sidebar-group>
                                        </u-sidebar>
                                    </u-multi-layout-item>
                                </u-multi-layout>
                            </u-multi-layout-item>
                        </u-multi-layout>
                    </u-multi-layout-item>
                    <u-multi-layout-item :ref="`multi_layout_item4`" style="margin-left: 200px; padding-top: 20px; padding-left: 20px; padding-right: 20px; padding-bottom: 20px; --update-key: 3958; background-color: #f4f4f4">
                        <u-router-view :ref="`router_view1`"></u-router-view>
                    </u-multi-layout-item>
                </u-multi-layout>
            </u-multi-layout-item>
        </u-multi-layout>
    </l-root>
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
        return {};
    },
    computed: {},
    meta: {
        title: "总览页",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
