import DS from 'ember-data';

export default DS.Model.extend({
    uid: DS.attr('string'),
    nombre: DS.attr('string'),
    apellido:  DS.attr('string'),
    email: DS.attr('string'),
    rol: DS.attr('string'),
    manage: DS.hasMany('equipo'),
    miembroDe: DS.belongsTo('equipo')
});