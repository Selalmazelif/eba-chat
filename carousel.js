let banner=document.getElementById("bannerSlider");
let index=0;

setInterval(()=>{
 index=(index+1)%4;
 banner.style.transform=`translateX(-${index*100}%)`;
},4000);