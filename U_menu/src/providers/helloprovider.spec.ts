import { Helloprovider } from './helloprovider';
 
let helloService;
 
describe('Home page: initial array', () => {
 
    beforeEach(() => {
      helloService = new Helloprovider();
    });
 
    it('should have a non empty array called restaurants', () => {
 
        let restaurants = helloService.restaurants;
 
        expect(Array.isArray(restaurants)).toBeTruthy();
        expect(restaurants.length).toBeGreaterThan(0);
 
    });

    it('should contain Porta Bella', () => {
    	
    	let restaurants = helloService.restaurants;

	expect(restaurants).toContain("Porta Bella");
    });

    it('should contain State Street Brats', () => {
    	
    	let restaurants = helloService.restaurants;

	expect(restaurants).toContain("State Street Brats");
    });
    
    it('should contain Chasers Bar and Grill', () => {
    	
    	let restaurants = helloService.restaurants;

	expect(restaurants).toContain("Chasers Bar and Grill");
    });

    it('should contain Essen Haus', () => {
    	
    	let restaurants = helloService.restaurants;

	expect(restaurants).toContain("Essen Haus");
    });

    it('should contain Sunroom Cafe', () => {
    	
    	let restaurants = helloService.restaurants;

	expect(restaurants).toContain("Sunroom Cafe");
    });

 
});
