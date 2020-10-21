import { NestedTreeControl } from "@angular/cdk/tree";
import { Component } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  cpf?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: "Empresa X",
    cpf: "000",
    children: [
      {
        name: "Frente de Caixa",
        children: [{ name: "caixa1-pc" }, { name: "caixa2-pc" }]
      },
      {
        name: "Retaguarda",
        children: [{ name: "servidor-pc" }]
      }
    ]
  },
  {
    name: "Chega de fulano de tal",
    cpf: "001",
    children: [
      {
        name: "Retaguarda",
        children: [{ name: "desktop-pc" }]
      }
    ]
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: "tree-nested-overview-example",
  templateUrl: "tree-nested-overview-example.html",
  styleUrls: ["tree-nested-overview-example.css"]
})
export class TreeNestedOverviewExample {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
