import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children:[
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component'),
            }
            ,
            {
                path: 'dashUser',
                loadComponent: () => import('./business/users-dash/users-dash.component'),
            }
            ,
            {
                path: 'dashAtencion',
                loadComponent: () => import('./business/atencion-dash/atencion-dash.component'),
            }
            ,
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
            ,
            
        ]
    },
    {
        path: 'medicos',
        loadComponent: () => import('./medicos/medicos-list/medicos-list.component')
    },
    {
        path: 'newMedico',
        loadComponent: () => import('./medicos/medicos-form/medicos-form.component')
    }
    ,
    {
        path: ':id/editMedico',
        loadComponent: () => import('./medicos/medicos-form/medicos-form.component')
    },
    {
        path: 'asegurados',
        loadComponent: () => import('./asegurados/asegurados-list/asegurados-list.component')
    },
    {
        path: 'newAsegurado',
        loadComponent: () => import('./asegurados/asegurados-forms/asegurados-forms.component')
    }
    ,
    {
        path: ':id/editAsegurados',
        loadComponent: () => import('./asegurados/asegurados-forms/asegurados-forms.component')
    },
    {
        path: 'usuarios',
        loadComponent: () => import('./usuarios/usuarios-list/usuarios-list.component')
    },
    {
        path: 'newUsuario',
        loadComponent: () => import('./usuarios/usuarios-form/usuarios-form.component')
    }
    ,
    {
        path: ':id/editUser',
        loadComponent: () => import('./usuarios/usuarios-form/usuarios-form.component')
    }
    ,
    {
        path: 'roles',
        loadComponent: () => import('./roles/roles-list/roles-list.component')
    },
    {
        path: 'newRol',
        loadComponent: () => import('./roles/roles-form/roles-form.component')
    }
    ,
    {
        path: ':id/editRol',
        loadComponent: () => import('./roles/roles-form/roles-form.component')
    }
    
    ,
    {
        path: 'permisos',
        loadComponent: () => import('./permisos/permisos-list/permisos-list.component')
    }
    ,
    {
        path: 'newPermiso',
        loadComponent: () => import('./permisos/permisos-form/permisos-form.component')
    }
    ,
    {
        path: ':id/editPermiso',
        loadComponent: () => import('./permisos/permisos-form/permisos-form.component')
    }
    ,
    {
        path: 'ausencia',
        loadComponent: () => import('./ausencia/ausencia-list/ausencia-list.component')
    }
    ,
    {
        path: 'newAusencia',
        loadComponent: () => import('./ausencia/ausencia-form/ausencia-form.component')
    }
    ,
    {
        path: ':id/editAusencia',
        loadComponent: () => import('./ausencia/ausencia-form/ausencia-form.component')
    }
    ,
    {
        path: 'especialidad',
        loadComponent: () => import('./especialidad/especialidad-list/especialidad-list.component')
    }
    ,
    {
        path: 'newEsp',
        loadComponent: () => import('./especialidad/especialidad-form/especialidad-form.component')
    }
    ,
    {
        path: ':id/editEsp',
        loadComponent: () => import('./especialidad/especialidad-form/especialidad-form.component')
    }
    ,
    {
        path: 'ficha',
        loadComponent: () => import('./ficha/ficha-list/ficha-list.component')
    }
    ,
    {
        path: 'newFicha',
        loadComponent: () => import('./ficha/ficha-form/ficha-form.component')
    }
    ,
    {
        path: ':id/editFicha',
        loadComponent: () => import('./ficha/ficha-form/ficha-form.component')
    }
    ,
    {
        path: 'horario',
        loadComponent: () => import('./horario/horario-list/horario-list.component')
    }
    ,
    {
        path: 'newHora',
        loadComponent: () => import('./horario/horario-form/horario-form.component')
    }
    ,
    {
        path: ':id/editHora',
        loadComponent: () => import('./horario/horario-form/horario-form.component')
    }
    ,
    {
        path: 'consulta',
        loadComponent: () => import('./consulta/consulta-list/consulta-list.component')
    }
    ,
    {
        path: 'newCons',
        loadComponent: () => import('./consulta/consulta-form/consulta-form.component')
    }
    ,
    {
        path: ':id/editCons',
        loadComponent: () => import('./consulta/consulta-form/consulta-form.component')
    }
    ,
    {
        path: 'receta',
        loadComponent: () => import('./receta/receta-list/receta-list.component')
    }
    ,
    {
        path: 'newReceta',
        loadComponent: () => import('./receta/receta-form/receta-form.component')
    }
    ,
    {
        path: ':id/editReceta',
        loadComponent: () => import('./receta/receta-form/receta-form.component')
    },
    



    {
        path: '**',
        redirectTo: 'dashboard'
    }
    
];
