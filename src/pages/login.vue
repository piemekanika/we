<template>
    <div class="d-flex flex-column">
        <we-page-header>
            Log in into your account
        </we-page-header>

        <we-input
            v-model="username"
            placeholder="username"
        ></we-input>

        <we-input
            class="mt-2"
            v-model="password"
            input-type="password"
            placeholder="password"
        ></we-input>

        <we-button class="mt-4">
            login
        </we-button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: '',
        };
    },
};
</script>
