import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { combineLatest, map, Observable } from "rxjs";
import { repeatPasswordValidator } from "../../validators/repeat-password.validator";
import { AuthViewModelInterface } from "./interfaces/auth-view-model";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"],
})
export class AuthPageComponent {
  baseForm: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  newUser$: Observable<boolean> = this.activatedRoute.data.pipe(
    map((data) => data["newUser"]),
  );
  authForm$: Observable<FormGroup> = this.newUser$.pipe(
    map((newUser) => this.#createForm(newUser)),
  );
  vm$: Observable<AuthViewModelInterface> = combineLatest([
    this.newUser$,
    this.authForm$,
  ]).pipe(map(([newUser, authForm]) => ({ newUser, authForm })));

  constructor(private activatedRoute: ActivatedRoute) {}

  #createForm(newUser: boolean): FormGroup {
    if (newUser) this.#addRegisterControls();
    return this.baseForm;
  }

  #addRegisterControls(): void {
    this.baseForm.addControl("name", new FormControl("", Validators.required));
    this.baseForm.addControl("repeatPassword", new FormControl(""));
    this.baseForm.setValidators(
      repeatPasswordValidator(
        this.baseForm.controls["password"],
        this.baseForm.controls["repeatPassword"],
      ),
    );
  }
}
