const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

        ativo: {
            type: String,
            required: true
        },
        valor_abertura:{
            type: Number,
            required: true
        },
        valor_fechamento:{
            type: Number,
            required: true
        },
        dia_pregao:{
            type: Date,
            default: Date.now
        }

});

module.exports = mongoose.model('acoes', PostSchema);