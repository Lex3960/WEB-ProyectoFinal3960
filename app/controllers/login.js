import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),

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
            }).then(()=> {
                window.Materialize.toast('Bienvenido', 3000);
                
                //this.transitionToRoute('inicio')
            }).catch((error)=> {
                console.log(error);
            });

        }
    }

});
