import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-sync-calendar',
  templateUrl: './sync-calendar.component.html',
  styleUrls: ['./sync-calendar.component.css'],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SyncCalendarComponent {
  selected = model<Date | null>(null);
}
