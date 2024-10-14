Use svgr

yarn add vite-plugin-svgr

create svg.d.ts
```
declare module '*.svg?react' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

  export default ReactComponent;
}
```

edit tsconfig.json
```
"include": ["src/components", "src/svg.d.ts"]
```
