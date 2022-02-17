module.exports = function toReadable (number) {
let h_num = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty',
'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
 // alert(h_num[num%10]);
//  alert(h_num[20 +(num - num%10)/10-2]);
 // alert(h_num[(num-num%10-num%100)/10]);
 num = number;
if (num<=20 && num>=0) {human = h_num[num];}
else if (num>20 && num <= 99) 
{  if  (num%10 == 0) {
   human = h_num[20 +(num - num%10)/10-2];
 } 
 else human = h_num[20 +(num - num%10)/10-2] +' '+ h_num[num%10];
  }
  else if (num%100 < 20) {{ if (num%100 == 0)
    {human = h_num[(num-num%100)/100] +' '+'hundred'}
    else  {human = h_num[(num-num%100)/100] +' '+'hundred' +' '+ h_num[num%100];}  
  }}
   else if  (num%10 == 0)
   {human = h_num[(num-num%100)/100] +' '+'hundred' +' '+ h_num[20 +(num%100 - num%10)/10-2];}
      else{human = h_num[(num-num%100)/100] +' '+'hundred' +' '+ h_num[20 +(num%100 - num%10)/10-2] +' '+ h_num[num%10];}
return human;
}
