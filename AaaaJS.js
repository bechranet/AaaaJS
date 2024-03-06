var array = [];
var h=-1

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

	//Create a text label and add it to layout.
	txt = app.CreateText( "Hello" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	controlloRicorsivo(68)
	
/*	
	if(a==1){ alert("a1"); break
	
	
	if(a==2){ alert("a2")

	if(a==3){ alert("a3")  
	
	}else{alert("b1")}

	  }else{alert("b2")}
	
	
	  }else{alert("b1")}
	  
*/
	
	  	  	  	  }
	
	  
function controlloRicorsivo(A){
   if( A > 33.3 ){
     array.push(33.3);
     B = A - 33.3;
     controlloRicorsivo(B)
   }else{
     array.push(A)
   }
   h++
  alert("  "+h+"  "+array[h]) 
}
	  	  