db.clientes.aggregate([{$match:{gafas:{$elemMatch:{fechaCreacion:{$gte:ISODate("2023-01-01"),$lt:ISODate("2023-12-31")}}}}}, 
{ $unwind:"$gafas"}, {$project:{_id:0, "vendedor.nombre":1, "gafas.marca":1, "gafas.modelo":1}},
{$sort:{"vendedor.nombre": -1}}])