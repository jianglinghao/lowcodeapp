<template>
    <u-linear-layout :ref="`uLinearLayout1`" :alignment="`center`" :justify="`center`" :type="`flex`" style="background: url('/assets/login-bg-1.jpg') no-repeat; background-size: cover; height: 100vh">
        <u-linear-layout :ref="`uLinearLayout2`" :justify="`center`" :direction="`vertical`">
            <h1 :ref="`h11`">
                <u-text :ref="`uText1`" :text="`登录`"></u-text>
            </h1>
            <lcap-login :ref="`lcap_login1`" :src="`http://nuims.vusion.top`" :useRedirect="true" :mainLoginTypes="[{ name: 'Normal', title: '普通登录', type: 'boolean', default: true, description: '是否开启普通登录，默认开启', hidden: true, plugin: false, extendProperties: {} }]" @success="lcap_login1_success($event)"></lcap-login>
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
const mixin = {
    data() {
        const { tenant, domainName, env, nuimsDomain = "user.lcap.163yun.com" } = window.appInfo;
        const envUri = env === "dev" ? "dev." : "";
        return {
            // window 等变量暂时不支持变成 ASL
            tenantName: tenant,
            domainName,
            env,
            src: `${window.location.protocol}//${envUri}${tenant}.${nuimsDomain}`,
        };
    },
    methods: {
        onSuccess() {
            location.href = "/";
        },
    },
};
export default {
    mixins: [mixin, keyboardEventMixin],
    data() {
        return {};
    },
    computed: {},
    meta: {
        title: "登录页",
        crumb: undefined,
        crumbI18n: undefined,
        first: undefined,
        auth: undefined,
    },
    methods: {
        async lcap_login1_success(event) {
            await (async () => {
                await (async () => {
                    location.href = "/";
                })();
                return;
            })();
        },
    },
};
</script>
