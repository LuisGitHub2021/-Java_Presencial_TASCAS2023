db.clientes.aggregate([{$match:{gafas:{$elemMatch:{fechaCreacion:{$gte:ISODate("2023-01-01"),$lt:ISODate("2023-12-31")}}}}}, { $unwind:"$gafas"},
{$group:{_id:"$gafas.proveedores_id", total_gafas:{$sum:1}}},
{$sort:{"total_gafas": -1}}])

db.clientes.aggregate([{$match:{gafas:{$elemMatch:{fechaCreacion:{$gte:ISODate("2023-01-01"),$lt:ISODate("2023-12-31")}}}}}, { $unwind:"$gafas"},
{$group:{_id:"$gafas.proveedores_id", total_gafas:{$sum:"$gafas.precio"}}},
{$sort:{"total_gafas": -1}}])