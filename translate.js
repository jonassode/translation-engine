
var translate = {
    rules : [],

    rule : function(input, output){
        var r = {}
        
        r.input = input;
        r.output = output;

        return r;    
    },

    add_rule : function(rule){

      this.rules.push(rule);  
    },

    train : function(input, output){
    
        var new_rule = translate.rule(input, output);    
    
        translate.add_rule(new_rule);

    },    
    
    split : function(input){
        
        var bits = [];
        
        // 
        bits.push(input);
        
        // Split by row
        
        // Split by . or ()
        
        
        return bits;
    }
    
    
    
    
    
}