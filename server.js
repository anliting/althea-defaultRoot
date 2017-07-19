let root=require('./server/root')
module.exports=async althea=>{
    althea.addPagemodule('/',r=>
        root(althea.database.r)
    )
}
