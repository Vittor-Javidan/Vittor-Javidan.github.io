const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {
	
	if (sidebar.className === 'sidebar')
		sidebar.classList.add('open');
	else
		sidebar.classList.remove('open');
});