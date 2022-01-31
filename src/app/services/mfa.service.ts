import { Injectable } from "@angular/core";
import { MfaRepository } from "../repository/mfa/mfa.repository";

@Injectable({
  providedIn: "root",
})
export class MfaService {
  constructor(private mfaRepository: MfaRepository) {}
}
