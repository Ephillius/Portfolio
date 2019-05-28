const captions = [
	'A nice and simple two page website that contains my personal info, my online resume (not the extended one) and a simple list of future goals.',
	'This is a responsive portfolio layout website. It can showcase projects with descriptive information, has a header section that can include a profile photo and a brief summary and a contact (how to reach me) section with basic info. All done with floated elements.',
	'Simple newsletter layout. Both the Full name and Email Address are required in order to submit the form. Almost every input field has a :focus state. The website was also made responsive with a mobile-first approach.',
	'Sample Style guide page. Work done with Sass. It was a huge leap from writting Css to start breaking the styling code into pieces. I tried my best to not write in CSS first as that was the initial challenge: to jump straight into Sass. The webpage is totally responsive.',
	'This is an "interactive" image gallery. I used a Lightbox plugin in order to showcase the pictures in a larger size. For the input (search bar), I had to come up with a search function that would show in realtime the potential matches to what the user was typing at the time, making the non-matched pics disappear.'
];

const programs = [
	'HTML, CSS, Responsive Design',
	'HTML, CSS, Responsive Design',
	'HTML, CSS, Responsive Design',
	'HTML, Sass, Responsive Design',
	'HTML, CSS, JavaScript(Jquery), Responsive Design'
];

$(document).ready(function(){
	$('.caption').each(function(index){
		$(this).html(programs[index]);
	});
});



$(document).ready(function(){
	$('a[href^="mailto"]').each(function(){
		$(this).addClass('hvr-ripple-out');
	});

	$('.project a[href^="https"]').each(function(){
		$(this).addClass('hvr-buzz-out');
	});
});