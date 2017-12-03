import DS from 'ember-data';

export default DS.Model.extend({
    equipId: DS.attr('string'),    
    nombre: DS.attr('string'),
    descripcion:  DS.attr('string'),
    logo: DS.attr('string'),
    manager: DS.belongsTo('usuario'),
    miembros: DS.hasMany('usuario'),
    encuentros: DS.hasMany('encuentros')
});
