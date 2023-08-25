import { RouterModule, Routes } from "@angular/router";
import { Course1Component } from "./course1/course1.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'course1',
        component:Course1Component
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CoursesRoutingModule {}