### Para Ulloa

Primero q todo disculpa por incumplir con la palabra q te di de hacer el sitio por mi cuenta. Una vez dicho esto vayamos al grano.

#### Puntos a tocar

- La aplicación está hecha con ESX (EcmaScript), _son los archivos de extensión .jsx_. No existe necesidad de desarrollar solo en ESX, si haces un módulo nuevo y lo quieres hacer en _JavaScript_ no hay problema. Siéntete libre de usar lo q más cómodo te sea.
- Puedes usar _scss_ o _css_ lo que más te guste.
- El código principal comienza en _index.js_ y comienza a bajar por varios componentes, este archivo no está modificado, el primer archivo donde empiezan las modificaciones es en _App.js_
- Hay 3 carpetas principales:

  - _static_: creo que esta no lleva mucha explicación, es prácticamente lo de siempre
  - _theme_: donde yo guarde 2 archivos que pueden ser útiles para el diseño, estos archivos sirven para crear mixins y colores de manera global. Te darás cuenta q los colores son usados en varios archivos _.scss_
  - por último, y si, lo más importante, se guarda en la carpeta _components_. Hay se encuantran las diferentes partes que deben ir en la página. El nombre de cada componente te debe dar una idea de para qué los quería.

#### Que hay y q falta?

- En general falta:
  - q todos los efectos se realicen una sola vez. Eso se debe manejar en los estados locales de los componentes asociados.
  - mejorar las typografias
- el About tiene 2 dependencias: Description y Members.
  Descriptions -> es un texto donde damos un pequeño background de quienes somos. Members -> son los "Cards" asociados a cada uno. Le falta:
  - manejar el texto de cada uno he incluir los links de los medios socials, si quieres creo q eso se puede omitir por ahora
- el Contant, es la parte del formulario. Ya tiene hecho por atras la parte de enviar emails usando EmailJS y validaciones. falta:
  - ponerle un texto introductorio
  - darle estilo
- Services, que puede o no subdividirse en Service. falta todo
- Footer, lo vas a ver, está realmente pobre

Creo q eso es todo. Si se me ocurre algo más te digo.
Otra vez, mis disculpas
