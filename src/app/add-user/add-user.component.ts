import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {FileUpload} from 'primeng/primeng';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    startDate = new Date(1990, 0, 1);
    LIST_TYPES = [{name: 'White List', value: 'whiteList'}, {name: 'Black List', value: 'blackList'}];
    showUpload = false;
    @ViewChild('f')
    ngForm: NgForm;
    @ViewChild('fileUploader')
    fileUploader: FileUpload;
    isDone = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    register() {
        const {type, date, name, secretWord} = this.ngForm.controls;
        this.isDone = true;
        console.log(this.isDone);
        const id = setTimeout(() => {
            this.isDone = false;
            clearTimeout(id);
            this.ngForm.reset();
        }, 30000);
    }


    getUploadUrl() {
        let url = '';
        const name = this.ngForm.controls.name.value;
        if (name) {
            url = 'http://localhost:5000/images/' + name;
        }
        return url;
    }

    removeFile(index) {
        this.fileUploader.remove(null, index);
    }

    resetForm() {
        this.isDone = false;
        this.ngForm.reset();
    }

    close() {
        this.router.navigate(['/home']);
    }
}
