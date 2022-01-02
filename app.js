const btnL = document.querySelector('.buttonL');
const btnW = document.querySelector('.buttonW');
const btnN = document.querySelector('.buttonN');
const btnA = document.querySelector('.buttonA');
const card = document.querySelector('.card');
const cardW = document.querySelector('.cardW');
const cardN = document.querySelector('.cardN');
const cardA = document.querySelector('.cardA');
const str = document.querySelector('.value');
const sBtn = document.querySelector('.s_btn');

function util(title, img, text) {
	let text1 = `	<img src="${img}" alt="Avatar" style="width: 100%" />
  <div class="text">
    <h4><b>${title}</b></h4>
    <p>
    ${text}
    </p>
  </div>
  <a href="#" class="button">Read Me!</a>`;
	return text1;
}

btnL.addEventListener('click', () => {
	card.innerHTML = util(
		'Land degradation',
		'p2.jpeg',
		'The deterioration or loss of the productive capacity of the soils for present and future—is a global challenge that affects everyone through food'
	);
});
btnW.addEventListener('click', () => {
	cardW.innerHTML = util(
		'Noise Pollution Effects',
		'ne.jpeg',
		'Acid rain, or acid deposition, is a broad term that includes any form of precipitation with acidic components, such as sulfuric'
	);
});
btnN.addEventListener('click', () => {
	cardN.innerHTML = util(
		'Acid Rain',
		'we.jpeg',
		'Noise pollution impacts millions of people on a daily basis. The most common health problem it causes is Noise Induced Hearing Loss (NIHL).'
	);
});
btnA.addEventListener('click', () => {
	cardA.innerHTML = util(
		'Air Pollution Effects',
		'ae.jpeg',
		'Long-term health effects from air pollution include heart disease, lung cancer, and respiratory diseases such as emphysema.'
	);
});

const array = [
	'Soil',
	'Soil erosion',
	'Soil Pollution',
	'Soil degradation',
	'land degradation',
	'water',
	'water pollution',
	'acid rain',
	'noise',
	'noise pollution',
	'Air',
	'Air Pollution',
];

sBtn.addEventListener('click', () => {
	let strL = str.value;
	for (let index = 0; index < array.length; index++) {
		if ((array[index].toLowerCase()).trim() == (strL.toLowerCase()).trim()) {
			console.log(index);
			if (0 <= index && index <= 4) {
				window.location.href = `https://www.conserve-energy-future.com/soil-pollution-prevention-control.php`;
				break;
			} else if (5 <= index && index <= 7) {
				window.location.href = `http://alleghenysc.org/9-ways-to-reduce-water-pollution-in-the-21st-century/`;
				break;
			} else if (8 <= index && index <= 9) {
				window.location.href = `https://www.ppsthane.com/blog/how-to-reduce-noise-pollution`;
				break;
			} else if (9 < index && index <= 11) {
				window.location.href = `https://www.aqi.in/blog/10-best-ways-to-reduce-air-pollution/`;
				break;
			} else {
				continue;
			}
		} else {
			continue;
		}
	}
	str.value = ' ';
});
