import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service('store'),
    firebase: Ember.inject.service('firebaseApp'),

    actions: {
        registroUsuario() {
            let nombre = this.get('nombre');
            //console.log(nombre);
            if (Ember.isBlank( this.get('nombre') ) ){
                Materialize.toast('Escribe tu nombre', 3000);
				return;
			}
            let apellido = this.get('apellido');
            if (Ember.isBlank( this.get('apellido') ) ){
                Materialize.toast('Escribe tu apellido', 3000);
				return;
			}
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

            this.get('firebase').auth().createUserWithEmailAndPassword(email, password).then(()=> {
                this.get('store').createRecord('usuario', {
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    rol: false
                }).save();

            }).then(()=> {
                window.Materialize.toast('Registro exitoso', 5000);
                this.transitionToRoute('login');
            }).catch((error)=> {
                console.log(error);
            });
        }
    }
});
