import{Site,dom,general}from'/lib/core.static.js'
let site=new Site
;(async()=>{
    general()
    let
        settingsA=dom.a('Control Panel',{href:'control-panel'}),
        loginButton=dom.button('Login',{onclick(){
            site.showLoginForm
        }}),
        logoutButton=dom.button('Logout',{onclick(){
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
            push(dom.tn(' '))
        push(e)
        function push(e){
            currentUserSpecificElements.push(e)
            dom.body(e)
        }
    }
})()
