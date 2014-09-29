// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* The situations that the game can be in. Each has a unique ID.
<a href='path003v002'>a) Say \"They\'ll spend hours trying to figure\
		 this out\. We\'ve got to tell them\.\"</a></p>\
        <p class='transient'>Click <a href='path003v002'>this link to\
        continue...</a></p>\
        <p class='transient'>Click <a href='path003v002'>this link to\
        continue...</a></p>"
 */



//
// function jsonTo {
//
// 	var s = "<video width='500' autoplay='true' class='transient' controls>\
//         <source src='games/media/video/p001v001.mp4' type='video/mp4'>\
//         Your browser does not support the video tag.</video>\
// 		\
//         <p class='transient'><ol type='a'>\
// 			<li class='transient'><a href='path003v002'>Say \"They\'ll spend hours trying to figure\
// 		 	this out\. We\'ve got to tell them\.\"</a></li>\
// 			<li class='transient'><a href='path003v002'>Say \"What\'s wrong with going to ground\?\"</a></li>\
// 			<li class='transient'><a href='path003v002'>Say \"OK \, but you\'re putting me in a bad\
// 			position\.\"</a></li>\
// 		</p>";
// }


undum.game.situations = {
    start: new undum.SimpleSituation(
        "<video width='500' autoplay='true' class='transient' controls>\
        <source src='games/media/video/p001v001.mp4' type='video/mp4'>\
        Your browser does not support the video tag.</video>\
		\
        <p class='transient'>\
			<li class='transient'><a href='path003v002'>Say \"They\'ll spend hours trying to figure\
		 	this out\. We\'ve got to tell them\.\"</a></li>\
			<li class='transient'><a href='path003v002'>Say \"What\'s wrong with going to ground\?\"</a></li>\
			<li class='transient'><a href='path003v002'>Say \"OK \, but you\'re putting me in a bad\
			position\.\"</a></li>\
			<li class='transient'><a href='path003v002'>back</a></li>\
		</p>"
    ),
    path003v002: new undum.SimpleSituation(
        "<video width='500' autoplay='true' class='transient' controls>\
        <source src='games/media/video/p001v001.mp4' type='video/mp4'>\
        Your browser does not support the video tag.</video>\
		\
        <p class='transient'>\
			<li class='transient'><a href='path003v002'>Say \"They\'ll spend hours trying to figure\
		 	this out\. We\'ve got to tell them\.\"</a></li>\
			<li class='transient'><a href='path003v002'>Say \"What\'s wrong with going to ground\?\"</a></li>\
			<li class='transient'><a href='path003v002'>Say \"OK \, but you\'re putting me in a bad\
			position\.\"</a></li>\
			<li class='transient'><a href='path003v002'>back</a></li>\
		</p>"
    )
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};
