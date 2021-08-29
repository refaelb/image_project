import  Grouter  from './group/router';
import { Router } from 'express';
import get from 'express'
import { close } from './close'
import  Prouter  from './person/router';
import express from 'express'
const MainRouter = Router();

MainRouter.use ('/person',(Prouter))

MainRouter.use('/group',(Grouter))

MainRouter.use('/kill',(close))

export default MainRouter;
