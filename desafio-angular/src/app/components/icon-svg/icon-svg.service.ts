import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icons = [
	'add',
	'area_chart',
	'arrow_back',
	'asset-parts-cycle',
	'assets',
	'assignment',
	'block',
	'box',
	'build',
	'camera_take_picture',
	'camera',
	'chart-add',
	'chart-disabled',
	'chart',
	'check_box_blank',
	'check_box_checked',
	'check',
	'close',
	'dashboard-performance',
	'dashboard',
	'default',
	'delete_forever',
	'done',
	'download',
	'edit',
	'email',
	'event',
	'file-pdf',
	'filter-remove',
	'filter',
	'home',
	'info',
	'key',
	'keyboard_arrow_right',
	'keyboard_arrow_up',
	'label',
	'lightbulb',
	'link',
	'local_offer',
	'lock',
	'lock-open',
	'logout',
	'more_vert',
	'move',
	'open_in_new',
	'pending_actions',
	'person',
	'pin_drop',
	'query_stats',
	'redo',
	'replay',
	'report',
	'search',
	'select-triangle',
	'sentiment_dissatisfied',
	'sentiment_neutral',
	'sentiment_satisfied',
	'settings',
	'skip_next',
	'skip_previous',
	'sort',
	'sort2',
	'ticket-status-canceled',
	'ticket-status-done',
	'ticket-status-in-progress',
	'ticket-status-pending',
	'ticket-status-rejected',
	'timetable',
	'undo',
	'warn',
	'warning',
	'watch_later',
	'workgroup'
];

@Injectable({
	providedIn: 'root'
})
export class IconSvgService {

	constructor(
		iconReg: MatIconRegistry,
		sanitizer: DomSanitizer
	) {

		icons.map(
			name =>
				iconReg.addSvgIcon(
					name,
					sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`)
				)
		);

	}

}
