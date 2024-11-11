import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolService } from '../../services/roles.service';
import { Roles } from '../../model/roles.interface';




@Component({
  selector: 'app-roles-list',
  standalone: true,
  imports: [DatePipe,RouterModule],
  templateUrl: './roles-list.component.html',
  styleUrl: './roles-list.component.css'
})
export default class RolesListComponent implements OnInit{
  private rolService = inject(RolService);
   roles:Roles[]=[];

   ngOnInit(): void {
     this.loadAll();
    }

    loadAll()
    {
      this.rolService.list()
     .subscribe((roles) =>{
      this.roles = roles;
     });
    }

    deleteRoles(roles:Roles)
    {
      this.rolService.delete(roles.id)
      .subscribe(() =>{
        this.loadAll();
      })
    }

}
