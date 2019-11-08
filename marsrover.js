// Rover Object Goes Here
// ======================
const rover = {
    direction: "N",
    roverPositionX: 0,
    roverPositionY: 0
  }
  // ======================
  function turnLeft(roverDirection){
    switch(rover.direction){
      case 'N':
        roverDirection= 'W'; break;
      case 'W':
        roverDirection= 'S'; break;
      case 'S':
        roverDirection= 'E'; break;
      case 'E':
        roverDirection= 'N'; break;
    }
    console.log("turnLeft was called!");
  }
  function turnRight(roverDirection){
    switch(rover.direction){
      case 'N':
        roverDirection= 'E'; break;
      case 'E':
        roverDirection= 'S'; break;
      case 'S':
        roverDirection= 'W'; break;
      case 'W':
        roverDirection= "N"; break;
    }
    console.log("turnRight was called!");
  }
  function moveForward(roverPosition){
    switch(rover.position){
      case 'N':
        roverPosition= roverPositionY -= 1; break;
      case 'E':
        roverPosition= roverPositionX += 1; break;
      case 'S':
        roverPosition= roverPositionY += 1; break;
      case 'W':
        roverPosition= roverPositionX -= 1; break;
    }
    console.log("moveForward was called")
  }
  turnLeft(rover)
  
  // Iteration 4
  function roverCommands(command) {
    if (command === "f")
    return moveForward(roverPosition);
    else if (command === "r") 
    return turnRight(roverDirection);
    else (command === "l") 
    return turnLeft(roverDirection)
  };