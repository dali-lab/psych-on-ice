var treeData = [{
	"node" : "start",
	"video" : "p001v001.mp4",
	"parent" : "none",
	"text" :
			[
				{"child" : "path003v002", "option" : "Say \"They'll spend hours trying to figure this out. We've got to tell them.\""},
				{"child" : "path003v002", "option" : "Say \"What's wrong with going to ground?\""},
				{"child" : "path003v002", "option" : "Say \"OK , but you're putting me in a bad position.\""}
			]
},

{
	"node" : "path003v002",
	"video" : "p003v002.mp4",
	"parent" : "start",
	"text" :
			[
				{"child" : "path003v003", "option" : "Do nothing."},
				{"child" : "path003v003", "option" : "Say \"Chuck, we need to talk about this.\""},
				{"child" : "path003v003", "option" : "Say \"Chuck, you've got to tell ground now.\""}
			]
},

{
	"node" : "path003v003",
	"video" : "p003v003.mp4",
	"parent" : "path003v002",
	"text" :
			[
				{"child" : "path003v004", "option" : "Say \"Negative, I did not notice anything before it went down.\""},
				{"child" : "path003v004", "option" : "Say \"Actually, FE2 did have a cable mix-up.\""},
				{"child" : "path003v004", "option" : "Say \"We're retracing our steps right now. We'll get back to you in a few minutes.\""}
			]
},

{
	"node" : "path003v004",
	"video" : "p003v004.mp4",
	"parent" : "path003v003",
	"text" :
			[
				{"child" : "path003v004", "option" : "Say \"Negative, I did not notice anything before it went down.\""},
				{"child" : "path003v004", "option" : "Say \"Actually, FE2 did have a cable mix-up.\""},
				{"child" : "path003v004", "option" : "Say \"We're retracing our steps right now. We'll get back to you in a few minutes.\""}
			]
}

];