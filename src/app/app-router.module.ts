import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = <Routes> [ {
        path: '',
        redirectTo: '/personnages',
        pathMatch: 'full'
    }, {
        path: 'personnages',
        component: 'App'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {
                enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouterModule {}
