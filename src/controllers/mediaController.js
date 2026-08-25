const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');
const Tipo = require('../models/Tipo');

const crearMedia = async (req, res) => {
    try {
        const { serial, titulo, sinopsis, url, imagenPortada, anioEstreno, genero, director, productora, tipo } = req.body;

        const generoBuscado = await Genero.findOne({ _id: genero, estado: 'Activo' });
        if (!generoBuscado) {
            return res.status(400).json({ error: 'El genero seleccionado no existe o no esta activo' });
        }

        const directorBuscado = await Director.findOne({ _id: director, estado: 'Activo' });
        if (!directorBuscado) {
            return res.status(400).json({ error: 'El director seleccionado no existe o no esta activo' });
        }

        const productoraBuscada = await Productora.findOne({ _id: productora, estado: 'Activo' });
        if (!productoraBuscada) {
            return res.status(400).json({ error: 'La productora seleccionada no existe o no esta activa ' });
        }

        const tipoBuscado = await Tipo.findById(tipo);
        if (!tipoBuscado) {
            return res.status(400).json({ error: 'El tipo seleccionado no existe' });
        }

        const nuevaMedia = new Media({
            serial, titulo, sinopsis, url, imagenPortada, anioEstreno, genero, director, productora, tipo
        });
        await nuevaMedia.save();

        const mediaCreada = await Media.findById(nuevaMedia._id)
            .populate('genero')
            .populate('director')
            .populate('productora')
            .populate('tipo');

        res.status(201).json(mediaCreada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const buscarMedias = async (req, res) => {
    try {
        const medias = await Media.find()
            .populate('genero')
            .populate('director')
            .populate('productora')
            .populate('tipo');

        res.json(medias);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const buscarMediaPorId = async (req, res) => {
    try {
        const mediaBuscada = await Media.findById(req.params.id)
            .populate('genero')
            .populate('director')
            .populate('productora')
            .populate('tipo');

        if (!mediaBuscada) return res.status(404).json({ error: 'La media no existe' });
        res.json(mediaBuscada);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const actualizarMedia = async (req, res) => {
    try {
        const { serial, titulo, sinopsis, url, imagenPortada, anioEstreno, genero, director, productora, tipo } = req.body;
        if (genero) {
            const generoBuscado = await Genero.findOne({ _id: genero, estado: 'Activo' });
            if (!generoBuscado) {
                return res.status(400).json({ error: 'El genero seleccionado no existe o no esta activo' });
            }
        }

        if (director) {
            const directorBuscado = await Director.findOne({ _id: director, estado: 'Activo' });
            if (!directorBuscado) {
                return res.status(400).json({ error: 'El director seleccionado no existe o no esta activo' });
            }
        }

        if (productora) {
            const productoraBuscada = await Productora.findOne({ _id: productora, estado: 'Activo' });
            if (!productoraBuscada) {
                return res.status(400).json({ error: 'La productora seleccionada no existe o no esta activo' });
            }
        }

        if (tipo) {
            const tipoBuscado = await Tipo.findById(tipo);
            if (!tipoBuscado) {
                return res.status(400).json({ error: 'El tipo seleccionado no existe' });
            }
        }

        const mediaActualizada = await Media.findByIdAndUpdate(
            req.params.id,
            {
                serial, titulo, sinopsis, url, imagenPortada, anioEstreno, genero, director, productora, tipo
            },
            { new: true, runValidators: true }
        ).populate('genero').populate('director').populate('productora').populate('tipo');

        if (!mediaActualizada) return res.json(404).json({ error: 'La media no fue encontrada, posible erroro en la actualización' });
        res.json(mediaActualizada);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const eliminarMedia =async(req,res)=>{
    try{
        const mediaEliminada=await Media.findByIdAndDelete(req.params.id);

        if(!mediaEliminada){
            return res.status(404).json({error:'La media no fue encuentrada, posible error en la eliminación'});
        }
        res.json({mensaje: 'Media eliminada correctamente',media:mediaEliminada});
    }catch(err){
        res.status(500).json({error:err.message});
    }
};


module.exports={crearMedia,buscarMedias,buscarMediaPorId,actualizarMedia,eliminarMedia};