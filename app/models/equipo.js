import DS from 'ember-data';

export default DS.Model.extend({
    equipId: DS.attr('string'),    
    nombre: DS.attr('string'),
    descripcion:  DS.attr('string'),
    logo: DS.attr('string'),
    manager: DS.belongsTo('usuario', {
        inverse: 'manage'
    }),
    miembros: DS.hasMany('usuario', {
        inverse: 'miembroDe'
    }),
    encuentrosAnf: DS.hasMany('encuentro', {
        inverse: 'anfitrion'
    }),
    encuentrosInv: DS.hasMany('encuentro', {
        inverse: 'invitado'
    })
});
