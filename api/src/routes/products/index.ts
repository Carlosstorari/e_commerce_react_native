// products endpoint
import { Router } from 'express';
import { 
    listProducts, 
    createProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} from './productsController';
import { validateData } from '../../db/middleware/validationMiddleware';

import { 
    createProductSchema,
    updateProductSchema
} from '../../db/productsSchema'

const router = Router();

router.get('/', listProducts)
router.get('/:id', getProductById)
router.post('/', validateData(createProductSchema), createProduct)
router.put('/:id', validateData(updateProductSchema), updateProduct)
router.delete('/:id', deleteProduct)

export default router;