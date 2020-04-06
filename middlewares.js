import routes from "./router";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next(); //미들웨어가 next에 req를 전달해야 한다. 미들웨어가 커넥션과 라우트들 사이에 있으니 next()를 추가한다.
};