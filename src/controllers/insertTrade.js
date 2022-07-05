import * as tradeService from "../services/tradeServices.js"

export async function insertTrade(req, res){
  try {
          const { value, type } = req.body;
          const authorization = req.headers.authorization || "";
          const token = authorization.replace("Bearer ", "");

          await tradeService.validateToken(token)

          let user;
      
          await tradeService.validateData(value, type)
      
          const financialTypes = ["INCOME", "OUTCOME"];
          
          if (!financialTypes.includes(type)) {
            return res.sendStatus(422);
          }
      
          await connection.query(
            `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
            [user.id, value, type]
          );
      
          res.sendStatus(201);
        } catch (err) {
          console.error(err);
          res.sendStatus(500);
        }
}

export async function listTrades(req, res,){
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");
    
        await tradeService.validateToken(token)
    
        const events = await connection.query(
          `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
          [user.id]
        );
    
        res.send(events.rows);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}

export async function sunTrades(req, res){
    try {
        const authorization = req.headers.authorization || "";
        const token = authorization.replace("Bearer ", "");
    
        await tradeService.validateToken(token)
    
        const events = await connection.query(
          `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
          [user.id]
        );
    
        const sum = events.rows.reduce(
          (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
          0
        );
    
        res.send({ sum });
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
}