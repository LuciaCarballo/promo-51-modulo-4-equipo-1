const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const projectController = require('../controllers/projectControllers');

const validarProyecto = [
  body('autora.nombre').notEmpty().withMessage('El nombre de la autora es obligatorio'),
  body('autora.promocion').notEmpty().withMessage('La promoción es obligatoria'),
  body('autora.trabajo').notEmpty().withMessage('El trabajo es obligatorio'),
  body('autora.foto').optional().isURL().withMessage('La foto debe ser una URL válida'),
  body('autora.descripcion').notEmpty().withMessage('La descripción de la autora es obligatoria'),


  body('proyecto.nombre').notEmpty().withMessage('El nombre del proyecto es obligatorio'),
  body('proyecto.descripcion').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
  body('proyecto.tecnologias').notEmpty().withMessage('Las tecnologías son obligatorias'),
  body('proyecto.imagen').optional().isURL().withMessage('La imagen debe ser una URL válida'),
  body('proyecto.github').optional().isURL().withMessage('El enlace a GitHub debe ser una URL válida'),
  body('proyecto.demo').optional().isURL().withMessage('El enlace a la demo debe ser una URL válida'),
];

//por qué un post? para subirlos?
router.post('/projects', validarProyecto, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  projectController.createProject(req, res, next);
});


router.get('/list', projectController.ListProjects);

module.exports = router;



