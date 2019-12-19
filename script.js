let runit =function(){
  
  document.getElementById("myform").innerHTML = 
  "<p>through the darkness you start to hear a ring. Once you realize that it is your alarm you slowly start to slump your body near your phone. Tired from last night you are decisive on sleeping for another hour and skipping first period. You sudenly realize that you finished all of the work in there and it is finals week.The teacher would understand, right?</p> <image src='finalnumber1.webp'  height='300px' width='400px'><br><form><input type='radio' name='userq1' id='radioquestion1'><label for='radioquestion1'>Do you get an extra hour of sleep and energize yourself for your more important classes?</label><br><input type='radio' name='userq1' id='radioquestion2'><label for='radioquestion2'>Or do you go to school very tired and unenergized for the day.Not ready for school work?</label><br><br><input type='button' value='Submit your decision' id='submit1' onclick='done()'></form> <br>";}
  
  let done = function(){
      let radio1 = document.getElementById("radioquestion1");
      let radio2 = document.getElementById("radioquestion2");
      let answer="";
      document.getElementById("output").innerHTML = answer;
      if(radio2.checked){
        document.getElementById("myform").innerHTML = "<p>Look at you! you woke up on time! You go to school like a normal day and everything runs smothly!Well...So far.</p><br><image src='hegone.jpg'  height='300px' width='400px'><br><p>Now that you get to school you notice something is diffrent. Your best friend is not here today.Curiously thinking about them, do you message them or do you let it be?</p><input type='radio' name='userq2' id='radioquestion22'><label for='radioquestion22'>You message them to see why they are gone</label><br><input type='radio' name='userq2' id='radioquestion23'><label for='radioquestion23'>you carry on with your next class.</label><input type='button' value='Submit your decision' id='submit2' onclick='nexta()'>"
     }
     else if (radio1.checked){
        document.getElementById("myform").innerHTML = "<p>since you went back to bed you missed first period. When you get to school you start heading to seccond period. The class you do  not have              friends in. You start to get on your phone and choose what you want to do.</p><br><image src='phone.png'  height='300px' width='400px'><br><p>you browe through your phone thinking of what to spend your time on. </p><input type='radio' name='userq22' id='radioquestion23'><label for='radioquestion22'>You choose to get on reddit</label><br><input type='radio' name='userq22' id='radioquestion24'><label for='radioquestion23'>You choose to text a friend</label><br><input type='radio' name='userq22' id='radioquestion24'><label for='radioquestion25'>You choose to not do anything on your phone and sleep more</label><input type='button' value='Submit your decision' id='submit22' onclick='nexta()'>"
     }
      
     
     }
    let nexta=function(){
      let radio3 = document.getElementById("radioquestion22");
      let radio4 = document.getElementById("radioquestion23");
      let answer="";
      if(radio3.checked){
        document.getElementById("myform").innerHTML = "<h1>So you decide to message your friend. As you message him he reply back very quick. </h1><image src='ODQxNDgx.jpg'  height='500px' width='300px'><h3>What do you say back?</h3><input type='radio' name='userq3' id='radioquestion32'><label for='radioquestion32'>What is the matter?</label><br><input type='radio' name='userq3' id='radioquestion29'><label for='radioquestion29'>Sorry man. See you tomorow</label><br><input type='button' value='Submit your decision' id='submit4' onclick='nextb()'>"
      }

      if(radio4.checked){
        document.getElementById("myform").innerHTML = "<p> you start heading to seccond period. The class you do  not have friends in. You start to get on your phone and choose what you want to do.</p><br><image src='phone.png'  height='300px' width='400px'><br><p>you browe through your phone thinking of what to spend your time on. </p><input type='radio' name='userq201' id='radioquestion230'><label for='radioquestion230'>You choose to get on reddit</label><br><input type='radio' name='userq201' id='radioquestion240'><label for='radioquestion240'>You choose to not do anything on your phone and sleep more</label><br><input type='button' value='Submit your decision' id='submit40' onclick='nextv()'>"
      }
     
    }
     let nextv=function(){
      let radio30 = document.getElementById("radioquestion230");
      let radio40 = document.getElementById("radioquestion240");
      let answer="";
      if(radio30.checked){
        document.getElementById("myform").innerHTML = "<h1>So you decide to gwt on reddit</h1><image src='meme.jpg'  height='500px' width='300px'><h3>Ha, cool meme. Do you continue to look at reddit?</h3><input type='radio' name='userq100' id='radioquestion1001'><label for='radioquestion1001'>More memes</label><br><input type='radio' name='userq100' id='radioquestion1011'><label for='radioquestion1011'>Na.</label><br><input type='button' value='Submit your decision' id='submit57' onclick='nextg()'>"}}
      let nextb=function(){
      let radio5 = document.getElementById("radioquestion32");
      let radio6 = document.getElementById("radioquestion29");
      let answer="";
      if(radio5.checked){
        document.getElementById("myform").innerHTML = "<h1>So you decide to message your friend.This is what he sent </h1><image src='text2.png'  height='500px' width='300px'><h3>What do you say back?</h3><input type='radio' name='userq10' id='radioquestion100'><label for='radioquestion100'>Do you want to meet me after school?</label><br><input type='radio' name='userq10' id='radioquestion101'><label for='radioquestion101'>Sorry man.Sorry for your loss. See you tomorow</label><br><input type='button' value='Submit your decision' id='submit5' onclick='nextb()'>"}
        


        if(radio6.checked){
        document.getElementById("myform").innerHTML = "<h1>So you decide to gwt on reddit</h1><image src='meme.jpg'  height='500px' width='300px'><h3>Ha, cool meme. Do you continue to look at reddit?</h3><input type='radio' name='userq1010' id='radioquestion400'><label for='radioquestion400'>More memes</label><br><input type='radio' name='userq1010' id='radioquestion300'><label for='radioquestion300'>Na.</label><br><input type='button' value='Submit your decision' id='submit59' onclick='nextg()'>"}}
        
        
     
        let nextg=function(){
      let radio23 = document.getElementById("radioquestion400");
      let radio24 = document.getElementById("radioquestion300");
      let answer="";
      if(radio23.checked){
        document.getElementById("myform").innerHTML = "<h1>So you decide to get on reddit</h1><image src='meme2.jpeg'  height='500px' width='500px'><h3>Ha, cool meme. Do you continue to look at reddit?</h3><input type='radio' name='userq9' id='radioquestion900'><label for='radioquestion900'>More memes</label><br><input type='radio' name='userq9' id='radioquestion800'><label for='radioquestion800'>Na.</label><br><input type='button' value='Submit your decision' id='submit57' onclick='nextp()'>"}
        if(radio24.checked){
        document.getElementById("myform").innerHTML = 
         "<h1>So you decide to go to sleep</h1><br><h3>you are crossed with two pathways in your dream. Do you go right or left? </h3><input type='radio' name='userq11' id='radioquestion45'><label for='radioquestion45'>left</label><br><input type='radio' name='userq11' id='radioquestion46'><label for='radioquestion46'>right</label><br><input type='button' value='Submit your decision' id='submit57' onclick='nextq()'>"}
      }



      let nextq=function(){
      let radio89 = document.getElementById("radioquestion46");
      let radio98 = document.getElementById("radioquestion45");
      let answer="";
      if(radio89.checked){ 
        document.getElementById("myform").innerHTML ="<br><h3>you are crossed with two pathways in your dream. Do you go right or left? </h3><input type='radio' name='userq66' id='radioquestion49'><label for='radioquestion49'>left</label><br><input type='radio' name='userq66' id='radioquestion46'><label for='radioquestion46'>right</label><br><input type='button' value='Submit your decision' id='submit57' onclick='nexto()'>"}

        if(radio98.checked){
          document.getelementById("myform").innerHTML="<br><h3>Oh wow! another pathway! it seemes to look idenical to your first path. But this time there are steps infront of the path on the left.There is a hoodie on the side of the path on the left as well. Once you look at it you find out it is your friend jhons hoodie.Confused do you go left or right? </h3>"
        }
        }
    
  
  


 