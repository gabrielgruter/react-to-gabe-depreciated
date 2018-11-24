anime({
	targets: '#leftSection',
	translateY: ['+100vh', '0'],
	opacity: [{
		value: '1',
		duration: '200',
		easing: 'linear'
	}],
	delay: 250,
});
anime({
	targets: '#blogContent',
	opacity: 1,
	duration: 1000,
	easing: 'linear',
});

function gotoBlog(clicked) {
	animate();
	document.title = clicked;
	setTimeout(function () {
		location.href = clicked
	}, 500);
}

function animate() {
	anime({
		targets: '#leftSection',
		translateY: ['0', '-100vh'],
	});
}
//DYNAMIC BLOG ENTRIES
var i;
for (i = 0; i < 8; i++) {
	var j = i + 1;
	var entryBox = document.createElement("subsection");
	entryBox.classList.add("blogentry");
	entryBox.id = "week" + j +".html";
	entryBox.onclick = function () {
		gotoBlog(this.id);
	};
	var entryTitle = document.createElement("h2");
	var entryTitleText = document.createTextNode("Week " + j);
//	var entryDate = document.createElement("sub");
//	var entryDateText = document.createTextNode("01/01/2018")
	entryTitle.appendChild(entryTitleText);
//	entryDate.appendChild(entryDateText);
	entryBox.appendChild(entryTitle);
//	entryBox.appendChild(entryDate);
	var blogArticles = document.getElementById("blogArticles");
	blogArticles.insertBefore(entryBox, blogArticles.childNodes[0]);
}