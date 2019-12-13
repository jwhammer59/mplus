import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Volunteer } from '../../models/Volunteer';
import { VolunteersService } from '../../services/volunteers.service';

@Component({
  selector: 'app-vol-table',
  templateUrl: './vol-table.component.html',
  styleUrls: ['./vol-table.component.css']
})
export class VolTableComponent implements OnInit, AfterViewInit {
  volunteers: Volunteer[];
  volunteer: Volunteer;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['active', 'firstName', 'lastName', 'phone', 'email'];
  dataSource = new MatTableDataSource([]);

  constructor(private volunteersService: VolunteersService) {}

  ngOnInit() {
    this.volunteersService.getVolunteers()
      .subscribe(volunteers => {
        this.dataSource.data = volunteers;
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
