import {Routes, RouterModule} from '@angular/router';
import {TAsyncComponent} from './test-async-component/t.async.component';


const TEST_ROUTER: Routes = [
    {
        path: '',
        component: TAsyncComponent,
        outlet: 'sidebar'
    }
];

export const routes = RouterModule.forChild(TEST_ROUTER);

