import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  lists = [
    
   
    {
      id:7,
      name:"Contacts",
      icon:"fa-solid fa-phone",
      router:'contacts',  
      
    },

    {
      id:8,
      name:"Services",
      icon:"fa-solid fa-user-plus",
      router:'services', 
      
    },
    {
      id:8,
      name:"course-1",
      icon:"fa-solid fa-user-plus",
      router:'course1',      
    },

    {
      id:8,
      name:"Pagination",
      icon:"fa-solid fa-user-plus",
      router:'pagination',      
    },


  ]

}
