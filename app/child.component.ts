import { Input, Component, OnChanges } from '@angular/core';
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
	@Input() itemValue: any;

	ngOnChanges() {
		console.log("appStore:", this.appStore);
		console.log("itemValue:", this.itemValue);
	}
}