function start() {
    var result = model;
    result = model.map(a => {return {"name":a.name, "children"}})
}




[{"name": "A",
 "children" : [
    {
		"children": [{
				"name": "Subject knowledge",
				"Level": 3
			},
			{
				"name": "Research methods – theoretical knowledge",
				"Level": 1
			}, {
				"name": "Research methods – practical application",
				"Level": 4
			},
			{
				"name": "Information Seeking",
				"Level": 4
			}, {
				"name": "Information Literacy and Management",
				"Level": 2
			},
			{
				"name": "Languages",
				"Level": 1
			}, {
				"name": "Academic Literacy and Numeracy",
				"Level": 1
			}
		],
		"name": "A1: Knowledge base"
	},
	{
		"children": [{
			"name": "Analysing",
			"Level": 1
		}, {
			"name": "Critical Thinking",
			"Level": 1
		}, {

			"name": "Problem Solving",
			"Level": 1
		}, {

			"name": "Synthesising",
			"Level": 2
		}, {

			"name": "Evaluating",
			"Level": 3
		}],
		"name": "A2: Cognitive Abilities"
	}, {
		"children": [{
			"name": "Inquiring mind",
			"Level": 1
		}, {
			"name": "Intellectual Insight",
			"Level": 1
		}, {
			"name": "Innovation",
			"Level": 1
		}, {
			"name": "Argument Construction",
			"Level": 2
		}, {
			"name": "Intellectual risk",
			"Level": 2
		}],
		"name": "A3 Creativity"
}]}


, { "name": "B",
		"children" : [{ 
            "children": [{
			"name": "Enthusiasm",
			"Level": 1
		}, {
			"name": "Perseverance",
			"Level": 2
		}, {

			"name": "Integrity",
			"Level": 1
		}, {
			"name": "Self-confidence",
			"Level": 4
		}, {

			"name": "Self-reflection",
			"Level": 4
		}, {
			"name": "Responsibility",
			"Level": 5
		}],
		"name": "B1: Personal Qualities"

	}, {
		"children": [{
			"name": "Preparation and prioritisation",
			"Level": 5
		}, {
			"name": "Commitment to resarch",
			"Level": 5
		}, {

			"name": "Time Management",
			"Level": 5
		}, {

			"name": "Responsiveness to Change",
			"Level": 5
		}, {

			"name": "Work-life balance",
			"Level": 5
		}],

		"name": "B2: Self-management"
	}, {
		"children": [{
			"name": "Career management",
			"Level": 5
		}, {
			"name": "Continuing profesSional development",
			"Level": 5
		}, {
			"name": "Responsiveness to opportunities",
			"Level": 5
		}, {
			"name": "Networking",
			"Level": 5
		}, {
			"name": "Reputation and Esteem",
			"Level": 5
		}],
		"name": "B3: Professional and career development"
}]}]
start();