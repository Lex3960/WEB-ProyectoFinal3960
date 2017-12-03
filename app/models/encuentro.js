import DS from 'ember-data';

export default DS.Model.extend({
    encId: DS.attr('string'),    
    fecha: DS.attr('date'),
    descripcion:  DS.attr('string'),
    sede: DS.belongsTo('sede'),
    anfitrion: DS.belongsTo('equipo'),
    invitado: DS.belongsTo('equipo'),
});