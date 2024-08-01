// var num=454;
// var temp = num;
// var rem,rev=0;

// while(num>0)
// {
//     rem=num%10;
//     rev=rev*10+rem;
//     num=Math.floor(num/10);
// }

// if(temp==rev)
//     console.log("palindrome")
// else
//     console.log("not a plindrome")

var str='liril';
var flag=0;
for(var i=0;i<str.length;i++)
{
    for(var j=str.length;i>0;i++)
    {
        if(str.charAt(i)==str.charAt(j))
            flag=1;
        
    }
    
}
if(flag==1)
    console.log("palindrome")
else
    console.log("not a palindrome")
