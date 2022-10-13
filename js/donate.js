const header = document.querySelector('.header');
const imageContainer = document.querySelector('.image__container');

window.addEventListener('resize', () => {
	resize(header, imageContainer);
});
const startTimeout = setTimeout(() => {
	resize(header, imageContainer);
}, 0);
function resize(first, second) {
	const padding = first.clientHeight;

	second.style.paddingTop = padding + 'px';
}


const donateLine = document.querySelector('.line'),
	donateMarks = document.querySelectorAll('.marks__item'),
	donateLabels = document.querySelectorAll('.marks__item label'),
	donateRadios = document.querySelectorAll('.marks input');

donateLine.addEventListener('click', e => {
	const target = e.target;

	if (target.closest('.marks__item')) {
		donateLabels.forEach(item => {
			item.classList.remove('check');
		});
		donateMarks.forEach(item => {
			item.classList.remove('check');
		});
		if (target.tagName != 'SPAN') {
			target.classList.add('check');
		}
		if (target.tagName == 'SPAN') {
			target.closest('.marks__item').classList.add('check');
		}
		setTimeout(() => {
			donateRadios.forEach(item => {
				if (item.checked) {
					console.log(item.value);
				}
			});
		}, 0);

	}

});