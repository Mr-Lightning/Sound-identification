    function StartClassification()
    {
        navigator.mediaDevices.getUserMedia({audio:true});
        classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hh6AFFgFJ/',modelReady);
    }

    function modelReady()
    {
        classifier.classify(gotResult);
    }

    function gotResult(error,result)
{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        r=Math.floor(Math.random( )* 255 ) + 1;
        g=Math.floor(Math.random( )* 255 ) + 1;
        b=Math.floor(Math.random( )* 255 ) + 1;
        
        document.getElementById("result_label").innerHTML='I can hear -' + result[0].label;
        document.gotElementById("result_confidence").innerHTML=" Accuracy - " + (result[0].confidence*100).toFixed[2] + "%";

         document.getElementById("result_label").style.color=rgb("+r+","+g+","+b")
         document.getElementById("result_confidence").style.color=rgb("+r+","+g+","+b")

         img=document.getElementById("alien-1");
         img=document.getElementById("alien-2");
         img=document.getElementById("alien-3");
         img=document.getElementById("alien-4");

         if(result[0].label=="clap"){
            img.src='aliens-01.gif';
            img.src='aliens-02.png';
            img.src='aliens-03.png';
            img.src='aliens-04.png';
         }
         else if (result[0].label=="snap"){
                img.src='aliens-01.png';
                img.src='aliens-02.gif';
                img.src='aliens-03.png';
                img.src='aliens-04.png';
             
         }
         else if (result[0].label=="tap"){
            img.src='aliens-01.png';
            img.src='aliens-02.png';
            img.src='aliens-03.gif';
            img.src='aliens-04.png';
         
        }
        else if (result[0].label=="background_noise"){
            img.src='aliens-01.png';
            img.src='aliens-02.png';
            img.src='aliens-03.png';
            img.src='aliens-04.gif';
         
     }
        
    }
    }

