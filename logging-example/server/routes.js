const express = require('express');
const router = express.Router();
const db = require('./db');
const { User } = db.models;

router.get('/api/sessions', (req, res, next)=> {
  const user = req.session.user;
  if(user){
    return res.send(user);
  }
  next({ status: 401 });
});

router.delete('/api/sessions', (req, res, next)=> {
  req.session.destroy();
  res.sendStatus(204);
});

router.post('/api/sessions', (req, res, next)=> {
  User.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then( user => {
    if(!user){
      throw ({ status: 401 });
    }
    req.session.user = user;
    return res.send(user);
  })
  .catch( err => next(err));
});
//USED WHEN THE LOGIN ARE BUTTONS AND NOT FILLOUT FORMS
// router.post('/api/sessions', (req, res, next)=>{
//   const user = users[req.body.username];
//   if(user){
//     req.session.user = user;
//     return res.send(user)
//   }
//   next({status: 401})
// })

module.exports = router
