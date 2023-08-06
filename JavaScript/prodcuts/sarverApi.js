
export const doapiBody = async (url,method,_data) => {
    try{
        let resp = await fetch(url,{
            method:method,
            body:JSON.stringify(_data),
            headers:{'content-type':'application/json'}
        })
        let data = await resp.json()
        return data
    }
    catch(err){
        return err
    }
}

export const urlapi = ' http://loclhost:3000'