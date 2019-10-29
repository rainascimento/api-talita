const express = require('express');
const router = express.Router();
const Post = require('../models/acoes');

// ROUTES 

// RECUPERA O DADO VIA GET
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// ENVIA UM POST
router.post('/', async (req, res) =>
{
    const post = new Post({
        ativo: req.body.ativo,
        valor_abertura: req.body.valor_abertura,
        valor_fechamento: req.body.valor_fechamento
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

// RECUPERA O DADO ESPECIFICO
router.get('/:ativo', async (req, res) => {
    try{
        
        const posts = await Post.find({'ativo':req.params.ativo});
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

// DELETA UM REGISTRO ESPECIFICO POR ID
router.delete('/:postId', async(req, res)=>{
try{
    const removePost = await Post.findByIdAndDelete({_id: req.params.postId});

}catch(err){
    res.json({message: err});
}
});


// ATUALIZA UM REGISTRO ESPECIFICO POR ID
router.patch('/:postId', async(req, res)=>{
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: {valor_fechamento: req.body.valor_fechamento}});
    
    }catch(err){
        res.json({message: err});
    }
    });

module.exports = router;