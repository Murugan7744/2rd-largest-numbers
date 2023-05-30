var a=[];
var size=parseInt(prompt("enter a size of 2nd largest order array"));
var result=[];

for(let m=0; m<size; m++)
{
	a[m]=parseInt(prompt("enter a 2nd largest value" +(m+1)));
	
}
document.write("input array" +a);
document.write("<br>");


for(let i=0; i<a.length; i++)
{
	for(let j=i+1; j<a.length; j++)
	{
		if(a[i]<a[j])
		{
			var temp=a[j];
			a[j]=a[i];
			a[i]=temp;
		}
	}
	
	result.push(a[i]);
}
document.write("input value 2nd largest order"+ " " + "=" +result[1]);