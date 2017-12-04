import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),
    firebase: Ember.inject.service('firebaseApp'),

    actions: {
        iniciarSesion(){
            let email = this.get('email');
            if (Ember.isBlank( this.get('email') ) ){
                Materialize.toast('Introduce tu correo electrónico', 3000);
				return;
			}
            let password = this.get('password');
            if (Ember.isBlank( this.get('password') ) ){
                Materialize.toast('Introduce tu contraseña', 3000);
				return;
			}

            this.get('session').open('firebase', {
                provider: 'password',
                email: email,
                password: password
            }).then((user)=> {
                let userId;
                let userInst;
                this.get('session').fetch().then(()=>{
                    userId  = this.get('session.currentUser.uid');
                    return this.get('store').query('usuario', {
                        equalTo: userId,
                        orderBy: 'uid',
                        limitToLast: 1
                    }).then((user)=>{	
                        userInst = user.get('firstObject');
                        window.Materialize.toast('Bienvenido, ' + userInst.get('nombre'), 3000);
                        //window.Materialize.toast('Usuariioo ' + userInst.get('rol'), 3000);
                        //window.Materialize.toast('Team ' + userInst.get('manage').get('nombre'), 3000);
                        //debugger
                        if (!(userInst.get('manage').get('nombre'))) {
                            window.Materialize.toast('My New Team', 3000);
                            this.transitionToRoute('add-equipo');
                        } else {  
                            window.Materialize.toast('My Team Index ', 3000);
                            this.transitionToRoute('index-manager');
                        }
                    });
                }).catch(()=>{
                    userId  = this.get('session.currentUser.uid');
                    return this.get('store').query('usuario', {
                        equalTo: userId,
                        orderBy: 'uid',
                        limitToLast: 1
                    }).then((user)=>{
                        userInst = user.get('firstObject');
                        window.Materialize.toast('Bienvenido, ' + userInst.get('nombre'), 3000);
                        //window.Materialize.toast('Usuariioo ' + userInst.get('rol'), 3000);
                        //window.Materialize.toast('Team ' + userInst.get('manage').get('nombre'), 3000);
                        //debugger
                        if (!(userInst.get('manage').get('nombre'))) {
                            window.Materialize.toast('My New Team', 3000);
                            this.transitionToRoute('add-equipo');
                        } else {  
                            window.Materialize.toast('My Team Index ', 3000);
                            this.transitionToRoute('index-manager');
                        }
                    });
                });
                
            }).catch((error)=> {
                console.log(error);
            });

        }
    }

});