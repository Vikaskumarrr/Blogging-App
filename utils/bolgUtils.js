const bolgUtils = ({title, textBody})=>{ 
        return new Promise((resolve , reject)=>{
            if(!title || !textBody) return reject( "Missing the Data"); 
            if(!title === String) return reject("Title Should be Text");
            if(!textBody === String) return reject("TextBody is not a Text")

            if(title.length < 3 || title.length > 100) return reject("Title Should be 3-100");
            if(textBody < 3 || textBody.length > 1000) return reject("TextBody Should be 3-1000");
            
            resolve();
        })
}

module.exports = bolgUtils ;