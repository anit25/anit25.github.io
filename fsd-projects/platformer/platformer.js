$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,200,100,20);
    createPlatform(200,400,100,20);
    createPlatform(900,400,100,20);
    createPlatform(200,600,100,20);
    createPlatform(100,700,100,20);
    createPlatform(700,500,100,20);
    createPlatform(1200,300,100,20);
    createPlatform(850,1100,100,20);
    createPlatform(400,500,100,20);
    createPlatform(1100,600,100,20);
    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("kennedi", 700, 500);
    createCollectable("steve", 1200, 300);
    createCollectable("grace",1000,200);
    createCollectable("max",600,400);


    
    // TODO 4 - Create Cannons
    createCannon("right", 300,2000);
    createCannon("top",800, 500);
    createCannon("left", 500, 1600);
 
  



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
