
export const doApiBody = async (url,method,_data) => {
    try{
        let resp = await fetch(url, {
            method:method,
            body:JSON.stringify(_data),
            headers:{'content-type':'application/json',
                'x-auth-token': localStorage['token'] }
        })
        let data = await resp.json()
        return data
    }
    catch(err){
        return err
    }
}

export const urlapi = 'http://localhost:3000';
