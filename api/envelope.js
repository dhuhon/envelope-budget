const express = require('express');
const envelopeRouter = express.Router();

const getElementById = (id,envelopelist)=>{
    return envelopelist.find((element)=>{
        return element.id === Number(id);
    })
}

const envelopes =[{'id':1,'information':{'budget':200,'title':'Transport'}}];

envelopeRouter.get('/',(req,res,next)=>{
res.send(envelopes);
});

envelopeRouter.post('/',(req,res,next)=>{
const newenvelop ={'id': 2,'information':{'budget':500,'title':'Lunch'}};
try{
envelopes.push(newenvelop);
res.status(201).send(newenvelop);
}catch(error){
 res.status(400).send('not valid');
}

});

module.exports = envelopeRouter;