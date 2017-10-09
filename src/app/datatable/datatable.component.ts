import { Component, ElementRef, OnInit } from '@angular/core';
//let $ = require('../../node_modules/jquery/dist/jquery.min.js');
//import * as $ from 'jquery';

var $ = require('jquery');
var dt = require('datatables.net');

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'
  ]
})
export class DatatableComponent implements OnInit {
  
  rootNode: any;
  constructor(rootNode:ElementRef) { 
    this.rootNode = rootNode; 
  }
    
  ngOnInit() {
  var el = $(this.rootNode.nativeElement).find('#example')[0];
  $('#example').DataTable();
  }

}
