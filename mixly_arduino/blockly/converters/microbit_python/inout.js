'use strict';

var pbc = Py2blockConfig.prototype;

pbc.objectFunctionD.get('write_digital')['NUMBER'] = function(py2block, func, name, args){
    if (args.length !== 1) {
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType = "pins_digital";
    var pinblock = py2block.convert(func.value);
    var argblock = py2block.convert(args[0]);
    pbc.pinType = null;
    return [block("inout_digital_write", func.lineno, {}, {
        "PIN" : pinblock,
        "STAT" : argblock
    }, {
        "inline": "true"
    })];
}


pbc.objectFunctionD.get('read_digital')['NUMBER'] = function(py2block, func, name, args){
    if (args.length !== 0) {
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType = "pins_digital";
    var pinblock = py2block.convert(func.value);
    pbc.pinType = null;
    return [block("inout_digital_read", func.lineno, {}, {
        "PIN": pinblock
    }, {
        "inline": "true"
    })];
}


pbc.objectFunctionD.get('write_analog')['NUMBER'] = function(py2block, func, name, args){
    if (args.length !== 1) {
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType = "pins_analog";
    var pinblock = py2block.convert(func.value);
    var argblock = py2block.convert(args[0]);
    pbc.pinType = null;
    return [block("inout_analog_write", func.lineno, {}, {
        "PIN" : pinblock,
        "NUM" : argblock
    }, {
        "inline": "true"
    })];
}


pbc.objectFunctionD.get('read_analog')['NUMBER'] = function(py2block, func, name, args){
    if (args.length !== 0) {
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType = "pins_analog";
    var pinblock = py2block.convert(func.value);
    pbc.pinType = null;
    return [block("inout_analog_read", func.lineno, {}, {
        "PIN": pinblock
    }, {
        "inline": "true"
    })];
}


pbc.objectFunctionD.get('set_analog_period')['NUMBER'] = function(py2block,func,name,args){
    if(args.length!=1){
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType="pins_pwm";
    var pinblock=py2block.convert(func.value);
    var argblock = py2block.convert(args[0]);
    pbc.pinType=null;
    return [block("inout_analog_write_set",func.lineno,
        {
            'key':'period'
        },{
            "PIN":pinblock,
            "NUM":argblock
        },{
            "inline":"true"
        })];

}


pbc.objectFunctionD.get('set_analog_period_microseconds')['NUMBER']= function(py2block,func,name,args){

    if(args.length!=1){
        throw new Error("Incorrect number of arguments");
    }
    pbc.pinType="pins_pwm";
    var pinblock=py2block.convert(func.value);
    var argblock = py2block.convert(args[0]);
    pbc.pinType=null;
    return [block("inout_analog_write_set",func.lineno,
        {
            'key':'period_microseconds'
        },{
            "PIN":pinblock,
            "NUM":argblock
        },{
            "inline":"true"
        })];

}


pbc.objectFunctionD.get('is_touched')['NUMBER'] = function(py2block, func, name, args){
    if(args.length !==0){
        throw new Error("Incorrect number of arguments");

    }
    pbc.pinType="pins_interrupt";
    var pinblock=py2block.convert(func.value);
    pbc.pinType=null;

    return [block("sensor_pin_pressed",func.lineno,{},{
        "pin":pinblock
    },{
        "inline":"true"
    })];
}
