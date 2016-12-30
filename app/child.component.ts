import { Input, Component, ngOnChanges } from '@angular/core';
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
		console.log("appStore:");
		console.log(this.appStore);
		console.log(JSON.stringify(this.appStore);
		console.log(this.appStore.id);
		console.log(this.appStore.item);

		console.log("itemValue:");
		console.log(this.itemValue);
		console.log(JSON.stringify(this.itemValue);



	}
}