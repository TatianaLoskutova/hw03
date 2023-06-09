import {NextFunction, Request, Response} from 'express';
import {FieldValidationError, validationResult} from 'express-validator';

export const errorsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req).array({onlyFirstError: true})
    if (errors.length > 0) {
        res.status(400).send({
            errorsMessages: errors.map((p: FieldValidationError) => {
                return {
                    message: p.msg,
                    field: p.path
                }
            })
        })
    } else {
        next()
    }
}