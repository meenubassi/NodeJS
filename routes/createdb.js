const nano = require("nano")

exports.create=function(req,res)
{
    nano.db.create(req.body.dbname, function()
    {
        if(err)
        {
            res.send("creating database error");
            return;
        }
        res.send("database created");
    }
    );
};