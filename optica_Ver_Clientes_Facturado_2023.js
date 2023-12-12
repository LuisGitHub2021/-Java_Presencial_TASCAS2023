db.clientes.aggregate([{$match:{gafas:{$elemMatch:{fechaCreacion:{$gte:ISODate("2023-01-01"),$lt:ISODate("2023-12-31")}}}}},
{ $unwind:"$gafas"},
{$group:{_id:"$nombre", total_gafas:{$sum:"$gafas.precio"}}},
{$sort:{"total_gafas": -1}}])