"use strict";
/*	
    script_name: testing
    code-artist: Zuri Barnes
    twitter: @zuriBarnes
    about: test for now, seems cool thus far.
*/

// ======= Setup ======== //
init();
var tempo = 93;
setTempo(tempo);

// ========= Loops ======= //
function Loop_1() {
    var loop_2 = CIARA_SET_DRUMBEAT_1;
    var loop_1 = TECHNO_MAINLOOP_019;
    fitMedia(loop_2, 1, 1, 2.97);
    fitMedia(loop_2, 1, 3, 17);
}
Loop_1();
//  ======== Pads ======== //
for(var i = 0; i <= 15; i += 2) {
    var darkPad = RD_TRAP_DARKPAD_1;
    var voicePad = CIARA_SET_TALK_ADLIB_LOFI_1;
    fitMedia(voicePad, 2, 1 + i, 1.5 + i);
    // fitMedia(darkPad, 2, 3, 3.5);
    // fitMedia(darkPad, 2, 5, 5.5);
    // fitMedia(darkPad, 2, 7, 7.5);
    // fitMedia(darkPad, 2, 9, 9.5);
    // fitMedia(darkPad, 2, 11, 11.5);  
    // fitMedia(darkPad, 2, 13, 13.5);
}
// ============ Bass =========== //
for(var i = 0; i <= 15; i += 2) {
    fitMedia(RD_TRAP_BASSDROPS_1, 3, 1 + i, 1.5 + i);
}
for(var i = 0; i <= 15; i += 2) {
    fitMedia(CIARA_ROOTED_VOX_CHANT_2, 5, 1 + i, 2.94 + i);
}
for(var i = 0; i <= 15; i += 2) {
    fitMedia(Y14_SYNTH_1, 6, 1 + i, 3 + i);
}
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 1, 1.5);
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 3, 3.5);
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 5, 5.5);
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 7, 7.5);
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 9, 9.5);
// fitMedia(RD_TRAP_BASSDROPS_1, 3, 11, 11.5);
// ============ SFX ============= //

fitMedia(RD_ELECTRO_SFX_AIRPULSE_3, 4, 7, 7.5);

finish();
