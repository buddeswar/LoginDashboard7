import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  statements: any;
  data: any;
  options: any;
  balence: any;
  trance: any;
  budget: any;

  constructor(private dataservice: DataService) {
     this.dataservice.getstatements().subscribe((state) => {
      this.statements = state
     })
    this.dataservice.getbalence().subscribe((ban) => {
      this.balence = ban
    })
    this.dataservice.gettransactions().subscribe((trs) => {
      this.trance = trs
    })
     this.dataservice.getBudget().subscribe((budget) => {
      this.budget = budget
    })




  }


  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['Jul1 2022', 'Aug3 2022', 'Sep3 2022', 'Oct1 2022', 'Nov3 2022', 'Dec1 2022', 'Jan3 2023', 'Feb3 2023','Mar1 2023','Apr3 2023','May1 2023','Jun27 2023'],
            datasets: [
                {
                    label: 'Predected',
                    data: [48.84, 39.68, 40.65, 39.65, 25.74, 41.45, 47.69,56.59,54.35,43.48,35.24,35.98],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Actual',
                    data: [20.21, 17.78, 23.67, 28.05, 7.99, 18.35, 22.5,25.22,29.88,30.69,29.15,17.67],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

  }

}
