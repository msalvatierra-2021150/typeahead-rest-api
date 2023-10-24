import { Router } from 'express';
import { getTypeaheadInfo } from '../controllers/typeahead.controller'

const router = Router();

router.get('/obtainInfo', getTypeaheadInfo);

module.exports = router;