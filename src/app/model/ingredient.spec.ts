import { Ingredient } from './ingredient';

describe('Ingredient', () => {
  it('should create an instance', () => {
    expect(new Ingredient("AP Flour", 100, "g")).toBeTruthy();
  });
});
