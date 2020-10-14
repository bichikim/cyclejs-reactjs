import xs from 'xstream'
import {makeDOMDriver, div, h1, button} from '@cycle/react-dom'
import {foo} from './foo'

export function app(sources) {
  const inc = Symbol();
  const inc$ = sources.react.select(inc).events('click');

  const count$ = inc$.fold(count => count + 1, 0);

  const vdom$ = count$.map(i =>
    div([
      h1(`Counter: ${i}`),
      button(inc, 'Increment'),
      foo,
    ]),
  );

  return {
    react: vdom$,
  };
}

