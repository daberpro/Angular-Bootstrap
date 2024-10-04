import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from './components/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar,NgbDropdownModule,Modal],
  template: `

    <navbar/>
    <div class="w-100 p-3">
      <input placeholder="Enter Somenthing" class="form-control"/>
    </div>
    
    <div class="b-example-divider"></div>

    <div class="container">
      <div class="row mx-2">
        <div class="col-12">
          <button class="btn btn-success m-1">
            <i class="fa fa-whatsapp"></i>
            Kirim Whatsapp
          </button>
          <button class="btn btn-primary m-1">
            <i class="fa fa-plus"></i>
            Record Baru
          </button>
          <button class="btn btn-danger m-1">
            <i class="fa fa-trash"></i>
            Hapus Record
          </button>
          <button class="btn btn-warning m-1">
            <i class="fa fa-edit"></i>
            Edit Record
          </button>
          <button class="btn btn-info m-1">
            <i class="fa fa-search"></i>
            Pencarian
          </button>
          <button class="btn btn-default m-1">
            <i class="fa fa-times"></i>
            Batal
          </button>
        </div>
        <div class="col-12">
          <input type="text" class="form-control m-1" placeholder="Ini Textbox"/>
        </div>
        <div class="col-12">
          <select class="form-control m-1">
            <option value="SI/SI">SI/SI</option>
            <option value="TI/TI">SI/SI</option>
          </select>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col">
              <div ngbDropdown class="d-inline-block">
                <button type="button" class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>
                  Toggle dropdown
                </button>
                <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
                  <button ngbDropdownItem>Action - 1</button>
                  <button ngbDropdownItem>Another Action</button>
                  <button ngbDropdownItem>Something else is here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <ngbd-modal-config/>
        </div>
    </div>
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
          </a>
          <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul>
      </footer>
    </div>

  `,
  styles: ''
})
export class AppComponent {
  title = 'angular-bootstrap';
}
