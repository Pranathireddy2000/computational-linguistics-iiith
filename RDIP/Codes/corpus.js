//declaring and initializing the english sentences 
var engsentences =["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]
var correct_sent1=[["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her"	,"yesterday I bought a book that I told her"]]


//declaring and initializing the hindi sentences 
var hinsentences=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"	,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है	"]
var correct_sent2=[["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया"	,"मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
 
function reform()//used to reform the sentence that you have choosen previously
{	
  for(i=0;i<sent_array.length;i++)
  {
    if(document.getElementById('button'+i).style.visibility=="hidden")
	{
		document.getElementById('button'+i).style.visibility="visible";
	}
    
	document.getElementById("result3").innerHTML=""
	document.getElementById("result4").innerHTML=""
	document.getElementById("result5").innerHTML=""
	document.getElementById("result6").innerHTML=""
	document.getElementById("b5").innerHTML = "Get Correct Sentence"
	document.getElementById("b3").style.visibility="hidden";
	document.getElementById("b4").style.visibility="hidden";
	document.getElementById("b5").style.visibility="hidden";
}
}
function language()//performs the actions based on the language that has choosen 
{   
    sum=0
    document.getElementById("result2").innerHTML=""
	document.getElementById("result3").innerHTML=""
	document.getElementById("result4").innerHTML=""
	document.getElementById("result5").innerHTML=""
	document.getElementById("result6").innerHTML=""
	document.getElementById("b5").innerHTML = "Get Correct Sentence"
	document.getElementById("b3").style.visibility="hidden";
	document.getElementById("b4").style.visibility="hidden";
	document.getElementById("b5").style.visibility="hidden";
	
	if(document.getElementById("English").selected)//performs when english was choosen
	{
		langsentences = engsentences;
		c=10;
		correct_sent=correct_sent1;
	}
	else if(document.getElementById("Hindi").selected)//performs when hindi was choosen
	{
		langsentences = hinsentences;
		c=7;
		correct_sent=correct_sent2;
	}
	else//when either english or hindi was choosen 
	{
		document.getElementById("result").innerHTML=""
		document.getElementById("result1").innerHTML=""
		document.getElementById("result2").innerHTML=""
		return;
	}


	let body = document.getElementsByTagName("p")[3];
	document.getElementById("result").innerHTML="Form a sentence(Declarative or Interrogative or any other type) from the given words";
	document.getElementById("result1").innerHTML="(select the buttons in proper order)";
	
	rand_index= Math.floor(Math.random() * c);//inorder to generate a random sentence
	rand_sent=correct_sent[rand_index][0];
    sent_array=rand_sent.split(" ");//splitting the sentence
	
	for(i=0;i<sent_array.length;i++)//printing the jumbled words
    {
	j=Math.floor(Math.random()*sent_array.length)
	temp=sent_array[i];
	sent_array[i]=sent_array[j]
    sent_array[j]=temp;
    }
	
for(i=0;i<sent_array.length;i++)//inorder to get the jumbled words as a sentence after selecting them
{
  let button = document.createElement("button");
  button.id='button'+i;
  button.innerHTML = sent_array[i]
  body.appendChild(button);   
    button.addEventListener ("click", function()
	{
	document.getElementById("result3").innerHTML=
	"Formed Sentence<span style='font-style:italic;color:blue;font-weight:lighter'>(after selecting words):</span>";
    document.getElementById("result4").innerHTML+=this.innerHTML+" ";
    this.style.visibility="hidden";
    sum=sum+1;
    if (sum>0 ) 
     {
     	document.getElementById("b3").style.visibility="visible";
     }
	 
    var str_orig=String(document.getElementById("result4").innerHTML).replace(/\s+$/, '');
    str_array=str_orig.split(" ")
    if(sent_array.length==str_array.length)
     {
     	document.getElementById("b4").style.visibility="visible";
     }
});
}
}
function check()//inorder to check the sentence the has choosen right or wrong
{

  var str_given=String(document.getElementById("result4").innerHTML).replace(/\s+$/, '');
  
  var break_flag=0;
  
  
  for(i=0;i<c;i++)//used to get the answer after selecting the "Get correct Sentence"
  {
	  
	document.getElementById("result6").innerHTML=""
	document.getElementById("b5").innerHTML = "Get Correct Sentence"
	
	document.getElementById("b5").style.visibility="hidden";
	  for(j=0;j<correct_sent[i].length;j++){
		  if(str_given==correct_sent[i][j]){
			  document.getElementById("result5").innerHTML=
			  "<span style='color:green;font-size:30px'>Right answer!!!</span>"
			  break_flag=1;
			  break;
		  }
	  }
	  if(break_flag==1)//if the answer is right it breaks the loop i.e,no further buttons like "get correct sentence",hide the answer.
	  {
		  break;
	  }
		  
  }
  
  if(break_flag==0)//if answer is wrong then button b5 should get displayed showing "get correct answer".
  {
	   document.getElementById("result5").innerHTML=
	   "<span style='color:red;font-size:30px'>Wrong answer!!!</span>"
	   document.getElementById("b5").style.visibility="";
  }
	  
  }
  
  function toggle()//used to display the get correct statment,hide the answer,get answers
  {
	  var correct_answers="";
	  
	  if(document.getElementById("b5").innerHTML == "Get Correct Sentence"){
		  
		  for(i=0;i<c;i++){
			  if(rand_sent == correct_sent[i][0]){
				  for(j=0;j<correct_sent[i].length;j++){
					correct_answers += correct_sent[i][j]+"<br>";
				  }
				  document.getElementById("result6").innerHTML=correct_answers;
				  document.getElementById("b5").innerHTML="Hide the correct Sentence";
				  break;
				}
			}
		}
	  else if(document.getElementById("b5").innerHTML == "Hide the correct Sentence"){
		  document.getElementById("result6").innerHTML="";
		  
		  document.getElementById("b5").innerHTML="Get Answers";
	  }
	  else if(document.getElementById("b5").innerHTML == "Get Answers"){
		  for(i=0;i<c;i++){
			  if(rand_sent == correct_sent[i][0]){
				  for(j=0;j<correct_sent[i].length;j++){
					correct_answers += correct_sent[i][j]+"<br>";
				  }
				  document.getElementById("result6").innerHTML=correct_answers;
				  document.getElementById("b5").innerHTML="Hide the correct Sentence";
				  break;
				}
			}
	  }
  }
  //End of the experiment execution