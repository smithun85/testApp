import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes:Routes= [
    {
        path:'',
        component:DashboardComponent,
        children:[
            {
                path:'contacts',
                component:ContactsComponent,
            },
            {
                path:'services',
                component:ServicesComponent
            },

            {
                path:'pagination',
                component:PaginationComponent
            },
            {
                path:'',
                loadChildren: ()=> import('../dashboard/courses/courses.module').then(m=>m.CoursesModule)
            }
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
 export class DashboardRoutingModule {}