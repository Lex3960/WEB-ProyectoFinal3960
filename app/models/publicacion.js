import DS from 'ember-data';

export default DS.Model.extend({
    publId: DS.attr('string'),    
    nombre: DS.attr('string'),
    contenido:  DS.attr('string'),
    fecha: DS.attr('date'),
    equipo: DS.belongsTo('equipo'),
    propietario: DS.belongsTo('usuario')
});
