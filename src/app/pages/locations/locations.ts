import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { Select, SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-locations',
  imports: [ FormsModule, InputTextModule, CardModule, SelectModule, ButtonModule],
  templateUrl: './locations.html',
  styleUrl: './locations.css',
})
export class Locations {

locations = [
  {
    name: 'KisanSetu Hub - Pune',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Baner, Pune',
    phone: '9876543210',
    pincode: '411045'
  },
  {
    name: 'KisanSetu Hub - Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    address: 'Whitefield, Bangalore',
    phone: '9123456780',
    pincode: '560066'
  },

  {name: 'KisanSetu Hub - Kunpur',
    city: 'Kunpur',
    state: 'Gujarat',
    address: 'Village, Kunpur',
    phone: '9123456780',
    pincode: '382130'},
{
  name: 'KisanSetu Hub - Mandal',
    city: 'Mandal',
    state: 'Gujarat',
    address: 'City, Mandal',
    phone: '9123456780',
  pincode: '382130'},

{name: 'KisanSetu Hub - Mehsana',
    city: 'Mehsana',
    state: 'Gujarat',
    address: 'Radhanpur Road, Mehsana',
    phone: '9123456780',
   pincode: '384002'},


];

searchText = '';
selectedState: any = null;

states = [
  { label: 'All', value: null },
   { label: 'Kunpur', value: 'Kunpur' },
    { label: 'Mandal', value: 'Mandal' },
     { label: 'Mehsana', value: 'Mehsana' },
  { label: 'Maharashtra', value: 'Maharashtra' },
  { label: 'Karnataka', value: 'Karnataka' }
];




get filteredLocations() {
  return this.locations.filter(loc => {
    const matchSearch =
      loc.city.toLowerCase().includes(this.searchText.toLowerCase()) ||
      loc.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      loc.pincode.includes(this.searchText.toLowerCase());

    const matchState =
      !this.selectedState || loc.state === this.selectedState;

    return matchSearch && matchState;
  });
}

openMap(loc: any) {
  const query = `${loc.name}, ${loc.city}`;
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`);
}

}
