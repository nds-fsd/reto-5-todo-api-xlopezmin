[![Review Assignment Due Date]
(https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)]
(https://classroom.github.com/a/1gq2JVFq)


RETO 5
¡Buenas clase!

Ciertamente, en el README no está explicado el reto actual, ¡lo siento! Así que aquí va la explicación:
Se trata de crear una API REST con Node + Express que permita hacer CRUD (leer una tarea, leerlas todas, crear una, actualizar una, y eliminar una). Las tareas deben tener los siguientes campos:

id: un número único para cada tarea que vaya incrementando con cada tarea nueva.
titulo: una string ("Limpiar la casa", "Hacer la compra", etc...)
completada: o true o false

A partir de aquí, todo lo que os queráis venir arriba es bienvenido :cara_ligeramente_sonriente: Si queréis añadir más campos (por ejemplo, fecha de creación, o incluso subtareas), o otras entidades (por ejemplo, categorías) adelante!

Lo dicho, se entregará el 24, junto con el reto de la UI que os daré el miércoles que viene. Pero todo lo que podáis ir avanzando antes de comenzar el nuevo reto mejor.
¡Buen finde, a darle duro, y preguntad todas las dudas que tengáis! :cohete:
:rezo:
3


ROUTERS:
    Un Router de express es como un switch case de Javascript. Simplemente redirige las peticiones hacia la ruta correcta, si esta existe.
    En una aplicacion de express podemos tener tantos Routers como queramos/sean necesarios. Lo habitual cuando se implementa una API REST
    es tener un Router por cada "recurso" de la api. Si imaginamos una aplicacion que tiene 3 recursos (User, Todo, Category), deberiamos
    tener 3 routers diferentes: userRouter, todoRouter y categoryRouter.

    exportamos el router para poder 'usarlo' en nuestra app.

    todoRouter.get('/todo', todoController.getAll);
    todoRouter.post('/todo', todoController.create);
    todoRouter.get('/todo/:id', todoController.getById);
    todoRouter.patch('/todo/:id', todoController.update);
    todoRouter.delete('/todo/:id', todoController.delete);


CONTROLLER:
getAll(): 
    devolver todos los "todos" que hay en el array con formato JSON.

create(): 
    crear un nuevo objeto con estructura {id, text, fecha, done} con los datos que vienen en el BODY de la Request y meterlos dentro de el array.
    el nuevo objeto debe tener como id un numero mas que el numero actual de elementos guardados en el array.

getById(): 
    En este endpoint, el path contiene una variable llamada id. La syntaxis que utiliza express para estos casos es el simbolo :

    Una variable en un path, significa que express recoge el valor que va justo después de /todo/ y lo guarda en una variable dentro del objeto "req"
    con el mismo nombre que hemos utilizado en el path.

    Ejemplo:
        Si con Insomnia o Postman hicisemos una peticion GET a la ruta /todo/12, está será dirigida directamente hasta este endpoint.

    recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
    cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
    buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
    i existe, devolverlo como formato JSON y codigo de status 200.
    Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.

update():
    recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
    cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
  
    buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
    si existe, lo ACTUALIZAMOS con los datos del BODY de la Request y lo devolvemos como formato JSON y codigo de status 200.
  
    Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.

remove():
    recogemos el valor de la variable del path llamada "id" y lo transformarlo a un numero (todos nuestros ids son numericos).
    cualquier valor que recogemos de req.params será siempre un String. Por eso lo debemos convertir a numero.
  
    buscar dentro del array "todos" aquel elemento que coincide con el id recibido por parametro de la ruta en la request.
    si existe, lo BORRAMOS y devolvemos un codigo de status 204.
  
    Si no hemos econtrado un TODO o no nos han pasado un id en la ruta, devolvemos un 404.
  
