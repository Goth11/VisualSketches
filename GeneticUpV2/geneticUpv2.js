function initializeIndividual() {
  return {
    x: random(width),
    y: height,
    vx: random(vmin, vmax),
    vy: random(vmin, vmax)
  };
}

function initializePopulation() {
  population = [];
  for (let i = 0; i < populationSize; i++) {
    population.push(initializeIndividual(vmin, vmax));
  }
}

function drawBestPosition() {
  if (bestGenerationPosition != Infinity) {
    stroke(255, 0, 0);
    line(0, bestGenerationPosition, width, bestGenerationPosition);
  }
  
  if (bestPosition != Infinity) {
    stroke(0, 255, 0);
    line(0, bestPosition, width, bestPosition);
  }
}

function drawPopulation() {
  noStroke();
  fill(255, 180);
  for (const individual of population) {
    circle(individual.x, individual.y, r);
  }
}

function updatePopulation() {
  let randomFactor = 3.75;
  for (let i = 0; i < population.length; i++) {
    population[i].x += population[i].vx + random(vmin / randomFactor, vmax / randomFactor);
    population[i].y += population[i].vy + random(vmin / randomFactor, vmax / randomFactor);
  }
}

function evaluateIndividualFitness(individual) {
  return individual.x >= 0 && individual.x < width ? 
                      individual.y : Infinity;
}

function evaluateFitness() {
  fitnessScores = [];
  for (const individual of population) {
    fitnessScores.push(evaluateIndividualFitness(individual));
  }
}

function selectParents() {
  parent1Ind = -1;
  parent2Ind = -1;
  while (parent1Ind == -1 || parent2Ind == -1) {
    for (let i = 0; i < population.length; i++) {
      if (parent1Ind != i && parent2Ind != i) {
        selectionChance = 1 - constrain(fitnessScores[i], 0.001, 0.999);
        if (selectionChance > random()) {
          if (parent1Ind == -1) {
            parent1Ind = i;
          }
          else {
            parent2Ind = i;
            break;
          }
        }
      }
    }
  }
}

function crossover() {
  offspring = {
    x: null,
    y: null,
    vx: null,
    vy: null
  };
  
  const parent1 = population[parent1Ind];
  const parent2 = population[parent2Ind];
  const alpha = random();
  
  offspring.vx = alpha * (parent1.vx - parent2.vx) + parent2.vx;
  offspring.vy = alpha * (parent1.vy - parent2.vy) + parent2.vy;
}

function mutate() {
  if (mutationRate > random()) {
    const change = random(vmin * 2, vmax * 2);
    if (random() > 0.5)
      offspring.vx += change;
    else
      offspring.vy += change;
  }
}

function selection() {
  const parent1Fitness = fitnessScores[parent1Ind];
  const parent2Fitness = fitnessScores[parent2Ind];
  const offspringFitness = evaluateIndividualFitness(offspring);
  if (parent1Fitness > parent2Fitness && parent1Fitness > offspringFitness) {
    population[parent1Ind] = offspring;
  }
  else if (parent2Fitness > offspringFitness) {
    population[parent2Ind] = offspring;
  }
}

function positionRestart() {
  bestGenerationPosition = Infinity;
  for (let i = 0; i < population.length; i++) {
    if (population[i].y && population[i].y < bestPosition)
      bestPosition= population[i].y;
    if (population[i].y && population[i].y < bestGenerationPosition)
      bestGenerationPosition = population[i].y;
    population[i].x = random(width);
    population[i].y = height;
  }
}

function iterateGeneration() {
  evaluateFitness();
  selectParents();
  crossover();
  mutate();
  selection();
  positionRestart();
}

var population, populationSize, vmin, vmax, fitnessScores, parent1Ind, parent2Ind,
    offspring, mutationRate, r, bestPosition = Infinity,
    bestGenerationPosition = Infinity;

function setup() {
  createCanvas(600, 600);
  populationSize = 200;
  vmin = -2;
  vmax = 2;
  mutationRate = 0.2;
  r = min(width, height) / 40;
  initializePopulation();
}

function draw() {
  background(0);
  drawBestPosition();
  drawPopulation();
  updatePopulation();
  if (frameCount % 200 == 0) {
    iterateGeneration();
  }
}
