import {Request,Response} from 'express';
import IUserRepository from '../repositories/UserRepository';
// talks to database layer
import {UserService} from "../services/UserService";

const service = new UserService();


export class UserController {


    public static listAll = (req:Request,res:Response,next:any) => {
            service.get().then((users:any) => {
                if(users) {
                    res.json(users)
                }else {
                    res.json(users)
                }
            }).catch((err:any) => {
                res.json(err)
            })
    }



    public static addNew = (req:Request,res:Response) => {
        service.add(req.body).then((user:any) => {
            if(user){
                res.json(user)
            }
        }).catch((err :any)=> {
            res.json(err)
        })

    }
}


