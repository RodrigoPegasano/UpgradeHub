# Comandos de MongoDB

MongoDB es una base de datos libre de esquemas, orientada a documentos
Todos los datos que se guardan en MongoDB, <ins>**son almacenados en documentos JSON**</ins>

Veamos el paso a paso desde crear una base de datos, creación y modificación de colecciones:

## <ins> 1. Mongo y Terminal</ins>

- #### Conectarse con la terminal
```
mongo
```

- #### Crear nueva base de datos
```
use dataBaseName
```

- #### Comprobar las bases de datos que existen en nuestro sistema
```
show dbs
```

- #### Eliminar la base de datos creada
```
db.dropDatabase("databaseName")
```

## <ins>2. Método CRUD</ins>

El método CRUD es el que utilizamos para crear, revisar, editar y eliminar colecciones, documentos y elementos de nuestra base de datos

> Create, Read, Update, Delete (CRUD)

## <ins>CRUD: Create</ins>

### <ins>Colecciones</ins>

- #### Crear nueva colección
```
db.createCollection("collectionName")
```

- #### Comprobar las colecciones que tenemos creadas
```
show collections
```

- #### Cambiar el nombre de la colección
```
db.collectionName.renameCollection("newCollectionName)
```

### <ins>Documentos</ins>

- #### Agregar un documento a la colección
```
db.collectionName.insert({})
db.collectionName.insertOne({})
db.collectionName.insertMany({}, {}, {})
```

## <ins>CRUD: Read</ins>

- #### Ver todo lo que tenemos en la colección
```
db.collectionName.find()
```

- #### Ver todo lo de determinado key: value
```
db.collectionName.find({key: "value"})
```

- #### Ver todos los que cumplen con más de un key: value
```
db.collectionName.find({key: "value", key: "value"})
```

- #### Ver todos los que tienen determinado key (boolean)
```
db.collectionName.find({key: true})
```

- #### Contar cuantos documentos tenemos en la colección
```
db.collectionName.count()
```

- #### Contar cuantos documentos tenemos con determinado key: value
```
db.collectionName.find({key: "value"}).count()
```

- #### Para limitar la cantidad de documentos que queremos ver
```
db.collectionName.find().limit(3)
```

- #### Para ordenar los documentos de A-Z o de Z-A
```
Orden A-Z: valor = 1
db.collectionName.find().sort({key: 1})

Orden Z-A: valor = -1
db.collectionName.find().sort({key: 1})
```

- #### Para saltar algunos documentos y que no los muestre
```
db.collectionName.find().skip(2)
```

- #### Muestra todos los valores distintos de determinado key
```
db.collectionName.distinct({key: "value"})
```

## <ins>CRUD: Update</ins>

- #### Actualizar datos de un documento
```
db.collectionName.updateOne({key: "value"}, {$set: {key: "value"}})
// Solo actualiza el primer documento que cumpla con el parametro que le pasamos y agrega lo que está después del $set
// Importante: Si ningún documento cumple con el parametro, no hace nada
```
```
db.collectionName.updateMany({key: "value"}, {$set: {key: "value"}}, {upsert: true})
// Actualiza todos los documentos que cumplan con el parametro que le pasamos y agrega lo que está después del $set
// Importante: Si ningún documento cumple con el parametro, crea uno
```

- #### Sustituir un key: value por otro
```
db.collectionName.replaceOne({old}, {new})
```

## <ins>CRUD: Delete</ins>
```
db.collectionName.deleteOne({key: "value"})
// Eimina el primer documento que cumpla con el valor pasado
```
```
db.collectionName.deleteMany({key: "value"})
// Eimina todo documento que cumpla con el valor pasado
```
## <ins>3. Operadores y Filtros</ins>

### <ins>Operadores relacionales</ins>

- #### $eq (igual)
```
db.collectionName.find({quantity: {$eq: 20}})
// Valor igual a 20
```
- #### $gt (mayor que)
```
db.collectionName.find({quantity: {$gt: 20}})
// Valor mayor que 20
```

- #### $lt (menor que)
```
db.collectionName.find({quantity: {$lt: 20}})
// Valor menor que 20
```

- #### $in (es igual a cualquer valor de X e Y)
```
db.collectionName.find({quantity: {$in: [5, 15] }})
// Aplica a los que tienen en "quantity" el valor 5 o 15
```
- #### $ne (diferentes de)
```
db.inventory.find({quantity: {$ne: 20}})
// Valor diferente de 20
```

- #### $gte (mayor o igual que)
```
db.collectionName.find({quantity: {$gte: 20}})
// Valor mayor o igual a 20
```

- #### $lte (menor o igual que)
```
db.collectionName.find({quantity: {$lte: 20}})
// Valor menor o igual a 20
```

- #### $nin (que no tengan el valor X e Y)
```
db.collectionName.find({quantity: {$nin: [5, 15] }})
// Aplica a los que no tienen en "quantity" el valor 5 o 15
```

### <ins>Filtros</ins>

- #### $exists
```
db.collectionName.find({value: {$exists: true}})
// Devuelve todos los documentos que tengan ese valor

db.collectionName.find({value: {$exists: true}})
// Devuelve todos los documentos que no tengan ese valor
```

- #### $type
```
db.collectionNAme.find({key: {$type: "string"}})
// Devuelve todos los documentos que en esa key tengan un valor tipo string

db.collectionNAme.find({key: {$type: "number"}})
// Devuelve todos los documentos que en esa key tengan un valor tipo numérico
```

- #### $regex
```

```