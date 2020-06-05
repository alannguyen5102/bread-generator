import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dough-list',
  templateUrl: './dough-list.component.html',
  styleUrls: ['./dough-list.component.scss']
})
export class DoughListComponent implements OnInit {
  
  public ingredientList: Array<Ingredient>;
  public percentageControl = new FormControl();

  constructor() { 
  }
  
  ngOnInit(): void {
    this.ingredientList = [
      new Ingredient("AP Flour", 800, "g"),
      new Ingredient("Water", 600, "g"),
      new Ingredient("Kosher Salt", 18, "g"),
      new Ingredient("Yeast", 0.25, "tsp"),
      new Ingredient("Honey", 15, "g"),
      new Ingredient("Olive Oil", 50, "g")
    ]

  }

}
