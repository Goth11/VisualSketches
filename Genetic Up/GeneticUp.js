let players = [], limit = 100, moveindex = 1, r, bestmoves = [], bestind = 0, bestdist = 0, movelimit, generation = 0, lastDist = 0;

function setup()
{
    createCanvas(800, 800);
    r = int(min(width, height) / 64);
    movelimit = height * 2;
    textSize(min(width, height) / 30);

    for (let i = 0; i < limit; ++i)
    {
      players[i] = 
      {
          x: width / 2,
          y: height - r,
          movements: []
      }
    }
}

function draw()
{
  for (let i1 = 1; i1 <= 25; ++i1)
  {
    background(0);
    fill(255, 150);
    noStroke();
  
    for (let i = 0; i < limit; ++i)
    {
        players[i].movements[moveindex] =
        {
            x: int(random(-2, 2)),
            y: int(random(-2, 2))
        }

        if (generation != 0)
        {
            let chance = random();
            if (chance <= 0.75)
            {
              players[i].movements[moveindex].x = bestmoves[moveindex].x;
              players[i].movements[moveindex].y = bestmoves[moveindex].y;
            }
        }

        players[i].x += players[i].movements[moveindex].x;
        players[i].y += players[i].movements[moveindex].y;

        if (players[i].x - r < 0 || players[i].x + r > width)
          players[i].x -= players[i].movements[moveindex].x;

        if (players[i].y - r < 0 || players[i].y + r > height)
          players[i].y -= players[i].movements[moveindex].y;

        ellipse(players[i].x, players[i].y, r * 2, r * 2);
    }
  
    fill(0, 255, 0);
    text("Generation: " + generation, 0, height / 10);
    
    let percent = int(map(moveindex, 1, movelimit, 0, 100));
    let lifetime = "";
    for (let i1 = 1; i1 <= percent / 10; ++i1)
      lifetime += char(9646);
    for (let i1 = 10; i1 > percent / 10; --i1)
      lifetime += char(9647);
    text("Lifetime: " + lifetime, 0, height / 7.15);
    
    let distP = toPercentage(bestdist);
    text("Best distance overall: " + distP + "%", 0, height / 5.5);
    
    let lastdistP = toPercentage(lastDist);
    let change = toPercentage(distP - lastdistP);
    text("Upwards change: " +  change + "%", 0, height / 4.5);
  
    ++moveindex;
    if (moveindex > movelimit)
    { 
        lastDist = bestdist;
        let better = 0;
        for (let i = 0; i < limit; i++)
        {  
          if (height - players[i].y > bestdist)
          {
            bestdist = height - players[i].y;
            bestind = i;
            if (better == 0)
              better = 1;
          }   

          players[i].x = width / 2;
          players[i].y = height - r;
        }

       if (better == 1)
       {
         for (let i = 1; i <= movelimit; ++i)
         {
                bestmoves[i] = 
                  {
                      x: players[bestind].movements[i].x,
                      y: players[bestind].movements[i].y
                  };

          }
       }
          moveindex = 1; //bestdist = -1;
          ++generation;
    }
  }
}

function toPercentage(x)
{
    x = map(x, 0, height, 0, 100);
    x = float(int(x * 100)) / 100.0;
    return x;
}
