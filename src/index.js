module.exports = function check(str, bracketsConfig) {
              
    const brackLength=bracketsConfig[0].length;
    var tempOpen=0;
    var tempClose=0;
    var temp=0;
    switch (brackLength) {
        case 1:
            for(var i=0;i<str.length;i++)
            {
                if(str[i]==bracketsConfig[0][0])temp++;
                else(str[i]==bracketsConfig[0][1])
                {
                    for(var j=0;j<temp;j++)
                    {
                        if(a[i+j]==bracketsConfig[0][1])tempClose++;
                        
                    }
                    i+=j;
                    tempOpen=temp;
                    temp=0;
                }
            }
            if(tempOpen==tempClose)return true;
            return false;
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        
    }
       
        
     

   
}
check();
