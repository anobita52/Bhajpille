  diffTimer=0;
  particles=[];textPops=[];
  plr={laneVis:0,legPhase:0,attackTimer:0,attackType:null,hitTimer:0,state:'run',faceImgTimer:0};
  updateMobileScale();
  runner={
    lane:0,
    legPhase:Math.random()*Math.PI*2,
    state:'run',
    attackType:null,
    faceImgTimer:0,
    faceBlend:0,
    dash:null,
    renderX:W/2,
    renderY:H*0.8,
    renderSc:1.75*mobileScale
  };
  const b=basePoseForRunner(runner);
  runner.renderX=b.x;runner.renderY=b.y;runner.renderSc=b.sc;
  preloadFaceImgs();
  screenShake={x:0,y:0,timer:0,str:0};slowMoTimer=0;
  engageEnemy=null;engageAlert=false;

  document.getElementById('gameWrap').style.display='block';
  document.getElementById('controls').style.display='flex';
  document.getElementById('hud').style.display='flex';
  document.getElementById('swipeArea').style.display='none';
  document.getElementById('hitCount').textContent='0';
  document.getElementById('scoreCount').textContent='0';
  document.getElementById('comboBar').style.display='none';
  document.getElementById('engageAlert').style.display='none';

  startBgMusic();
  initWorld();loop();
}
