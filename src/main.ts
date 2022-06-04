import './styles/animations/index.scss';


// @ts-ignore
import KisAnimate from './animate.ts';


const examples = new KisAnimate({
	items: '.heading',
	defaultType: 'fade-in',
	defaultDelay: 100,
	defaultDuration: 500,
});

examples.init();