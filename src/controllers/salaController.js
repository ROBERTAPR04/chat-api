const salaModel = require('../model/salaModel');

exports.get=async()=>{
    return await salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return {"status":"OK", "controller":"Sala"};
}

exports.get=()=>{
    let salaModel = require('../model/salaModel');
    return salaModel.listarSalas();
}

exports.get=async(req,res)=>{
    return await salaModel.listarSalas();
}
exports.enviarMensagem = async(nick, msg, idsala) => {
    const sala = await salaModel.buscarSala(idsala);
    if(!sala.msgs){
        sala.msgs = [];
    }
    timestamp = Date.now()
    sala.msgs.push({
        timestamp: timestamp,
        msg: msg,
        nick: nick
    })
    let resp = await salaModel.atualizarMensagens(sala);
    return {"msg": "OK", "timestamp":timestamp};
}

exports.buscarMensagens = async(idsala, timestamp) => {
    let mensagens = await salaModel.atualizarMensagens(idsala, timestamp);
    return{
        "timestamp": mensagens[mensagens.length - 1].timestamp,
        "msgs": mensagens
    };
}
async function buscarMensagens(idsala, timestamp){
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs = [];
        sala.msgs.forEach(msg => {
            if(msg.timestamp >= timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}
