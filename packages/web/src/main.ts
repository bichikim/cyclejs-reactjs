import {makeDOMDriver} from '@cycle/react-dom'
import {app} from './app'
import {run} from '@cycle/run'

console.log('ran')

run(app, {
  react: makeDOMDriver(document.getElementById('app'))
})
