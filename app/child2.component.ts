import { Input, Component, ngOnChanges } from '@angular/core';
import { AppStore } from './interface.appstore'

@Component({
	selector:'child2',
	template: `
		<label>Current item2 is: {{ itemValue2 }}</label>
		<br/><br/>
	`
})
export class Child2 {
	@Input() itemValue2: string;

	ngOnChanges() {
		console.log("itemValue2:", this.itemValue2);
	}
}