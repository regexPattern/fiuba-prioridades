# FIUBA Prioridades

Script que te notifica si ya están publicadas las prioridades para el siguiente
cuatrimestre.

## Contexto

Como estudiante de FIUBA, en cada cuatrimestre se te asigna una prioridad para
inscribirte durante la semana de inscripción. Mientras menor sea tu numero de
prioridad, mas pronto vas a poder inscribirte a las materias, por lo tanto, vas
a encontrar mas cátedras vacías y elegir la que querrás.

Un dia antes de la publicación de las prioridades para el cuatri entrante, se
borran las prioridades del cuatri anterior y quedamos a la espera por las
nuevas, pero este proceso generalmente tarda casi el dia completo, y es por eso
que esta este script, para los impacientes.

## Dependencias

Solamente se necesita tener instalada la ultima version de
[NodeJS](https://nodejs.org/en/).

## Utilización

Para correr el programa primero tenes que definir dos variables de entorno:

* `USUARIO`: Tu nombre de usuario de [SIU
  Guarani](https://guaraniautogestion.fi.uba.ar/g3w/) (usualmente tu numero de
  DNI).
* `PASSWORD`: Tu contraseña de SIU Guarani.
  
Luego podes correr el programa con el siguiente comando:

```shell
npm start 
```

En sistemas operativo UNIX podes definir las variables necesarias y correr el programa en un solo comando, de la siguiente forma:

```shell
USUARIO=123456789 PASSWORD=tu_contra npm start
```

> :warning: Usuarios de Windows, googlear como definir variables de entorno para cmd o PowerShell, en dependencia de lo que usen.

### Automatización con cron jobs

Si bien con solo correr el script ya estas automatizando bastante tu tarea de
checkear el SIU manualmente, podes automatizar esto aun mas para que te mande
la notificación cada tantos minutos. Una forma de hacer esto es utilizando
[cron jobs](https://en.wikipedia.org/wiki/Cron) en UNIX, o su
equivalente en Windows.

> :warning: Esta aplicación no configura los cron jobs, eso queda a voluntad y
> tarea del usuario, solo es una idea que sugiero para matar la ansiedad
> mientras se publican las prioridades.

## Colaboración

Podes subir tu issue o PR libremente.