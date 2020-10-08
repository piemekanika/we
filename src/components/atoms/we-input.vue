<template>
    <input
        v-bind="$attrs"
        class="form-control"
        :class="typeClassName"
        :value="modelValue"
        :type="inputType"
        @input="handleChange"
    >
</template>

<script>
import MakeTypeMixin from '~/mixins/make-type-mixin';

export default {
    name: 'ViInput',
    emits: [
        'update:modelValue'
    ],
    props: {
        modelValue: {},
        inputType: {
            type: String,
        },
    },
    mixins: [
        MakeTypeMixin('vi-input'),
    ],
    methods: {
        handleChange(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>
