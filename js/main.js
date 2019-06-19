document.addEventListener('DOMContentLoaded', () => {
	const projects = [
		//Biscake.come
		[
			'Business Landing Page',
			'HTML, CSS, Responsive Design, JavaScript, Bootstrap',
			'images/projects/project_biscake.png',
			'https://ephillius.github.io/biscake/',
			'https://github.com/Ephillius/biscake'	
		],

		//1
		[
			'Profile Page',
			'HTML, CSS, Responsive Design',
			'images/projects/project1.png',
			'https://ephillius.github.io/techdegree-project1/',
			'https://github.com/Ephillius/techdegree-project1'	
		],

		//2
		[
			'Portfolio Template',
			'HTML, CSS, Responsive Design',
			'images/projects/project2.png',
			'https://ephillius.github.io/techdegree-project2/',
			'https://github.com/Ephillius/techdegree-project2',	
		],

		//3
		[
			'Newsletter Form',
			'HTML, CSS, Responsive Design',
			'images/projects/project3.png',
			'https://github.com/Ephillius/techdegree-project3',
			'https://ephillius.github.io/techdegree-project3/'
		],

		//4
		[
			'Sass Style Guide Kit',
			'HTML, Sass, Responsive Design',
			'images/projects/project4.png',
			'https://ephillius.github.io/techdegree-project4/',
			'https://github.com/Ephillius/techdegree-project4'
			
		],

		//5
		[
			'Interactive Gallery',
			'HTML, CSS, JavaScript(Jquery), Responsive Design',
			'images/projects/project5.png',
			'https://ephillius.github.io/techdegree-project5/',
			'https://github.com/Ephillius/techdegree-project5'
		],

		//6
		[
			'Game Show App',
			'JavaScript',
			'images/projects/project6.png',
			'https://ephillius.github.io/techdegree-project6/',
			'https://github.com/Ephillius/techdegree-project6'
		]
	];

	// const captions = [
	// 	'A nice and simple two page website that contains my personal info, my online resume (not the extended one) and a simple list of future goals.',
	// 	'This is a responsive portfolio layout website. It can showcase projects with descriptive information, has a header section that can include a profile photo and a brief summary and a contact (how to reach me) section with basic info. All done with floated elements.',
	// 	'Simple newsletter layout. Both the Full name and Email Address are required in order to submit the form. Almost every input field has a :focus state. The website was also made responsive with a mobile-first approach.',
	// 	'Sample Style guide page. Work done with Sass. It was a huge leap from writting Css to start breaking the styling code into pieces. I tried my best to not write in CSS first as that was the initial challenge: to jump straight into Sass. The webpage is totally responsive.',
	// 	'This is an "interactive" image gallery. I used a Lightbox plugin in order to showcase the pictures in a larger size. For the input (search bar), I had to come up with a search function that would show in realtime the potential matches to what the user was typing at the time, making the non-matched pics disappear.'
	// ];

	const scrollToWork = document.querySelector('.toWork');
	const scrollToTop = document.querySelector('.btt');
	const portfolio = document.querySelector('#work');
	const email = document.getElementsByClassName('email');

	function scroll(element) {
		element.scrollIntoView(
			{
				behavior: "smooth", 
				block: "start", 
				inline: "nearest"
			});
	}

	scrollToWork.addEventListener('click', () => {
		scroll(portfolio);
	});

	scrollToTop.addEventListener('click', () => {
		scroll(document.body);
	});

	for (let i = 0; i < email.length; i++) {
		email[i].classList.add('hvr-ripple-out');
	}

	function createMainDiv() {
		for (let i = 0; i < projects.length; i++) {
			const projectDiv = document.createElement('DIV');
			projectDiv.className = 'project clearfix';
			portfolio.appendChild(projectDiv);
		}
	}

	const parent = document.getElementsByClassName('project');
		
	function createFrame() {
		for (let i = 0; i < parent.length; i++) {
			const frame = document.createElement('DIV');
			const img = document.createElement('IMG');
			frame.className = 'frame';
			img.className = 'thumb';
			frame.appendChild(img);
			parent[i].appendChild(frame);
		}

		const images = document.getElementsByClassName('thumb');
		for (let i = 0; i < projects.length; i++) {
				images[i].setAttribute('src', projects[i][2]);
				images[i].setAttribute('alt', projects[i][0]);
		}
	}

	function createFolder() {
		for (let i = 0; i < parent.length; i++) {
			const folder = document.createElement('DIV');
			const title = document.createElement('H3');
			const skills = document.createElement('P');
			folder.className = 'folder';
			title.className = 'project-name';
			skills.className = 'caption';
			folder.appendChild(title);
			folder.appendChild(skills);
			parent[i].appendChild(folder);
		}

		const titles = document.getElementsByClassName('project-name');
		const skills = document.getElementsByClassName('caption');
		for (let i = 0; i < projects.length; i++) {
				titles[i].innerHTML = projects[i][0];
				skills[i].innerHTML = projects[i][1];
		}
	}

	function createLinks() {
		for (let i = 0; i < parent.length; i++) {
			const live = document.createElement('A');
			const code = document.createElement('A');			
			live.setAttribute('target', '_blank');
			live.className = 'live hvr-buzz-out';
			live.innerHTML = 'Live';
			code.setAttribute('target', '_blank');
			code.className = 'code hvr-buzz-out';
			code.innerHTML = 'Github';
			parent[i].appendChild(live);
			parent[i].appendChild(code);
		}

		const live = document.getElementsByClassName('live');
		const code = document.getElementsByClassName('code');
		for (let i = 0; i < projects.length; i++) {
				live[i].setAttribute('href', projects[i][3]);
				code[i].setAttribute('href', projects[i][4]);
		}
	}

	function createProject() {
		createMainDiv();
		createFrame();
		createFolder();
		createLinks();
	}

	createProject();
});