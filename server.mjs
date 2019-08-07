import root from './server/root.mjs'
function Plugin(althea){
    althea.addPagemodule('/',root)
}
Plugin.prototype.end=function(){
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
