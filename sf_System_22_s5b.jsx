﻿var location = "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_b_Raya\\log\\";
var scr_name = "Raya_22_s5";

//#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_1.jsx"
//#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_2.jsx"
//#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_3.jsx"
//#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_4.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\sf_scr_global_5.jsx"

#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\json2.js"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_compos_2.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_final_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_folder_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_prop_1.jsx"
#include "e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\lib_sys_1.jsx"

#include "sf_lib_System_22_1.jsx"

// global vars
var durationSec     = 5;

var rotationEnable  = 1;
//var rotationEnable  = 0;

// global vars
//var location = "C:\\data";
//var location = "e:\\Setup\\!AE\\ae_scripts\\log\\";


//===================================================
function main() 
{

    lg.open("w","UTF-8")
    lg.writeln("====================");
    lg.writeln(scr_name + " Date: " + new Date().toString());

    var influenceIn = getRandomInt(0, 10);
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    lg.writeln(" getRandomInt: " +getRandomInt(0, 10).toString());
    var random = Math.round(Math.random());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());
    lg.writeln(" Math.round(Math.random()): " +Math.round(Math.random()).toString());


   // AAAAAAAAAAAAAAAAAAAAAAAAAAAA
    genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_b_Raya\\xml\\gen_System_22_s5.xml");
    
    
    lg.writeln(" genXml: " + genXml.toString());
    var logName       = genXml.logName;
    var pathRrXml     = genXml.pathRrXml;
    lg.writeln(" pathRrXml: " + pathRrXml.toString());
    
    myXml = readXmlae_maya22_3_1(pathRrXml);
    lg.writeln(" myXml: " + myXml.toString());
    
    handleXmlmaya_2(myXml);
    lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    
    filePathUrlA = filePathUrl;
    
    handleFolders() ;
    //handleNewComposit2();
    //handleNewComposit3();
    handleNewComposit4();
    


    // // BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
    // 
    // genXml = readXmlaeGenXml("e:\\Git\\P_h_o_t_o\\AE_JSX\\AE_System\\xml\\gen_Ivan_22b_2.xml");
    // lg.writeln(" genXml: " + genXml.toString());
    // var logName       = genXml.logName;
    // var pathRrXml     = genXml.pathRrXml;
    // lg.writeln(" pathRrXml: " + pathRrXml.toString());
    // 
    // //i=0
    // //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    // //lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);
    // 
    // 
    // myXml = readXmlae_maya22_3_1(pathRrXml);
    // lg.writeln(" myXml: " + myXml.toString());
    // 
    // //i=0
    // //lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    // //lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);
    // 
    // handleXmlmaya_B2(myXml);
    // lg.writeln('filePathUrl.length= ' +  String(filePathUrl.length)  );
    // //filePathUrlB = filePathUrl;
    // lg.writeln('filePathUrlB.length= ' +  String(filePathUrlB.length)  );
    // 
    // i=0
    // lg.writeln(' i= '+ String(i+1) +'  filePathUrl=>  ' + filePathUrl[i]);
    // lg.writeln(' i= '+ String(i+1) +'  filePathUrlA=> ' + filePathUrlA[i]);
    // lg.writeln(' i= '+ String(i+1) +'  filePathUrlB=> ' + filePathUrlB[i]);
    // 
    // 
    // handleFoldersB();
    // handleFoldersAB();
    // 
    // handleComposAB3();    



    var compFinalName = "aeFinalRaya_22_s5";
    finalComp = handleFinalCompAll(compFinalName);

    var compFinalName = "aeFinalRaya_22_s5_ph_a_bg_1";
    finalComp = handleFinalCompAll_Bg(compFinalName);

    var compFinalName = "aeFinalRaya_22_s5_bg_1";
    finalComp = handleFinalCompBaseBg(compFinalName);


    // var compFinalName = "aeFinalIvanAllAB_1";
    // finalComp = handleFinalCompAllAB(compFinalName);


    // 
    // var compFinalName = "aeFinalAE_Igor_1";
    // finalComp = handleFinalComp4(compFinalName);
    // 
    // var compFinalName = "aeFinalAE_IgorBaseBg_1";
    // finalComp = handleFinalCompBaseBg(compFinalName);
    // 
    // var compFinalName = "aeFinalAE_IgorBg_1";
    // finalComp = handleFinalCompBg(compFinalName);
    // 
    // 
    // var compFinalName = "aeFinalAE_IgorBase_1";
    // finalComp = handleFinalCompBase(compFinalName);
    // 
    // 
    // var compFinalName = "aeFinalAE_IgorBaseBi_1";
    // finalComp = handleFinalCompBi(compFinalName);



    lg.writeln("====================");
    lg.close();

}

//===================================================

app.beginUndoGroup("AR_" + scr_name); // Begin undo group
var vault = []; // Initialize array for storing everything necessary
main()
app.endUndoGroup(); // End undo group

