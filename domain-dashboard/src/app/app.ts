import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomainService, Domain } from './services/domain.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  newDomain: Domain = { name: '', expiry: '', status: '', registrar: '' };
  domains: Domain[] = [];
  searchText = '';

  constructor(private domainService: DomainService) {}

  ngOnInit() {
    this.loadDomains();
  }

  loadDomains() {
    this.domainService.getDomains().subscribe(data => this.domains = data);
  }

  addDomain() {
    this.domainService.addDomain(this.newDomain).subscribe(() => {
      this.loadDomains();
      this.newDomain = { name: '', expiry: '', status: '', registrar: '' };
    });
  }

  deleteDomain(id: number) {
    this.domainService.deleteDomain(id).subscribe(() => this.loadDomains());
  }

  get filteredDomains() {
    const text = this.searchText.toLowerCase();
    return this.domains.filter(domain =>
      domain.name.toLowerCase().includes(text)
    );
  }
}
