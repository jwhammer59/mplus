import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';

import { Event } from '../../common/Event';
import { EventsService } from './../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit{
  events: Event[];
  event: Event;

  displayedColumns = ['id', 'evtType', 'evtDate', 'evtIsFull'];
  dataSource = new MatTableDataSource([]);
  // sort: MatSort;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

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
