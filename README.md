# pruebaTecnicaNuela

En la raiz del proyecto, el archivo .copyEnv debe de ser reemplazado por lo enviado por email y llamarse .env

Para iniciar todo el proyecto, desde la misma raíz he configurado un Script para ahorrarles tiempo, lo he podido solo testear en Windows, y se ejecuta con el comando "npm run start".

Para la base de datos, opté por MongoDB debido a su flexibilidad, escalabilidad y eficiencia para manejar rápidas iteraciones de desarrollo. Su naturaleza dinámica facilita ajustes y modificaciones constantes sin necesidad de alterar estructuras de datos rígidas.

Planteamiento de la prueba:

En el backend he optado por crear dos modelos, staff y subject a modo de poder escalar facilmente la base de datos por su relación y asi darle escalabilidad. Basandome en esto he creado los controladores y rutas. En este caso no me he visto en la necesidad de implementar ningun middleware.

Para el frontend he optado por Tailwind 3 para los estilos, ya he trabajado previamente con la versión 2 de Tailwind y con Boostrap asi que he aprovechado la ocasión para actualizarme. En el frontend, sin cambiar los diseños he añadido alguna funcionalidad para darle un poco mas de interes, cada vez que refresquemos la vista se nos seleccionará un profesor aleatoriamente y con ello todos sus datos.