<template functional>
    <div class="layout layout--outer-form d-flex justify-content-center align-items-center">
        <div class="layout__page">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OuterForm',
};
</script>

<style lang="scss">
.layout.layout--outer-form {
    width: 100vw;
    height: 100vh;

    background: #f2f2f2;

    .layout__page {
        padding: 20px;
        background: white;
        border-radius: 5px;
        border: 1px solid #ced4da; ;
    }

    .we-page-header {
        text-transform: uppercase;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 18px;
    }
}
</style>
