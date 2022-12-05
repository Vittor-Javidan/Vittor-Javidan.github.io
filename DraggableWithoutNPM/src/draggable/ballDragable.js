var limit = document.getElementById('body');
var element = document.getElementById('ball');

// options
var options = {
	limit: limit,
	setCursor: true
};

// initialize drag
new Draggable(element, options);