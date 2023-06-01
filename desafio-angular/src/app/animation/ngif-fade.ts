import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';

export const ngIfFade =
	trigger('ngIfFade', [
		// state('true', style({
		// 	height: '200px',
		// 	opacity: 1,
		// 	backgroundColor: 'yellow'
		// })),
		// state('false', style({
		// 	height: '100px',
		// 	opacity: 0.5,
		// 	backgroundColor: 'green'
		// })),
		transition(':enter', [
			// style({ opacity: 0 }),
			// animate('{{timing}}ms', style({ opacity: 1 })),
			useAnimation(fadeIn, {params: { timing: .3 }})
		]),
		transition(':leave', [
			// animate('300ms', style({ opacity: 0 }))
			useAnimation(fadeOut, {params: { timing: .3 }})
		])
	]);
