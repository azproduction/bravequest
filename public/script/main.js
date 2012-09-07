// -- CONFIGURATION -------------
var CFG_ENABLE_SOUND = true;
var CFG_ENABLE_PRELOAD = true;
var CFG_SCREEN_WIDTH = 800;
var CFG_SCREEN_HEIGHT = 600;
var CFG_SCREEN_OFFSET_LEFT = 50;
var CFG_SCREEN_OFFSET_RIGHT = 50;
var CFG_SCREEN_OFFSET_BOTTOM = 100;
var CFG_SCALE = 3; //1:1 is 1
// -- CONSTANTS -----------------
// -- HERO DEFAULTS -------------
var _DEFAULT_HP = 150;
var _DEFAULT_MP = 50;

var _DEFAULT_MHP = 150;
var _DEFAULT_MMP = 50;

var _DEFAULT_ICE = 1;
var _DEFAULT_FIR = 1;
var _DEFAULT_WAT = 1;
var _DEFAULT_THU = 1;

var _DEFAULT_ATK = 5;
var _DEFAULT_MAT = 5;
var _DEFAULT_POW = 5;
var _DEFAULT_WIS = 5;
var _DEFAULT_MAX_LOGIC = 6;
var _DEFAULT_TATK = 5;
var _DEFAULT_TDEFMUL = 1;
var _DEFAULT_PDEFMUL = 1;
// -- IDS ----------------------
var _ID_HP = 0;
var _ID_MP = 1;

var _ID_MHP = 2;
var _ID_MMP = 3;

var _ID_ICE = 4;
var _ID_FIR = 5;
var _ID_WAT = 6;
var _ID_THU = 7;

var _ID_ATK = 8;
var _ID_MAT = 9;
var _ID_POW = 10;
var _ID_WIS = 11;

var _ID_ENA = 12;
var _ID_CAS = 13;
var _ID_ACT = 14;

var _ID_SIDE = 15;
var _ID_NAME = 16;

var _ID_IMAGE = 17;

var _ID_TATK = 18;

var _ID_TDEFMUL = 19;
var _ID_PDEFMUL = 20;
var _ID_SUPPORT = 21;
var _ID_LEVEL = 22;
// -----------------------------
var ACT_STAND = 0;
var ACT_CAST = 1;
var ACT_WALK = 2;
var ACT_ATTACK = 3;
// -- ACTION & CASE LISTS ------
var case_enable_list = [];
var case_list = [];
var case_name_list = [];
case_list[0] = 'true';                                          case_name_list[0] = 'Без условия'; case_enable_list[0] = true;
case_list[1] = 'performer[_ID_HP]<=(performer[_ID_MHP]*0.75)';  case_name_list[1] = 'У меня менее 75% жизни'; case_enable_list[1] = true;
case_list[2] = 'performer[_ID_HP]<=(performer[_ID_MHP]*0.5)';   case_name_list[2] = 'У меня менее 50% жизни'; case_enable_list[2] = true;
case_list[3] = 'performer[_ID_HP]<=(performer[_ID_MHP]*0.25)';  case_name_list[3] = 'У меня менее 25% жизни'; case_enable_list[3] = true;
case_list[4] = 'victim[_ID_HP]<=(victim[_ID_MHP]*0.75)';        case_name_list[4] = 'У врага менее 75% жизни'; case_enable_list[4] = true;
case_list[5] = 'victim[_ID_HP]<=(victim[_ID_MHP]*0.5)';         case_name_list[5] = 'У врага менее 50% жизни'; case_enable_list[5] = true;
case_list[6] = 'victim[_ID_HP]<=(victim[_ID_MHP]*0.25)';        case_name_list[6] = 'У врага менее 25% жизни'; case_enable_list[6] = true;
case_list[7] = 'victim[_ID_ICE]>1';                             case_name_list[7] = 'Враг опасается льда'; case_enable_list[7] = false;
case_list[8] = 'victim[_ID_FIR]>1';                             case_name_list[8] = 'Враг опасается огня'; case_enable_list[8] = false;
case_list[9] = 'victim[_ID_WAT]>1';                             case_name_list[9] = 'Враг опасается воды'; case_enable_list[9] = false;
case_list[10] = 'victim[_ID_THU]>1';                            case_name_list[10] = 'Враг опасается молнии'; case_enable_list[10] = false;
case_list[11] = 'performer[_ID_MP]<=(performer[_ID_MMP]*0.75)'; case_name_list[11] = 'У меня менее 75% манны'; case_enable_list[11] = true;
case_list[12] = 'performer[_ID_MP]<=(performer[_ID_MMP]*0.5)';  case_name_list[12] = 'У меня менее 50% манны'; case_enable_list[12] = true;
case_list[13] = 'performer[_ID_MP]<=(performer[_ID_MMP]*0.25)'; case_name_list[13] = 'У меня менее 25% манны'; case_enable_list[13] = true;
//case_list[14] = '';case_name_list[14] = '';
var action_enable_list = [];
var action_list = [];
var action_name_list = [];
action_list[0] = 'attack(performer,victim)';        action_name_list[0] = 'Атаковать врага'; action_enable_list[0] = true;
action_list[1] = 'self_heal(performer,1)';          action_name_list[1] = 'Лечить себя 1ур - 10mp'; action_enable_list[1] = true;
action_list[2] = 'self_heal(performer,2)';          action_name_list[2] = 'Лечить себя 2ур - 20mp'; action_enable_list[2] = false;
action_list[3] = 'self_heal(performer,3)';          action_name_list[3] = 'Лечить себя 3ур - 30mp'; action_enable_list[3] = false;
action_list[4] = 'ice(performer,victim,1)';         action_name_list[4] = 'Лёд 1ур - 10mp'; action_enable_list[4] = true;
action_list[5] = 'ice(performer,victim,2)';         action_name_list[5] = 'Лёд 2ур - 20mp'; action_enable_list[5] = false;
action_list[6] = 'ice(performer,victim,3)';         action_name_list[6] = 'Лёд 3ур - 30mp'; action_enable_list[6] = false;
action_list[7] = 'fire(performer,victim,1)';        action_name_list[7] = 'Огонь 1ур - 10mp'; action_enable_list[7] = true;
action_list[8] = 'fire(performer,victim,2)';        action_name_list[8] = 'Огонь 2ур - 20mp'; action_enable_list[8] = false;
action_list[9] = 'fire(performer,victim,3)';        action_name_list[9] = 'Огонь 3ур - 30mp'; action_enable_list[9] = false;
action_list[10] = 'water(performer,victim,1)';      action_name_list[10] = 'Вода 1ур - 10mp'; action_enable_list[10] = true;
action_list[11] = 'water(performer,victim,2)';      action_name_list[11] = 'Вода 2ур - 20mp'; action_enable_list[11] = false;
action_list[12] = 'water(performer,victim,3)';      action_name_list[12] = 'Вода 3ур - 30mp'; action_enable_list[12] = false;
action_list[13] = 'thunder(performer,victim,1)';    action_name_list[13] = 'Молния 1ур - 10mp'; action_enable_list[13] = true;
action_list[14] = 'thunder(performer,victim,2)';    action_name_list[14] = 'Молния 2ур - 20mp'; action_enable_list[14] = false;
action_list[15] = 'thunder(performer,victim,3)';    action_name_list[15] = 'Молния 3ур - 30mp'; action_enable_list[15] = false;
action_list[16] = 'throwitem(performer,victim,1)';  action_name_list[16] = 'Бросить сюрикен'; action_enable_list[16] = true;
action_list[17] = 'throwitem(performer,victim,2)';  action_name_list[17] = 'Бросить веер'; action_enable_list[17] = false;
action_list[18] = 'throwitem(performer,victim,3)';  action_name_list[18] = 'Бросить копьё'; action_enable_list[18] = false;
//action_list[16] = '';action_name_list[16] = '';
// -- VARIABLES ----------------
// -- HERO ---------------------

var hero = [];
hero[_ID_HP] = _DEFAULT_HP;
hero[_ID_MP] = _DEFAULT_MP;

hero[_ID_MHP] = _DEFAULT_MHP;
hero[_ID_MMP] = _DEFAULT_MMP;

hero[_ID_ICE] = _DEFAULT_ICE;
hero[_ID_FIR] = _DEFAULT_FIR;
hero[_ID_WAT] = _DEFAULT_WAT;
hero[_ID_THU] = _DEFAULT_THU;

hero[_ID_ATK] = _DEFAULT_ATK;
hero[_ID_MAT] = _DEFAULT_MAT;
hero[_ID_POW] = _DEFAULT_POW;
hero[_ID_WIS] = _DEFAULT_WIS;

hero[_ID_SIDE] = 'hero';
hero[_ID_NAME] = 'alicia';
hero[_ID_IMAGE] = 1;

hero[_ID_TATK] = _DEFAULT_TATK;

hero[_ID_TDEFMUL] = _DEFAULT_TDEFMUL;
hero[_ID_PDEFMUL] = _DEFAULT_PDEFMUL;
hero[_ID_SUPPORT] = 0;
hero[_ID_LEVEL] = 1;

var hero_enable = [];
var hero_case = [];
var hero_action = [];

hero_enable[0] = true;
  hero_case[0] = 2;//'(performer[_ID_HP]<=(performer[_ID_MHP]*0.5))';
hero_action[0] = 1;//'self_heal(performer,1)';

hero_enable[1] = true;
  hero_case[1] = 0;//'(true)';
hero_action[1] = 4;//'ice(performer,victim,1)';

hero_enable[2] = true;
  hero_case[2] = 0;//'(true)';
hero_action[2] = 0;//'attack(performer,victim)';

hero_enable[3] = false;
  hero_case[3] = 0;
hero_action[3] = 0;
  
hero_enable[4] = false;
  hero_case[4] = 0;
hero_action[4] = 0;
  
hero_enable[5] = false;
  hero_case[5] = 0;
hero_action[5] = 0;

hero[_ID_ENA] = hero_enable;
hero[_ID_CAS] = hero_case;
hero[_ID_ACT] = hero_action;
// -- ENEMY --------------------
var enemy = [];
enemy[_ID_HP] = _DEFAULT_HP;
enemy[_ID_MP] = _DEFAULT_MP;

enemy[_ID_MHP] = _DEFAULT_MHP;
enemy[_ID_MMP] = _DEFAULT_MMP;

enemy[_ID_ICE] = _DEFAULT_ICE+1;
enemy[_ID_FIR] = _DEFAULT_FIR;
enemy[_ID_WAT] = _DEFAULT_WAT;
enemy[_ID_THU] = _DEFAULT_THU;

enemy[_ID_ATK] = _DEFAULT_ATK;
enemy[_ID_MAT] = _DEFAULT_MAT;
enemy[_ID_POW] = _DEFAULT_POW;
enemy[_ID_WIS] = _DEFAULT_WIS;

enemy[_ID_SIDE] = 'enemy';
enemy[_ID_NAME] = 'alicia';
enemy[_ID_IMAGE] = 6;

enemy[_ID_TATK] = _DEFAULT_TATK;

enemy[_ID_TDEFMUL] = _DEFAULT_TDEFMUL;
enemy[_ID_PDEFMUL] = _DEFAULT_PDEFMUL;

var enemy_enable = [];
var enemy_case = [];
var enemy_action = [];
enemy_enable[0] = true;
  enemy_case[0] = 2;//'(performer[_ID_HP]<=(performer[_ID_MHP]*0.5))';
enemy_action[0] = 2;//'self_heal(performer,2)';

enemy_enable[1] = true;
  enemy_case[1] = 0;//'(true)';
enemy_action[1] = 15;//'thunder(performer,victim,3)';

enemy_enable[2] = true;
  enemy_case[2] = 0;//'(true)';
enemy_action[2] = 0;//'attack(performer,victim)';

enemy_enable[3] = false;
  enemy_case[3] = 0;
enemy_action[3] = 0;
  
enemy_enable[4] = false;
  enemy_case[4] = 0;
enemy_action[4] = 0;
  
enemy_enable[5] = false;
  enemy_case[5] = 0;
enemy_action[5] = 0;

enemy[_ID_ENA] = enemy_enable;
enemy[_ID_CAS] = enemy_case;
enemy[_ID_ACT] = enemy_action;
// -- SYSTEM -------------------
var can_act = false;
var win = false;
var loose = false;
var currentStoryLineID = 0;
var checkPointStoryLineID = 0;
// -- FUNCTIONS ----------------
// -- LAYOUT FUNCTIONS ---------
function show_hero_params(){
  if (hero[_ID_HP]<0){hero[_ID_HP] = 0;}
  $('hero_hp').innerHTML=hero[_ID_HP]+'/'+hero[_ID_MHP];
  $('hero_mp').innerHTML=hero[_ID_MP]+'/'+hero[_ID_MMP];
  $('hero_hp_line').style.width = 200 * hero[_ID_HP]/hero[_ID_MHP];
  $('hero_mp_line').style.width = 200 * hero[_ID_MP]/hero[_ID_MMP];
}

function show_enemy_params(){
  if (enemy[_ID_HP]<0){enemy[_ID_HP] = 0;}
  $('enemy_hp').innerHTML=enemy[_ID_HP]+'/'+enemy[_ID_MHP];
  $('enemy_mp').innerHTML=enemy[_ID_MP]+'/'+enemy[_ID_MMP];
  $('enemy_hp_line').style.width = 200 * enemy[_ID_HP]/enemy[_ID_MHP];
  $('enemy_mp_line').style.width = 200 * enemy[_ID_MP]/enemy[_ID_MMP];
}

function show_all_params(){
  show_hero_params();
  show_enemy_params();
}

function gameover(){
  /*loose = true;
  win = false;*/
  loose = false;
  win = true;
  can_act = false;
  new Effect.Fade('hero_image',{from:1.0,to:0.0,duration:2.0});
  //$('hero_image').style.display = 'none';
  currentStoryLineID = checkPointStoryLineID;
  dialog_show(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_CHAR_NAME],'Я проиграл...',300,200);
}

function victory(){
  loose = false;
  win = true;
  can_act = false;
  new Effect.Fade('enemy_image',{from:1.0,to:0.0,duration:2.0});
  dialog_show(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_CHAR_NAME],'Победа!!!',300,200);
  playBGSound(12);
  /*if (CFG_ENABLE_SOUND){
    Sound.play('public/music/'+OBJ_BGSOUND[12][1],{replace:false,queue:'end'});
  }*/
}

function log_add(value){
  $('log').innerHTML+=value+'<br />';
}

function log_clear(value){
  $('log').innerHTML='';
}

function display_damage(victim,value){
  if (victim[_ID_SIDE]=='hero'){
    $('damage_index').style.left=CFG_SCREEN_OFFSET_LEFT+OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE/2-40;
    $('damage_index').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_CAST][2]*CFG_SCALE;
    if (value<0){
      $('damage_index').innerHTML='<b class="damage">'+value+'</b>';
    }
    if (value==0){
      $('damage_index').innerHTML='<b class="heal">Иммун</b>';
    }
    if (value>0){
      $('damage_index').innerHTML='<b class="heal">+'+value+'</b>';
    }
    new Effect.Move('damage_index',{
      y:-100,
      x:0,
      duration:0.9
    });
    new Effect.Opacity('damage_index',{
      from:1.0,
      to:0.0,
      duration:0.9
    });
  }else{
    $('damage_index').style.left=CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_RIGHT-OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE/2-40;
    $('damage_index').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_CAST][2]*CFG_SCALE;
    if (value<0){
      $('damage_index').innerHTML='<b class="damage">'+value+'</b>';
    }
    if (value==0){
      $('damage_index').innerHTML='<b class="heal">Иммун</b>';
    }
    if (value>0){
      $('damage_index').innerHTML='<b class="heal">+'+value+'</b>';
    }
    new Effect.Move('damage_index',{
      y:-100,
      x:0,
      duration:0.9
    });
    new Effect.Opacity('damage_index',{
      from:1.0,
      to:0.0,
      duration:0.9
    });
  }
}

// -- ACTION FUNCTIONS ---------
function magic_animate_glide(caster,magic_id){
  if (caster[_ID_SIDE]=='hero'){
    draw_character(caster,ACT_ATTACK);
    $('action_image').innerHTML='<img src="public/image/'+OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][0]+'" />';
    $('action_image').firstChild.style.width=OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][1]*CFG_SCALE;
    $('action_image').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-150;
    $('action_image').style.left=CFG_SCREEN_OFFSET_LEFT+(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE)/2;
    new Effect.Move('action_image',{
      x:(CFG_SCREEN_WIDTH-OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][1]*CFG_SCALE-CFG_SCREEN_OFFSET_LEFT-CFG_SCREEN_OFFSET_RIGHT-(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE)/2-(OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE)/2),
      y:0,
      duration:0.5
    });
    new Effect.Opacity('action_image',{
      from:1.0,
      to:0.0,
      duration:0.9,
      afterFinishInternal:function(){
        draw_character(caster,ACT_STAND);
        $('action_image').innerHTML='';
      }
    });
  }else{
    draw_character(caster,ACT_ATTACK);
    $('action_image2').innerHTML='<img src="public/image/'+OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][0]+'" />';
    $('action_image2').firstChild.style.width=OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][1]*CFG_SCALE;
    $('action_image2').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-150;
    $('action_image2').style.left=CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_RIGHT-(OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE)/2-(OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][1]*CFG_SCALE)/2;
    new Effect.Move('action_image2',{
      x:-(CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_LEFT-CFG_SCREEN_OFFSET_RIGHT-(OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE)/2-(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE)/2)+(OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][1]*CFG_SCALE)/2,
      y:0,
      duration:0.5
    });
    new Effect.Opacity('action_image2',{
      from:1.0,
      to:0.0,
      duration:0.9,
      afterFinishInternal:function(){
        draw_character(caster,ACT_STAND);
        $('action_image2').innerHTML='';
      }
    });
  }
}

function magic_animate_appear(caster,magic_id){
  if (caster[_ID_SIDE]=='hero'){
    draw_character(caster,ACT_ATTACK);
    $('action_image').innerHTML='<img src="public/image/'+OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][0]+'" />';
    $('action_image').firstChild.style.width=OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][1]*CFG_SCALE;
    $('action_image').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][2]*CFG_SCALE;
    $('action_image').style.left=CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_RIGHT-(OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE)/2-(OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][1]*CFG_SCALE)/2;
    //window.setTimeout('draw_character(caster,ACT_STAND)',1);
    new Effect.Opacity('action_image',{
      from:1.0,
      to:0.0,
      duration:1.2,
      afterFinishInternal:function(){
        draw_character(caster,ACT_STAND);
        $('action_image').innerHTML='';
      }
    });
  }else{
    draw_character(caster,ACT_ATTACK);
    $('action_image2').innerHTML='<img src="public/image/'+OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][0]+'" />';
    $('action_image2').firstChild.style.width=OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][1]*CFG_SCALE;
    $('action_image2').style.top=CFG_SCREEN_HEIGHT-CFG_SCREEN_OFFSET_BOTTOM-OBJ_MAGIC[magic_id][_ID_MAGIC_L_VIEW][2]*CFG_SCALE;
    $('action_image2').style.left=CFG_SCREEN_OFFSET_LEFT+(OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE)/2-(OBJ_MAGIC[magic_id][_ID_MAGIC_R_VIEW][1]*CFG_SCALE)/2;
    new Effect.Opacity('action_image2',{
      from:1.0,
      to:0.0,
      duration:1.2,
      afterFinishInternal:function(){
        draw_character(caster,ACT_STAND);
        $('action_image2').innerHTML='';
      }
    });
  }
}
//------------------------------------------------------------------------------
function attack_animate(attacker){
  if (attacker[_ID_SIDE]=='hero'){
    draw_character(attacker,ACT_ATTACK); 
    new Effect.Move('hero_image',{
      x:CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_RIGHT-CFG_SCREEN_OFFSET_LEFT-OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE-OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE,
      y:0,
      duration:0.7,
      afterFinishInternal:function(){
        $('hero_image').style.left=0;
        draw_character(attacker,ACT_STAND);
      }
    });
  }else{
    draw_character(attacker,ACT_ATTACK);
    new Effect.Move('enemy_image',{
      x:-(CFG_SCREEN_WIDTH-CFG_SCREEN_OFFSET_RIGHT-CFG_SCREEN_OFFSET_LEFT-OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_R_ATTACK][1]*CFG_SCALE-OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_R_STAND][1]*CFG_SCALE),
      y:0,
      duration:0.7,
      afterFinishInternal:function(){
        $('enemy_image').style.left=0;
        draw_character(attacker,ACT_STAND);
      }
    });
  }
}

function attack(attacker,defender){
  defender[_ID_HP]-=Math.round(attacker[_ID_POW]*attacker[_ID_ATK]*defender[_ID_PDEFMUL]);
  attack_animate(attacker);
  display_damage(defender,-Math.round(attacker[_ID_POW]*attacker[_ID_ATK]*defender[_ID_PDEFMUL]));
  return 1500;
}

function self_heal_animate(healer){
  if (healer[_ID_SIDE]=='hero'){
    draw_character(healer,ACT_CAST);
    new Effect.Pulsate('hero_image',{pulses:2,duration:0.9,afterFinishInternal:function(){draw_character(healer,ACT_STAND);}});
  }else{
    draw_character(healer,ACT_CAST);
    new Effect.Pulsate('enemy_image',{pulses:2,duration:0.9,afterFinishInternal:function(){draw_character(healer,ACT_STAND);}});
  }
}

function self_heal(healer,level){
  if (healer[_ID_MP]>=10*level){
    healer[_ID_HP]+=Math.round(healer[_ID_WIS]*healer[_ID_MAT]*3*level);
    healer[_ID_MP]-=10*level;
    if (healer[_ID_HP]>healer[_ID_MHP]){
      healer[_ID_HP]=healer[_ID_MHP];
    }
    // -- ANIMATION ---------------------------------
    self_heal_animate(healer);
    display_damage(healer,Math.round(healer[_ID_WIS]*healer[_ID_MAT]*3*level));
    // ----------------------------------------------
    return 1000;
  }else{
    return 0;
  }
}

//------------------------------------------------------------------------------

function ice(caster,defender,level){
  if (caster[_ID_MP]>=10*level){
    defender[_ID_HP]-=Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_ICE]);
    caster[_ID_MP]-=10*level;
    // -- ANIMATION ---------------------------------
    switch (level){
      case 1:
        magic_animate_glide(caster,3);
      break;
      case 2:
        magic_animate_glide(caster,4);
      break;
      case 3:
        magic_animate_appear(caster,5);
      break;
    }
    display_damage(defender,-Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_ICE]));
    // ----------------------------------------------
    return 1500;
  }else{
    return 0;
  }
}

//------------------------------------------------------------------------------

function fire(caster,defender,level){
  if (caster[_ID_MP]>=10*level){
    defender[_ID_HP]-=Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_FIR]);
    caster[_ID_MP]-=10*level;
    switch (level){
      case 1:
        magic_animate_glide(caster,0);
      break;
      case 2:
        magic_animate_appear(caster,1);
      break;
      case 3:
        magic_animate_appear(caster,2);
      break;
    }
    display_damage(defender,-Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_FIR]));
    return 1500;
  }else{
    return 0;
  }
}

//------------------------------------------------------------------------------

function water(caster,defender,level){
  if (caster[_ID_MP]>=10*level){
    defender[_ID_HP]-=Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_WAT]);
    caster[_ID_MP]-=10*level;
    switch (level){
      case 1:
        magic_animate_glide(caster,9);
      break;
      case 2:
        magic_animate_glide(caster,10);
      break;
      case 3:
        magic_animate_glide(caster,11);
      break;
    }
    display_damage(defender,-Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_WAT]));
    return 1500;
  }else{
    return 0;
  }
}

//------------------------------------------------------------------------------
function thunder(caster,defender,level){
  if (caster[_ID_MP]>=10*level){
    defender[_ID_HP]-=Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_THU]);
    caster[_ID_MP]-=10*level;
    switch (level){
      case 1:
        magic_animate_glide(caster,6);
      break;
      case 2:
        magic_animate_glide(caster,7);
      break;
      case 3:
        magic_animate_appear(caster,8);
      break;
    }
    display_damage(defender,-Math.round(caster[_ID_WIS]*caster[_ID_MAT]*level*defender[_ID_THU]));
    return 1500;
  }else{
    return 0;
  }
}

//------------------------------------------------------------------------------
function throwitem(attacker,defender,level){
  defender[_ID_HP]-=Math.round(attacker[_ID_POW]*attacker[_ID_TATK]*level*defender[_ID_TDEFMUL]);
  switch (level){
    case 1:
      magic_animate_glide(attacker,12);
    break;
    case 2:
      magic_animate_glide(attacker,13);
    break;
    case 3:
      magic_animate_glide(attacker,14);
    break;
  }
  display_damage(defender,-Math.round(attacker[_ID_POW]*attacker[_ID_TATK]*level*defender[_ID_TDEFMUL]));
  return 1500;
}
//------------------------------------------------------------------------------

// -- PERFORM ------------------
function perform(performer,victim){
  var i = 0;
  var wait_time = 0;
  if (performer[_ID_HP]>0){
    for (i=0;i<_DEFAULT_MAX_LOGIC;i++){
      if (performer[_ID_ENA][i]){
        log_add('<i>Try&gt; '+case_name_list[performer[_ID_CAS][i]]+'</i>');
        if (eval(case_list[performer[_ID_CAS][i]])){
          log_add('<b class="ok">Result&gt; '+action_name_list[performer[_ID_ACT][i]]+'</b>');
          if (wait_time = eval(action_list[performer[_ID_ACT][i]])){
            break;
          }else{
            log_add('<b class="not">Result&gt; Not case</b>');
          }
        }else{
          log_add('<b class="not">Result&gt; Not case</b>');
        }
      }
    }
    log_add('<b class="info">Next turn</b><br />');
    if (hero[_ID_HP]<=0){
      gameover();
    }
    if (enemy[_ID_HP]<=0){
      victory();
    }
    show_all_params();
  }
  return wait_time;
}

function turn(){
  if ((can_act)&&(!win)&&(!loose)){
    can_act = false;
    var time = 0;
    window.setTimeout('perform(enemy,hero);',perform(hero,enemy));
    window.setTimeout('can_act = true;',3000);
  }
}
/*
var CFG_SCREEN_WIDTH = 800;
var CFG_SCREEN_HEIGHT = 600;
var CFG_SCREEN_OFFSET_LEFT = 50;
var CFG_SCREEN_OFFSET_RIGHT = 50;
var CFG_SCREEN_OFFSET_BOTTOM = 150;
var CFG_SCALE = 3; //1:1 is 1
*/
function draw_character(character,pose){
  var iindex = character[_ID_IMAGE];
  var ipose = 0;
  if (character[_ID_SIDE]=='hero'){
    switch (pose){
      case (ACT_WALK) :
        ipose = _ID_L_WALK;
      break;
      case (ACT_ATTACK) :
        ipose = _ID_L_ATTACK;
      break;
      case (ACT_STAND) :
        ipose = _ID_L_STAND;
      break;
      case (ACT_CAST) :
        ipose = _ID_L_CAST;
      break;
    }
    //OBJ_CHARACTER[iindex][ipose];
    $('hero_image').innerHTML='<img src="public/image/'+OBJ_CHARACTER[iindex][ipose][0]+
    '" style="top:'+(CFG_SCREEN_HEIGHT-(OBJ_CHARACTER[iindex][ipose][2]*CFG_SCALE)-CFG_SCREEN_OFFSET_BOTTOM)+
    ';left:'+(CFG_SCREEN_OFFSET_LEFT)+
    ';width:'+(OBJ_CHARACTER[iindex][ipose][1]*CFG_SCALE)+'px;'+
    'height:'+(OBJ_CHARACTER[iindex][ipose][2]*CFG_SCALE)+'px;" />';
  }else{
    switch (pose){
      case (ACT_WALK) :
        ipose = _ID_R_WALK;
      break;
      case (ACT_ATTACK) :
        ipose = _ID_R_ATTACK;
      break;
      case (ACT_STAND) :
        ipose = _ID_R_STAND;
      break;
      case (ACT_CAST) :
        ipose = _ID_R_CAST;
      break;
    }
    $('enemy_image').innerHTML='<img src="public/image/'+OBJ_CHARACTER[iindex][ipose][0]+
    '" style="top:'+(CFG_SCREEN_HEIGHT-(OBJ_CHARACTER[iindex][ipose][2]*CFG_SCALE)-CFG_SCREEN_OFFSET_BOTTOM)+
    ';left:'+(CFG_SCREEN_WIDTH-(OBJ_CHARACTER[iindex][ipose][1]*CFG_SCALE)-CFG_SCREEN_OFFSET_RIGHT)+
    ';width:'+(OBJ_CHARACTER[iindex][ipose][1]*CFG_SCALE)+'px;'+
    'height:'+(OBJ_CHARACTER[iindex][ipose][2]*CFG_SCALE)+'px;" />';
  }
}

function begin_battle(){
  win = false;
  loose  = false;
  can_act = true;
  hero[_ID_HP] = hero[_ID_MHP];
  hero[_ID_MP] = hero[_ID_MMP];
  enemy[_ID_HP] = enemy[_ID_MHP];
  enemy[_ID_MP] = enemy[_ID_MMP];
  draw_character(hero,ACT_STAND);
  draw_character(enemy,ACT_STAND);
  $('hero').style.display = '';
  $('enemy').style.display = '';
  $('hero_image').style.display = '';
  $('enemy_image').style.display = '';
  show_all_params();
}
//------------------------------------------------------------------------------
// -- CONSOLE --------------------
function catch_button(value){
  if (window.navigator.appName.match(/opera/i)) {
    if ((value.keyCode==96)||(value.keyCode==1025)){
      if ($('console_h').style.display=='none'){
        $('console_h').style.display='';
      }else{
        $('console_h').style.display='none';
      }
      $('console').value='';
    }
  }else{
    if (value.keyCode==192){
      if ($('console_h').style.display=='none'){
        $('console_h').style.display='';
      }else{
        $('console_h').style.display='none';
      }
      $('console').value='';
    }
  }
}

function catch_button2(value){
  if (value.keyCode==13){
    var command = $('console').value;
    try{
      eval(command);
    }catch(e){
      alert(e);
    }
    $('console').value='';
  }
}
// -- PRELOAD --------------------
function preload(){
  if (CFG_ENABLE_PRELOAD){
    var i=0;
    var j=0;
    var c=0;
    var img = [];
    for (i=0;i<OBJ_CHARACTER.length;i++){
      for (j=1;j<=8;j++){
        c = img.length;
        img[c] = document.createElement("img");
        img[c].setAttribute("src", 'public/image/'+OBJ_CHARACTER[i][j][0]);
      }
    }
    //alert(img.length);
    for (i=0;i<OBJ_MAGIC.length;i++){
      for (j=1;j<=2;j++){
        c = img.length;
        img[c] = document.createElement("img");
        img[c].setAttribute("src", 'public/image/'+OBJ_MAGIC[i][j][0]);
      }
    }
    //alert(img.length);
    for (i=0;i<OBJ_BACKGROUND.length;i++){
      c = img.length;
      img[c] = document.createElement("img");
      img[c].setAttribute("src", 'public/image/'+OBJ_BACKGROUND[i][_ID_BG_VIEW][0]);
    }
    //alert(img.length);
    for (i=0;i<OBJ_ENVIRONMENT.length;i++){
      c = img.length;
      img[c] = document.createElement("img");
      img[c].setAttribute("src", 'public/image/'+OBJ_ENVIRONMENT[i][_ID_ENV_VIEW][0]);
    }
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/button.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/azproduction_logo.jpg');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/ar_l.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/rudy.jpg');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/orb.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/ar_b.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/ar_r.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/mari.jpg');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/alicia.jpg');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/orb_gray.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/ar_t.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/dot.gif');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/start.jpg');
    
    c = img.length;
    img[c] = document.createElement("img");
    img[c].setAttribute("src", 'public/image/interface/crowd_logo.jpg');
    /*for (i=0;i<img.length;i++){ 
      $('frontg-flora').appendChild(img[i]);
    }*/
    //alert($('frontg-flora').innerHTML);
  }
}
// -- SCENE ----------------------
function build_scene(scene_id){
  var i=0;
  
  /*new Effect.Fade('scene',{
    duration:0.5,
    from:1.0,
    to:0.0,
    queue:{
      scope:'changescene',
      position:'end'
    }
  });*/
  
  new Effect.Appear('scene',{
    duration:0.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'changescene',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('backg').style.backgroundImage = 'url("public/image/'+OBJ_BACKGROUND[OBJ_SCENE[scene_id][_ID_SCENE_BG]][_ID_BG_VIEW][0]+'")';
      
      $('backg-flora').innerHTML='';
      for (i=0;i<OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG].length;i++){
        $('backg-flora').innerHTML+='<div style="left:'+OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG][i][2]+';top:'+OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG][i][3]+';position:absolute"><img src="public/image/'+OBJ_ENVIRONMENT[OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG][i][0]][_ID_ENV_VIEW][0]+'" width="'+(OBJ_ENVIRONMENT[OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG][i][0]][_ID_ENV_VIEW][1]*OBJ_SCENE[scene_id][_ID_SCENE_ENV_BG][i][1])+'" /></div>';
      }
      $('frontg-flora').innerHTML='';
      for (i=0;i<OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG].length;i++){
        $('frontg-flora').innerHTML+='<div style="left:'+OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG][i][2]+';top:'+OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG][i][3]+';position:absolute"><img src="public/image/'+OBJ_ENVIRONMENT[OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG][i][0]][_ID_ENV_VIEW][0]+'" width="'+(OBJ_ENVIRONMENT[OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG][i][0]][_ID_ENV_VIEW][1]*OBJ_SCENE[scene_id][_ID_SCENE_ENV_FG][i][1])+'" /></div>';
      }      
    }
  });
}
// -- DIALOG ---------------------
function dialog_show(name,message,x,y){
  new Effect.Appear('baloon',{
    duration:0.5,
    from:0.0,
    to:0.9,
    queue:{
      scope:'dialog',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('baloon').style.left = x;
      $('baloon').style.top = y;
      $('baloon_name').innerHTML = name;
      $('baloon_message').innerHTML = message;
      $('baloon_confirm_btn').disabled = false;
    }
  });
}

function dialog_confirm(){
  $('baloon_confirm_btn').disabled = true;
  new Effect.Fade('baloon',{duration:0.5,from:0.9,to:0.0,queue:{scope:'dialog', position:'end'}});
}

function dialog_show_id(id){
  var _name;
  switch (OBJ_DIALOG[id][0]){
    case '__HERO__':
      _name = OBJ_CHARACTER[hero[_ID_IMAGE]][_ID_CHAR_NAME];
    break;
    case '__ENEMY__':
      _name = OBJ_CHARACTER[enemy[_ID_IMAGE]][_ID_CHAR_NAME];
    break;
    case '__SUPPORT__':
      _name = OBJ_CHARACTER[hero[_ID_SUPPORT]][_ID_CHAR_NAME];
    break;
    default:
      _name = OBJ_DIALOG[id][0];
  }
  dialog_show(_name,OBJ_DIALOG[id][1],OBJ_DIALOG[id][2],OBJ_DIALOG[id][3]);
}
// -- STORYLINE ------------------
function show_line(id){
  // next line element
  if (OBJ_STORYLINE[id][0] == -1){
    currentStoryLineID++;
  }else{
    currentStoryLineID = OBJ_STORYLINE[id][0];
  }
  if (OBJ_STORYLINE[id][1]){
    checkPointStoryLineID = id;
  }
  eval(OBJ_STORYLINE[id][2]);
}
// -- OPENING --------------------
function opening(){
  new Effect.Appear('backg',{
    duration:2.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      playBGSound(0);
      $('backg').style.display='none';
      $('backg').style.backgroundImage = 'url("public/image/interface/azproduction_logo.jpg")';
    }
  });
  
  new Effect.Fade('backg',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  
  new Effect.Appear('backg',{
    duration:2.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('backg').style.backgroundImage = 'url("public/image/interface/crowd_logo.jpg")';
    }
  });
  
  new Effect.Fade('backg',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    afterFinishInternal:function(){
      $('backg').style.backgroundImage = '';
    }
  });

  new Effect.Appear('backg',{
    duration:2.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('backg').style.backgroundImage = 'url("public/image/interface/start.jpg")';
    },
    afterFinishInternal:function(){
      $('backg-flora').innerHTML='<div style="position:absolute;left:30;top:470;"><input type="button" class="startmenu_btn" value="Начать игру" onClick="characterSelect();"/></div>';
      $('backg-flora').innerHTML+='<div style="position:absolute;left:30;top:500;"><input type="button" class="startmenu_btn" value="Продолжить игру" disabled="true"/></div>';
      $('backg-flora').innerHTML+='<div style="position:absolute;left:30;top:530;"><input type="button" class="startmenu_btn" value="Создатели" onClick="staff(false);"/></div>';
    }
  });
  
}

function characterSelect(){
  $('backg-flora').innerHTML='<div style="position:absolute;left:32;top:150;"><img class="hero_image" src="public/image/interface/rudy.jpg" width="224" onMouseOver="describeHero(\'rudy\');" onClick="pickHero(\'rudy\');show_line(currentStoryLineID);" /></div>';
  $('backg-flora').innerHTML+='<div style="position:absolute;left:288;top:150;"><img class="hero_image" src="public/image/interface/alicia.jpg" width="224" onMouseOver="describeHero(\'alicia\');" onClick="pickHero(\'alicia\');show_line(currentStoryLineID);" /></div>';
  $('backg-flora').innerHTML+='<div style="position:absolute;left:544;top:150;"><img class="hero_image" src="public/image/interface/mari.jpg" width="224" onMouseOver="describeHero(\'mari\');" onClick="pickHero(\'mari\');show_line(currentStoryLineID);" /></div>';  
  $('backg-flora').innerHTML+='<div id="hero_description" style="position:absolute;left:32;top:482;width:736"></div>';
}

function describeHero(name){
  switch (name){
    case 'rudy':
      $('hero_description').innerHTML='<h1>Руди</h1>Воин. Имеет высокую силу и много здоровья, но почти ничего не понимает в магии.';
    break;
    case 'alicia':
      $('hero_description').innerHTML='<h1>Алисия</h1>Маг. Сильна в магии, имеет мало здоровья и плохо пользуется оружием.';
    break;
    case 'mari':
      $('hero_description').innerHTML='<h1>Мари</h1>Охотник. Пользуется метательным оружием, хорошо владеет мечем и магией.';
    break;
  }
}

function pickHero(name){
  switch (name){
    case 'rudy':
      hero[_ID_IMAGE] = 2;
      hero[_ID_SUPPORT] = 10;
      hero[_ID_HP] = _DEFAULT_HP*2;
      hero[_ID_MP] = _DEFAULT_MP*1;
      hero[_ID_MHP] = _DEFAULT_MHP*2;
      hero[_ID_MMP] = _DEFAULT_MMP*1;
      hero[_ID_ATK] = _DEFAULT_ATK*1.8;
      hero[_ID_MAT] = _DEFAULT_MAT*1;
      hero[_ID_POW] = _DEFAULT_POW*1.6;
      hero[_ID_WIS] = _DEFAULT_WIS*1;
      hero[_ID_TATK] = _DEFAULT_TATK*0.6;
    break;
    case 'alicia':
      hero[_ID_IMAGE] = 0;
      hero[_ID_SUPPORT] = 9;
      hero[_ID_HP] = _DEFAULT_HP*1;
      hero[_ID_MP] = _DEFAULT_MP*2;
      hero[_ID_MHP] = _DEFAULT_MHP*1;
      hero[_ID_MMP] = _DEFAULT_MMP*2;
      hero[_ID_ATK] = _DEFAULT_ATK*1;
      hero[_ID_MAT] = _DEFAULT_MAT*1.6;
      hero[_ID_POW] = _DEFAULT_POW*1;
      hero[_ID_WIS] = _DEFAULT_WIS*1.6;
      hero[_ID_TATK] = _DEFAULT_TATK*0.6;
    break;
    case 'mari':
      hero[_ID_IMAGE] = 1;
      hero[_ID_SUPPORT] = 8;
      hero[_ID_HP] = _DEFAULT_HP*1.5;
      hero[_ID_MP] = _DEFAULT_MP*1.5;
      hero[_ID_MHP] = _DEFAULT_MHP*1.5;
      hero[_ID_MMP] = _DEFAULT_MMP*1.5;
      hero[_ID_ATK] = _DEFAULT_ATK*1.2;
      hero[_ID_MAT] = _DEFAULT_MAT*1.2;
      hero[_ID_POW] = _DEFAULT_POW*1.4;
      hero[_ID_WIS] = _DEFAULT_WIS*1.2;
      hero[_ID_TATK] = _DEFAULT_TATK*1.2;
    break;
  }
  //show_line(currentStoryLineID);
}

function playBGSound(id){
  if (CFG_ENABLE_SOUND){
    Sound.play('public/music/'+OBJ_BGSOUND[id][1],{replace:true,queue:'end'});
  }
}

function hideStats(){
  $('hero').style.display = 'none';
  $('enemy').style.display = 'none';
}

function show_character(){
  $('hero_image').style.display = '';
  new Effect.Appear('hero_image',{queue:'end'});
}

function hide_character(){
  $('hero_image').style.display = 'none';
}

function show_enemy(){
  $('enemy_image').style.display = '';
  new Effect.Appear('enemy_image',{queue:'end'});
}

function hide_enemy(){
  $('enemy_image').style.display = 'none';
}

function show_support(){
  $('support_image').innerHTML = '<img src="public/image/'+OBJ_CHARACTER[hero[_ID_SUPPORT]][_ID_L_STAND][0]+'" width="'+(OBJ_CHARACTER[hero[_ID_SUPPORT]][_ID_L_STAND][1]*CFG_SCALE)+'" />';
  $('support_image').style.display = '';
}

function hide_support(){
  $('support_image').style.display = 'none';
}

function showActionList(){
  $('actionlist_confirm_btn').disabled = false;
  var re = '';
  $('actionlistcontainer').innerHTML = '';
  for (var i=0;i<6;i++){
    re = '<div id="action_line'+i+'" class="';
    if (hero[_ID_ENA][i]){
      re+='actenabled';
    }else{
      re+='actdisabled';
    }
    re+='"><img src="public/image/interface/dot.gif" width="24" height="24" title="Включить/выкоючить" onClick="switchaction(this.parentNode,'+i+');"/><img src="public/image/interface/ar_l.gif" width="24px" title="Предыдущее условие" onClick="roll_case('+i+',-1);"/><input type="text" id="case_string'+i+'" value="'+case_name_list[hero[_ID_CAS][i]]+'" readonly="readonly"/><img src="public/image/interface/ar_r.gif" width="24px" title="Следующее условие" onClick="roll_case('+i+',1);"/> '+
    '<img src="public/image/interface/ar_l.gif" width="24px" title="Предыдущее действие" onClick="roll_action('+i+',-1);"/><input type="text" id="action_string'+i+'" value="'+action_name_list[hero[_ID_ACT][i]]+'" readonly="readonly"/><img src="public/image/interface/ar_r.gif" width="24px" title="Следующее действие" onClick="roll_action('+i+',1);"/>'+
    '&nbsp;';
    if (i!=0){
      re+='<img src="public/image/interface/ar_t.gif" width="24px" title="Обменять с верхним" onClick="exchange_action('+i+','+(i-1)+');"/>';
    }else{
      re+='<img src="public/image/interface/dot.gif" width="24px" height="24"/>';
    }
    if (i!=5){
      re+='<img src="public/image/interface/ar_b.gif" width="24px" title="Обменять с нижним"  onClick="exchange_action('+i+','+(i+1)+');"/></div>';
    }
    $('actionlistcontainer').innerHTML += re;
  }
  new Effect.Appear('actionlist',{from:0.0,to:0.9});
}

function switchaction(elem,id){
  if (hero[_ID_ENA][id]){
    elem.className = 'actdisabled';
  }else{
    elem.className = 'actenabled';
  }
  hero[_ID_ENA][id]=!hero[_ID_ENA][id];
}

function actionlist_confirm(){
  $('actionlist_confirm_btn').disabled = true;
  new Effect.Fade('actionlist',{duration:0.5,from:0.9,to:0.0,queue:{scope:'dialog', position:'end'}});
}

function roll_case(id,side){
  hero[_ID_CAS][id]+=side;
  if (hero[_ID_CAS][id]<0){
    hero[_ID_CAS][id] = case_list.length-1;
  }
  if (hero[_ID_CAS][id]>=case_list.length){
    hero[_ID_CAS][id] = 0;
  }
  if (case_enable_list[hero[_ID_CAS][id]]){
    $('case_string'+id).value = case_name_list[hero[_ID_CAS][id]];
  }else{
    roll_case(id,side);
  }
}

function roll_action(id,side){
  hero[_ID_ACT][id]+=side;
  if (hero[_ID_ACT][id]<0){
    hero[_ID_ACT][id] = action_list.length-1;
  }
  if (hero[_ID_ACT][id]>=action_list.length){
    hero[_ID_ACT][id] = 0;
  }
  if (action_enable_list[hero[_ID_ACT][id]]){
    $('action_string'+id).value = action_name_list[hero[_ID_ACT][id]];
  }else{
    roll_action(id,side);
  }
}

function exchange_action(id1,id2){
  var _buf = 0;
  _buf = hero[_ID_CAS][id1];
  hero[_ID_CAS][id1] = hero[_ID_CAS][id2];
  hero[_ID_CAS][id2] = _buf; 
  
  _buf = hero[_ID_ENA][id1];
  hero[_ID_ENA][id1] = hero[_ID_ENA][id2];
  hero[_ID_ENA][id2] = _buf; 
  
  _buf = hero[_ID_ACT][id1];
  hero[_ID_ACT][id1] = hero[_ID_ACT][id2];
  hero[_ID_ACT][id2] = _buf;
  
  if (hero[_ID_ENA][id1]){
    $('action_line'+id1).className = 'actenabled';
  }else{
    $('action_line'+id1).className = 'actdisabled';
  }
  
  if (hero[_ID_ENA][id2]){
    $('action_line'+id2).className = 'actenabled';
  }else{
    $('action_line'+id2).className = 'actdisabled';
  }
    
  $('action_string'+id1).value = action_name_list[hero[_ID_ACT][id1]];
  $('case_string'+id1).value =  case_name_list[hero[_ID_CAS][id1]];
  
  $('action_string'+id2).value = action_name_list[hero[_ID_ACT][id2]];
  $('case_string'+id2).value =  case_name_list[hero[_ID_CAS][id2]];
}

function prepare_enemy(id){
  enemy[_ID_HP] = Math.round(OBJ_ENEMYS[id][0][0]*Math.sqrt(hero[_ID_LEVEL]));
  enemy[_ID_MP] = Math.round(OBJ_ENEMYS[id][0][1]*Math.sqrt(hero[_ID_LEVEL]));
  
  enemy[_ID_MHP] = Math.round(OBJ_ENEMYS[id][0][2]*Math.sqrt(hero[_ID_LEVEL]));
  enemy[_ID_MMP] = Math.round(OBJ_ENEMYS[id][0][3]*Math.sqrt(hero[_ID_LEVEL]));
  
  enemy[_ID_ICE] = OBJ_ENEMYS[id][0][4];
  enemy[_ID_FIR] = OBJ_ENEMYS[id][0][5];
  enemy[_ID_WAT] = OBJ_ENEMYS[id][0][6];
  enemy[_ID_THU] = OBJ_ENEMYS[id][0][7];
  
  enemy[_ID_ATK] = Math.round(OBJ_ENEMYS[id][0][8]*Math.sqrt(hero[_ID_LEVEL]));
  enemy[_ID_MAT] = Math.round(OBJ_ENEMYS[id][0][9]*Math.sqrt(hero[_ID_LEVEL]));
  enemy[_ID_POW] = Math.round(OBJ_ENEMYS[id][0][10]*Math.sqrt(hero[_ID_LEVEL]));
  enemy[_ID_WIS] = Math.round(OBJ_ENEMYS[id][0][11]*Math.sqrt(hero[_ID_LEVEL]));
  
  enemy[_ID_SIDE] = 'enemy';
  enemy[_ID_NAME] = 'enemy';
  enemy[_ID_IMAGE] = OBJ_ENEMYS[id][0][13];
  window.status =enemy[_ID_IMAGE]; 
  enemy[_ID_TATK] = Math.round(OBJ_ENEMYS[id][0][14]*Math.sqrt(hero[_ID_LEVEL]));
  
  enemy[_ID_TDEFMUL] = OBJ_ENEMYS[id][0][15];
  enemy[_ID_PDEFMUL] = OBJ_ENEMYS[id][0][16];
  for (var i=0;i<OBJ_ENEMYS[id][1].length;i++){
    enemy[_ID_ENA][i] = OBJ_ENEMYS[id][1][i][0];
    enemy[_ID_CAS][i] = OBJ_ENEMYS[id][1][i][1];
    enemy[_ID_ACT][i] = OBJ_ENEMYS[id][1][i][2];
  }
}

function levelup(){
  //hero[_ID_ATK] = hero[_ID_ATK]*1.2;
  //hero[_ID_MAT] = hero[_ID_MAT]*1.2;
  hero[_ID_POW] = Math.round(hero[_ID_POW]*1.2);
  hero[_ID_WIS] = Math.round(hero[_ID_WIS]*1.2);
  hero[_ID_TATK] = Math.round(hero[_ID_TATK]*1.2);
  hero[_ID_HP] = Math.round(hero[_ID_HP]*1.6);
  hero[_ID_MP] = Math.round(hero[_ID_MP]*1.6);
  hero[_ID_MHP] = Math.round(hero[_ID_MHP]*1.6);
  hero[_ID_MMP] = Math.round(hero[_ID_MMP]*1.6);
  hero[_ID_LEVEL] += 1;
}

function staff(is_end){
  playBGSound(0);
  //$('backg').style.backgroundColor = '#000';
  //$('backg').style.backgroundImage = '';
  $('backg').style.backgroundImage = 'url("public/image/interface/start.jpg")';
  $('backg-flora').innerHTML = '<div id="staff" style="display:none;"></div>';
  $('frontg-flora').innerHTML = '';
  $('hero_image').style.display = 'none';
  $('enemy_image').style.display = 'none';
  $('support_image').style.display = 'none';
  $('baloon').style.display = 'none';
  // Идея, Разработчик, История, Программист битв, Модели персонажей, Локации,  Дизайн персонажей, Дизайн локаций, Музыкальные эффекты, Тестеры
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Идея<br/><b>A.Z.Production</b>';
      $('staff').style.top = 200;
      $('staff').style.left = 200;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Разработчик<br/><b>A.Z.Production</b>';
      $('staff').style.top = 400;
      $('staff').style.left = 400;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'История<br/><b>A.Z.Production</b>';
      $('staff').style.top = 100;
      $('staff').style.left = 400;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Программист<br/><b>A.Z.Production</b>';
      $('staff').style.top = 300;
      $('staff').style.left = 300;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Программист битв<br/><b>A.Z.Production</b>';
      $('staff').style.top = 500;
      $('staff').style.left = 300;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Модели и локации<br/><b>A.Z.Production</b>';
      $('staff').style.top = 500;
      $('staff').style.left = 500;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Дизайн моделей и локаций<br/><b>CROWD</b><br/><b>A.Z.Production</b>';
      $('staff').style.top = 100;
      $('staff').style.left = 400;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = 'Музыкальные эффекты<br/><b>CROWD</b><br/><b>Nobu Uematsu</b>';
      $('staff').style.top = 400;
      $('staff').style.left = 100;
    }
  }); 
  
  new Effect.Fade('staff',{
    duration:2.0,
    from:1.0,
    to:0.0,
    queue:{
      scope:'logo',
      position:'end'
    }
  });
  //----------------------------------------------------------------------------
  if (is_end){
  new Effect.Appear('staff',{
    duration:4.0,
    from:0.0,
    to:1.0,
    queue:{
      scope:'logo',
      position:'end'
    },
    beforeSetupInternal:function(){
      $('staff').innerHTML = '<h1>Конец</h1>';
      $('staff').style.top = 280;
      $('staff').style.left = 320;
    }
  }); 
  //----------------------------------------------------------------------------
  }else{
    opening();
  }
}

function custom_animation(id){
  if (id==0){
    new Effect.Fade('enemy_image',{
      duration:0.5,
      from:1.0,
      to:0.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Appear('enemy_image',{
      duration:0.5,
      from:0.0,
      to:1.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Fade('enemy_image',{
      duration:0.3,
      from:1.0,
      to:0.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Appear('enemy_image',{
      duration:0.3,
      from:0.0,
      to:1.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Fade('enemy_image',{
      duration:0.4,
      from:1.0,
      to:0.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Appear('enemy_image',{
      duration:0.4,
      from:0.0,
      to:1.0,
      queue:{
        scope:'animation',
        position:'end'
      }
    });
    new Effect.Fade('enemy_image',{
      duration:2.0,
      from:1.0,
      to:0.0,
      queue:{
        scope:'animation',
        position:'end'
      },
      afterSetupInternal:function(){
        $('enemy_image').innerHTML='<img style="position:absolute;left:520;top:200;width:102" src="public/image/decor/env32.gif"/>';  
      }
    });
    new Effect.Fade('enemy_image',{
      duration:4.0,
      from:1.0,
      to:0.0,
      queue:{
        scope:'animation',
        position:'end'
      },
      afterFinishInternal:function(){
        show_line(currentStoryLineID);  
      }
    });
  }
}
