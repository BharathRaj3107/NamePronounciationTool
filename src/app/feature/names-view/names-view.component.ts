
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { EditNameComponent } from '../edit-name/edit-name.component';
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];
@Component({
  selector: 'app-names-view',
  templateUrl: './names-view.component.html',
  styleUrls: ['./names-view.component.scss']
})
export class NamesViewComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'name', 'pname', 'location', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  dataToEdit: any;



  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditNameComponent, {
      width: '400px',
      data: {uid: this.dataToEdit.uid, legalName: this.dataToEdit.legalName, preferredName: this.dataToEdit.preferredName, location: this.dataToEdit.location},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.dataToEdit = result;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditClick(userData:any){
    this.dataToEdit = userData;
    console.log('user', userData);
    this.openDialog();
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    uid: id.toString(),
    legalName: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    preferredName: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
    location: 'IND'
    // progress: Math.round(Math.random() * 100).toString(),
    // fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  }
}




export interface UserData {
  uid: string;
  legalName: string;
  preferredName: string;
  location: string;
}
