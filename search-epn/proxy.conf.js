const PROXY_CONFIG={

    "/sparql/*":{
        target:true,
        router: function(req){
            var devName = '';
            var rc = req.query;
            /* rc && rc.split(';').forEach(function( cookie ) {
                var parts = cookie.split('=');
                if(parts.shift().trim() == 'dev') {
                    devName = decodeURI(parts.join('='));
                }
            }); */
           // var target = 'https://www.'+ (devName ? devName + '.' : '' ) +'rkbexplorer.com'; 
           var target =rc.query.slice(12, 39);
            console.log(target);
            return target;
        },
        changeOrigin:true,
        secure:false
    }
};

module.exports=PROXY_CONFIG;