import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [RouterOutlet],
    template: `

    <div class="container">
        <div class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="#" class="flex flex-wrap justify-content-center align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-4">{{nim}} ({{nama}})</span>
            </a>
            <ul class="nav nav-pills">
                <li class="nav-item"> <a class="nav-link active" href="#">Home</a></li>    
                <li class="nav-item"> <a class="nav-link" href="#">Features</a></li>    
                <li class="nav-item"> <a class="nav-link" href="#">Pricing</a></li>    
                <li class="nav-item"> <a class="nav-link" href="#">FAQs</a></li>    
                <li class="nav-item"> <a class="nav-link" href="#">About</a></li>    
            </ul>
        </div>
    </div>

  `,
    styles: ''
})
export class Navbar {
    nim: string = "222102486";
    nama: string = "Ari Susanto";
}
