import DS from 'ember-data';

export default DS.Model.extend({
    sedeId: DS.attr('string'),    
    nombre: DS.attr('string'),
    descripcion:  DS.attr('string'),
    ubicacion: DS.attr('string'),
    logo: DS.attr('string')
});
