import Controller from '@ember/controller';

export default Controller.extend({
    store: Ember.inject.service(),
    session: Ember.inject.service(),

    actions: {
        cerrarSesion: function() {
            this.get('session').close();
            this.transitionToRoute('login');
        },

        saveEquipo(equipo) {
            let nombre = equipo.get('nombre');
            if (Ember.isBlank( nombre ) ){
                Materialize.toast('Introduce el nombre del equipo', 3000);
				return;
            }
            let descripcion = equipo.get('descripcion');
            if (Ember.isBlank( descripcion ) ){
                Materialize.toast('Introduce la descripción del equipo', 3000);
				return;
            }
            let logo = equipo.get('logo');
            if (Ember.isBlank( logo ) ){
                Materialize.toast('Introduce URL del logo de tu equipo', 3000);
				return;
            }

            equipo.save().then(() => {
                Materialize.toast('Equipo guardado correctamente', 3000);
                this.set('savedTeam', true);    
            });
        },

        addMember(equipo) {
            equipo.get('miembros').createRecord({
                rol: "Miembro"
            });
            let nombreMiembro = equipo.get('miembro.nombre');
            if (Ember.isBlank( nombreMiembro ) ){
                Materialize.toast('Introduce el nombre del miembro del equipo', 3000);
				return;
            }
            let apellidoMiembro = equipo.get('miembro.apellido');
            if (Ember.isBlank( this.get('apellido-miembro') ) ){
                Materialize.toast('Introduce el nombre del miembro del equipo', 3000);
				return;
            }
        },

        saveMemberAll (equipo) {
            Ember.RSVP.all(
                equipo.get('miembros').map((miembro) => {
                    miembro.save();
                })).then(() => {
                    equipo.save().then(() => {
                        this.get('store').peekRecord('usuario', equipo.get('manager.id')).save().then(()=>{
                            Materialize.toast('Miembro guardado correctamente', 3000);
                        });
                    });
            });
        } , 

        saveMemberAll (equipo) {
            Ember.RSVP.all(
                equipo.get('miembros').map((miembro) => {
                    miembro.save();
                })).then(() => {
                    equipo.save().then(() => {
                        this.get('store').peekRecord('usuario', equipo.get('manager.id')).save().then(()=>{
                            Materialize.toast('Equipo guardado correctamente', 3000);
                            this.transitionToRoute(index-manager);
                        });
                    });
            });
        }
    }
});
