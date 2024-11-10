import { application } from "express";
import passport from "passport";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.autorization;
    if(!authHeader){
        res.status(401).json({message: 'Unauthorized'})
    }
    next();
};
//Проверка, авторизован ли пользователь
// passport.authenticate()
passport.use(
    new localStrategy((user, password, done) => {
        if(user !== 'test_user')
        return done(null, false, {
            message: 'User not found', // flash-сообщение, выводящееся пользователю
        });
        else if(password !== 'test_password')
        return done(null, false, {
            message: 'Wrong password',
        })
        return done(null, {id: 1, name: 'Test', age: 21});
    })
);

function checkAuth(){
    return app.use((req, res, next) => {
        if(req.user) next();
        else res.redirect('/login');
    });
}