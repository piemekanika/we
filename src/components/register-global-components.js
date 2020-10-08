import WeInput from './atoms/we-input.vue';
import WeButton from './atoms/we-button.vue';
import WePageHeader from './atoms/we-page-header.vue';

/**
 * Registers global components.
 *
 * @param app
 * @returns {*}
 */
const registerGlobalComponents = app => {

    app.component('we-input', WeInput);
    app.component('we-button', WeButton);
    app.component('we-page-header', WePageHeader);

    return app;
};

export default registerGlobalComponents;
