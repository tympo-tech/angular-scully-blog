import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  {
    path: 'articles',
    loadChildren: () =>
      import('./articles/articles.module').then((m) => m.ArticlesModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'articles' },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: '**', redirectTo: 'articles' },
];

// The ** syntax is called the wildcard route, 
// and it is triggered when the router cannot
// match a requested URL with a defined route.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// The previous approach is called lazy loading and improves the startup and the overall
// performance of an Angular application. It creates a separate bundle for each lazy-loaded
// module, which is loaded upon request, reducing the final bundle size and the memory
// consumption of your application.