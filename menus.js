var menus = require("./models")

module.exports = {
  all : function(req,res) {
      menus.find({}, function(err,collection){
        if (err) {
          res.json({message: "database error", error:err})
        }
        else {
          res.json(collection)
        }
      })
  },

  create : function(req,res) {
    console.log(req.body)
    var menu= new menus ();
    menu.newMenu = req.body
    menu.save(function(err, menu){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
         res.json(menu)
        }
       
      
      
      
      
    })
  },

  update: function(req,res){
    menus.findOneAndUpdate({_id: req.params.id}, req.body,{new: true},
    function(err, menu){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json(menu)
      }
    })
  },
  showOne: function(req,res){
    menus.findOne({_id: req.params.id},
    function(err, menu){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json(menu)
      }
    })
  },

  delete: function(req,res){
    menus.findOneAndRemove({_id: req.params.id}, function(err, menu){
      if(err) {
        res.json({message: "database error", error:err})
      }
      else {
        res.json({message: "deleted the crappy menu", id: req.params.id})
      }
    })
  }

}
