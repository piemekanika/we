const makeTypeMixin = (baseClassName, modifierSeparator = '--') => {
    return {
        props: {
            type: {
                type: [Array, String, Object],
                default: [],
            },
        },
        data() {
            return {
                baseClassName,
            };
        },
        computed: {
            typeNormalized() {
                const { type } = this;

                if (typeof type === 'string') {
                    return type.split(' ');
                }

                if (typeof type === 'object') {
                    // todo
                }

                return type;
            },
            typeClassName() {
                const typeClasses = this.typeNormalized
                    .map(type => `${this.baseClassName}${modifierSeparator}${type}`)
                    .join(' ');

                return `${baseClassName} ${typeClasses}`;
            },
        },
    };
};

export default makeTypeMixin;
