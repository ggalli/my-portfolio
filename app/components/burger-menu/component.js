import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    isActive: false,

    actions: {
        toogleMenu(){
            this.toggleProperty('isActive');
        },
        transition(routeName){
            this.set('isActive', false);
            this.get('router').transitionTo(routeName);
        }
    }
});
