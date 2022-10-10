#Learning JS

ESLint-
configuracion para javascript en visual

dependencias normales: codigo que hace falta para que mi programa funcione, por lo que siemre tiene que ir, ej. axios
dependencia de desarrollo: codigo que hace falta solamente en mi proyecto actual.

es lint -> nos ayuda a escribir codigo mientras estamos escribiendo
es dependencia de desarrollo y local, por lo que al instalar no usaremos -g sino -D

ecma script - > Ecma Script --> ES Lint -- linted viene de c, cuando hicieron el primer programa para ayudar a programadores

                       "npm i -D eslint"

acabamos de instalar medio internet, todo depende de otra cosa etc etc, conjunto de dependencias cruzadas.

        configurar ES Lint

                pat, cadena de sition donde el sistema operativo mira cuando intentamos ejecutar algo.

            (inquire)

guia airbnb - es muy pejiguera, pero para los proyectos hay que hacerle caso.

slint prettier --> buscar en pagina de prettier para ver como hacer la instalacion.

                    "extends": [
                        "code you use",
                        "prettier",
                    ]

si se borrara package y node modules, solamente tendriamos que poner

                    npm i

sirve por ejemplo si cogemos los archivos iniciales de otro proyecto que nos venga bien

una buena frase para empezar el readme seria: npm i - en cmd - para instalar lo necesario de este proyecto

una vez creado todo esto es el mejor momento para hacer el initial commit y crear la rama feature/loquesea

cuando no quiero hacer un commit, en la main, se puede poner en stash, que es como guardarlo como borrador,

                    --- boton derecho sobre el archivo donde las ramas del simbolito, y stash changes

                            apply - (buscar internet)
                            pop - se recupera

entorno de ejecucion ---- > node y navegador(con la consola)

usaremos node durante las proximas dos semanas

siempre encapsularemos nuestro codigo en funciones

foo simplemente es un nombre random para las funciones cuando no sabemos q poner

normalmente usamos dos formas de declarar una funcion:

                ----> function foo (){}

                ----> const bar = function (){}

equivalentes (OJO de momento y para nuestro nivel, no son lo mismo):
const bar = function (){}
const bar = => {}

---

modulo - un fichero que exporta algo

quitamos el airbnb y ponemos recommended porque da menos guerra a la hora de hacer clase

resolvemos el error y ya tenemos todo preparado para poder usar el entorno de node para ejecutar nuestro codigo js

de momento no vamos a enlazar, simplemente vemos en la consola del navegador los resultados

-   nos salta un error porque el navegador "no sabe" usar modulos, se lo tienes que añadir en la etiqueta html, en el type del head

js - lenguaje impertativo - se compila
sentencia -> ejecucion del codigo una detras de otra, cada funcion que hagamos
expresion -> lo que va dentro del parentesis de un if por ejemplo
evaluacion ->
operador ->

las funciones pueden ser asignativas o declarativas: ejemplo

export function bar () {
const x = 22 \* 2;

    if (x > 12) {
        console.log(x);
    }

};
declarativa

---

export const foo = () => {
const x = 22 \* 2;

    if (x > 12) {
        console.log(x);
    }

};
asignativa

---

---

dan abramob - gran figura del mundo de la programacion- hizo el modelo casi filosofico que tenemos en el pdf de clase

usaremos otra herramienta, aparte de ESlint, para ayudarnos a corregir nuestro codigo

SONARQUBE - tendriamos que instalar cliente y servidor y es algo engorroso por lo que usaremos
SONARCLOUD - igual pero sin tener que instalar nada --> usaremos este

---

code smell -> codigo "apestoso", el codigo que no es limpio, por ejemplo si repites mucho varias lineas de codigo, deberian estar en una funcion. es realmente util a la hora de escribir codigo limpio
