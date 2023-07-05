import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data7: any;
  options7: any;
  data6: any;
  options6: any;
  data5: any;

options5: any;
  data4: any;
  options4: any;
  graphvp: any;
  data2: any;
  options2: any;
  data: any;
  options: any;
  data1: any;
  options1: any;
  charttarget: any;
  thisyearc: any = [3968, 4065, 3901, 2574, 4378, 4769, 5659, 5435, 4348, 3212, 2918]
  thisyeargd: any[] = [];
  youradu: any;

  constructor(private dataservice: DataService) {
     this.dataservice.getcharttarget().subscribe((chart) => {
      this.charttarget = chart
     })

      this.dataservice.getthisyeargd().subscribe((thisyeargd) => {
      this.thisyeargd = thisyeargd
      })
      this.dataservice.getgraphvp().subscribe((graphvp) => {
      this.graphvp = graphvp
      })
    this.dataservice.getyouradu().subscribe((youradu) => {
      this.youradu = youradu
      })












  }



  ngOnInit(): void {


    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22',2023, 'Feb 23', 'Mar 23', "Apr 23", 'May 23','Jun 23'],
            datasets: [


                {
                    label: 'Visitors',
                    data: this.thisyearc,
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
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
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };


      const documentStyle1 = getComputedStyle(document.documentElement);
        const textColor1 = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary1 = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder1 = documentStyle.getPropertyValue('--surface-border');

        this.data1 = {
            labels: ['Aug 21', 'Sep 21', 'Oct 21', 'Nov 21', 'Dec 21',2022, 'Feb 22', 'Mar 22', "Apr 22", 'May 22','Jun 22'],
            datasets: [
                {
                    label: 'Third Dataset',
                    data: [1778, 2367, 2777, 1079, 1434, 2250, 2522, 2988, 3069, 2790,1524],
                    fill: true,
                    borderColor: documentStyle1.getPropertyValue('--blue-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };

        this.options1 = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor1
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary1
                    },
                    grid: {
                        color: surfaceBorder1
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary1
                    },
                    grid: {
                        color: surfaceBorder1
                    }
                }
            }
        };


    const documentStyle2 = getComputedStyle(document.documentElement);
        const textColor2 = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary2 = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder2 = documentStyle.getPropertyValue('--surface-border');

        this.data2 = {
            labels: ["May '23", '10 May', '20 May', "Jun '23", '10 Jun', '20 Jun'],
            datasets: [
                {
                    label: 'Page Views',
                    data: [5608, 5865, 5195, 4010, 3800, 3191],
                    fill: false,
                    borderColor: documentStyle2.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Visitors',
                    data: [1892, 1570, 2745, 1674, 2016, 1064],
                    fill: false,
                    borderColor: documentStyle2.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        this.options2 = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor2
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary2
                    },
                    grid: {
                        color: surfaceBorder2,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary2
                    },
                    grid: {
                        color: surfaceBorder2,
                        drawBorder: false
                    }
                }
            }
        };



    const documentStyle4 = getComputedStyle(document.documentElement);
        const textColor4 = documentStyle.getPropertyValue('--text-color');

        this.data4 = {
            labels: ['New', 'Returning'],
            datasets: [
                {
                    data: [80, 20],
                    backgroundColor: [documentStyle4.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle4.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle4.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle4.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options4 = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor4
                    }
                }
            }
        };





    const documentStyle5 = getComputedStyle(document.documentElement);
        const textColor5 = documentStyle.getPropertyValue('--text-color');

        this.data5 = {
            labels: ['Male', 'Female'],
            datasets: [
                {
                    data: [55, 45],
                    backgroundColor: [documentStyle5.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle5.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle5.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle5.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options5 = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor5
                    }
                }
            }
        };





    const documentStyle6 = getComputedStyle(document.documentElement);
        const textColor6 = documentStyle.getPropertyValue('--text-color');

        this.data6 = {
            labels: ['Under 30', 'Order 30'],
            datasets: [
                {
                    data: [35, 65],
                    backgroundColor: [documentStyle6.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle6.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle6.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle6.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options6 = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor6
                    }
                }
            }
        };



const documentStyle7 = getComputedStyle(document.documentElement);
        const textColor7 = documentStyle.getPropertyValue('--text-color');

        this.data7 = {
            labels: ['English', 'Other'],
            datasets: [
                {
                    data: [25, 75],
                    backgroundColor: [documentStyle7.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle7.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle7.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle7.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options7 = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor7
                    }
                }
            }
        };





  }





}
