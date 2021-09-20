let Grid = [], scale, character, win, winChar, size;

function setup()
{
  	createCanvas(400, 400);
	CreateGrid();
}

function draw()
{
  
  	if (keyIsPressed && (key == "r" || key == "R")) CreateGrid();
  
  	if (!win)
    {
  
     background(255);   
      
	if (mouseIsPressed)
    {
      if (mouseX >= scale && mouseX <= 4 * scale &&
          mouseY >= scale && mouseY <= 4 * scale)
      	{
      		
      		let i = (mouseY - mouseY % scale) / scale;
            let j = (mouseX - mouseX % scale) / scale;
          	if (Grid[i][j] == "empty")
            {
              	Grid[i][j] = character;
              	--size;
          		if (character == "X") character = "0";
          		else if (character == "0") character = "X";
              
              	CheckGrid();
              	if (!win && size == 0) 
                {
                	win = true;
                  	winChar = "Remiza";
                }
            }
          
      	}	
     }
      
       DrawGrid();
      
    }
  
  	else
    {
      textSize(30);
      stroke(0, 0, 255);
      text(winChar, 50, 50);
    }

}

function CreateGrid()
{
  	scale = 80;
  	character = "X";
  	size = 3 * 3;
  	win = false;
  
	for (let i = 1; i <= 3; i++)
    {
    	Grid[i] = [];
      	for (let j = 1; j <= 3; j++)
          	Grid[i][j] = "empty";
    }	
  
}

function CheckGrid()
{

  	win = false;
	for (let i = 1; !win && i <= 3; i++)
    {
	  win = true;
      for (let j = 1; win && j < 3; j++)
      {
      	if (Grid[i][j] != Grid[i][j + 1] || Grid[i][j] == "empty") 
          win = false;
      }
      
        	if (win) winChar = Grid[i][1];
    }
  

  
	for (let j = 1; !win && j <= 3; j++)
    {
	  win = true;
      for (let i = 1; win && i < 3; i++)
      {
      	if (Grid[i][j] != Grid[i + 1][j] || Grid[i][j] == "empty") 
          win = false;
      }
      
      if (win) winChar = Grid[1][j];
    }
  
  	if (!win)
    {
    	win = true;
  		for (let i = 1; win && i < 3; i++)
    	{
      		if (Grid[i][i] != Grid[i + 1][i + 1] || Grid[i][i] == "empty")
          	win = false;
   	    }
      
      if (win) winChar = Grid[1][1];
    }
  
  	if (!win)
    {
    	win = true;
  		for (let i = 1; win && i < 3; i++)
    	{
      		if (Grid[i][3 - i + 1] != Grid[i + 1][3 - (i + 1) + 1] 
               || Grid[i][3 - i + 1] == "empty")
          	win = false;
   	    }
      
      	if (win) winChar = Grid[2][2];
    }

}

function DrawGrid()
{

	for (let i = 1; i <= 3; i++)
      	for (let j = 1; j <= 3; j++)
        {
          	fill(255);
          	stroke(0);
          	strokeWeight(1);
          	rect(j * scale, i * scale, scale, scale);
          	
          	if (Grid[i][j] != "empty")
            {
               noFill();
               if (Grid[i][j] == "X") stroke(255, 0, 0);
               else if (Grid[i][j] == "0") stroke(0, 255, 0);
               textSize(scale);
               text (Grid[i][j], j * scale + 10, (i + 1) * scale - 10); 
            }
        }
}
