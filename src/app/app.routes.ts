import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
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
        path: ':id/editAsegurado',
        loadComponent: () => import('./asegurados/asegurados-list/asegurados-list.component')
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
        path: 'roles',
        loadComponent: () => import('./roles/roles-list/roles-list.component')
    },
    {
        path: 'newRol',
        loadComponent: () => import('./roles/roles-form/roles-form.component')
    }
    ,
    {
        path: 'permisos',
        loadComponent: () => import('./permisos/permisos-list/permisos-list.component')
    },
    {
        path: 'newPermiso',
        loadComponent: () => import('./permisos/permisos-form/permisos-form.component')
    }
];
