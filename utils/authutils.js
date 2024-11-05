const isEmailValidator = ({key})=>{ 
    const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        key
      );

      return isEmail;
}




const userDataValidator = ({name, email, username, password})=>{ 
    return new Promise ((resolve , reject)=>{ 
        if (!name || !email || !username || !password)
            return reject("User data missing");
      
          if (typeof email !== "string") reject("email is not a text.");
          if (typeof username !== "string") reject("username is not a text.");
          if (typeof password !== "string") reject("password is not a text.");
      
          if (username.length < 3 || username.length > 50)
            reject("username length should be 3-50 char");
      
          if (!isEmailValidator({ key: email })) reject("Email format is inncorrect");
      
          resolve();
    })
}

module.exports = { userDataValidator };