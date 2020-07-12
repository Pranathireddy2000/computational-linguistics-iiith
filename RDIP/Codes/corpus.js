var sent_1=["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"]
var sent_2=["some students like to study in the night","at night some students like to study"]
var sent_3=["John and Mary went to church","Mary and John went to church"]
var sent_4=["John went to church after eating",	"after eating John went to church","John after eating went to church"]
var sent_5=["did he go to market","he did go to market"]
var sent_6=["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"]
var sent_7=["John goes to the library and studies","John studies and goes to the library"]
var sent_8=["John ate an apple so did she","she ate an apple so did John"]
var sent_9=["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"]
var sent_10=["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]
var engsentences=["John ate an apple before afternoon","John goes to the library and studies","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday","John ate an apple so did she"]


var sentence1=["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"]
var sentence2=["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"]
var sentence3=["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"]
var sentence4=["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"]
var sentence5=["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया"	 ,"बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता"	,"कुत्ता सो गया बिल्लियों को मारकर"	,"कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"]
var sentence6=["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"]
var sentence7=["एक बड़ी सी किताब वहाँ है	","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब"," है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
var hinsentences=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]
function language()
{ 

	document.getElementById("result2").innerHTML=""
	document.getElementById("result4").innerHTML=""
	document.getElementById("result3").innerHTML=""
	document.getElementById("b3").style.visibility="hidden";
	count=0
if(document.getElementById("English").selected)
{
	document.getElementById("result").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("result1").innerHTML="(select the buttons in proper order)";
	var a=engsentences[Math.floor(Math.random() * engsentences.length)];
	let body = document.getElementsByTagName("p")[3];
	temp1=a.split(" ");
	var p=temp1.length;
	for(i=0;i<p;i++)
{
	j=Math.floor(Math.random()*p)
	a=temp1[i];
	temp1[i]=temp1[j]
	temp1[j]=a;
}
for(i=0;i<p;i++)
{
 let button = document.createElement("button");
  button.innerHTML = temp1[i]
  body.appendChild(button);
  button.addEventListener ("click", function() {
	document.getElementById("result3").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("result4").innerHTML+=this.innerHTML+"  ";
    this.style.visibility="hidden";
    count=count+1;
    if (count==1) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
    if (count==p) 
     {
     	document.getElementById("b4").style.visibility="visible";
     }
});
}
}
else if (document.getElementById("Hindi").selected) 
{ 
	document.getElementById("result2").innerHTML=""
	document.getElementById("result").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words"
	document.getElementById("result1").innerHTML="(select the buttons in proper order)";
	var b=hinsentences[Math.floor(Math.random() * hinsentences.length)];
	 temp2=b.split(" ");
	 var q=temp2.length;
	let body = document.getElementsByTagName("p")[3];
	for(i=0;i<q;i++)
{
	j=Math.floor(Math.random()*q)
	b=temp2[i];
	temp2[i]=temp2[j]
	temp2[j]=b;
}
for(i=0;i<q;i++)
{
 let button = document.createElement("button");
  button.innerHTML = temp2[i]
  body.appendChild(button)
  button.addEventListener ("click", function() {
	document.getElementById("result3").innerHTML="Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("result4").innerHTML+=this.innerHTML+"  ";
    this.style.visibility="hidden";
    count=count+1;
    if (count==1) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
    if (count==q) 
     {
     	document.getElementById("b4").style.visibility="visible";
     }
});
}
}
else
{
	document.getElementById("result").innerHTML=""
	document.getElementById("result1").innerHTML=""
	document.getElementById("result2").innerHTML=""
}
}




 