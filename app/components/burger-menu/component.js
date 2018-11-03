import Component from '@ember/component';

export default Component.extend({
    isActive: false,

    actions: {
        toogleMenu(){
            this.toggleProperty('isActive');
        }
    }
});
