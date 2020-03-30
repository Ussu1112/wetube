import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

//handleListening으로 실행 후 로그 생성 가능
const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello")

const handleProfile = (req, res) => res.send("You are on my profile");


//미들웨어은 위에서부터 아래로 작동한다.
app.use(cookieParser());
app.use(bodyParser.json({extended: text}));
app.use(bodyParser.urlencoded({extended: text}));

app.use(helmet());
app.use(logger("dev"));


app.get("/", handleHome);

app.get("/profile", handleProfile);


app.listen(PORT, handleListening);