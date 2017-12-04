import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        let userId;
        let userInst;
        return this.get('session').fetch().then(()=>{
            userId  = this.get('session.currentUser.uid');
            return this.get('store').query('usuario', {
                equalTo: userId,
                orderBy: 'uid',
                limitToLast: 1
            }).then((user)=>{	
                userInst = user.get('firstObject');
                //window.Materialize.toast('Well done, ' + userInst.get('nombre'), 3000);
                //debugger
                console.log(userInst);
                
                return userInst.get('manage').createRecord();

            });
        }).catch(()=>{
            userId  = this.get('session.currentUser.uid');
            return this.get('store').query('usuario', {
                equalTo: userId,
                orderBy: 'uid',
                limitToLast: 1
            }).then((user)=>{
                userInst = user.get('firstObject');
                //window.Materialize.toast('Well done, ' + userInst.get('nombre'), 3000);
                
                //debugger
                return userInst.get('manage').createRecord();
            });
        });

    },

    afterModel(model) {
        model.get('miembros').createRecord();
    },

    setupController (controller) {
        this._super(...arguments);
        controller.set('savedTeam', false);
    }
});
