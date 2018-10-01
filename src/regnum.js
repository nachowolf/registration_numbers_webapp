module.exports = function () {

    let db = [
        {'city': 'Cape Town',
         'code': 'CA'},

         {'city': 'Bellville',
          'code' : 'CJ'}
    ]
//    value holder
    let code = '';
    let num = '';

    // regnum filter and adder
    function add (plate){
        let values = plate.replace('-', '').replace(' ', '').split('');
        
        for(let val of values){
            
            if(isNaN(val) == true){
                code += val;
            }
            else if(isNaN(val) == false){
                num += val;
            }
        }

        let codeChecker = db.map(cityCode => cityCode.code)
        if(codeChecker == code){
            return true
        }
        else{
            return false
        }

    }






    return {
        add
    };
};
