document.addEventListener('DOMContentLoaded', () => {
	const frontendProjs = [
		//Biscake.come
		[
			'Business Landing Page',
			'HTML, CSS, JavaScript, Bootstrap',
			'images/frontend/project_biscake.png',
			'https://ephillius.github.io/biscake/',
			'https://github.com/Ephillius/biscake'	
		],

		//1
		[
			'Profile Page',
			'HTML, CSS',
			'images/frontend/project1.png',
			'https://ephillius.github.io/techdegree-project1/',
			'https://github.com/Ephillius/techdegree-project1'	
		],

		//2
		[
			'Portfolio Template',
			'HTML, CSS',
			'images/frontend/project2.png',
			'https://ephillius.github.io/techdegree-project2/',
			'https://github.com/Ephillius/techdegree-project2',	
		],

		//3
		[
			'Newsletter Form',
			'HTML, CSS',
			'images/frontend/project3.png',
			'https://github.com/Ephillius/techdegree-project3',
			'https://ephillius.github.io/techdegree-project3/'
		],

		//4
		[
			'Sass Style Guide Kit',
			'HTML, CSS (Sass)',
			'images/frontend/project4.png',
			'https://ephillius.github.io/techdegree-project4/',
			'https://github.com/Ephillius/techdegree-project4'
			
		],

		//5
		[
			'Interactive Gallery',
			'HTML, CSS, JavaScript (Jquery)',
			'images/frontend/project5.png',
			'https://ephillius.github.io/techdegree-project5/',
			'https://github.com/Ephillius/techdegree-project5'
		],

		//6
		[
			'Game Show App',
			'JavaScript',
			'images/frontend/project6.png',
			'https://ephillius.github.io/techdegree-project6/',
			'https://github.com/Ephillius/techdegree-project6'
		],

		//7
		[
			'WebApp Dashboard',
			'Grid + Flexbox, JavaScript',
			'images/frontend/project7.png',
			'https://ephillius.github.io/techdegree-project7/',
			'https://github.com/Ephillius/techdegree-project7'
		],

		//8
		[
			'Employee Directory Api',
			'JavaScript (Ajax Request - Api)',
			'images/frontend/project8.png',
			'https://ephillius.github.io/techdegree-project8/',
			'https://github.com/Ephillius/techdegree-project8'
		]
	];


	const scrollToWork = document.querySelector('.toWork');
	const scrollToTop = document.querySelector('.btt');
	const portfolio = document.querySelector('#work');
	const email = document.getElementsByClassName('email');

	/******SCROLL******/

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


	/******PROJECT LIBRARY APPEND******/

	function createMainDiv() {
		for (let i = 0; i < frontendProjs.length; i++) {
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
		for (let i = 0; i < frontendProjs.length; i++) {
				images[i].setAttribute('src', frontendProjs[i][2]);
				images[i].setAttribute('alt', frontendProjs[i][0]);
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
		for (let i = 0; i < frontendProjs.length; i++) {
				titles[i].innerHTML = frontendProjs[i][0];
				skills[i].innerHTML = frontendProjs[i][1];
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
		for (let i = 0; i < frontendProjs.length; i++) {
				live[i].setAttribute('href', frontendProjs[i][3]);
				code[i].setAttribute('href', frontendProjs[i][4]);
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