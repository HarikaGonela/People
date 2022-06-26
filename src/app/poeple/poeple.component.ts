import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridOptions, GridReadyEvent, ICellEditorComp, ICellEditorParams, RowClassRules, RowNode } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { PeopleGridColumns, PeopleModel } from './people.model';
import * as uuid from 'uuid';
import { data } from 'jquery';

@Component({
  selector: 'app-poeple',
  templateUrl: './poeple.component.html',
  styleUrls: ['./poeple.component.scss']
})
export class PoepleComponent implements OnInit {
  gridOptions: GridOptions = {
    alignedGrids: [],
    defaultColDef: {
      editable: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    },
    suppressHorizontalScroll: true,
    singleClickEdit: true
  };
  rowData$!: Observable<any[]>;
  columnDefs: ColDef[] = PeopleGridColumns(this);
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
    onCellValueChanged: (params) => {
      if (params) {
        params.data.isRowAdded = true;
        this.showCancel = true;
      }
    },
  };

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  context: any;
  showCancel: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.context = { componentParent: this };
  }

  rowClassRules: RowClassRules = {
    'sick-warning': (params) => {
      return params.data.isRowAdded;
    }
  };

  onGridReady(params: GridReadyEvent) {
    this.agGrid.api.sizeColumnsToFit();
    this.loadData();
  }

  loadData() {
    this.rowData$ = new Observable((observer) => {
      const rowData = this.getPeoplFromLocalStorage;
      this.showCancel = rowData.filter((rec: PeopleModel) => rec.isRowAdded).length > 0
      observer.next(rowData);
    })
  }

  get getPeoplFromLocalStorage(): Array<PeopleModel> {
    return JSON.parse(localStorage.getItem('poples') || '') || [];
  }

  addNewRow() {
    this.showCancel = true;
    this.agGrid.api.applyTransaction({
      add: [{
        firstName: "Click the cell to provide the inputs",
        lastName: "",
        apartmentNumber: "",
        houseNumber: "",
        streetName: "",
        telNumber: "",
        postalCode: "",
        age: "",
        dob: "",
        twon: "",
        peopleId: uuid.v4(),
        isRowAdded: true,
      }],
    })
  }

  save() {
    const people: any = [];
    this.agGrid.api.stopEditing();
    this.agGrid.api.forEachNode((node) => {
      node.data.isRowAdded = false;
      people.push(node.data);
    });
    alert("People data saved successuly.");
    this.showCancel = false;
    this.savePeopleToLocalStorage(people);
  }

  savePeopleToLocalStorage(people: Array<PeopleModel>) {
    localStorage.setItem('poples', JSON.stringify(people));
    this.loadData();
  }

  cancel() {
    let savedData: Array<PeopleModel> = this.getPeoplFromLocalStorage;
    savedData = savedData.filter((people: PeopleModel) => people.firstName !== 'Click the cell to provide the inputs');
    this.savePeopleToLocalStorage(savedData);
  }
}
