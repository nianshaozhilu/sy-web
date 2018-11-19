import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { TagIndexComponent } from './tag-index.component';
import { TagTabComponent } from './tag-tab.component';
 
    const routes: Routes = [
        {
            path:'',
            data:{
                title:'基本信息'
            },
            children: [
                {
                  path:'index',
                  component:TagIndexComponent,
                  data:{
                    title:'监控与报警'
                  }
                },
                {
                    path:'tab',
                    component:TagTabComponent,
                    data:{
                      title:'概览信息'
                    }
                }
                 
              ]
        }
    ];
 

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule]
})
export class TagIndexRoutingModule { }