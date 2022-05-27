import { Router } from 'express'
import { semaforo, DiaSemana, fatorial, seq} from './services.js'
const server = Router()


server.get('/semaforo/:cor', (req, resp) => { 
    try {
        const cor = req.params.cor 
        
        const x = semaforo(cor) 

        resp.send({ 
            semaforo: x 
        }) 
    }

    catch(err){
        resp.send({
            erro: err.message 
        })
    }
}) 

server.get('/semana/', (req,resp) => {
    try {
        const a = req.query.dia

        const x = DiaSemana(a)

        resp.send({
            semana: x
        })
    }

    catch(err){
        resp.send({
            erro: err.message 
        })
}}) 
server.post('/fatorial/', (req,resp) => {
    try{
    const n = Number(req.query.n)

    const a = fatorial(n)

    resp.send({
        fatorial: a
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})
server.post('/sequencia', (req,resp) => {
    try{
        const n = Number(req.body.n)

        const a = seq(n)

        resp.send({
            seq: a
        })
    }

        catch(err){
            resp.send({
                erro: err.message
            })
    }
})

export default server 
 
