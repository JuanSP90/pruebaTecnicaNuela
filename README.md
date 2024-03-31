# pruebaTecnicaNuela

En la raiz del proyecto, el archivo .copyEnv debe de ser reemplazado por lo enviado por email y llamarse .env

Para el backend he decidido usar Node.js con Express para crear una API RESTful y MongoDB como base de datos

En el backend he optado por crear dos modelos, staff y subject a modo de poder escalar facilmente la base de datos por su relación. Basandome en esto he creado dos simples endpoints, uno para mostrar a los profesores y otro para crear y asignar nuevas asignaturas.