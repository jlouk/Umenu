import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic.ts';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

describe("hello-ionic.ts", function() {
  
  var hello1;
  var navCont : NavController;
  var navParam : NavParams;
  var ht : Http;

  beforeEach(function() {
        console.log("Beginning hello-ionic Unit Tests");
        hello1 = new HelloIonicPage(navCont, navParam, ht);

        expect(hello1).toBeDefined();
    });
  it("tests that hello-ionic page is defined", function() {
  	expect(hello1).toBeDefined();
  });
    /*
  it("Tests ngOnInit() called on page load", function() {

        expect(hello1.restaurants).toBeUndefined();
        expect(hello1.selectedRestaurant).toBeUndefined();

        spyOn(hello1, "ngInit()");
        hello1.ngInit();
	//expect(hello1.load).toHaveBeenCalled();

        expect(hello1.restaurants).toBeDefined();
  });

  it("Tests restaurantTapped()", function() {
    //hello1.restaurantTapped();
    //expect(hello1.selectedRestaurant).toBeDefined();
  });

  it("Tests that our load function correctly loads hard coded restaurant", function() {
    
    hello1.load();
    expect(hello1.restaurants).toContain("State Street Brats");
  });


  afterEach(function() {
        console.log("Hello-ionic unit tests completed successfully.");
    });
    */
});
