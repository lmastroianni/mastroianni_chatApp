TweenLite.set('.introline, .greensock',{x:'-101%'})

var lines = new TimelineMax({repeat:0, repeatDelay:1})
.from('.wrapper',0.4,{x:100})
.to('.introline',1,{x:'0%',ease: Linear.easeNone})
.to('.greensock',0.6,{x:'0%',ease: Linear.easeNone})
.add("sock", "+=0.3")
.to('.sock',0.4,{x:'123%',ease: Elastic.easeOut.config(1, 0.3)}, "sock")
.to('.sockOne',0.4,{x:'+123%', ease: Elastic.easeOut.config(1, 0.3)}, "sock")
.to('.sockOne',0.1,{x:'2', y:'+1px', repeat:5,yoyo:true, ease: Elastic.easeOut.config(1, 0.3)}, "sock+=0.5")

