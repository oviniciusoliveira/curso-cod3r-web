const schedule = require('node-schedule')

/* Executar de
    5 em 5 segundos 
    em qualquer minuto
    as 12 horas
    qualquer dia do mes
    em qualquer mes
    nas terças feiras (2) */
const tarefa1 = schedule.scheduleJob('*/5 * 00 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate (setTimemout com valor zerado)
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta feira
regra.hour = 00
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})