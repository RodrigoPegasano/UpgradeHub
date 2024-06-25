# Ejercicio: Mongo movies

## <ins>Documentos a insertar</ins>
```
title : Fight Club
writer : Chuck Palahniuk
year : 1999
actors : [
 Brad Pitt
 Edward Norton
]

title : Pulp Fiction
writer : Quentin Tarantino
year : 1994
actors : [
 John Travolta
 Uma Thurman
]

title : Inglorious Basterds
writer : Quentin Tarantino
year : 2009
actors : [
 Brad Pitt
 Diane Kruger
 Eli Roth
]

title : The Hobbit: An Unexpected Journey
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit

title : The Hobbit: The Desolation of Smaug
writer : J.R.R. Tolkein
year : 2013
franchise : The Hobbit

title : The Hobbit: The Battle of the Five Armies
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit
synopsis : Bilbo and Company are forced to engage in a war against an array of combatants
and keep the Lonely Mountain from falling into the hands of a rising darkness.

title : Pee Wee Herman's Big Adventure

title : Avatar
```

## <ins>Dar formato JSON al conjunto de películas</ins>
1. Crear base de datos con nombre "mongo_movies"
```
db mongo_movies
```

2. Crear colección con nombre "movies"
```
db.createCollection("movies")
```

3. Agregar películas a la colección creada
```
db.movies.insertMany([{title : "Fight Club", writer : "Chuck Palahniuk", year: 1999, actors : ["Brad Pitt", "Edward Norton"]}, {title : "Pulp Fiction", writer : "Quentin Tarantino", year : 1994, actors : ["John Travolta", " Uma Thurman"]}, {title : "Inglorious Basterds", writer : "Quentin Tarantino", year : 2009, actors : ["Brad Pitt", "Diane Kruger", "Eli Roth"]}, {title : "The Hobbit: An Unexpected Journey", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit"}, {title : "The Hobbit: The Desolation of Smaug", writer : "J.R.R. Tolkein", year : 2013, franchise : "The Hobbit"}, {title : "The Hobbit: The Battle of the Five Armies", writer : "J.R.R. Tolkein", year : 2012, franchise : "The Hobbit", synopsis : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."}, {title : "Pee Wee Herman's Big Adventure"}, {title : "Avatar"}])
```

#### <ins>Resultado por pantalla:</ins>
```
{
    acknowledged: true,
    insertedIds: {
        '0': ObjectId('6561ec4eb1fb4c325dd8d6e4'),
        '1': ObjectId('6561ec4eb1fb4c325dd8d6e5'),
        '2': ObjectId('6561ec4eb1fb4c325dd8d6e6'),
        '3': ObjectId('6561ec4eb1fb4c325dd8d6e7'),
        '4': ObjectId('6561ec4eb1fb4c325dd8d6e8'),
        '5': ObjectId('6561ec4eb1fb4c325dd8d6e9'),
        '6': ObjectId('6561ec4eb1fb4c325dd8d6ea'),
        '7': ObjectId('6561ec4eb1fb4c325dd8d6eb')
    }
}
```

## <ins>Consultas / Buscar documentos</ins>

### 1. Obtener todos los documentos:
```
db.movies.find()
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e4'),
    title: 'Fight Club',
    writer: 'Chuck Palahniuk',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta', ' Uma Thurman' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6ea'),
    title: "Pee Wee Herman's Big Adventure"
  },
  { _id: ObjectId('6561ec4eb1fb4c325dd8d6eb'), title: 'Avatar' }
]
```

### 2. Obtener documentos con writer igual a "Quentin Tarantino"
```
mongo_movies> db.movies.find({writer: "Quentin Tarantino"})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta', ' Uma Thurman' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  }
]
```

### 3. Obtener documentos con actors que incluyan a "Brad Pitt"
```
db.movies.find({actors: "Brad Pitt"})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e4'),
    title: 'Fight Club',
    writer: 'Chuck Palahniuk',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  }
]
```

### 4. Obtener documentos con franchise igual a "The Hobbit"
```
db.movies.find({franchise: "The Hobbit"})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  }
]
```

### 5. Obtener todas las películas de los 90s.
```
db.movies.find({$and: [{year: {$gte: 1990}}, {year: {$lt: 2000}}]})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e4'),
    title: 'Fight Club',
    writer: 'Chuck Palahniuk',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'John Travolta', ' Uma Thurman' ]
  }
]
```

### 6. Obtener las películas estrenadas entre el año 2000 y 2010
```
db.movies.find({$and: [{year: {$gte: 2000}}, {year: {$lte: 2010}}]})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  }
]
```

## <ins>Actualizar documentos</ins>

### 1. Agregar sinopsis a "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
```
db.movies.updateMany({title: "The Hobbit: An Unexpected Journey"}, {$set: {synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
```

#### <ins>Resultado por pantalla:</ins>
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  }
]
```

### 2. Agregar sinopsis a "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
```
db.movies.updateMany({title: "The Hobbit: The Desolation of Smaug"}, {$set: {synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
```

#### <ins>Resultado por pantalla:</ins>
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
  }
]
```

### 3. Agregar una actor llamado "Samuel L. Jackson" a la película "Pulp Fiction"
```
db.movies.updateMany({ title: "Pulp Fiction" }, { $set: {actors: ["Samuel L. Jackson"]} })
```

#### <ins>Resultado por pantalla:</ins>
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'Samuel L. Jackson' ]
  }
]
```

## <ins>Búsqueda por Texto / Text Search</ins>

### 1. Encontrar las películas que en el título contengan la palabra "Hobbit"
```
db.movies.find({ title: { $regex: "Hobbit" } })
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  }
]
```

### 2. Encontrar las películas que en la sinopsis contengan la palabra "Gandalf"
```
db.movies.find({ synopsis: { $regex: "Gandalf" } })
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
  }
]
```

### 3. Encontrar las películas que en la sinopsis contengan la palabra "Bilbo" y no la palabra "Gandalf"
```
db.movies.find({synopsis: {$regex: "Bilbo", $not: {$regex: "Gandalf"}}})
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  }
]
```

### 4. Encontrar las películas que en la sinopsis contengan la palabra "dwarves" ó "hobbit"
```
db.movies.find({$or: [{synopsis: {$regex: "dwarves", $regex: "hobbit"}}] })
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  }
]
```

### 5. Encontrar las películas que en la sinopsis contengan la palabra "gold" y "dragon"
```
db.movies.find({$and: [{synopsis: {$regex: "gold", $regex: "dragon"}}] })
```

#### <ins>Resultado por pantalla:</ins>
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  }
]
```

## <ins>Eliminar Documentos</ins>

### 1. Eliminar la película "Pee Wee Herman's Big Adventure"
```
db.movies.deleteMany({title: "Pee Wee Herman's Big Adventure"})
```

#### <ins>Resultado por pantalla:</ins>
```
{ acknowledged: true, deletedCount: 1 }
```
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e4'),
    title: 'Fight Club',
    writer: 'Chuck Palahniuk',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'Samuel L. Jackson' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  },
  { _id: ObjectId('6561ec4eb1fb4c325dd8d6eb'), title: 'Avatar' }
]
```

### 2. Eliminar la película "Avatar"
```
db.movies.deleteMany({title: "Avatar"})
```

#### <ins>Resultado por pantalla:</ins>
```
{ acknowledged: true, deletedCount: 1 }
```
```
[
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e4'),
    title: 'Fight Club',
    writer: 'Chuck Palahniuk',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e5'),
    title: 'Pulp Fiction',
    writer: 'Quentin Tarantino',
    year: 1994,
    actors: [ 'Samuel L. Jackson' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e6'),
    title: 'Inglorious Basterds',
    writer: 'Quentin Tarantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e7'),
    title: 'The Hobbit: An Unexpected Journey',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e8'),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R. Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'
  },
  {
    _id: ObjectId('6561ec4eb1fb4c325dd8d6e9'),
    title: 'The Hobbit: The Battle of the Five Armies',
    writer: 'J.R.R. Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'
  }
]
```