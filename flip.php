<link rel="stylesheet" type="text/css" href="css/metro.css">
<h1>Flip Mode Simple</h1>
<div class="tiles red">
    <div class="live-tile" data-mode="flip" data-initdelay="500">        
        <!-- adding the 'full' class to an 'img' or 'a' tag causes it to fill the entire tile -->
        <div>
            <a class="full" href="#">front</a>
            <span class="tile-title">front title</span>
        </div>
        <div>
            <p>this tile flips vertically. Using the 'data-initdelay' attribute will adjust the time it takes for the inital flip to occur</p>
            <span class="tile-title">back title</span>
        </div>
    </div>
    <div class="live-tile blue" data-direction="horizontal" data-mode="flip">     
        <div>front
              <span class="tile-title">front title</span>
        </div>
        <div>
            <p>this tile flips horizontally
               <span class="tile-title">back title</span>
            </p>
        </div>
    </div>
</div>
<script type="text/javascript" src="js/jquery-min.js"></script>
<script type="text/javascript" src="js/metrojs.js"></script>
<!-- Activate live tiles -->
<script type="text/javascript">
    // apply regular slide universally unless .exclude class is applied 
    // NOTE: The default options for each liveTile are being pulled from the 'data-' attributes
    $(".live-tile").liveTile();
</script>