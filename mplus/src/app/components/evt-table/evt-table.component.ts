import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { Event } from '../../models/Event';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-evt-table',
  templateUrl: './evt-table.component.html',
  styleUrls: ['./evt-table.component.css']
})
export class EvtTableComponent implements OnInit, AfterViewInit{
  events: Event[];
  event: Event;
  
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['evtDate', 'evtType', 'evtIsFull'];
  dataSource = new MatTableDataSource([]);

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsService.getEvents()
      .subscribe(events => {
        this.dataSource.data = events;
      }); 
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
