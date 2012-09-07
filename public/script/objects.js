// -- CHARACTER CONSTANTS --------
var _IT=0;
var _ID_CHAR_NAME = 0;
var _ID_L_STAND = 1;
var _ID_R_STAND = 2;
var _ID_L_WALK = 3;
var _ID_R_WALK = 4;
var _ID_L_ATTACK = 5;
var _ID_R_ATTACK = 6;
var _ID_L_CAST = 7;
var _ID_R_CAST = 8;

var _ID_MAGIC_NAME = 0;
var _ID_MAGIC_L_VIEW = 1;
var _ID_MAGIC_R_VIEW = 2;

var _ID_BG_NAME = 0;
var _ID_BG_VIEW = 1;

var _ID_ENV_NAME = 0;
var _ID_ENV_VIEW = 1;

var _ID_SCENE_NAME = 0;
var _ID_SCENE_BG = 1;
var _ID_SCENE_ENV_BG = 2;
var _ID_SCENE_ENV_FG = 3;

var _ID_FILE_NAME = 0;
var _ID_WIDTH = 1;
var _ID_HEIGHT = 2;

var OBJ_CHARACTER = [];
/*OBJ_CHARACTER[0] = [];
OBJ_CHARACTER[0][1] = '123';
OBJ_CHARACTER[0][2] = ['h_alicia/l_attack.gif', 25, 26];*/

/*OBJ_CHARACTER[___] = [];
  OBJ_CHARACTER[___][_ID_CHAR_NAME] = '';
  OBJ_CHARACTER[___][_ID_L_ATTACK] =  ['/l_attack.gif', 0, 0];
  OBJ_CHARACTER[___][_ID_R_ATTACK] =  ['/r_attack.gif', 0, 0];

  OBJ_CHARACTER[___][_ID_L_CAST] =    ['/l_cast.gif', 0, 0];
  OBJ_CHARACTER[___][_ID_R_CAST] =    ['/r_cast.gif', 0, 0];

  OBJ_CHARACTER[___][_ID_L_STAND] =   ['/l_stand.gif', 0, 0];
  OBJ_CHARACTER[___][_ID_R_STAND] =   ['/r_stand.gif', 0, 0];

  OBJ_CHARACTER[___][_ID_L_WALK] =    ['/l_walk.gif', 0, 0];
  OBJ_CHARACTER[___][_ID_R_WALK] =    ['/r_walk.gif', 0, 0];*/
//------------------------------------------------------------------------------


OBJ_CHARACTER[0] = [];
  OBJ_CHARACTER[0][_ID_CHAR_NAME] = 'Алисия';
  OBJ_CHARACTER[0][_ID_L_ATTACK] =  ['h_alicia/l_attack.gif', 28, 63];
  OBJ_CHARACTER[0][_ID_R_ATTACK] =  ['h_alicia/r_attack.gif', 28, 63];

  OBJ_CHARACTER[0][_ID_L_CAST] =    ['h_alicia/l_cast.gif', 35, 63];
  OBJ_CHARACTER[0][_ID_R_CAST] =    ['h_alicia/r_cast.gif', 35, 63];

  OBJ_CHARACTER[0][_ID_L_STAND] =   ['h_alicia/l_stand.gif', 47, 63];
  OBJ_CHARACTER[0][_ID_R_STAND] =   ['h_alicia/r_stand.gif', 47, 63];

  OBJ_CHARACTER[0][_ID_L_WALK] =    ['h_alicia/l_walk.gif', 21, 63];
  OBJ_CHARACTER[0][_ID_R_WALK] =    ['h_alicia/r_walk.gif', 21, 63];
//------------------------------------------------------------------------------
OBJ_CHARACTER[1] = [];
  OBJ_CHARACTER[1][_ID_CHAR_NAME] = 'Мари';
  OBJ_CHARACTER[1][_ID_L_ATTACK] =  ['h_marine/l_attack.gif', 56, 60];
  OBJ_CHARACTER[1][_ID_R_ATTACK] =  ['h_marine/r_attack.gif', 56, 60];

  OBJ_CHARACTER[1][_ID_L_CAST] =    ['h_marine/l_cast.gif', 28, 58];
  OBJ_CHARACTER[1][_ID_R_CAST] =    ['h_marine/r_cast.gif', 28, 58];

  OBJ_CHARACTER[1][_ID_L_STAND] =   ['h_marine/l_stand.gif', 24, 58];
  OBJ_CHARACTER[1][_ID_R_STAND] =   ['h_marine/r_stand.gif', 24, 58];

  OBJ_CHARACTER[1][_ID_L_WALK] =    ['h_marine/l_walk.gif', 22, 59];
  OBJ_CHARACTER[1][_ID_R_WALK] =    ['h_marine/r_walk.gif', 22, 59];
//------------------------------------------------------------------------------
OBJ_CHARACTER[2] = [];
  OBJ_CHARACTER[2][_ID_CHAR_NAME] = 'Руди';
  OBJ_CHARACTER[2][_ID_L_ATTACK] =  ['h_rudy/l_attack.gif', 62, 64];
  OBJ_CHARACTER[2][_ID_R_ATTACK] =  ['h_rudy/r_attack.gif', 62, 64];

  OBJ_CHARACTER[2][_ID_L_CAST] =    ['h_rudy/l_cast.gif', 37, 70];
  OBJ_CHARACTER[2][_ID_R_CAST] =    ['h_rudy/r_cast.gif', 37, 70];

  OBJ_CHARACTER[2][_ID_L_STAND] =   ['h_rudy/l_stand.gif', 30, 73];
  OBJ_CHARACTER[2][_ID_R_STAND] =   ['h_rudy/r_stand.gif', 30, 73];

  OBJ_CHARACTER[2][_ID_L_WALK] =    ['h_rudy/l_walk.gif', 26, 63];
  OBJ_CHARACTER[2][_ID_R_WALK] =    ['h_rudy/r_walk.gif', 26, 63];
//------------------------------------------------------------------------------
OBJ_CHARACTER[3] = [];
  OBJ_CHARACTER[3][_ID_CHAR_NAME] = 'X';
  OBJ_CHARACTER[3][_ID_L_ATTACK] =  ['b_x/l_attack.gif', 62, 62];
  OBJ_CHARACTER[3][_ID_R_ATTACK] =  ['b_x/r_attack.gif', 62, 62];

  OBJ_CHARACTER[3][_ID_L_CAST] =    ['b_x/l_cast.gif', 87, 64];
  OBJ_CHARACTER[3][_ID_R_CAST] =    ['b_x/r_cast.gif', 87, 64];

  OBJ_CHARACTER[3][_ID_L_STAND] =   ['b_x/l_stand.gif', 31, 64];
  OBJ_CHARACTER[3][_ID_R_STAND] =   ['b_x/r_stand.gif', 31, 64];

  OBJ_CHARACTER[3][_ID_L_WALK] =    ['b_x/l_walk.gif', 23, 63];
  OBJ_CHARACTER[3][_ID_R_WALK] =    ['b_x/r_walk.gif', 23, 63];
//------------------------------------------------------------------------------
OBJ_CHARACTER[4] = [];
  OBJ_CHARACTER[4][_ID_CHAR_NAME] = 'Гигантский краб';
  OBJ_CHARACTER[4][_ID_L_ATTACK] =  ['b_crab/l_attack.gif', 144, 77];
  OBJ_CHARACTER[4][_ID_R_ATTACK] =  ['b_crab/r_attack.gif', 144, 77];

  OBJ_CHARACTER[4][_ID_L_CAST] =    ['b_crab/l_cast.gif', 144, 77];
  OBJ_CHARACTER[4][_ID_R_CAST] =    ['b_crab/r_cast.gif', 144, 77];

  OBJ_CHARACTER[4][_ID_L_STAND] =   ['b_crab/l_stand.gif', 144, 77];
  OBJ_CHARACTER[4][_ID_R_STAND] =   ['b_crab/r_stand.gif', 144, 77];

  OBJ_CHARACTER[4][_ID_L_WALK] =    ['b_crab/l_walk.gif', 144, 77];
  OBJ_CHARACTER[4][_ID_R_WALK] =    ['b_crab/r_walk.gif', 144, 77];
//------------------------------------------------------------------------------
OBJ_CHARACTER[5] = [];
  OBJ_CHARACTER[5][_ID_CHAR_NAME] = 'Зло';
  OBJ_CHARACTER[5][_ID_L_ATTACK] =  ['b_evil/l_attack.gif', 37, 80];
  OBJ_CHARACTER[5][_ID_R_ATTACK] =  ['b_evil/r_attack.gif', 37, 80];

  OBJ_CHARACTER[5][_ID_L_CAST] =    ['b_evil/l_cast.gif', 37, 80];
  OBJ_CHARACTER[5][_ID_R_CAST] =    ['b_evil/r_cast.gif', 37, 80];

  OBJ_CHARACTER[5][_ID_L_STAND] =   ['b_evil/l_stand.gif', 37, 80];
  OBJ_CHARACTER[5][_ID_R_STAND] =   ['b_evil/r_stand.gif', 37, 80];

  OBJ_CHARACTER[5][_ID_L_WALK] =    ['b_evil/l_walk.gif', 37, 80];
  OBJ_CHARACTER[5][_ID_R_WALK] =    ['b_evil/r_walk.gif', 37, 80];
//------------------------------------------------------------------------------
OBJ_CHARACTER[6] = [];
  OBJ_CHARACTER[6][_ID_CHAR_NAME] = 'Мюу';
  OBJ_CHARACTER[6][_ID_L_ATTACK] =  ['b_mu/l_attack.gif', 46, 68];
  OBJ_CHARACTER[6][_ID_R_ATTACK] =  ['b_mu/r_attack.gif', 46, 68];

  OBJ_CHARACTER[6][_ID_L_CAST] =    ['b_mu/l_cast.gif', 55, 68];
  OBJ_CHARACTER[6][_ID_R_CAST] =    ['b_mu/r_cast.gif', 55, 68];

  OBJ_CHARACTER[6][_ID_L_STAND] =   ['b_mu/l_stand.gif', 57, 68];
  OBJ_CHARACTER[6][_ID_R_STAND] =   ['b_mu/r_stand.gif', 57, 68];

  OBJ_CHARACTER[6][_ID_L_WALK] =    ['b_mu/l_walk.gif', 37, 68];
  OBJ_CHARACTER[6][_ID_R_WALK] =    ['b_mu/r_walk.gif', 37, 68];
//------------------------------------------------------------------------------
OBJ_CHARACTER[7] = [];
  OBJ_CHARACTER[7][_ID_CHAR_NAME] = 'Золфар';
  OBJ_CHARACTER[7][_ID_L_ATTACK] =  ['b_zolfar/l_attack.gif', 122, 122];
  OBJ_CHARACTER[7][_ID_R_ATTACK] =  ['b_zolfar/r_attack.gif', 122, 122];

  OBJ_CHARACTER[7][_ID_L_CAST] =    ['b_zolfar/l_cast.gif', 122, 122];
  OBJ_CHARACTER[7][_ID_R_CAST] =    ['b_zolfar/r_cast.gif', 122, 122];

  OBJ_CHARACTER[7][_ID_L_STAND] =   ['b_zolfar/l_stand.gif', 122, 122];
  OBJ_CHARACTER[7][_ID_R_STAND] =   ['b_zolfar/r_stand.gif', 122, 122];

  OBJ_CHARACTER[7][_ID_L_WALK] =    ['b_zolfar/l_walk.gif', 122, 122];
  OBJ_CHARACTER[7][_ID_R_WALK] =    ['b_zolfar/r_walk.gif', 122, 122];
//------------------------------------------------------------------------------
OBJ_CHARACTER[8] = [];
  OBJ_CHARACTER[8][_ID_CHAR_NAME] = 'Пикси';
  OBJ_CHARACTER[8][_ID_L_ATTACK] =  ['s_pixie/l_attack.gif', 22, 27];
  OBJ_CHARACTER[8][_ID_R_ATTACK] =  ['s_pixie/r_attack.gif', 22, 27];

  OBJ_CHARACTER[8][_ID_L_CAST] =    ['s_pixie/l_cast.gif', 23, 28];
  OBJ_CHARACTER[8][_ID_R_CAST] =    ['s_pixie/r_cast.gif', 23, 28];

  OBJ_CHARACTER[8][_ID_L_STAND] =   ['s_pixie/l_stand.gif', 23, 28];
  OBJ_CHARACTER[8][_ID_R_STAND] =   ['s_pixie/r_stand.gif', 23, 28];

  OBJ_CHARACTER[8][_ID_L_WALK] =    ['s_pixie/l_walk.gif', 22, 27];
  OBJ_CHARACTER[8][_ID_R_WALK] =    ['s_pixie/r_walk.gif', 22, 27];
//------------------------------------------------------------------------------
OBJ_CHARACTER[9] = [];
  OBJ_CHARACTER[9][_ID_CHAR_NAME] = 'Руби';
  OBJ_CHARACTER[9][_ID_L_ATTACK] =  ['s_ruby/l_attack.gif', 23, 25];
  OBJ_CHARACTER[9][_ID_R_ATTACK] =  ['s_ruby/r_attack.gif', 23, 25];

  OBJ_CHARACTER[9][_ID_L_CAST] =    ['s_ruby/l_cast.gif', 31, 27];
  OBJ_CHARACTER[9][_ID_R_CAST] =    ['s_ruby/r_cast.gif', 31, 27];

  OBJ_CHARACTER[9][_ID_L_STAND] =   ['s_ruby/l_stand.gif', 31, 27];
  OBJ_CHARACTER[9][_ID_R_STAND] =   ['s_ruby/r_stand.gif', 31, 27];

  OBJ_CHARACTER[9][_ID_L_WALK] =    ['s_ruby/l_walk.gif', 23, 25];
  OBJ_CHARACTER[9][_ID_R_WALK] =    ['s_ruby/r_walk.gif', 23, 25];
//------------------------------------------------------------------------------
OBJ_CHARACTER[10] = [];
  OBJ_CHARACTER[10][_ID_CHAR_NAME] = 'Шелли';
  OBJ_CHARACTER[10][_ID_L_ATTACK] =  ['s_shelly/l_attack.gif', 23, 25];
  OBJ_CHARACTER[10][_ID_R_ATTACK] =  ['s_shelly/r_attack.gif', 23, 25];

  OBJ_CHARACTER[10][_ID_L_CAST] =    ['s_shelly/l_cast.gif', 31, 27];
  OBJ_CHARACTER[10][_ID_R_CAST] =    ['s_shelly/r_cast.gif', 31, 27];

  OBJ_CHARACTER[10][_ID_L_STAND] =   ['s_shelly/l_stand.gif', 31, 27];
  OBJ_CHARACTER[10][_ID_R_STAND] =   ['s_shelly/r_stand.gif', 31, 27];

  OBJ_CHARACTER[10][_ID_L_WALK] =    ['s_shelly/l_walk.gif', 23, 25];
  OBJ_CHARACTER[10][_ID_R_WALK] =    ['s_shelly/r_walk.gif', 23, 25];
//------------------------------------------------------------------------------
OBJ_CHARACTER[11] = [];
  OBJ_CHARACTER[11][_ID_CHAR_NAME] = 'Тёмный король';
  OBJ_CHARACTER[11][_ID_L_ATTACK] =  ['e_darkking/l_attack.gif', 98, 77];
  OBJ_CHARACTER[11][_ID_R_ATTACK] =  ['e_darkking/r_attack.gif', 98, 77];

  OBJ_CHARACTER[11][_ID_L_CAST] =    ['e_darkking/l_cast.gif', 56, 88];
  OBJ_CHARACTER[11][_ID_R_CAST] =    ['e_darkking/r_cast.gif', 56, 88];

  OBJ_CHARACTER[11][_ID_L_STAND] =   ['e_darkking/l_stand.gif', 39, 61];
  OBJ_CHARACTER[11][_ID_R_STAND] =   ['e_darkking/r_stand.gif', 39, 61];

  OBJ_CHARACTER[11][_ID_L_WALK] =    ['e_darkking/l_walk.gif', 25, 62];
  OBJ_CHARACTER[11][_ID_R_WALK] =    ['e_darkking/r_walk.gif', 25, 62];
//------------------------------------------------------------------------------
OBJ_CHARACTER[12] = [];
  OBJ_CHARACTER[12][_ID_CHAR_NAME] = 'Тёмный монах';
  OBJ_CHARACTER[12][_ID_L_ATTACK] =  ['e_darkmonk/l_attack.gif', 34, 64];
  OBJ_CHARACTER[12][_ID_R_ATTACK] =  ['e_darkmonk/r_attack.gif', 34, 64];

  OBJ_CHARACTER[12][_ID_L_CAST] =    ['e_darkmonk/l_cast.gif', 37, 63];
  OBJ_CHARACTER[12][_ID_R_CAST] =    ['e_darkmonk/r_cast.gif', 37, 63];

  OBJ_CHARACTER[12][_ID_L_STAND] =   ['e_darkmonk/l_stand.gif', 37, 62];
  OBJ_CHARACTER[12][_ID_R_STAND] =   ['e_darkmonk/r_stand.gif', 37, 62];

  OBJ_CHARACTER[12][_ID_L_WALK] =    ['e_darkmonk/l_walk.gif', 22, 63];
  OBJ_CHARACTER[12][_ID_R_WALK] =    ['e_darkmonk/r_walk.gif', 22, 63];
//------------------------------------------------------------------------------
OBJ_CHARACTER[13] = [];
  OBJ_CHARACTER[13][_ID_CHAR_NAME] = 'Демон';
  OBJ_CHARACTER[13][_ID_L_ATTACK] =  ['e_demon/l_attack.gif', 55, 63];
  OBJ_CHARACTER[13][_ID_R_ATTACK] =  ['e_demon/r_attack.gif', 55, 63];

  OBJ_CHARACTER[13][_ID_L_CAST] =    ['e_demon/l_cast.gif', 85, 63];
  OBJ_CHARACTER[13][_ID_R_CAST] =    ['e_demon/r_cast.gif', 85, 63];

  OBJ_CHARACTER[13][_ID_L_STAND] =   ['e_demon/l_stand.gif', 85, 63];
  OBJ_CHARACTER[13][_ID_R_STAND] =   ['e_demon/r_stand.gif', 85, 63];

  OBJ_CHARACTER[13][_ID_L_WALK] =    ['e_demon/l_walk.gif', 50, 63];
  OBJ_CHARACTER[13][_ID_R_WALK] =    ['e_demon/r_walk.gif', 50, 63];
//------------------------------------------------------------------------------
OBJ_CHARACTER[14] = [];
  OBJ_CHARACTER[14][_ID_CHAR_NAME] = 'Призрак';
  OBJ_CHARACTER[14][_ID_L_ATTACK] =  ['e_ghost/l_attack.gif', 22, 56];
  OBJ_CHARACTER[14][_ID_R_ATTACK] =  ['e_ghost/r_attack.gif', 22, 56];

  OBJ_CHARACTER[14][_ID_L_CAST] =    ['e_ghost/l_cast.gif', 35, 55];
  OBJ_CHARACTER[14][_ID_R_CAST] =    ['e_ghost/r_cast.gif', 35, 55];

  OBJ_CHARACTER[14][_ID_L_STAND] =   ['e_ghost/l_stand.gif', 35, 55];
  OBJ_CHARACTER[14][_ID_R_STAND] =   ['e_ghost/r_stand.gif', 35, 55];

  OBJ_CHARACTER[14][_ID_L_WALK] =    ['e_ghost/l_walk.gif', 22, 56];
  OBJ_CHARACTER[14][_ID_R_WALK] =    ['e_ghost/r_walk.gif', 22, 56];
//------------------------------------------------------------------------------
OBJ_CHARACTER[15] = [];
  OBJ_CHARACTER[15][_ID_CHAR_NAME] = 'Гоблин маг';
  OBJ_CHARACTER[15][_ID_L_ATTACK] =  ['e_goblinmag/l_attack.gif', 24, 51];
  OBJ_CHARACTER[15][_ID_R_ATTACK] =  ['e_goblinmag/r_attack.gif', 24, 51];

  OBJ_CHARACTER[15][_ID_L_CAST] =    ['e_goblinmag/l_cast.gif', 25, 52];
  OBJ_CHARACTER[15][_ID_R_CAST] =    ['e_goblinmag/r_cast.gif', 25, 52];

  OBJ_CHARACTER[15][_ID_L_STAND] =   ['e_goblinmag/l_stand.gif', 23, 48];
  OBJ_CHARACTER[15][_ID_R_STAND] =   ['e_goblinmag/r_stand.gif', 23, 48];

  OBJ_CHARACTER[15][_ID_L_WALK] =    ['e_goblinmag/l_walk.gif', 24, 48];
  OBJ_CHARACTER[15][_ID_R_WALK] =    ['e_goblinmag/r_walk.gif', 24, 48];
//------------------------------------------------------------------------------
OBJ_CHARACTER[16] = [];
  OBJ_CHARACTER[16][_ID_CHAR_NAME] = 'Гоблин воин';
  OBJ_CHARACTER[16][_ID_L_ATTACK] =  ['e_goblinwar/l_attack.gif', 59, 56];
  OBJ_CHARACTER[16][_ID_R_ATTACK] =  ['e_goblinwar/r_attack.gif', 59, 56];

  OBJ_CHARACTER[16][_ID_L_CAST] =    ['e_goblinwar/l_cast.gif', 39, 60];
  OBJ_CHARACTER[16][_ID_R_CAST] =    ['e_goblinwar/r_cast.gif', 39, 60];

  OBJ_CHARACTER[16][_ID_L_STAND] =   ['e_goblinwar/l_stand.gif', 29, 59];
  OBJ_CHARACTER[16][_ID_R_STAND] =   ['e_goblinwar/r_stand.gif', 29, 59];

  OBJ_CHARACTER[16][_ID_L_WALK] =    ['e_goblinwar/l_walk.gif', 24, 53];
  OBJ_CHARACTER[16][_ID_R_WALK] =    ['e_goblinwar/r_walk.gif', 24, 53];
//------------------------------------------------------------------------------
OBJ_CHARACTER[17] = [];
  OBJ_CHARACTER[17][_ID_CHAR_NAME] = 'Голем';
  OBJ_CHARACTER[17][_ID_L_ATTACK] =  ['e_golem/l_attack.gif', 36, 73];
  OBJ_CHARACTER[17][_ID_R_ATTACK] =  ['e_golem/r_attack.gif', 36, 73];

  OBJ_CHARACTER[17][_ID_L_CAST] =    ['e_golem/l_cast.gif', 41, 75];
  OBJ_CHARACTER[17][_ID_R_CAST] =    ['e_golem/r_cast.gif', 41, 75];

  OBJ_CHARACTER[17][_ID_L_STAND] =   ['e_golem/l_stand.gif', 41, 75];
  OBJ_CHARACTER[17][_ID_R_STAND] =   ['e_golem/r_stand.gif', 41, 75];

  OBJ_CHARACTER[17][_ID_L_WALK] =    ['e_golem/l_walk.gif', 28, 73];
  OBJ_CHARACTER[17][_ID_R_WALK] =    ['e_golem/r_walk.gif', 28, 73];
//------------------------------------------------------------------------------
OBJ_CHARACTER[18] = [];
  OBJ_CHARACTER[18][_ID_CHAR_NAME] = 'Огр';
  OBJ_CHARACTER[18][_ID_L_ATTACK] =  ['e_ogre/l_attack.gif', 43, 74];
  OBJ_CHARACTER[18][_ID_R_ATTACK] =  ['e_ogre/r_attack.gif', 43, 74];

  OBJ_CHARACTER[18][_ID_L_CAST] =    ['e_ogre/l_cast.gif', 55, 78];
  OBJ_CHARACTER[18][_ID_R_CAST] =    ['e_ogre/r_cast.gif', 55, 78];

  OBJ_CHARACTER[18][_ID_L_STAND] =   ['e_ogre/l_stand.gif', 55, 69];
  OBJ_CHARACTER[18][_ID_R_STAND] =   ['e_ogre/r_stand.gif', 55, 69];

  OBJ_CHARACTER[18][_ID_L_WALK] =    ['e_ogre/l_walk.gif', 33, 67];
  OBJ_CHARACTER[18][_ID_R_WALK] =    ['e_ogre/r_walk.gif', 33, 67];
//------------------------------------------------------------------------------
OBJ_CHARACTER[19] = [];
  OBJ_CHARACTER[19][_ID_CHAR_NAME] = 'Орк';
  OBJ_CHARACTER[19][_ID_L_ATTACK] =  ['e_orc/l_attack.gif', 40, 70];
  OBJ_CHARACTER[19][_ID_R_ATTACK] =  ['e_orc/r_attack.gif', 40, 70];

  OBJ_CHARACTER[19][_ID_L_CAST] =    ['e_orc/l_cast.gif', 29, 68];
  OBJ_CHARACTER[19][_ID_R_CAST] =    ['e_orc/r_cast.gif', 29, 68];

  OBJ_CHARACTER[19][_ID_L_STAND] =   ['e_orc/l_stand.gif', 38, 59];
  OBJ_CHARACTER[19][_ID_R_STAND] =   ['e_orc/r_stand.gif', 38, 59];

  OBJ_CHARACTER[19][_ID_L_WALK] =    ['e_orc/l_walk.gif', 32, 60];
  OBJ_CHARACTER[19][_ID_R_WALK] =    ['e_orc/r_walk.gif', 32, 60];
//------------------------------------------------------------------------------
OBJ_CHARACTER[20] = [];
  OBJ_CHARACTER[20][_ID_CHAR_NAME] = 'Скелет';
  OBJ_CHARACTER[20][_ID_L_ATTACK] =  ['e_skeleton/l_attack.gif', 60, 76];
  OBJ_CHARACTER[20][_ID_R_ATTACK] =  ['e_skeleton/r_attack.gif', 60, 76];

  OBJ_CHARACTER[20][_ID_L_CAST] =    ['e_skeleton/l_cast.gif', 39, 76];
  OBJ_CHARACTER[20][_ID_R_CAST] =    ['e_skeleton/r_cast.gif', 39, 76];

  OBJ_CHARACTER[20][_ID_L_STAND] =   ['e_skeleton/l_stand.gif', 32, 58];
  OBJ_CHARACTER[20][_ID_R_STAND] =   ['e_skeleton/r_stand.gif', 32, 58];

  OBJ_CHARACTER[20][_ID_L_WALK] =    ['e_skeleton/l_walk.gif', 29, 59];
  OBJ_CHARACTER[20][_ID_R_WALK] =    ['e_skeleton/r_walk.gif', 29, 59];
//------------------------------------------------------------------------------
OBJ_CHARACTER[21] = [];
  OBJ_CHARACTER[21][_ID_CHAR_NAME] = 'Вампир';
  OBJ_CHARACTER[21][_ID_L_ATTACK] =  ['e_vampir/l_attack.gif', 30, 54];
  OBJ_CHARACTER[21][_ID_R_ATTACK] =  ['e_vampir/r_attack.gif', 30, 54];

  OBJ_CHARACTER[21][_ID_L_CAST] =    ['e_vampir/l_cast.gif', 40, 55];
  OBJ_CHARACTER[21][_ID_R_CAST] =    ['e_vampir/r_cast.gif', 40, 55];

  OBJ_CHARACTER[21][_ID_L_STAND] =   ['e_vampir/l_stand.gif', 37, 67];
  OBJ_CHARACTER[21][_ID_R_STAND] =   ['e_vampir/r_stand.gif', 37, 67];

  OBJ_CHARACTER[21][_ID_L_WALK] =    ['e_vampir/l_walk.gif', 23, 65];
  OBJ_CHARACTER[21][_ID_R_WALK] =    ['e_vampir/r_walk.gif', 23, 65];
//------------------------------------------------------------------------------
OBJ_CHARACTER[22] = [];
  OBJ_CHARACTER[22][_ID_CHAR_NAME] = 'Зомби';
  OBJ_CHARACTER[22][_ID_L_ATTACK] =  ['e_zombie/l_attack.gif', 24, 62];
  OBJ_CHARACTER[22][_ID_R_ATTACK] =  ['e_zombie/r_attack.gif', 24, 62];

  OBJ_CHARACTER[22][_ID_L_CAST] =    ['e_zombie/l_cast.gif', 33, 63];
  OBJ_CHARACTER[22][_ID_R_CAST] =    ['e_zombie/r_cast.gif', 33, 63];

  OBJ_CHARACTER[22][_ID_L_STAND] =   ['e_zombie/l_stand.gif', 33, 63];
  OBJ_CHARACTER[22][_ID_R_STAND] =   ['e_zombie/r_stand.gif', 33, 63];

  OBJ_CHARACTER[22][_ID_L_WALK] =    ['e_zombie/l_walk.gif', 24, 62];
  OBJ_CHARACTER[22][_ID_R_WALK] =    ['e_zombie/r_walk.gif', 24, 62];
//------------------------------------------------------------------------------
//******************************************************************************
//------------------------------------------------------------------------------
var OBJ_MAGIC = [];
/*
  OBJ_MAGIC[0] = [];
  OBJ_MAGIC[0][_ID_MAGIC_NAME] = '';
  OBJ_MAGIC[0][_ID_MAGIC_L_VIEW] = ['magic/', 0, 0]; 
  OBJ_MAGIC[0][_ID_MAGIC_R_VIEW] = ['magic/', 0, 0]; 
//------------------------------------------------------------------------------
*/
  OBJ_MAGIC[0] = [];
  OBJ_MAGIC[0][_ID_MAGIC_NAME] = 'Огонь 1';
  OBJ_MAGIC[0][_ID_MAGIC_L_VIEW] = ['magic/l_fire1.gif', 38, 20]; 
  OBJ_MAGIC[0][_ID_MAGIC_R_VIEW] = ['magic/r_fire1.gif', 38, 20]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[1] = [];
  OBJ_MAGIC[1][_ID_MAGIC_NAME] = 'Огонь 2';
  OBJ_MAGIC[1][_ID_MAGIC_L_VIEW] = ['magic/l_fire2.gif', 25, 56]; 
  OBJ_MAGIC[1][_ID_MAGIC_R_VIEW] = ['magic/r_fire2.gif', 25, 56]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[2] = [];
  OBJ_MAGIC[2][_ID_MAGIC_NAME] = 'Огонь 3';
  OBJ_MAGIC[2][_ID_MAGIC_L_VIEW] = ['magic/l_fire3.gif', 72, 120]; 
  OBJ_MAGIC[2][_ID_MAGIC_R_VIEW] = ['magic/r_fire3.gif', 72, 120]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[3] = [];
  OBJ_MAGIC[3][_ID_MAGIC_NAME] = 'Лёд 1';
  OBJ_MAGIC[3][_ID_MAGIC_L_VIEW] = ['magic/l_ice1.gif', 37, 15]; 
  OBJ_MAGIC[3][_ID_MAGIC_R_VIEW] = ['magic/r_ice1.gif', 37, 15]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[4] = [];
  OBJ_MAGIC[4][_ID_MAGIC_NAME] = 'Лёд 2';
  OBJ_MAGIC[4][_ID_MAGIC_L_VIEW] = ['magic/l_ice2.gif', 34, 14]; 
  OBJ_MAGIC[4][_ID_MAGIC_R_VIEW] = ['magic/r_ice2.gif', 34, 14]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[5] = [];
  OBJ_MAGIC[5][_ID_MAGIC_NAME] = 'Лёд 3';
  OBJ_MAGIC[5][_ID_MAGIC_L_VIEW] = ['magic/l_ice3.gif', 79, 74]; 
  OBJ_MAGIC[5][_ID_MAGIC_R_VIEW] = ['magic/r_ice3.gif', 79, 74]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[6] = [];
  OBJ_MAGIC[6][_ID_MAGIC_NAME] = 'Молния 1';
  OBJ_MAGIC[6][_ID_MAGIC_L_VIEW] = ['magic/l_thunder1.gif', 40, 20]; 
  OBJ_MAGIC[6][_ID_MAGIC_R_VIEW] = ['magic/r_thunder1.gif', 40, 20]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[7] = [];
  OBJ_MAGIC[7][_ID_MAGIC_NAME] = 'Молния 2';
  OBJ_MAGIC[7][_ID_MAGIC_L_VIEW] = ['magic/l_thunder2.gif', 29, 29]; 
  OBJ_MAGIC[7][_ID_MAGIC_R_VIEW] = ['magic/r_thunder2.gif', 29, 29]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[8] = [];
  OBJ_MAGIC[8][_ID_MAGIC_NAME] = 'Молния 3';
  OBJ_MAGIC[8][_ID_MAGIC_L_VIEW] = ['magic/l_thunder3.gif', 74, 116]; 
  OBJ_MAGIC[8][_ID_MAGIC_R_VIEW] = ['magic/r_thunder3.gif', 74, 116]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[9] = [];
  OBJ_MAGIC[9][_ID_MAGIC_NAME] = 'Вода 1';
  OBJ_MAGIC[9][_ID_MAGIC_L_VIEW] = ['magic/l_water1.gif', 16, 12]; 
  OBJ_MAGIC[9][_ID_MAGIC_R_VIEW] = ['magic/r_water1.gif', 16, 12]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[10] = [];
  OBJ_MAGIC[10][_ID_MAGIC_NAME] = 'Вода 2';
  OBJ_MAGIC[10][_ID_MAGIC_L_VIEW] = ['magic/l_water2.gif', 50, 24]; 
  OBJ_MAGIC[10][_ID_MAGIC_R_VIEW] = ['magic/r_water2.gif', 50, 24]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[11] = [];
  OBJ_MAGIC[11][_ID_MAGIC_NAME] = 'Вода 3';
  OBJ_MAGIC[11][_ID_MAGIC_L_VIEW] = ['magic/l_water3.gif', 26, 34]; 
  OBJ_MAGIC[11][_ID_MAGIC_R_VIEW] = ['magic/r_water3.gif', 26, 34]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[12] = [];
  OBJ_MAGIC[12][_ID_MAGIC_NAME] = 'Бросок 1';
  OBJ_MAGIC[12][_ID_MAGIC_L_VIEW] = ['magic/l_throw1.gif', 19, 19]; 
  OBJ_MAGIC[12][_ID_MAGIC_R_VIEW] = ['magic/r_throw1.gif', 19, 19]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[13] = [];
  OBJ_MAGIC[13][_ID_MAGIC_NAME] = 'Бросок 2';
  OBJ_MAGIC[13][_ID_MAGIC_L_VIEW] = ['magic/l_throw2.gif', 27, 27]; 
  OBJ_MAGIC[13][_ID_MAGIC_R_VIEW] = ['magic/r_throw2.gif', 27, 27]; 
//------------------------------------------------------------------------------
  OBJ_MAGIC[14] = [];
  OBJ_MAGIC[14][_ID_MAGIC_NAME] = 'Бросок 3';
  OBJ_MAGIC[14][_ID_MAGIC_L_VIEW] = ['magic/l_throw3.gif', 52, 52]; 
  OBJ_MAGIC[14][_ID_MAGIC_R_VIEW] = ['magic/r_throw3.gif', 52, 52]; 
//------------------------------------------------------------------------------
//******************************************************************************
//------------------------------------------------------------------------------
var OBJ_BACKGROUND = [];
  OBJ_BACKGROUND[0] = [];
  OBJ_BACKGROUND[0][_ID_BG_NAME] = 'Трава';
  OBJ_BACKGROUND[0][_ID_BG_VIEW] = ['bg/bg01.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[1] = [];
  OBJ_BACKGROUND[1][_ID_BG_NAME] = 'Камни и зкмля';
  OBJ_BACKGROUND[1][_ID_BG_VIEW] = ['bg/bg02.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[2] = [];
  OBJ_BACKGROUND[2][_ID_BG_NAME] = 'Песок';
  OBJ_BACKGROUND[2][_ID_BG_VIEW] = ['bg/bg03.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[3] = [];
  OBJ_BACKGROUND[3][_ID_BG_NAME] = 'Каменный пол';
  OBJ_BACKGROUND[3][_ID_BG_VIEW] = ['bg/bg04.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[4] = [];
  OBJ_BACKGROUND[4][_ID_BG_NAME] = 'Каменная плитка';
  OBJ_BACKGROUND[4][_ID_BG_VIEW] = ['bg/bg05.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[5] = [];
  OBJ_BACKGROUND[5][_ID_BG_NAME] = 'Синие камни';
  OBJ_BACKGROUND[5][_ID_BG_VIEW] = ['bg/bg06.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[6] = [];
  OBJ_BACKGROUND[6][_ID_BG_NAME] = 'Тёмный гранит';
  OBJ_BACKGROUND[6][_ID_BG_VIEW] = ['bg/bg07.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[7] = [];
  OBJ_BACKGROUND[7][_ID_BG_NAME] = 'Паркет';
  OBJ_BACKGROUND[7][_ID_BG_VIEW] = ['bg/bg08.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[8] = [];
  OBJ_BACKGROUND[8][_ID_BG_NAME] = 'Трава2';
  OBJ_BACKGROUND[8][_ID_BG_VIEW] = ['bg/bg09.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[9] = [];
  OBJ_BACKGROUND[9][_ID_BG_NAME] = 'Каменная плитка2';
  OBJ_BACKGROUND[9][_ID_BG_VIEW] = ['bg/bg10.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[10] = [];
  OBJ_BACKGROUND[10][_ID_BG_NAME] = 'Синие камни2';
  OBJ_BACKGROUND[10][_ID_BG_VIEW] = ['bg/bg11.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[11] = [];
  OBJ_BACKGROUND[11][_ID_BG_NAME] = 'Тёмная каменная плитка';
  OBJ_BACKGROUND[11][_ID_BG_VIEW] = ['bg/bg12.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[12] = [];
  OBJ_BACKGROUND[12][_ID_BG_NAME] = 'Каменная плитка3';
  OBJ_BACKGROUND[12][_ID_BG_VIEW] = ['bg/bg13.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[13] = [];
  OBJ_BACKGROUND[13][_ID_BG_NAME] = 'Тёмная каменная плитка2';
  OBJ_BACKGROUND[13][_ID_BG_VIEW] = ['bg/bg14.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[14] = [];
  OBJ_BACKGROUND[14][_ID_BG_NAME] = 'Каменный пол2';
  OBJ_BACKGROUND[14][_ID_BG_VIEW] = ['bg/bg15.gif', 40, 40];
//------------------------------------------------------------------------------
  OBJ_BACKGROUND[15] = [];
  OBJ_BACKGROUND[15][_ID_BG_NAME] = 'Синий гранит';
  OBJ_BACKGROUND[15][_ID_BG_VIEW] = ['bg/bg16.gif', 40, 40];
//------------------------------------------------------------------------------
var OBJ_ENVIRONMENT = [];
  OBJ_ENVIRONMENT[0] = [];
  OBJ_ENVIRONMENT[0][_ID_ENV_NAME] = 'Каменная колонна';
  OBJ_ENVIRONMENT[0][_ID_ENV_VIEW] = ['decor/env01.gif', 40, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[1] = [];
  OBJ_ENVIRONMENT[1][_ID_ENV_NAME] = 'Статуя воина';
  OBJ_ENVIRONMENT[1][_ID_ENV_VIEW] = ['decor/env02.gif', 40, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[2] = [];
  OBJ_ENVIRONMENT[2][_ID_ENV_NAME] = 'Статуя девы';
  OBJ_ENVIRONMENT[2][_ID_ENV_VIEW] = ['decor/env03.gif', 38, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[3] = [];
  OBJ_ENVIRONMENT[3][_ID_ENV_NAME] = 'Статуя девы2';
  OBJ_ENVIRONMENT[3][_ID_ENV_VIEW] = ['decor/env04.gif', 38, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[4] = [];
  OBJ_ENVIRONMENT[4][_ID_ENV_NAME] = 'Плита';
  OBJ_ENVIRONMENT[4][_ID_ENV_VIEW] = ['decor/env05.gif', 40, 65];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[5] = [];
  OBJ_ENVIRONMENT[5][_ID_ENV_NAME] = 'Плита2';
  OBJ_ENVIRONMENT[5][_ID_ENV_VIEW] = ['decor/env06.gif', 40, 63];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[6] = [];
  OBJ_ENVIRONMENT[6][_ID_ENV_NAME] = 'Кубок';
  OBJ_ENVIRONMENT[6][_ID_ENV_VIEW] = ['decor/env07.gif', 28, 55];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[7] = [];
  OBJ_ENVIRONMENT[7][_ID_ENV_NAME] = 'Толстая колонна';
  OBJ_ENVIRONMENT[7][_ID_ENV_VIEW] = ['decor/env08.gif', 32, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[8] = [];
  OBJ_ENVIRONMENT[8][_ID_ENV_NAME] = 'Сломанная колонна';
  OBJ_ENVIRONMENT[8][_ID_ENV_VIEW] = ['decor/env09.gif', 20, 59];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[9] = [];
  OBJ_ENVIRONMENT[9][_ID_ENV_NAME] = 'Колонна';
  OBJ_ENVIRONMENT[9][_ID_ENV_VIEW] = ['decor/env10.gif', 20, 97];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[10] = [];
  OBJ_ENVIRONMENT[10][_ID_ENV_NAME] = 'Красная колонна';
  OBJ_ENVIRONMENT[10][_ID_ENV_VIEW] = ['decor/env11.gif', 38, 147];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[11] = [];
  OBJ_ENVIRONMENT[11][_ID_ENV_NAME] = 'Бочка';
  OBJ_ENVIRONMENT[11][_ID_ENV_VIEW] = ['decor/env12.gif', 31, 40];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[12] = [];
  OBJ_ENVIRONMENT[12][_ID_ENV_NAME] = 'Ящик';
  OBJ_ENVIRONMENT[12][_ID_ENV_VIEW] = ['decor/env13.gif', 33, 72];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[13] = [];
  OBJ_ENVIRONMENT[13][_ID_ENV_NAME] = 'Кусты';
  OBJ_ENVIRONMENT[13][_ID_ENV_VIEW] = ['decor/env14.gif', 76, 36];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[14] = [];
  OBJ_ENVIRONMENT[14][_ID_ENV_NAME] = 'Большой спил';
  OBJ_ENVIRONMENT[14][_ID_ENV_VIEW] = ['decor/env15.gif', 65, 39];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[15] = [];
  OBJ_ENVIRONMENT[15][_ID_ENV_NAME] = 'Камни';
  OBJ_ENVIRONMENT[15][_ID_ENV_VIEW] = ['decor/env16.gif', 40, 38];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[16] = [];
  OBJ_ENVIRONMENT[16][_ID_ENV_NAME] = 'Малый спил';
  OBJ_ENVIRONMENT[16][_ID_ENV_VIEW] = ['decor/env17.gif', 35, 39];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[17] = [];
  OBJ_ENVIRONMENT[17][_ID_ENV_NAME] = 'Камень';
  OBJ_ENVIRONMENT[17][_ID_ENV_VIEW] = ['decor/env18.gif', 28, 27];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[18] = [];
  OBJ_ENVIRONMENT[18][_ID_ENV_NAME] = 'Поваленное дерево';
  OBJ_ENVIRONMENT[18][_ID_ENV_VIEW] = ['decor/env19.gif', 154, 74];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[19] = [];
  OBJ_ENVIRONMENT[19][_ID_ENV_NAME] = 'Большие кусты';
  OBJ_ENVIRONMENT[19][_ID_ENV_VIEW] = ['decor/env20.gif', 105, 75];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[20] = [];
  OBJ_ENVIRONMENT[20][_ID_ENV_NAME] = 'Поваленное дерево2';
  OBJ_ENVIRONMENT[20][_ID_ENV_VIEW] = ['decor/env21.gif', 110, 72];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[21] = [];
  OBJ_ENVIRONMENT[21][_ID_ENV_NAME] = 'Дерево';
  OBJ_ENVIRONMENT[21][_ID_ENV_VIEW] = ['decor/env22.gif', 76, 118];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[22] = [];
  OBJ_ENVIRONMENT[22][_ID_ENV_NAME] = 'Высохшее дерево';
  OBJ_ENVIRONMENT[22][_ID_ENV_VIEW] = ['decor/env23.gif', 54, 114];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[23] = [];
  OBJ_ENVIRONMENT[23][_ID_ENV_NAME] = 'Ель';
  OBJ_ENVIRONMENT[23][_ID_ENV_VIEW] = ['decor/env24.gif', 79, 95];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[24] = [];
  OBJ_ENVIRONMENT[24][_ID_ENV_NAME] = 'Большое дерево';
  OBJ_ENVIRONMENT[24][_ID_ENV_VIEW] = ['decor/env25.gif', 116, 158];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[25] = [];
  OBJ_ENVIRONMENT[25][_ID_ENV_NAME] = 'Большое высохшее дерево';
  OBJ_ENVIRONMENT[25][_ID_ENV_VIEW] = ['decor/env26.gif', 71, 153];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[26] = [];
  OBJ_ENVIRONMENT[26][_ID_ENV_NAME] = 'Кресло';
  OBJ_ENVIRONMENT[26][_ID_ENV_VIEW] = ['decor/env27.gif', 23, 56];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[27] = [];
  OBJ_ENVIRONMENT[27][_ID_ENV_NAME] = 'Стол';
  OBJ_ENVIRONMENT[27][_ID_ENV_VIEW] = ['decor/env28.gif', 235, 97];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[28] = [];
  OBJ_ENVIRONMENT[28][_ID_ENV_NAME] = 'Шкафы';
  OBJ_ENVIRONMENT[28][_ID_ENV_VIEW] = ['decor/env29.gif', 160, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[29] = [];
  OBJ_ENVIRONMENT[29][_ID_ENV_NAME] = 'Цветок';
  OBJ_ENVIRONMENT[29][_ID_ENV_VIEW] = ['decor/env30.gif', 31, 50];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[30] = [];
  OBJ_ENVIRONMENT[30][_ID_ENV_NAME] = 'Окно';
  OBJ_ENVIRONMENT[30][_ID_ENV_VIEW] = ['decor/env31.gif', 40, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[31] = [];
  OBJ_ENVIRONMENT[31][_ID_ENV_NAME] = 'Портал';
  OBJ_ENVIRONMENT[31][_ID_ENV_VIEW] = ['decor/env32.gif', 40, 79];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[32] = [];
  OBJ_ENVIRONMENT[32][_ID_ENV_NAME] = 'Флаг';
  OBJ_ENVIRONMENT[32][_ID_ENV_VIEW] = ['decor/env33.gif', 40, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[33] = [];
  OBJ_ENVIRONMENT[33][_ID_ENV_NAME] = 'Саркофаг';
  OBJ_ENVIRONMENT[33][_ID_ENV_VIEW] = ['decor/env34.gif', 200, 160];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[34] = [];
  OBJ_ENVIRONMENT[34][_ID_ENV_NAME] = 'Статуя богини';
  OBJ_ENVIRONMENT[34][_ID_ENV_VIEW] = ['decor/env35.gif', 200, 240];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[35] = [];
  OBJ_ENVIRONMENT[35][_ID_ENV_NAME] = 'Красная стена';
  OBJ_ENVIRONMENT[35][_ID_ENV_VIEW] = ['decor/env36.gif', 160, 240];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[36] = [];
  OBJ_ENVIRONMENT[36][_ID_ENV_NAME] = 'Кубок с огнём';
  OBJ_ENVIRONMENT[36][_ID_ENV_VIEW] = ['decor/fire-bg.gif', 28, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[37] = [];
  OBJ_ENVIRONMENT[37][_ID_ENV_NAME] = 'Фонтан';
  OBJ_ENVIRONMENT[37][_ID_ENV_VIEW] = ['decor/fountain-bg.gif', 120, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[38] = [];
  OBJ_ENVIRONMENT[38][_ID_ENV_NAME] = 'Король';
  OBJ_ENVIRONMENT[38][_ID_ENV_VIEW] = ['decor/king.gif', 25, 63];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[39] = [];
  OBJ_ENVIRONMENT[39][_ID_ENV_NAME] = 'Королева';
  OBJ_ENVIRONMENT[39][_ID_ENV_VIEW] = ['decor/queen.gif', 25, 62];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[40] = [];
  OBJ_ENVIRONMENT[40][_ID_ENV_NAME] = 'Карен';
  OBJ_ENVIRONMENT[40][_ID_ENV_VIEW] = ['decor/caren.gif', 31, 63];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[41] = [];
  OBJ_ENVIRONMENT[41][_ID_ENV_NAME] = 'Карен сидит';
  OBJ_ENVIRONMENT[41][_ID_ENV_VIEW] = ['decor/caren_sit.gif', 29, 47];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[42] = [];
  OBJ_ENVIRONMENT[42][_ID_ENV_NAME] = 'Гродская стена';
  OBJ_ENVIRONMENT[42][_ID_ENV_VIEW] = ['decor/env37.gif', 40, 160];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[43] = [];
  OBJ_ENVIRONMENT[43][_ID_ENV_NAME] = 'Стена подземелья';
  OBJ_ENVIRONMENT[43][_ID_ENV_VIEW] = ['decor/env38.gif', 40, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[44] = [];
  OBJ_ENVIRONMENT[44][_ID_ENV_NAME] = 'Стена подземелья2';
  OBJ_ENVIRONMENT[44][_ID_ENV_VIEW] = ['decor/env39.gif', 80, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[45] = [];
  OBJ_ENVIRONMENT[45][_ID_ENV_NAME] = 'Стена пещеры';
  OBJ_ENVIRONMENT[45][_ID_ENV_VIEW] = ['decor/env40.gif', 120, 80];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[46] = [];
  OBJ_ENVIRONMENT[46][_ID_ENV_NAME] = 'Стена пещеры2';
  OBJ_ENVIRONMENT[46][_ID_ENV_VIEW] = ['decor/env41.gif', 80, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[47] = [];
  OBJ_ENVIRONMENT[47][_ID_ENV_NAME] = 'Стена пещеры3';
  OBJ_ENVIRONMENT[47][_ID_ENV_VIEW] = ['decor/env42.gif', 40, 120];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[48] = [];
  OBJ_ENVIRONMENT[48][_ID_ENV_NAME] = 'Море';
  OBJ_ENVIRONMENT[48][_ID_ENV_VIEW] = ['decor/env43.gif', 120, 200];
//------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[49] = [];
  OBJ_ENVIRONMENT[49][_ID_ENV_NAME] = 'Ракушки и камни';
  OBJ_ENVIRONMENT[49][_ID_ENV_VIEW] = ['decor/env44.gif', 60, 80];
  //------------------------------------------------------------------------------
  OBJ_ENVIRONMENT[50] = [];
  OBJ_ENVIRONMENT[50][_ID_ENV_NAME] = 'Камень';
  OBJ_ENVIRONMENT[50][_ID_ENV_VIEW] = ['decor/env45.gif', 60, 80];
//------------------------------------------------------------------------------
//******************************************************************************
//------------------------------------------------------------------------------
var OBJ_SCENE = [];
/*
  OBJ_SCENE[0] = [];
  OBJ_SCENE[0][_ID_SCENE_NAME] = '';
  OBJ_SCENE[0][_ID_SCENE_BG] = 0;
  _IT=0;
  OBJ_SCENE[0][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [0, 0, 0, 0];
  _IT=0;
  OBJ_SCENE[0][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[0][_ID_SCENE_ENV_FG][_IT++] = [0, 0, 0, 0];
//------------------------------------------------------------------------------
*/ 
  OBJ_SCENE[0] = [];
  OBJ_SCENE[0][_ID_SCENE_NAME] = 'Лес';
  OBJ_SCENE[0][_ID_SCENE_BG] = 8;
  _IT=0;
  OBJ_SCENE[0][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [20, 3, 50, 50];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [20, 3, 450, 50];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [19, 2, 100, 200];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [21, 3, 250, 50];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [21, 3, 0, 0];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [19, 2, 450, 100];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [22, 3, 450, 10];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [23, 3, 550, 100];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [19, 2, 100, 300];
  OBJ_SCENE[0][_ID_SCENE_ENV_BG][_IT++] = [19, 2, 400, 300];
  _IT=0;
  OBJ_SCENE[0][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[0][_ID_SCENE_ENV_FG][_IT++] = [19, 2, 0, 450];
  OBJ_SCENE[0][_ID_SCENE_ENV_FG][_IT++] = [19, 2, 400, 420];
  OBJ_SCENE[0][_ID_SCENE_ENV_FG][_IT++] = [19, 2, 200, 400];
  OBJ_SCENE[0][_ID_SCENE_ENV_FG][_IT++] = [19, 2, 550, 450];
//------------------------------------------------------------------------------
  OBJ_SCENE[1] = [];
  OBJ_SCENE[1][_ID_SCENE_NAME] = 'Комната последнего босса';
  OBJ_SCENE[1][_ID_SCENE_BG] = 15;
  _IT=0;
  OBJ_SCENE[1][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [35, 1, -80, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [34, 1, 80, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [35, 1, 280, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [35, 1, 440, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [34, 1, 600, 0];
  //OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [41, 3, 700, 200];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 0, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 300, 0];
  OBJ_SCENE[1][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 600, 0];
  _IT=0;
  OBJ_SCENE[1][_ID_SCENE_ENV_FG] = [];
//------------------------------------------------------------------------------
  OBJ_SCENE[2] = [];
  OBJ_SCENE[2][_ID_SCENE_NAME] = 'Комната последнего босса2';
  OBJ_SCENE[2][_ID_SCENE_BG] = 15;
  _IT=0;
  OBJ_SCENE[2][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [33, 1, 480, 360];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [35, 1, -80, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [34, 1, 80, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [35, 1, 280, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [35, 1, 440, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [34, 1, 600, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [41, 3, 700, 200];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 0, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 300, 0];
  OBJ_SCENE[2][_ID_SCENE_ENV_BG][_IT++] = [10, 2, 600, 0];
  _IT=0;
  OBJ_SCENE[2][_ID_SCENE_ENV_FG] = [];
//------------------------------------------------------------------------------
  OBJ_SCENE[3] = [];
  OBJ_SCENE[3][_ID_SCENE_NAME] = 'Лес2';
  OBJ_SCENE[3][_ID_SCENE_BG] = 8;
  _IT=0;
  OBJ_SCENE[3][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [20, 3, 250, 150];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [14, 3, 50, 50];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 120, 70];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 520, 70];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [16, 3, 520, 100];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [16, 3, 220, 150];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [16, 3, 350, 50];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [14, 3, 550, 250];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [20, 3, 50, 250];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 400, 170];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [22, 3, 0, 50];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [22, 3, 450, 0];
  OBJ_SCENE[3][_ID_SCENE_ENV_BG][_IT++] = [25, 3, 550, 0];
  _IT=0;
  OBJ_SCENE[3][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[3][_ID_SCENE_ENV_FG][_IT++] = [14, 3, 420, 470];
//------------------------------------------------------------------------------
  OBJ_SCENE[4] = [];
  OBJ_SCENE[4][_ID_SCENE_NAME] = 'Комната короля';
  OBJ_SCENE[4][_ID_SCENE_BG] = 7;
  _IT=0;
  OBJ_SCENE[4][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [28, 2, 0, 0];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [30, 2, 320, 0];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [28, 2, 400, 0];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [32, 2, 720, 0];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [27, 2, 0, 170];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [29, 3, 600, 100];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [26, 3, 700, 300];
  OBJ_SCENE[4][_ID_SCENE_ENV_BG][_IT++] = [26, 3, 600, 300];
  _IT=0;
  OBJ_SCENE[4][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[4][_ID_SCENE_ENV_FG][_IT++] = [39, 3, 680, 350];
  OBJ_SCENE[4][_ID_SCENE_ENV_FG][_IT++] = [38, 3, 580, 350];
  OBJ_SCENE[4][_ID_SCENE_ENV_FG][_IT++] = [29, 3, 400, 450];
//------------------------------------------------------------------------------
  OBJ_SCENE[5] = [];
  OBJ_SCENE[5][_ID_SCENE_NAME] = 'Лес3';
  OBJ_SCENE[5][_ID_SCENE_BG] = 8;
  _IT=0;
  OBJ_SCENE[5][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [17, 3, 250, 150];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [17, 3, 150, 300];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [17, 3, 550, 100];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 300, 50];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [24, 2, 0, 0];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [24, 2, 550, 50];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 400, 170];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [23, 3, 500, 170];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [15, 3, 300, 270];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [13, 3, 300, 320];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [24, 2, 150, 150];
  OBJ_SCENE[5][_ID_SCENE_ENV_BG][_IT++] = [18, 2, 350, 440];
  _IT=0;
  OBJ_SCENE[5][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[5][_ID_SCENE_ENV_FG][_IT++] = [17, 3, 120, 500];
//------------------------------------------------------------------------------
  OBJ_SCENE[6] = [];
  OBJ_SCENE[6][_ID_SCENE_NAME] = 'Город';
  OBJ_SCENE[6][_ID_SCENE_BG] = 14;
  _IT=0;
  OBJ_SCENE[6][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 0, 0];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 150, 0];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 300, 0];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 450, 0];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 400, 150];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 250, 150];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [9, 2, 100, 150];
  OBJ_SCENE[6][_ID_SCENE_ENV_BG][_IT++] = [37, 2, 500, 100];
  _IT=0;
  OBJ_SCENE[6][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[6][_ID_SCENE_ENV_FG][_IT++] = [2, 2, 200, 350];
  OBJ_SCENE[6][_ID_SCENE_ENV_FG][_IT++] = [3, 2, 500, 350];
//------------------------------------------------------------------------------
  OBJ_SCENE[7] = [];
  OBJ_SCENE[7][_ID_SCENE_NAME] = 'Город2';
  OBJ_SCENE[7][_ID_SCENE_BG] = 14;
  _IT=0;
  OBJ_SCENE[7][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 0, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 40, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 80, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 120, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 160, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 200, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 240, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 280, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 320, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 360, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 400, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 440, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 480, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 520, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 560, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 600, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 640, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 680, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 720, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [42, 1, 760, 0];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [37, 2, 0, 120];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [37, 2, 250, 120];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [37, 2, 500, 120];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [2, 2, 205, 140];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [1, 2, 455, 140];
  OBJ_SCENE[7][_ID_SCENE_ENV_BG][_IT++] = [3, 2, 705, 140];
  _IT=0;
  OBJ_SCENE[7][_ID_SCENE_ENV_FG] = [];
//------------------------------------------------------------------------------
  OBJ_SCENE[8] = [];
  OBJ_SCENE[8][_ID_SCENE_NAME] = 'Берег моря';
  OBJ_SCENE[8][_ID_SCENE_BG] = 2;
  _IT=0;
  OBJ_SCENE[8][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 0, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 120, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 240, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 360, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 480, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 600, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [48, 1, 680, 400];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [49, 1, 120, 200];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [49, 1, 220, 100];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [49, 1, 520, 300];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [49, 1, 620, 0];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [50, 1, 0, 40];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [50, 1, 400, 320];
  OBJ_SCENE[8][_ID_SCENE_ENV_BG][_IT++] = [50, 1, 480, 120];
  _IT=0;
  OBJ_SCENE[8][_ID_SCENE_ENV_FG] = [];
  //
//------------------------------------------------------------------------------
  OBJ_SCENE[9] = [];
  OBJ_SCENE[9][_ID_SCENE_NAME] = 'Пещера';
  OBJ_SCENE[9][_ID_SCENE_BG] = 1;
  _IT=0;
  OBJ_SCENE[9][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 0, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*2, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*3, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*4, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*5, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*6, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*7, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*8, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*9, 0];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 100, 100];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 500, 100];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 700, 100];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [11, 3, 400, 200];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [11, 3, 0, 230];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [11, 3, 250, 300];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [11, 3, 200, 330];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [12, 3, 600, 230];
  OBJ_SCENE[9][_ID_SCENE_ENV_BG][_IT++] = [17, 3, 500, 300];
  _IT=0;
  OBJ_SCENE[9][_ID_SCENE_ENV_FG] = [];  
  OBJ_SCENE[9][_ID_SCENE_ENV_FG][_IT++] = [17, 3, 230, 490];
  OBJ_SCENE[9][_ID_SCENE_ENV_FG][_IT++] = [17, 3, 200, 500];
//------------------------------------------------------------------------------
  OBJ_SCENE[10] = [];
  OBJ_SCENE[10][_ID_SCENE_NAME] = 'Пещера2';
  OBJ_SCENE[10][_ID_SCENE_BG] = 1;
  _IT=0;
  OBJ_SCENE[10][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [46, 2, 0, 0];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [45, 2, 160, 0];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [46, 2, 400, 0];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [45, 2, 560, 0];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [0, 2, 120, 50];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [0, 2, 160, 100];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [0, 2, 360, 70];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [0, 2, 660, 50];
  OBJ_SCENE[10][_ID_SCENE_ENV_BG][_IT++] = [4, 3, 400, 150];
  _IT=0;
  OBJ_SCENE[10][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[10][_ID_SCENE_ENV_FG][_IT++] = [0, 2, 450, 320];
  OBJ_SCENE[10][_ID_SCENE_ENV_FG][_IT++] = [0, 2, 500, 350];
//------------------------------------------------------------------------------
  OBJ_SCENE[11] = [];
  OBJ_SCENE[11][_ID_SCENE_NAME] = 'Пещера3';
  OBJ_SCENE[11][_ID_SCENE_BG] = 1;
  _IT=0;
  OBJ_SCENE[11][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 0, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*2, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*3, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*4, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*5, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*6, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*7, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*8, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [47, 2, 80*9, 0];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [5, 3, 400, 100];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [4, 3, 200, 130];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [4, 3, 500, 180];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [5, 3, 0, 100];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [0, 2, 620, 200];
  OBJ_SCENE[11][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 300, 150];
  _IT=0;
  OBJ_SCENE[11][_ID_SCENE_ENV_FG] = [];  
  OBJ_SCENE[11][_ID_SCENE_ENV_FG][_IT++] = [36, 3, 200, 350];
  OBJ_SCENE[11][_ID_SCENE_ENV_FG][_IT++] = [36, 3, 500, 350];
//------------------------------------------------------------------------------
  OBJ_SCENE[12] = [];
  OBJ_SCENE[12][_ID_SCENE_NAME] = 'Подземелье';
  OBJ_SCENE[12][_ID_SCENE_BG] = 11;
  _IT=0;
  OBJ_SCENE[12][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 0, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 80, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 240, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 400, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 480, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 560, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 720, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [1, 2, 450, 0];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [8, 3, 100, 150];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [9, 3, 300, 36];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [9, 3, 500, 36];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [8, 3, 700, 150];
  OBJ_SCENE[12][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 170, 10];
  _IT=0;
  OBJ_SCENE[12][_ID_SCENE_ENV_FG] = [];
//------------------------------------------------------------------------------
  OBJ_SCENE[13] = [];
  OBJ_SCENE[13][_ID_SCENE_NAME] = 'Подземелье2';
  OBJ_SCENE[13][_ID_SCENE_BG] = 13;
  _IT=0;
  OBJ_SCENE[13][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 0, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 80, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 240, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 400, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 480, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 560, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 720, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 0, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 150, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 300, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 450, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 600, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 730, 0];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [6, 3, 200, 100];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [6, 3, 620, 180];
  OBJ_SCENE[13][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 420, 80];
  _IT=0;
  OBJ_SCENE[13][_ID_SCENE_ENV_FG] = [];
//------------------------------------------------------------------------------
  OBJ_SCENE[14] = [];
  OBJ_SCENE[14][_ID_SCENE_NAME] = 'Подземелье3';
  OBJ_SCENE[14][_ID_SCENE_BG] = 12;
  _IT=0;
  OBJ_SCENE[14][_ID_SCENE_ENV_BG] = [];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 0, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 80, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 240, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 400, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 480, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [44, 2, 560, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [43, 2, 720, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [4, 2, 0, 200];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 300, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 450, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [4, 2, 150, 100];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [5, 2, 650, 100];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [4, 2, 550, 200];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [7, 2, 730, 0];
  OBJ_SCENE[14][_ID_SCENE_ENV_BG][_IT++] = [36, 3, 420, 80];
  _IT=0;
  OBJ_SCENE[14][_ID_SCENE_ENV_FG] = [];
  OBJ_SCENE[14][_ID_SCENE_ENV_FG][_IT++] = [36, 3, 0, 350];
  OBJ_SCENE[14][_ID_SCENE_ENV_FG][_IT++] = [6, 3, 500, 420];
//------------------------------------------------------------------------------
var OBJ_BGSOUND = [];
  OBJ_BGSOUND[0] = ['Опенинг и эндинг','bgm00.mid'];
  OBJ_BGSOUND[1] = ['Битва','bgm01.mid'];
  OBJ_BGSOUND[2] = ['Битва2','bgm02.mid'];
  OBJ_BGSOUND[3] = ['Последний босс','bgm03.mid'];
  OBJ_BGSOUND[4] = ['Битва3','bgm04.mid'];
  OBJ_BGSOUND[5] = ['Король','bgm05.mid'];
  OBJ_BGSOUND[6] = ['Болтавня','bgm06.mid'];
  OBJ_BGSOUND[7] = ['Лес','bgm07.mid'];
  OBJ_BGSOUND[8] = ['Берег моря','bgm08.mid'];
  OBJ_BGSOUND[9] = ['Пещера','bgm09.mid'];
  OBJ_BGSOUND[10] = ['Подземелье','bgm10.mid'];
  OBJ_BGSOUND[11] = ['Город','bgm11.mid'];
  OBJ_BGSOUND[12] = ['Победа','bgm12.mid'];
  OBJ_BGSOUND[13] = ['Битва4','bgm13.mid'];
  OBJ_BGSOUND[14] = ['Битва5','bgm14.mid'];
//------------------------------------------------------------------------------
var OBJ_ENEMYS = [];
  /**
   * Битва с суппортом  
   */  
  OBJ_ENEMYS[0] = [];
  // показатели
  OBJ_ENEMYS[0][0] = [
  1, 1, 1, 1, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0, 0, 0, 0, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  9999, 1, 1, 1, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 0, 1, 0, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[0][1] = [];
  // логика
  OBJ_ENEMYS[0][1][0] = [true, 0, 0];
  OBJ_ENEMYS[0][1][1] = [true, 0, 0];
  OBJ_ENEMYS[0][1][2] = [true, 0, 0];
  OBJ_ENEMYS[0][1][3] = [true, 0, 0];
  OBJ_ENEMYS[0][1][4] = [true, 0, 0];
  OBJ_ENEMYS[0][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------
  OBJ_ENEMYS[1] = [];
  OBJ_ENEMYS[1][0] = [
  1, 1, 1, 1, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  9999, 1, 1, 1, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 0, 1, 0, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  0           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[1][1] = [];
  // логика
  OBJ_ENEMYS[1][1][0] = [true, 0, 0];
  OBJ_ENEMYS[1][1][1] = [true, 0, 0];
  OBJ_ENEMYS[1][1][2] = [true, 0, 0];
  OBJ_ENEMYS[1][1][3] = [true, 0, 0];
  OBJ_ENEMYS[1][1][4] = [true, 0, 0];
  OBJ_ENEMYS[1][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------
  OBJ_ENEMYS[2] = [];
  OBJ_ENEMYS[2][0] = [
  1, 1, 1, 1, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0, 0, 0, 0, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  9999, 1, 1, 1, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 0, 1, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  0           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[2][1] = [];
  OBJ_ENEMYS[2][1][0] = [true, 0, 0];
  OBJ_ENEMYS[2][1][1] = [true, 0, 0];
  OBJ_ENEMYS[2][1][2] = [true, 0, 0];
  OBJ_ENEMYS[2][1][3] = [true, 0, 0];
  OBJ_ENEMYS[2][1][4] = [true, 0, 0];
  OBJ_ENEMYS[2][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------  
  OBJ_ENEMYS[3] = [];
  OBJ_ENEMYS[3][0] = [
  120, 30, 120, 30, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 5, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 0, 1, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[3][1] = [];
  OBJ_ENEMYS[3][1][0] = [true, 3, 1];
  OBJ_ENEMYS[3][1][1] = [true, 4, 4];
  OBJ_ENEMYS[3][1][2] = [true, 0, 10];
  OBJ_ENEMYS[3][1][3] = [true, 0, 0];
  OBJ_ENEMYS[3][1][4] = [true, 0, 0];
  OBJ_ENEMYS[3][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------  
  OBJ_ENEMYS[4] = [];
  OBJ_ENEMYS[4][0] = [
  150, 10, 150, 10, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  7, 5, 7, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 22, 1, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[4][1] = [];
  OBJ_ENEMYS[4][1][0] = [true, 0, 0];
  OBJ_ENEMYS[4][1][1] = [true, 0, 0];
  OBJ_ENEMYS[4][1][2] = [true, 0, 0];
  OBJ_ENEMYS[4][1][3] = [true, 0, 0];
  OBJ_ENEMYS[4][1][4] = [true, 0, 0];
  OBJ_ENEMYS[4][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------
  OBJ_ENEMYS[5] = [];
  OBJ_ENEMYS[5][0] = [
  150, 30, 150, 30, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 2, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 9, 5, 9, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 14, 1, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  0           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[5][1] = [];
  OBJ_ENEMYS[5][1][0] = [true, 0, 4];
  OBJ_ENEMYS[5][1][1] = [true, 0, 0];
  OBJ_ENEMYS[5][1][2] = [true, 0, 0];
  OBJ_ENEMYS[5][1][3] = [true, 0, 0];
  OBJ_ENEMYS[5][1][4] = [true, 0, 0];
  OBJ_ENEMYS[5][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------    
  OBJ_ENEMYS[6] = [];
  OBJ_ENEMYS[6][0] = [
  750, 30, 750, 30, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 0, 1.5, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 9, 5, 9, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 4, 1, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[6][1] = [];
  OBJ_ENEMYS[6][1][0] = [true, 3, 3];
  OBJ_ENEMYS[6][1][1] = [true, 0, 0];
  OBJ_ENEMYS[6][1][2] = [true, 0, 0];
  OBJ_ENEMYS[6][1][3] = [true, 0, 0];
  OBJ_ENEMYS[6][1][4] = [true, 0, 0];
  OBJ_ENEMYS[6][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------   
  OBJ_ENEMYS[7] = [];
  OBJ_ENEMYS[7][0] = [
  300, 30, 300, 30, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 0, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  7, 5, 7, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 20, 4, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[7][1] = [];
  OBJ_ENEMYS[7][1][0] = [true, 3, 17];
  OBJ_ENEMYS[7][1][1] = [true, 2, 8];
  OBJ_ENEMYS[7][1][2] = [true, 0, 0];
  OBJ_ENEMYS[7][1][3] = [true, 0, 0];
  OBJ_ENEMYS[7][1][4] = [true, 0, 0];
  OBJ_ENEMYS[7][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[8] = [];
  OBJ_ENEMYS[8][0] = [
  500, 30, 500, 30, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  9, 1, 6, 1, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 19, 4, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[8][1] = [];
  OBJ_ENEMYS[8][1][0] = [true, 3, 2];
  OBJ_ENEMYS[8][1][1] = [true, 0, 0];
  OBJ_ENEMYS[8][1][2] = [true, 0, 0];
  OBJ_ENEMYS[8][1][3] = [true, 0, 0];
  OBJ_ENEMYS[8][1][4] = [true, 0, 0];
  OBJ_ENEMYS[8][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[9] = [];
  OBJ_ENEMYS[9][0] = [
  400, 1, 400, 1, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0.4, 0.4, 0.4, 0.4, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  7, 1, 7, 1, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 17, 4, 0, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[9][1] = [];
  OBJ_ENEMYS[9][1][0] = [true, 0, 0];
  OBJ_ENEMYS[9][1][1] = [true, 0, 0];
  OBJ_ENEMYS[9][1][2] = [true, 0, 0];
  OBJ_ENEMYS[9][1][3] = [true, 0, 0];
  OBJ_ENEMYS[9][1][4] = [true, 0, 0];
  OBJ_ENEMYS[9][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[10] = [];
  OBJ_ENEMYS[10][0] = [
  1200, 200, 1200, 200, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 5, 4, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 5, 4, 0, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[10][1] = [];
  OBJ_ENEMYS[10][1][0] = [true, 3, 5];
  OBJ_ENEMYS[10][1][1] = [true, 2, 14];
  OBJ_ENEMYS[10][1][2] = [true, 1, 11];
  OBJ_ENEMYS[10][1][3] = [true, 5, 8];
  OBJ_ENEMYS[10][1][4] = [true, 0, 5];
  OBJ_ENEMYS[10][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[11] = [];
  OBJ_ENEMYS[11][0] = [
  500, 150, 500, 150, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1.2, 0, 1.2, 0, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 5, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 15, 5, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[11][1] = [];
  OBJ_ENEMYS[11][1][0] = [true, 2, 2];
  OBJ_ENEMYS[11][1][1] = [true, 5, 8];
  OBJ_ENEMYS[11][1][2] = [true, 0, 14];
  OBJ_ENEMYS[11][1][3] = [true, 0, 0];
  OBJ_ENEMYS[11][1][4] = [true, 0, 0];
  OBJ_ENEMYS[11][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[12] = [];
  OBJ_ENEMYS[12][0] = [
  700, 20, 700, 20, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0, 1.2, 0, 1.2, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  7, 5, 7, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 16, 5, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[12][1] = [];
  OBJ_ENEMYS[12][1][0] = [true, 2, 2];
  OBJ_ENEMYS[12][1][1] = [true, 0, 0];
  OBJ_ENEMYS[12][1][2] = [true, 0, 0];
  OBJ_ENEMYS[12][1][3] = [true, 0, 0];
  OBJ_ENEMYS[12][1][4] = [true, 0, 0];
  OBJ_ENEMYS[12][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[13] = [];
  OBJ_ENEMYS[13][0] = [
  1000, 1, 1000, 1, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0.8, 0.8, 0.8, 0.8, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  8, 5, 7, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 18, 5, 0.6, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[13][1] = [];
  OBJ_ENEMYS[13][1][0] = [true, 0, 0];
  OBJ_ENEMYS[13][1][1] = [true, 0, 0];
  OBJ_ENEMYS[13][1][2] = [true, 0, 0];
  OBJ_ENEMYS[13][1][3] = [true, 0, 0];
  OBJ_ENEMYS[13][1][4] = [true, 0, 0];
  OBJ_ENEMYS[13][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[14] = [];
  OBJ_ENEMYS[14][0] = [
  1000, 50, 1000, 50, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 2, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  8, 5, 6, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 21, 5, 0.7, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  0           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[14][1] = [];
  OBJ_ENEMYS[14][1][0] = [true, 2, 2];
  OBJ_ENEMYS[14][1][1] = [true, 0, 0];
  OBJ_ENEMYS[14][1][2] = [true, 0, 0];
  OBJ_ENEMYS[14][1][3] = [true, 0, 0];
  OBJ_ENEMYS[14][1][4] = [true, 0, 0];
  OBJ_ENEMYS[14][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[15] = [];
  OBJ_ENEMYS[15][0] = [
  2000, 200, 2000, 200, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  0, 1, 1, 0, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 5, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 6, 5, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  0           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[15][1] = [];
  OBJ_ENEMYS[15][1][0] = [true, 2, 3];
  OBJ_ENEMYS[15][1][1] = [true, 5, 6];
  OBJ_ENEMYS[15][1][2] = [true, 0, 15];
  OBJ_ENEMYS[15][1][3] = [true, 0, 0];
  OBJ_ENEMYS[15][1][4] = [true, 0, 0];
  OBJ_ENEMYS[15][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[16] = [];
  OBJ_ENEMYS[16][0] = [
  3544, 10, 3544, 50, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 10, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 3, 5, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[16][1] = [];
  OBJ_ENEMYS[16][1][0] = [true, 2, 3];
  OBJ_ENEMYS[16][1][1] = [true, 0, 0];
  OBJ_ENEMYS[16][1][2] = [true, 0, 0];
  OBJ_ENEMYS[16][1][3] = [true, 0, 0];
  OBJ_ENEMYS[16][1][4] = [true, 0, 0];
  OBJ_ENEMYS[16][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  OBJ_ENEMYS[17] = [];
  OBJ_ENEMYS[17][0] = [
  4450, 300, 4450, 300, // _ID_HP _ID_MP _ID_MHP _ID_MMP
  1, 1, 1, 1, // _ID_ICE _ID_FIR _ID_WAT _ID_THU
  5, 5, 5, 5, // _ID_ATK _ID_MAT _ID_POW _ID_WIS
  '', 7, 5, 1, // _ID_NAME _ID_IMAGE _ID_TATK _ID_TDEFMUL
  1           // _ID_PDEFMUL
  ];
  OBJ_ENEMYS[17][1] = [];
  OBJ_ENEMYS[17][1][0] = [true, 2, 3];
  OBJ_ENEMYS[17][1][1] = [true, 5, 9];
  OBJ_ENEMYS[17][1][2] = [true, 0, 12];
  OBJ_ENEMYS[17][1][3] = [true, 0, 0];
  OBJ_ENEMYS[17][1][4] = [true, 0, 0];
  OBJ_ENEMYS[17][1][5] = [true, 0, 0];
//------------------------------------------------------------------------------ 
  // зомби 3 
  // призрак 4 - имунитет к физ атаке боится огня
  
  // скелет 3 - имунитет к огню
  // орк 2 - сильный
  // голем 3 - имун к броску боится грома
  
  // гоблин маг 4 - имун к огню и грому
  // гоблин воин 4 - иммун к воде и льду
  // огр 2  - сильный
  // вампир 2 - имун к физ атаке боится воды
   
  // тёмный король 3 - имун ко всей магии слабый
  // демон 3 - имун к броску боится льда
  // тёмный монах 3 - имун к физ атаке имун к броску

  // краб - имун к воде сильный

  // зло - имун к броску сильный

  // мую - имун к физ атаке сильный

  // Х - сильный

  // зольфар - сильный

  // 36 + 4 - 8 уровней
  
var OBJ_DIALOG = [];
/*
  OBJ_DIALOG[0] = ['__HERO__','',0,0];
  OBJ_DIALOG[0] = ['__ENEMY__','',0,0];
  OBJ_DIALOG[0] = ['__SUPPORT__','',0,0];
*/
  OBJ_DIALOG[0] = ['__SUPPORT__','Вот мы наконец в <i>королевском дворце</i>.',200,150];
  OBJ_DIALOG[1] = ['__HERO__','Да уж целую неделю добирались сюда.',100,200];
  OBJ_DIALOG[2] = ['__HERO__','<i>Ваше величество</i>, мы прибыли по вашему указанию. Ждём дальнейших распоряжений',100,200];
  OBJ_DIALOG[3] = ['Король','Я наслышан о твоих подвига и поэтому я позвал именно тебя, а ни кого другого.',350,250];
  OBJ_DIALOG[4] = ['Король','Нашу принцессу, мою дочь, <i>Карэн</i> похитил злой колдун <i>Зольфар</i>. И это на конуне свадьбы её с принцем из соседнего королевства.',350,250];
  OBJ_DIALOG[5] = ['Король','Мы очень волнуемся за неё. Мы уже отправили насколько отрядов в <i>замок зольфара</i>. И ни один не вурнулся.',350,250];
  OBJ_DIALOG[6] = ['Королева','Горе нам если до свадьбы принцесса не появится в замке. А осталось всего неделя. Спаси нашу дочь!!!',450,250];
  OBJ_DIALOG[7] = ['Король','Недавно кто-то <i>пробудил злого</i> колдуна, который был <i>запечатан</i> 400 лет назад. И наша дочь это только начало. Не извастно что дальше будет с нашим королевством, да и с нашим миром. ',350,250];
  OBJ_DIALOG[8] = ['Король','Спаси Карэн и запечатай злого колдуна!',350,250];
  OBJ_DIALOG[9] = ['Королева','Путь до замка не близок и лежит через <i>лес</i>.',450,250];
  OBJ_DIALOG[10] = ['Король','Вот <i>магическая печать, открывающая катакомы забытого города</i> она тебе пригодится.',350,250];
  OBJ_DIALOG[11] = ['__SUPPORT__','<center>Теперь у нас есть<br/><img src="public/image/item/seal.gif"/></br><i>магическая печать</i></center>',200,150];
  OBJ_DIALOG[12] = ['__SUPPORT__','Давно мы с тобой не были на задании. Надо бы вспомнить некоторые вещи. Ты не против?',200,150];
  OBJ_DIALOG[13] = ['__HERO__','Хорошо.',100,200];
  OBJ_DIALOG[14] = ['__SUPPORT__','Как ты знаешь существует <i>4 магические стихии</i>: <i>Огонь, Лёд, Молния, Вода</i>.',200,150];
  OBJ_DIALOG[15] = ['__HERO__','<i>Огонь</i> противостоит <i>Льду</i>. <i>Молния</i> противостоит <i>Воде</i>. Не так ли?',100,200];
  OBJ_DIALOG[16] = ['__SUPPORT__','Именно! Например если <i>враг огненный</i>, то он будет <i>бояться Льда</i>, а <i>огонь</i> на него <i>не будет действовать</i>. Запомни это.',200,150];
  OBJ_DIALOG[17] = ['__HERO__','Я помню.',100,200];
  OBJ_DIALOG[18] = ['__SUPPORT__','Пока ты владаешь магией низкого уровня, думаю пока доидём до замка показатели улучшатся.',200,150];
  OBJ_DIALOG[19] = ['__SUPPORT__','Как ты знаешь существует <i>3 типа атаки</i>: <i>Физическая атака, Бросок, Магия</i>.',200,150];
  OBJ_DIALOG[20] = ['__SUPPORT__','Если у тебя <i>много силы</i>, и <i>хорошее оружие</i>, тебе будет легко <i>атаковать физически</i>.',200,150];
  OBJ_DIALOG[21] = ['__SUPPORT__','Если у тебя <i>много знаний</i>, и <i>хорошее магическое оружие</i>, тебе будет легко <i>атаковать магией</i>.',200,150];
  OBJ_DIALOG[22] = ['__SUPPORT__','И наконец, если у тебя <i>достаточно силы</i>, и <i>хорошее метательное оружие</i>, ты с лёгкостью победишь врагов <i>метательными атаками</i>.',200,150];
  OBJ_DIALOG[23] = ['__HERO__','Правда не все монстры уязвимы к разным типам атак. Одни хорошо действуют, к другим у них иммунитет.',100,200];
  OBJ_DIALOG[24] = ['__SUPPORT__','Только <i>не забывай лечиться</i>, а то быстро проиграешь.',200,150];
  OBJ_DIALOG[25] = ['__HERO__','Хорошо.',100,200];
  OBJ_DIALOG[26] = ['__SUPPORT__','Давай проверим твои навыки и разомнёмся перед походом.',200,150];
  OBJ_DIALOG[27] = ['__SUPPORT__','Перед битвой необходимо <i>спланировать тактику</i> сражания с врагом.',200,150];
  OBJ_DIALOG[28] = ['__SUPPORT__','Появитеся меню настрйки битвы: оно состоит из <i>6 линий</i> в которых необходимо указывать <i>условие и действие</i>.',200,150];
  OBJ_DIALOG[29] = ['__SUPPORT__','Сеичас у тебя стоят <i>такие настройки</i>: 1. Если у меня менее 50% жизни - Лечеить себя 1ур',200,150];
  OBJ_DIALOG[30] = ['__SUPPORT__','2. В любом случае - Атаковать льдом 1ур.',200,150];
  OBJ_DIALOG[31] = ['__SUPPORT__','3. В любом случае - Атаковать физически.',200,150];
  OBJ_DIALOG[32] = ['__SUPPORT__','Ещё есть <i>3 не активных строки</i>. Меняя условие и действие можно управлять своими действиями в битве.',200,150];
  OBJ_DIALOG[33] = ['__SUPPORT__','Если <i>первое условие не выполняется</i>, то <i>проверяется следующее</i> и так далее.',200,150];
  OBJ_DIALOG[34] = ['__SUPPORT__','Если <i>условие выполнилось</i> - <i>происходит действие</i>.',200,150];
  OBJ_DIALOG[35] = ['__HERO__','Если у меня не будет <i>достаточно манны для атаки</i>, то <i>действие не выполнится</i>.',100,200];
  OBJ_DIALOG[36] = ['__SUPPORT__','Я сеичас создам своего клона, настройся так чтобы бить его <i>только физически</i>.',200,150];
  OBJ_DIALOG[37] = ['__HERO__','Попробую настроиться.',100,200];
  OBJ_DIALOG[38] = ['__SUPPORT__','Отлично! Хороший удар!',200,150];
  OBJ_DIALOG[39] = ['__SUPPORT__','Теперь пробуй <i>атаковать любой магией</i>.',200,150];
  OBJ_DIALOG[40] = ['__HERO__','Попробую настроиться.',100,200];
  OBJ_DIALOG[41] = ['__SUPPORT__','Отлично!',200,150];
  OBJ_DIALOG[42] = ['__SUPPORT__','У тебя есть какое-нибудь метательное оружие?',200,150];
  OBJ_DIALOG[43] = ['__HERO__','Есть. <i>Сюрикены</i>.',100,200];
  OBJ_DIALOG[44] = ['__SUPPORT__','Теперь пробуй атаковать ими.',200,150];
  OBJ_DIALOG[45] = ['__HERO__','Попробую настроиться.',100,200];
  OBJ_DIALOG[46] = ['__SUPPORT__','Отлично!',200,150];
  OBJ_DIALOG[47] = ['__SUPPORT__','Теперь сразись со мной! Используй <i>любые атаки</i>, которые захочешь. И <i>не забывай лечиться</i>.',200,150];
  OBJ_DIALOG[48] = ['__SUPPORT__','Хватит тренироваться. Времени мало пошли лучше выполнять задание.',200,150];
  OBJ_DIALOG[49] = ['__HERO__','А куда нам дальше? Король сказал <i>идти через лес</i> и больше ничего.',100,200];
  OBJ_DIALOG[50] = ['__SUPPORT__','Нужно идти <i>через лес</i> до <i>берега моря</i>. На берегу в скале есть <i>проход в пешеру</i> ведущую к <i>заброшенному городу</i>.',200,150];
  OBJ_DIALOG[51] = ['__ENEMY__','ААААА-АААА-ААА. Уэээээ!!!',400,250];
  OBJ_DIALOG[52] = ['__HERO__','ААА! А это что за зверь???',100,200];
  OBJ_DIALOG[53] = ['__SUPPORT__','Это зомби после пробуждения злого когдуна их стали замечать в лесу.',200,150];
  OBJ_DIALOG[54] = ['__ENEMY__','РРРРА-ААА-ЭЭЭЭЭ!!!',400,250];
  OBJ_DIALOG[55] = ['__ENEMY__','УУуууу!!! Леес моооой!!!',400,250];
  OBJ_DIALOG[56] = ['__SUPPORT__','Призраки очень опасные. На них <i>не действуют простые атаки</i>. И они <i>боятся огня</i>.',200,150];
  OBJ_DIALOG[57] = ['__SUPPORT__','О, вот это находка!!!',200,150];
  OBJ_DIALOG[58] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword1.gif" /><br /><i>Крепкий меч</i></center>',200,150];
  OBJ_DIALOG[59] = ['__SUPPORT__','Мы опять что-то нашли.',200,150];
  OBJ_DIALOG[60] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff1.gif" /><br /><i>Дубовый посох</i></center>',200,150];
  OBJ_DIALOG[61] = ['__SUPPORT__','<b><i>Теперь ты на много сильнее чем прежде!!!</i></b>',200,150];
  OBJ_DIALOG[62] = ['__SUPPORT__','Уже виднеется край леса. Ещё немного и мы доберёмся до берега.',200,150];
  OBJ_DIALOG[63] = ['__HERO__','Скорее бы. А то надоело бродить по чаще.',100,200];
  OBJ_DIALOG[64] = ['__SUPPORT__','Вот мы и пришли.',200,150];
  OBJ_DIALOG[65] = ['__HERO__','Море. Красотища!!! Отдохнуть бы сеичас. Полежать на пляже.',100,200];
  OBJ_DIALOG[66] = ['__SUPPORT__','Я знаю одну легенду. Она гласит о том, что раз в 50 лет пробуждается <i>морское чудище</i>.',200,150];
  OBJ_DIALOG[67] = ['__HERO__','Интересно как оно выглядит...',100,200];
  OBJ_DIALOG[68] = ['__SUPPORT__','Надеюсь мы этого не узнаем.',200,150];
  OBJ_DIALOG[69] = ['__ENEMY__','Бууу-уу-уу. Кто посмел топтать мой берег!!!',250,200];
  OBJ_DIALOG[70] = ['__HERO__','Аааа Гигинтский КРАБ!!!',100,200];
  OBJ_DIALOG[71] = ['__ENEMY__','Ты отправишься со мной на морское дно!!!',250,200];
  OBJ_DIALOG[72] = ['__SUPPORT__','Придётся сражаться. Крабы <i>очень живучие</i> и совсем <i>не боятся воды</i>.',200,150];
  OBJ_DIALOG[73] = ['__SUPPORT__','Смотри что-то лежит на земле.',200,150];
  OBJ_DIALOG[74] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/stones1.gif" /><br /><i>Мелкие драгоценные камни</i></center>',200,150];
  OBJ_DIALOG[75] = ['__SUPPORT__','Эти камни обладают магической силой. <i>Теперь твои заклинания улучшились</i>. Проверь свои настройки.',200,150];
  OBJ_DIALOG[76] = ['__HERO__','Ну и зверюга. Теперь легенда в прошлом. И он никогда больше не будет мешать рыбакам.',100,200];
  OBJ_DIALOG[77] = ['__SUPPORT__','Уже виден вход в пещеру. Пошли!',200,150];
  
  OBJ_DIALOG[78] = ['__HERO__','Как тут темно и сыро! Тут должно быть водятся монстры!',100,200];
  OBJ_DIALOG[79] = ['__SUPPORT__','Да. После пробуджения Зольфара люди боятся заходить в эти пещеры.',200,150];
  OBJ_DIALOG[80] = ['__SUPPORT__','Эти пещеры слишком запутанные, тут скрывались люди во время воины. Надеюсь мы не заблудимся.',200,150];
  OBJ_DIALOG[81] = ['__ENEMY__','Хеееееееее',400,250];
  OBJ_DIALOG[82] = ['__HERO__','Скелет! Похоже он враждебно настроен!',100,200];
  OBJ_DIALOG[83] = ['__SUPPORT__','А мы с тобой ещё никогда не видели дружелюбного скелета...',200,150];
  OBJ_DIALOG[84] = ['__ENEMY__','ХРРРРРРРР!!!',400,250];
  OBJ_DIALOG[85] = ['__SUPPORT__','Осторожно! Оно атакует. Запомни, скелеты <i>не боятся оня</i>.',200,150];
  //--скел
  OBJ_DIALOG[86] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/throw1.gif" /><br /><i>Метательные веер</i></center>',200,150];
  OBJ_DIALOG[87] = ['__SUPPORT__','Нам в следующий зал.',200,150];
  OBJ_DIALOG[88] = ['__HERO__','Пошли!',100,200];
  OBJ_DIALOG[89] = ['__SUPPORT__','Теперь налево.',200,150];
  OBJ_DIALOG[90] = ['__SUPPORT__','Теперь направо.',200,150];
  OBJ_DIALOG[91] = ['__SUPPORT__','Теперь ещё раз направо.',200,150];
  //--скел
  OBJ_DIALOG[92] = ['__HERO__','А тебе не кажется что мы заблудились?',100,200];
  OBJ_DIALOG[93] = ['__SUPPORT__','Нет.',200,150];
  OBJ_DIALOG[94] = ['__HERO__','Помоему мы ходим кругами...',100,200];
  OBJ_DIALOG[95] = ['__SUPPORT__','Спросить бы у кого.',200,150];
  OBJ_DIALOG[96] = ['__HERO__','У дружелюбного скелета?!',100,200];
  //--скел
  OBJ_DIALOG[97] = ['__ENEMY__','Хахаха теперь будет чем пообедать.',400,250];
  OBJ_DIALOG[98] = ['__SUPPORT__','Орки глупые, но <i>очень сильные</i>.',200,150];
  //--орк
  OBJ_DIALOG[99] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff2.gif" /><br /><i>Малый  посох магии</i></center>',200,150];
  OBJ_DIALOG[100] = ['__HERO__','А это что за шагающая груда камней?',100,200];
  OBJ_DIALOG[101] = ['__SUPPORT__','Голем. Так как он из земли то совсем <i>не боится метательных атак</i> и на него не <i>плохо деиствует магя</i>.',200,150];
  //--голем
  OBJ_DIALOG[102] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword2.gif" /><br /><i>Широкий меч</i></center>',200,150];
  OBJ_DIALOG[103] = ['__SUPPORT__','<b><i>Теперь ты на много сильнее чем прежде!!!</i></b>',200,150];
  OBJ_DIALOG[104] = ['__HERO__','Да тут их цалая армия!!!',100,200];
  //--голем
  //--орк
  OBJ_DIALOG[105] = ['__SUPPORT__','Чем дальше - тем толще моснтры.',200,150];
  //--голем
  OBJ_DIALOG[106] = ['__HERO__','А теперь куда?',100,200];
  OBJ_DIALOG[107] = ['__ENEMY__','Здравствуйте путники. Вы просили помощи поэтому я тут.',400,250];
  OBJ_DIALOG[108] = ['__HERO__','Кто ты?',100,200];
  OBJ_DIALOG[109] = ['__ENEMY__','Это не важно пошли за мной я тебя провожу.',400,250];
  OBJ_DIALOG[110] = ['__SUPPORT__','Не слушай его это <i>Зло</i>.',200,150];
  OBJ_DIALOG[111] = ['__ENEMY__','Не слушай этого комара, пошли пошли!!!',400,250];
  OBJ_DIALOG[112] = ['__HERO__','Мне не нужны ни чьи советы! Защищайся!',100,200];
  OBJ_DIALOG[113] = ['__ENEMY__','ААААА!!! Ты пожалаешь об этомммм!!',400,250];
  OBJ_DIALOG[114] = ['__SUPPORT__','Я ничего про него не знаю, разве то что оно <i>летает</i>.',200,150];
  //--зло
  OBJ_DIALOG[115] = ['__SUPPORT__','Мы победили! Оно превратилось в камень!',200,150];
  OBJ_DIALOG[116] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/lifestone1.gif" /><br /><i>Камень жизни</i></center>',200,150];
  OBJ_DIALOG[117] = ['__SUPPORT__','Проверь свои настройки теперь ты <i>лечишь эффективнее</i>!',200,150];
  OBJ_DIALOG[118] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword3.gif" /><br /><i>Крылатый меч</i></center>',200,150];
  OBJ_DIALOG[119] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff3.gif" /><br /><i>Рубиновый посох</i></center>',200,150];
   
  OBJ_DIALOG[120] = ['__HERO__','А теперь больше некуда идти...Мы заблудились...',100,200];
  OBJ_DIALOG[121] = ['__SUPPORT__','Не всё так просто. Используй печать, которую тебе дал король!',200,150];
  OBJ_DIALOG[122] = ['__HERO__','<center>Использую<br/><img src="public/image/item/seal.gif"/></br><i>магическую печать</i></center>',100,200];
  //--location 
  OBJ_DIALOG[123] = ['__HERO__','ОГО! Это куда мы переместились?!',100,200];
  OBJ_DIALOG[124] = ['__SUPPORT__','Это <i>катакомбы забытого города</i>. Вот как оказывается действует печать!',200,150];
  OBJ_DIALOG[125] = ['__SUPPORT__','Тут и не должно быть никакой стены. Мы просто использовали печать и <i>переместились в катакомбы</i>. Просто!',200,150];
  OBJ_DIALOG[126] = ['__HERO__','И правда здорово! Мы с тобой в подобных местах никогда не были. Тут жутко...',100,200];
  OBJ_DIALOG[127] = ['__SUPPORT__','У меня не хорошее предчевствие. Пошли дальше. Увидим что нас ждёт.',200,150];
  //--локация
  OBJ_DIALOG[128] = ['__ENEMY__','Ахахахаааа!!! Буууу!!!',400,250];
  OBJ_DIALOG[129] = ['__SUPPORT__','Это логово гоблинов!!!',200,150];
  OBJ_DIALOG[130] = ['__ENEMY__','АААА!!!',400,250];
  //--гоб маг
  OBJ_DIALOG[131] = ['__SUPPORT__','Похоже они <i>обладают иммунитетом</i> на некоторые магии.',200,150];
  OBJ_DIALOG[132] = ['__ENEMY__','РААААА!!! ААА!!!',400,250];
  OBJ_DIALOG[133] = ['__SUPPORT__','Теперь гоблин-воин!!!',200,150];
  //--гоб воин
  //--гоб маг
  OBJ_DIALOG[134] = ['__HERO__','Еле отбились...Надо бы передохнуть...',100,200];
  OBJ_DIALOG[135] = ['__SUPPORT__','Не время отдыхать надо спасать принцессу. Пошли.',200,150];
  OBJ_DIALOG[136] = ['__ENEMY__','РААААА!!! ААА!!!',400,250];
  //--гоб воин
  //--локация
  OBJ_DIALOG[137] = ['__HERO__','Это что за зелёное чудище!!!',100,200];
  OBJ_DIALOG[138] = ['__SUPPORT__','<i>Огр</i>. В кингах про них много написано. Они очень-очень сильные.',200,150];
  //--орг
  //--гоб воин
  OBJ_DIALOG[139] = ['__SUPPORT__','Мы что-то нашли.',200,150];
  OBJ_DIALOG[140] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword4.gif" /><br /><i>Огненный меч</i></center>',200,150];
  //--гоб маг
  OBJ_DIALOG[141] = ['__SUPPORT__','Мы что-то нашли.',200,150];
  OBJ_DIALOG[142] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff4.gif" /><br /><i>Старинный посох</i></center>',200,150];
  //--локация
  //--орг
  OBJ_DIALOG[143] = ['__SUPPORT__','<b><i>Теперь ты на много сильнее чем прежде!!!</i></b>',200,150];
  //--локация
  OBJ_DIALOG[144] = ['__ENEMY__','Тёплая кроооооооооовь!!!.',400,250];
  OBJ_DIALOG[145] = ['__SUPPORT__','Вампиры!!! Бежим!!!',200,150];
  OBJ_DIALOG[146] = ['__HERO__','Нельзя отступать! Мы победим!',100,200];
  //--вампир
  //--гоб воин
  OBJ_DIALOG[147] = ['__SUPPORT__','Ещё немного и мы доидём до выхода в город!',200,150];
  //--вампир
  //--локация
  OBJ_DIALOG[148] = ['__SUPPORT__','Мы пришли! Это <i>заброшенный город</i>!',200,150];
  OBJ_DIALOG[149] = ['__ENEMY__','УУУ! Далеко вы зашли!',400,250];
  OBJ_DIALOG[150] = ['__ENEMY__','Я охранник замка Зальфара. Дальше вам не пройти!',400,250];
  OBJ_DIALOG[151] = ['__HERO__','Защищайся!',100,200];
  OBJ_DIALOG[152] = ['__ENEMY__','Ха-ха-ха-ха!',400,250];
  
  OBJ_DIALOG[153] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword5.gif" /><br /><i>Рагнарок</i></center>',200,150];
  OBJ_DIALOG[154] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff5.gif" /><br /><i>Королевский скипетр</i></center>',200,150];
  OBJ_DIALOG[155] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/stones2.gif" /><br /><i>Магические ками</i></center>',200,150];
  OBJ_DIALOG[156] = ['__SUPPORT__','Теперь ты обладаешь самой сильной магией!',200,150];
  OBJ_DIALOG[157] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/lifestone2.gif" /><br /><i>Камень жизни</i></center>',200,150];
  OBJ_DIALOG[158] = ['__SUPPORT__','Теперь ты всех лучше излечиваешь раны!',200,150];
  OBJ_DIALOG[159] = ['__SUPPORT__','Идём дальше! До замка не далеко!',200,150];
  
  OBJ_DIALOG[160] = ['__HERO__','Такая красота!',100,200];
  OBJ_DIALOG[161] = ['__HERO__','Ух ты!',100,200];
  
  OBJ_DIALOG[162] = ['__SUPPORT__','Мы дошли. Тут могут водиться самые жуткие монстры!',200,150];
  OBJ_DIALOG[163] = ['__HERO__','Не приятное место!',100,200];
  OBJ_DIALOG[164] = ['__ENEMY__','Монстры?! Ха-ха!',400,250];
  OBJ_DIALOG[165] = ['__ENEMY__','Мне не нужны никакие монстры. Я личный телохранитель Зольфара.',400,250];
  OBJ_DIALOG[166] = ['__HERO__','Где принцесса?',100,200];
  OBJ_DIALOG[167] = ['__ENEMY__','Принцесса? Кто знает...',400,250];
  OBJ_DIALOG[168] = ['__ENEMY__','Тебе до неё не добраться.',400,250];
  
  OBJ_DIALOG[169] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/sword6.gif" /><br /><i>Меч ультимы</i></center>',200,150];
  OBJ_DIALOG[170] = ['__SUPPORT__','<center>Теперь у тебя есть<br /><img src="public/image/item/staff6.gif" /><br /><i>Совершенный посох</i></center>',200,150];
  OBJ_DIALOG[171] = ['__SUPPORT__','Теперь у тебя самое лучшее оружие!',200,150];
  OBJ_DIALOG[172] = ['__SUPPORT__','<b><i>Теперь ты на много сильнее чем прежде!!!</i></b>',200,150];
  
  OBJ_DIALOG[173] = ['__HERO__','Принцесса! С вами всё в порядке?',100,200];
  OBJ_DIALOG[174] = ['Принцесса','Да.',450,150];
  OBJ_DIALOG[175] = ['__ENEMY__','Кто это ко мне пожаловал в гости?!',250,100];
  OBJ_DIALOG[176] = ['__HERO__','Верни принцессу!',100,200];
  OBJ_DIALOG[177] = ['__ENEMY__','Я лучше захвачу тебя!!!',250,100];
  
  OBJ_DIALOG[178] = ['Принцесса','Бежим скорее!',450,150];
  OBJ_DIALOG[179] = ['__HERO__','Бежим!',100,200];
  
  OBJ_DIALOG[180] = ['__HERO__','Задание выполнено!',100,200];
  OBJ_DIALOG[181] = ['Король','Наше королевство спасено',350,250];
  OBJ_DIALOG[182] = ['Король','Спасибо огромное, теперь ты наш почётный гражданин!',350,250];
  OBJ_DIALOG[183] = ['Король','Теперь колдун не помешает нашему мирному королевству.',350,250];
  OBJ_DIALOG[184] = ['Королева','Свадьба завтра вечером. Мы успеем подготовиться. Спасибо!',450,250];
  OBJ_DIALOG[185] = ['Король','Мы вас приглашаем будте гостями!',350,250];
  OBJ_DIALOG[186] = ['Король','Мы вашу отвагу не забудем!',350,250];
  OBJ_DIALOG[187] = ['Королева','Вы сражались во имя справедливости и победили.',450,250];
  OBJ_DIALOG[188] = ['__SUPPORT__','Какой-то шум во дворе.',200,150];
  OBJ_DIALOG[189] = ['__HERO__','Надо сходить посмотреть.',100,200];
var OBJ_STORYLINE = [];
_IT = 0;
//------------------------------------------------------------------------------
  // hideStats();playBGSound(5);build_scene(4);dialog_show_id(0);begin_battle();showActionList();
  // draw_character(hero,ACT_STAND);
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1; // Next ID
  OBJ_STORYLINE[_IT][1] = false; // MAKE CheckPoint
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(5);show_support();draw_character(hero,ACT_STAND);build_scene(4);dialog_show_id(0);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(1);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(2);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(3);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(4);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(5);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(6);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(7);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(8);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(9);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(10);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(11);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(0);dialog_show_id(12);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(13);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(14);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(15);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(16);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(17);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(18);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(19);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(20);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(21);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(22);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(23);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(24);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(25);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(26);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(27);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(28);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(29);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(30);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(31);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(32);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(33);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(34);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(35);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No36
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hide_enemy();show_character();hideStats();build_scene(0);show_support();draw_character(hero,ACT_STAND);dialog_show_id(36);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(37);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);prepare_enemy(0);enemy[_ID_IMAGE] = hero[_ID_SUPPORT];begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false; 
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(38);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No41
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hide_enemy();show_character();hideStats();build_scene(0);show_support();draw_character(hero,ACT_STAND);dialog_show_id(39);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(40);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);prepare_enemy(1);enemy[_ID_IMAGE] = hero[_ID_SUPPORT];begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false; 
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(41);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No46
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hide_enemy();show_character();hideStats();build_scene(0);show_support();draw_character(hero,ACT_STAND);dialog_show_id(42);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(43);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(44);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(45);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);prepare_enemy(2);enemy[_ID_IMAGE] = hero[_ID_SUPPORT];begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false; 
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(46);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No53
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hide_enemy();show_character();hideStats();build_scene(0);show_support();draw_character(hero,ACT_STAND);dialog_show_id(47);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);prepare_enemy(3);enemy[_ID_IMAGE] = hero[_ID_SUPPORT];begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hideStats();show_support();dialog_show_id(48);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(49);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(50);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No59
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);show_support();build_scene(3);show_enemy();show_character();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(4);draw_character(enemy,ACT_STAND);dialog_show_id(51);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(52);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(53);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(54);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No65
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);show_support();build_scene(5);show_enemy();show_character();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(5);draw_character(enemy,ACT_STAND);dialog_show_id(55);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(56);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No69
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(0);show_character();show_enemy();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(4);draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No71
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(3);hide_support();show_character();show_enemy();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(5);draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hideStats();show_support();dialog_show_id(57);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(58);hero[_ID_ATK]+=2;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No75
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(3);hide_support();show_character();show_enemy();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(4);draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hideStats();show_support();dialog_show_id(59);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(60);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No79
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(0);hide_support();show_character();show_enemy();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(5);draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);hideStats();show_support();dialog_show_id(61);levelup();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No82
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(0);hide_support();show_character();show_enemy();hideStats();draw_character(hero,ACT_STAND);prepare_enemy(5);draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(7);build_scene(3);hideStats();show_support();dialog_show_id(62);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(63);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No86
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(8);build_scene(8);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(64);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(65);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(66);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(67);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(68);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(6);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(69);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(70);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(71);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(72);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(1);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(73);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(74);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(75);action_enable_list[5]=true;action_enable_list[8]=true;action_enable_list[11]=true;action_enable_list[14]=true;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(8);dialog_show_id(76);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(77);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No102
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(9);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(78);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(79);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(80);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(7);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(81);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(82);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(83);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(84);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(85);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(86);action_enable_list[17]=true;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);dialog_show_id(87);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(88);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'build_scene(11);dialog_show_id(89);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'build_scene(10);dialog_show_id(90);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'build_scene(11);dialog_show_id(91);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No118
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(10);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(7);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(92);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(93);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(94);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(95);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(96);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No125
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(11);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(7);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No127
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(9);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(8);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(97);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(98);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(99);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No132
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(9);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(9);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(100);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(101);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(102);hero[_ID_ATK]+=2;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(103);levelup();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No138
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(10);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(9);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(104);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No141
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(10);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(8);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No143
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(10);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(9);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(105);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No146
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(9);build_scene(10);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();dialog_show_id(106);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(10);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(107);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(108);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(109);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(110);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(111);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(112);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(113);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(114);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(2);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();hideStats();dialog_show_id(115);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(116);action_enable_list[2] = true;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(117);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(118);hero[_ID_ATK]+=2;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(119);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(120);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(121);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false; 
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(122);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No165
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(12);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();dialog_show_id(123);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(124);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(125);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(126);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(127);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No170
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(11);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(128);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(129);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(130);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();hideStats();dialog_show_id(131);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No176
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(12);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(132);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(133);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No180
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(11);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(134);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(135);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No184
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(12);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(136);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No187
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(14);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(13);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(137);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(138);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No191
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(14);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(12);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(139);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(140);hero[_ID_ATK]+=4;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No195
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(14);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(11);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(141);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(142);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No198
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(12);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(13);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(143);levelup();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No202
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();prepare_enemy(14);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(144);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(145);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(146);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No207
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(12);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(147);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(10);build_scene(13);hideStats();draw_character(hero,ACT_STAND);show_character();hide_support();prepare_enemy(14);show_enemy();draw_character(enemy,ACT_STAND);showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(13);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No212
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(11);build_scene(6);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(148);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(15);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(149);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(150);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(151);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(152);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(2);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'show_support();dialog_show_id(153);hero[_ID_ATK]+=4;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(154);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(155);action_enable_list[6]=true;action_enable_list[9]=true;action_enable_list[12]=true;action_enable_list[15]=true;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(156);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(157);action_enable_list[3]=true;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(158);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(159);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(11);build_scene(7);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(160);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(161);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No228
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(11);build_scene(1);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(162);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(163);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(16);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(164);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(165);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(166);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(167);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(168);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(14);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hideStats();show_support();dialog_show_id(169);hero[_ID_ATK]+=4;hero[_ID_TATK]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(170);hero[_ID_MAT]+=2;';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(171);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(172);levelup();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = true; // *** CHECKPOINT *** No241
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(11);build_scene(2);hideStats();draw_character(hero,ACT_STAND);show_character();show_support();hide_enemy();dialog_show_id(173);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(174);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'prepare_enemy(17);show_enemy();draw_character(enemy,ACT_STAND);dialog_show_id(175);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(176);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(177);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'hide_support();showActionList();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(3);begin_battle();';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false; //248
  OBJ_STORYLINE[_IT++][2] = 'hideStats();prepare_enemy(17);show_enemy();draw_character(enemy,ACT_STAND);custom_animation(0);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(178);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(179);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'playBGSound(5);show_support();draw_character(hero,ACT_STAND);build_scene(4);dialog_show_id(180);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(181);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(182);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(183);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(184);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(185);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(186);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(187);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(188);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = -1;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'dialog_show_id(189);';
//------------------------------------------------------------------------------
  OBJ_STORYLINE[_IT] = [];
  OBJ_STORYLINE[_IT][0] = 0;
  OBJ_STORYLINE[_IT][1] = false;
  OBJ_STORYLINE[_IT++][2] = 'staff(true);';
//------------------------------------------------------------------------------
//
/*
Королевская комната +
Лес +++
Берег моря +
Пещера +++ 9 10 11
Подземелье +++ 12 13 14
Город 6 7
Комната главного боса ++
Королевская комната +
*/
