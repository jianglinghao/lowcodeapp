<template>
    <u-linear-layout :ref="`uLinearLayout1`" :type="`flex`" :justify="`center`" :alignment="`center`" style="height: 100vh">
        <u-linear-layout :ref="`uLinearLayout2`" :direction="`vertical`" :justify="`center`">
            <img :ref="`img1`" :src="`/assets/error-code.svg`" :width="`240`" />
            <h1 :ref="`h11`" style="margin: 0; margin-top: -15px; padding-bottom: 20px; font-family: Geneva, 'Arial Black', Verdana, Tahoma, sans-serif; font-size: 64px">
                <u-text :ref="`uText1`" :text="`401`"></u-text>
            </h1>
            <h2 :ref="`h21`" style="color: var(--color-light)">
                <u-text :ref="`uText2`" :text="`你没有访问该页面的权限`"></u-text>
            </h2>
            <u-linear-layout :ref="`uLinearLayout3`">
                <u-button :ref="`uButton1`" :text="`重新登录`" :href="`/login`" :color="`primary`" :shape="`round`"></u-button>
                <u-button :ref="`uButton2`" :href="`/`" :text="`返回首页`" :shape="`round`"></u-button>
            </u-linear-layout>
        </u-linear-layout>
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
        return {};
    },
    computed: {},
    meta: {
        title: "无权限页面",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {},
};
</script>
