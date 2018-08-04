import{Site,doe,general}from'/lib/core.static.js'
let site=new Site
general()
let
    settingsA=doe.a('Control Panel',{href:'control-panel'}),
    loginButton=doe.button('Login',{onclick(){
        site.showLoginForm
    }}),
    logoutButton=doe.button('Logout',{onclick(){
        site.logout
    }}),
    currentUserSpecificElements=[]
showUserSpecificElement()
site.on('userChange',async()=>{
    currentUserSpecificElements.map(e=>
        document.body.removeChild(e)
    )
    currentUserSpecificElements=[]
    showUserSpecificElement()
})
async function showUserSpecificElement(){
    let cu=await site.currentUser
    await cu.load(['isadmin','isAnonymous'])
    pushUserSpecificElements(
        cu.isAnonymous?loginButton:logoutButton
    )
    if(cu.isadmin)
        pushUserSpecificElements(settingsA)
}
function pushUserSpecificElements(e){
    if(currentUserSpecificElements.length)
        push(document.createTextNode(' '))
    push(e)
    function push(e){
        currentUserSpecificElements.push(e)
        doe.body(e)
    }
}
