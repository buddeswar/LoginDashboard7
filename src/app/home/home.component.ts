import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 data6: any;
  options6: any;


   data4: any;

    options4: any;
 data3: any;

    options3: any;

  numbers: any[] = []
  

  data: any;
  options: any;
 meeting: any;
  graphdet: any[] = [];
  graphdet2: any[] = []
  data1: any;

  options1: any;
  sidegraph1: any[] = []
  sidegraph2: any[] = []
  meetingtime: any;
  meeting2: any;
  expenses: any[] = []
  table1: any;


  constructor(private dataservice: DataService) {
    this.dataservice.getnumbers().subscribe((res) => {
      this.numbers = res
    })
    this.dataservice.meeting().subscribe((graphr) => {
      this.meeting = graphr
    })
    this.dataservice.getgraphdetails().subscribe((graphdetails) => {
      this.graphdet = graphdetails
    })
    this.dataservice.getgraphdetails2().subscribe((graphdetails2) => {
        this.graphdet2 = graphdetails2
    })
    this.dataservice.getsidegraph1().subscribe((sidegraph1) => {
      this.sidegraph1 = sidegraph1

    })
    this.dataservice.getsidegraph2().subscribe((sidegraph2) => {
      this.sidegraph2 = sidegraph2
    })
    this.dataservice.getmeetingtime().subscribe((meetingtime) => {
      this.meetingtime = meetingtime

    })
    this.dataservice.getmeeting2().subscribe((meeting2) => {
      this.meeting2 = meeting2
    })
   this.dataservice.getexpenses().subscribe((expenses)=>{
    this.expenses = expenses
   })

    this.dataservice.gettable1().subscribe((table1) => {
    this.table1 = table1
  })



  }
  ngOnInit(): void {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
     this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat', 'Sun'],
            datasets: [
                {
                    type: 'bar',
                    label: 'New Issues',

                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [42, 28, 42, 34, 20, 25, 22]
                },


            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
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
this.data1 = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Sat', 'Sun'],
            datasets: [
                {
                    type: 'bar',
                    label: 'New Issues',

                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [37,32,39,27,18,24,20]
                },


            ]
        };

        this.options1 = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
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






    const documentStyle3 = getComputedStyle(document.documentElement);
        const textColor3 = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder3 = documentStyle.getPropertyValue('--surface-border');

        this.data3 = {
            datasets: [
                {
                    data: [15, 20, 38, 27],
                    backgroundColor: [
                        documentStyle3.getPropertyValue('--red-500'),
                        documentStyle3.getPropertyValue('--green-500'),
                        documentStyle3.getPropertyValue('--yellow-500'),
                        documentStyle3.getPropertyValue('--bluegray-500'),

                    ],
                    label: ''
                }
            ],
            labels: ['Api', 'Back end', 'Frontend', 'Issues']
        };

        this.options3 = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor3
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder3
                    }
                }
            }
        };

    const documentStyle4= getComputedStyle(document.documentElement);
        const textColor4 = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder4 = documentStyle.getPropertyValue('--surface-border');

        this.data4 = {
            datasets: [
                {
                    data: [19, 16, 42, 23],
                    backgroundColor: [
                        documentStyle4.getPropertyValue('--red-500'),
                        documentStyle4.getPropertyValue('--green-500'),
                        documentStyle4.getPropertyValue('--yellow-500'),
                        documentStyle4.getPropertyValue('--bluegray-500'),

                    ],
                    label: ''
                }
            ],
            labels: ['Api', 'Back end', 'Frontend', 'issues']
        };

        this.options4 = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor4
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder4
                    }
                }
            }
        };


const documentStyle6 = getComputedStyle(document.documentElement);
        const textColor6 = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary6 = documentStyle.getPropertyValue('--text-color-secondary');

        this.data6 = {
            labels: ['Concept', 'Design', 'devolopment', 'Extras', 'Marketing'],
            datasets: [

                {
                    label: 'My Second dataset',
                    borderColor: documentStyle6.getPropertyValue('--blue-400'),
                    pointBackgroundColor: documentStyle6.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle6.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor6,
                    pointHoverBorderColor: documentStyle6.getPropertyValue('--pink-400'),
                    data: [12, 20, 28, 15, 25]
                }
            ]
        };

        this.options6 = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor6
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary6
                    },
                    pointLabels: {
                        color: textColorSecondary6
                    }
                }
            }
        };













    }

  }


