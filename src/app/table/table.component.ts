import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any = [];
  p: number = 1;
  searchdata: any;
  typesearch: any;
  startDate: any;
  endDate: any;
  sort: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data = [{
      "date": "1996-12-18",
      "type": "User",
      "firstname": "Fredericka"
    },
    {
      "date": "1992-08-21",
      "type": "User",
      "firstname": "Roslyn"
    },
    {
      "date": "1987-07-26",
      "type": "User",
      "firstname": "Therine"
    },
    {
      "date": "1992-01-19",
      "type": "Admin",
      "firstname": "Jemie"
    },
    {
      "date": "1985-01-29",
      "type": "Admin",
      "firstname": "Queenie"
    },
    {
      "date": "1983-10-14",
      "type": "Admin",
      "firstname": "Sallie"
    },
    {
      "date": "1993-01-31",
      "type": "User",
      "firstname": "Kirstin"
    },
    {
      "date": "1983-02-04",
      "type": "Admin",
      "firstname": "Inga"
    },
    {
      "date": "1996-08-21",
      "type": "Admin",
      "firstname": "Annice"
    },
    {
      "date": "1987-08-03",
      "type": "Admin",
      "firstname": "Harmonia"
    },
    {
      "date": "1983-06-20",
      "type": "Admin",
      "firstname": "Johna"
    },
    {
      "date": "1981-08-30",
      "type": "Admin",
      "firstname": "Anthia"
    },
    {
      "date": "1995-05-28",
      "type": "User",
      "firstname": "Morganica"
    },
    {
      "date": "1987-04-03",
      "type": "User",
      "firstname": "Danika"
    },
    {
      "date": "1999-04-03",
      "type": "User",
      "firstname": "Maria"
    },
    {
      "date": "2000-04-03",
      "type": "User",
      "firstname": "Ayesha"
    },
    {
      "date": "1995-04-03",
      "type": "User",
      "firstname": "Neha"
    },
    {
      "date": "1987-08-03",
      "type": "Admin",
      "firstname": "Diya"
    },
    {
      "date": "1987-04-20",
      "type": "User",
      "firstname": "Dan"
    },
    {
      "date": "1985-04-03",
      "type": "Admin",
      "firstname": "kanika"
    },
    {
      "date": "1999-04-02",
      "type": "User",
      "firstname": "Suraj"
    },
    {
      "date": "1988-04-03",
      "type": "User",
      "firstname": "Dev"
    },
    {
      "date": "1987-07-03",
      "type": "Admin",
      "firstname": "Juliet"
    },
    {
      "date": "1987-04-25",
      "type": "Admin",
      "firstname": "Dani"
    },
    {
      "date": "1987-09-03",
      "type": "Admin",
      "firstname": "Reyansh"
    }
    ]
  }

  onTableDataChange(event: any) {
    this.p = event;
  }

  sortData() {
    this.sort = !this.sort;
    return this.data.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  sortDataUp() {
    this.sort = !this.sort;
    return this.data.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
  }

  clearFilter() {
    this.typesearch = null;
    this.searchdata = null;
    this.startDate = null;
    this.endDate = null;
  }


}
