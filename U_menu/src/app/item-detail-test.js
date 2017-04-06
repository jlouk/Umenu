describe("item-details.ts", function() {


  var item1;
  var navCont = new NavController();
  var navParam = new NavParams();
  var ht = new Http();


  beforeEach(function() {
        console.log("Beginning home.ts unit tests");
        item1 = new ItemDetailsPage(navCont, navParam, ht);

        expect(item1).toBeDefined();
    });

  
  it("Tests ngOnInit()", function() {

        spyOn(item1, "ngInit()");
        item1.ngInit();
        expect(item1.loadCategories).toHaveBeenCalled();
        expect(item1.loadDishes).toHaveBeenCalled();


  });

  it("Tests loadCategories()", function() {
    expect(item1.http).toBeDefined();
    expect(item1.categories).toBeUndefined();

    item1.loadCategories();

    expect(item1.categories).toBeDefined();
    expect(item1.hasError).toBeFalsy();
  });

  it("Tests loadDishes()", function() {
    expect(item1.http).toBeDefined();
    expect(item1.dishes).toBeUndefined();
    item1.loadDishes();
    expect(item1.dishes).toBeDefined();
    expect(item1.hasError).toBeFalsy();
  });

});