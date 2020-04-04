import express from "express"
import getUsers from "../repository/get-users"

const router = express.Router();

/* GET /users listing. */
router.get('/', function(req, res, next) {
  getUsers().then(data => {
    const responseArray = new Array();
    for(var i=0;i<data.length;i++){
      const { _id, isActive, firstName, lastName, balance } = data[i];
      responseArray.push({
      _id: _id,
      isActive: isActive,
      firstName: firstName,
      lastName: lastName,
      balance: balance
      });
    }
    res.send(responseArray)
  })
})

// B. write another API here....

/* GET /users/:id listing. */
router.get('/:id', function(req, res, next) {
  getUsers().then(data => {
      const responseArray = new Array();
      for(var i=0;i<data.length;i++){
        const { _id } = data[i];
        if(_id == req.params.id){
          responseArray.push(data[i]);
          break;
        }
      }
      res.send(responseArray)
  })
})

export default router
