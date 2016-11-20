import { Input, Component } from '@angular/core';
import { AppStore } from './interface.appstore'

@Component({
	selector:'child',
	template: `
		<label>Current item is: {{ appStore.id }}:{{appStore.item}}</label>
		<br/><br/>
	`
})
export class Child {
	@Input() appStore: AppStore;
}