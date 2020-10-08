<template>
    <button :class="typeClassName">
        <slot></slot>
    </button>
</template>

<script>
import MakeTypeMixin from '~/mixins/make-type-mixin';

export default {
    name: 'WeButton',
    props: {
        type: {
            default: 'primary',
        },
    },
    mixins: [
        MakeTypeMixin('btn', '-'),
    ],
};
</script>

<style lang="scss">
.btn {
    font-weight: 500;
    text-transform: uppercase;
}
</style>
