// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "main":    "",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        levels:{
        "level1":  {"title": "Rihanna", "descShort":"Rihanna", "descLong":"Good job performing in the Superbowl! I purchased that Fenty powder myself.", image: "result-Rihanna.jpeg", rangeStart: 0, rangeEnd: 5 },
        "level2":  {"title": "Oprah", "descShort":"Oprah Winfrey", "descLong":"Now that you're rich and famous, do I get a car too?", image: "result-Oprah.jpeg", rangeStart: 6, rangeEnd: 12},
        "level3":  {"title": "Bloomberg", "descShort":"Mike Bloomberg", "descLong":"I keep on applying for Bloomberg internships just so I can talk to Mike.", image: "result-Bloomberg.png", rangeStart: 13, rangeEnd: 18},
        "level4":  {"title": "Bill", "descShort":"Bill Gates",  "descLong":"I'm typing this on Mac, but I still love your Windows.", image: "result-Bill.jpeg", rangeStart: 19, rangeEnd: 24},
        "level5":  {"title": "Elon", "descShort":"Elon Musk",  "descLong":"If you need child name ideas, just Google Elon Musk.", image: "result-Elon.jpeg", rangeStart: 25, rangeEnd: 30},
        "level6":  {"title": "Bernard", "descShort":"Bernard Arnault",  "descLong":"Owner of Louis Vuitton and Tiffany?? All I know is that Adams Driver's performance in House of Gucci was fantastic.", image: "result-Bernard.jpeg", rangeStart: 31, rangeEnd: 35} // no comma here// no comma here
        }
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "PICK AN EMOTION",
            "a": [
                {"option": "option1",      "correct": true, "value":"2", "image": "quiz-thumbimg-emotion1.jpg"},
                {"option": "option2",     "correct": true, "value":"5", "image": "quiz-thumbimg-emotion2.jpg"},
                {"option": "option3",      "correct": true, "value":"0", "image": "quiz-thumbimg-emotion3.jpg"},
				{"option": "option4",      "correct": true, "value":"3", "image": "quiz-thumbimg-emotion4.jpg"},
                {"option": "option5",     "correct": true, "value":"1", "image": "quiz-thumbimg-emotion5.jpg"},
				{"option": "option6",     "correct": true, "value":"4", "image": "quiz-thumbimg-emotion6.jpg"} // no comma here
            ],
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How do you feel about dancing? ",
            "a": [
                {"option": "Heels", "correct": true, "value":"4", "image": "quiz-thumbimg-dance1.jpg"},
                {"option": "Work boots", "correct": true, "value":"0", "image": "quiz-thumbimg-dance2.jpg"},
                {"option": "Golf shoes", "correct": true, "value":"5", "image": "quiz-thumbimg-dance3.jpg"},
                {"option": "Flip-flops", "correct": true, "value":"3", "image": "quiz-thumbimg-dance4.jpg"},
				{"option": "Slippers", "correct": true, "value":"1", "image": "quiz-thumbimg-dance5.jpg"},
				{"option": "Clown shoes", "correct": true, "value":"2", "image": "quiz-thumbimg-dance6.jpg"} // no comma here
            ],
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "WHAT WOULD YOU BRING TO A DESERT ISLAND?",
            "a": [
                {"option": "Cheetos",           "correct": true, "value":"1", "image": "quiz-thumbimg-island1.jpg"},
                {"option": "Sun screen",                  "correct": true, "value":"2", "image": "quiz-thumbimg-island2.jpg"},
                {"option": "Water",  "correct": true, "value":"3", "image": "quiz-thumbimg-island3.jpg"},
                {"option": "Gun",          "correct": true, "value":"5", "image": "quiz-thumbimg-island4.jpg"},
				{"option": "Books",  "correct": true, "value":"4", "image": "quiz-thumbimg-island5.jpg"},	
				{"option": "Pet",          "correct": true, "value":"0", "image": "quiz-thumbimg-island6.jpg"}// no comma here
            ],

        },
        { // Question 4
            "q": "WHICH ANIMAL'S LOOK ARE YOU FEELING?",
            "a": [
                {"option": "Luxury apartment",    "correct": true, "value":"4", "image": "quiz-thumbimg-animal1.jpg"},
                {"option": "Beach house",     "correct": true, "value":"3", "image": "quiz-thumbimg-animal2.jpg"},
                {"option": "Log cabin in woods",      "correct": true, "value":"0", "image": "quiz-thumbimg-animal3.jpg"},
				{"option": "Tent",      "correct": true, "value":"5", "image": "quiz-thumbimg-animal4.jpg"},
                {"option": "Ranch",   "correct": true, "value":"2", "image": "quiz-thumbimg-animal5.jpg"},
				{"option": "Studio",   "correct": true, "value":"1", "image": "quiz-thumbimg-animal6.jpg"} // no comma here
            ],
        },
        { // Question 5
            "q": "PICK A VEGETABLE",
            "a": [
                {"option": "Veg 1",    "correct": true, "value":"4", "image": "quiz-thumbimg-veg1.jpg"},
				{"option": "Veg 2",    "correct": true, "value":"5", "image": "quiz-thumbimg-veg2.jpg"},
				{"option": "Veg 3",    "correct": true, "value":"0", "image": "quiz-thumbimg-veg3.jpg"},
				{"option": "Veg 4",    "correct": true, "value":"1", "image": "quiz-thumbimg-veg4.jpg"},
				{"option": "Veg 5",    "correct": true, "value":"2", "image": "quiz-thumbimg-veg5.jpg"},
                {"option": "Veg 6",     "correct": true, "value":"3", "image": "quiz-thumbimg-veg6.jpg"} // no comma here
            ],

        },
		{ // Question 6
            "q": "PICK A PLANET",
            "a": [
                {"option": "New Year’s Eve",    "correct": true, "value":"0", "image": "quiz-thumbimg-planet1.jpg"},
				{"option": "Fourth of July",    "correct": true, "value":"4", "image": "quiz-thumbimg-planet2.jpg"},
				{"option": "Halloween",    "correct": true, "value":"3", "image": "quiz-thumbimg-planet3.jpg"},
				{"option": "Thanksgiving",    "correct": true, "value":"1", "image": "quiz-thumbimg-planet4.jpg"},
				{"option": "Valentine’s Day",    "correct": true, "value":"5", "image": "quiz-thumbimg-planet5.jpg"},
                {"option": "Labor Day",     "correct": true, "value":"2", "image": "quiz-thumbimg-planet6.jpg"} // no comma here
            ],

        }, 
		{ // Question 7
            "q": "WHAT ARE YOU MOST LIKELY DOING AT A PARTY?",
            "a": [
                {"option": "New York City",    "correct": true, "value":"5", "image": "quiz-thumbimg-party1.jpg"},
				{"option": "Seattle",    "correct": true, "value":"0", "image": "quiz-thumbimg-party2.jpg"},
				{"option": "San Francisco",    "correct": true, "value":"2", "image": "quiz-thumbimg-party3.jpg"},
				{"option": "Washington, D.C.",    "correct": true, "value":"1", "image": "quiz-thumbimg-party4.jpg"},
				{"option": "Austin",    "correct": true, "value":"3", "image": "quiz-thumbimg-party5.jpg"},
                {"option": "Nashville",     "correct": true, "value":"4", "image": "quiz-thumbimg-party6.jpg"} // no comma here
            ],

        } // no comma here// no comma here
		
    ]
};