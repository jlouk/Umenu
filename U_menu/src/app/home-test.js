describe("home.ts", function() {

  var home1;
  var navCont : NavController;
  var navParam : NavParams;
  var ht : Http;


  beforeEach(function() {
        console.log("Beginning home.ts unit tests");
        home1 = new HomePage(navCont, navParam, ht);

        expect(home1).toBeDefined();
    });


  it("Tests addInfoWindow(marker,content)", function() {
    //TODO: EXPECT VALUES MARKET, CONTENT TO BE DEFINED WITHIN FUNCTION
  });

  it("Tests addMarkers()", function() {
        spyOn(home1, "addMarkers()");
        home1.addMarkers();

        expect(home1.addInfoWindow).toHaveBeenCalled();
  });

  it("Tests ngOnInit()", function() {

        spyOn(home1, "ngInit()");
        home1.ngInit();
        expect(home1.load).toHaveBeenCalled();
        expect(home1.loadMap).toHaveBeenCalled();
  });

  it("Tests loadMap()", function() {
    home1.loadMap();
    expect(home1.map).toBeDefined();
  });

  it("Tests load()", function() {
    expect(home1.http).toBeDefined();
    expect(home1.restaurants).toBeUndefined();

    home1.load();

    expect(home1.restaurants).toBeDefined();
  });


  afterEach(function() {
        console.log("Home.ts unit tests completed successfully");
    });

});