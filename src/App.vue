<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
import OuterForm from '~/layouts/outer-form.vue';

export default {
    name: 'App',
    components: {
        OuterForm,
    },
    computed: {
        layout() {
            return this.$route.meta.layout || 'default';
        },
    },
};
</script>
