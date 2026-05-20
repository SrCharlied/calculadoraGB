# calculadoraGB

Calculadora retro inspirada en la estética de la Game Boy, desarrollada con **React**, **TypeScript** y **Vite**.

El proyecto recrea una calculadora de bolsillo con una interfaz visual nostálgica, límite de caracteres en pantalla y manejo básico de errores.

## Características

- Operaciones básicas:
  - Suma
  - Resta
  - Multiplicación
  - División
- Operador de módulo `%`
- Soporte para decimales
- Cambio de signo con `+/-`
- Botón de limpieza `C`
- Límite de 9 caracteres en pantalla
- Manejo de errores para:
  - División entre cero
  - Resultados negativos
  - Resultados mayores a `999999999`
- Diseño responsive con estilo retro tipo Game Boy
- Tests automatizados con Vitest y Testing Library
- Historias de componentes con Storybook

## Tecnologías utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Bun](https://bun.com/) (runtime y gestor de paquetes)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)
- [ESLint](https://eslint.org/)

## Instalación

Clona el repositorio:

```bash
git clone https://github.com/SrCharlied/calculadoraGB.git
cd calculadoraGB
```

Instala las dependencias con Bun:

```bash
bun install
```

> El proyecto usa Bun como gestor de paquetes. No utilices `npm install` para evitar generar un `package-lock.json` redundante.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `bun run dev` | Levanta el servidor de desarrollo en `http://localhost:5173` |
| `bun run build` | Genera el build de producción |
| `bun run preview` | Previsualiza el build de producción |
| `bun run test` | Ejecuta la suite de tests una vez |
| `bun run test:watch` | Ejecuta los tests en modo watch |
| `bun run lint` | Corre ESLint sobre todo el código |
| `bun run storybook` | Levanta Storybook en `http://localhost:6006` |
| `bun run build-storybook` | Genera el build estático de Storybook |

## Estructura del proyecto

```txt
calculadoraGB/
├─ .storybook/
│  ├─ main.ts
│  └─ preview.tsx
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Calculator.tsx
│  │  ├─ Display.tsx
│  │  ├─ Keypad.tsx
│  │  ├─ CalcButton.tsx
│  │  ├─ ButtonGrid.tsx
│  │  ├─ dispatchKey.ts
│  │  └─ keypadLayout.ts
│  ├─ hooks/
│  │  └─ useCalculator.ts
│  ├─ logic/
│  │  ├─ calculator.ts
│  │  └─ limits.ts
│  ├─ stories/
│  │  ├─ Calculator.stories.tsx
│  │  ├─ DisplayMaxLength.stories.tsx
│  │  ├─ DisplayError.stories.tsx
│  │  ├─ ButtonNumber.stories.tsx
│  │  └─ ButtonOperator.stories.tsx
│  ├─ tests/
│  │  └─ calculator.test.tsx
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ setupTests.ts
│  └─ styles.css
├─ eslint.config.js
├─ index.html
├─ package.json
├─ bun.lock
├─ tsconfig.json
└─ vite.config.ts
```

## Lógica y reglas de la calculadora

La lógica principal se encuentra separada en dos partes:

- `src/logic/calculator.ts`: operaciones matemáticas puras, validación y formato de resultados.
- `src/hooks/useCalculator.ts`: estado de la calculadora e interacción con los botones.

Esto mantiene la interfaz separada de la lógica, lo que hace el proyecto más fácil de probar y mantener.

La calculadora aplica las siguientes reglas:

- Límite estricto de 9 caracteres en pantalla (el punto decimal y el signo negativo también cuentan).
- Después de una operación, el siguiente número limpia el display.
- Se considera resultado inválido y se muestra `ERROR` cuando:
  - El valor no es finito (división por cero, NaN).
  - El resultado es negativo (a menos que provenga del botón `+/-`).
  - El resultado supera `999999999`.

## Tests incluidos

El proyecto incluye **10 tests** que cubren los principales casos funcionales:

1. Concatenación de dígitos y respeto del límite de 9 caracteres
2. Suma encadenada con resultado parcial al presionar otra operación
3. Resta con resultado negativo (`ERROR`)
4. Overflow `999999999 + 1` (`ERROR`)
5. División `22 / 7` formateada a 9 caracteres comenzando con `3.142`
6. Módulo `10 % 3 = 1`
7. División por cero (`ERROR`)
8. Cambio de signo con `+/-`
9. Doble punto decimal ignorado (`1..5` → `1.5`)
10. Limpieza automática del display tras una operación
