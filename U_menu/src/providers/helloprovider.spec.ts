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
 
});
