# Week 2

Ejercicios semana 2

## Configuracion

- .editorconfig
- .gitignore
- .package.json (Add prettier)
- Instalar devDependencies con npm i
- crear repo: `git init`
- Install ESLint `npm i -D eslint`
- Configuracion del ESLint `npx eslint --init`
- Añadir `npm i -D eslint-config-prettier`
- Instalar en eslint.json "prettier" como ultima extension

## Jest install/setup

- `npm i -D jest @types/jest @babel/plugin-transform-modules-commonjs`
- .eslintrc.json

```json
"env":{"...": "....",
"jest": true
}
```

- jsconfig.json

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

- package.json

```json
  "babel": {
    "env": {
      "test": {
        "plugins": [
          "@babel/plugin-transform-modules-commonjs"
        ]
      }
    }
  }
```

- `npm test -- --watch` para que quede vigilando los cambios con `--watchAll` para vigilar todos los archivos o `--watch` para vigilar solo los archivos modificados
