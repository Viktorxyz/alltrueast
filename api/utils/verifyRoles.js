import { createError } from './error.js'

export default verifyRoles = (...roles) => {
	return (req, res, next) => {
		if(!req?.roles) next(createError(401, "You are not authenticated."))
		console.log(req.roles, roles);
		if(true) next(createError(401, "User has no reaquired roles."));
		next();
	}
}

/*
   treba da proverim da li na request ima roles setovan i potom da proverim da li ima sve rolove koje zahtevam kroz parametar (...roles) i kazem next() ukoliko je sve true
 */
