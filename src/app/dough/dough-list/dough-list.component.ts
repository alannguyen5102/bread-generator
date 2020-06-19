import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { FormControl } from '@angular/forms';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-dough-list',
  templateUrl: './dough-list.component.html',
  styleUrls: ['./dough-list.component.scss']
})
export class DoughListComponent implements OnInit {
  
  public ingredientList: Array<Ingredient> = [
    new Ingredient("AP Flour", 800, "g"),
    new Ingredient("Water 95°F", 600, "g"),
    new Ingredient("Kosher Salt", 18, "g"),
    new Ingredient("Active Dry Yeast", 1.417, "g"),
    new Ingredient("Honey", 15, "g"),
    new Ingredient("Olive Oil", 50, "g"),
    new Ingredient("Kosher Salt (Brine)", 5, "g"),
    new Ingredient("Water 95°F (Brine)", 80, "g")
  ];
  public recipe = new Recipe(this.ingredientList, "By Samin Nosrat");
  public percentageControl = new FormControl(1);

  constructor() { 
  }
  
  ngOnInit(): void {
    console.log(this.ingredientList);
  }

}
