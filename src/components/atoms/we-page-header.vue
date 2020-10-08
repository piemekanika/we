<template>
    <div :class="typeClassName">
        <slot></slot>
    </div>
</template>

<script>
import MakeTypeMixin from '~/mixins/make-type-mixin';

export default {
    name: 'WePageHeader',
    mixins: [
        MakeTypeMixin('we-page-header'),
    ],
};
</script>
