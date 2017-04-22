import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HelloIonicPage } from './hello-ionic';
import { Helloprovider } from '../../providers/helloprovider';

let comp: HelloIonicPage;
let fixture: ComponentFixture<HelloIonicPage>;
let de: DebugElement;
let el: HTMLElement;

let helloIonic: null;

describe('HelloIonicPage: Opening page', () => {

	beforeEach(async(() => {
		
		helloIonic = new HelloIonicPage();	

		TestBed.configureTestingModule({
			declarations: [MyApp, HelloIonicPage],

			providers: [
				NavController, Helloprovider
			],

			imports: [
				IonicModule.forRoot(MyApp)
			]

		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HelloIonicPage);
		comp = fixture.componentInstance;
	});

	 afterEach(() => {
        	fixture.destroy();
        	comp = null;
        	de = null;
       		el = null;
    	});
 
	it('is created', () => {
		expect(fixture).toBeTruthy();
		expect(comp).toBeTruthy();
	});
});
