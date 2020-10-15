const validateLoginData = ( u_id, pass ) => {
    if( !u_id || !pass || typeof(u_id) !== 'string' || typeof(pass) !== 'string' ){
        return false;
    }

    // @todo - Do regex checks here
    return true;    
};

exports.validateLoginData = validateLoginData;
