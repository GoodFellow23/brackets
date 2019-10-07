module.exports = function check(str, bracketsConfig)
   {
       var temp=str.length;
      for(var j=0;j<temp;j++)
      {
            for (var i=0;i<bracketsConfig.length;i++)
            {
               while( str.indexOf(bracketsConfig[i][0]+bracketsConfig[i][1]) >= 0)
               {           
                str=str.replace(bracketsConfig[i][0]+bracketsConfig[i][1],'');
               }           
            }
      }
             if(str.length==0)
                {
                return true;
                }
            else 
                {
                return false;
                }
}


