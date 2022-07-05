import { Router } from "express"
import { insertTrade, listTrades, sunTrades } from "../controllers/insertTrade.js"

const routersTrades = Router()

routersTrades.post("/financial-events", insertTrade)
routersTrades.get("/financial-events", listTrades)
routersTrades.get("/financial-events/sum", sunTrades)

export default routersTrades
