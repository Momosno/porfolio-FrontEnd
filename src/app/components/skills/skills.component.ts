import { Component, OnInit } from '@angular/core';
import { CircleValues } from 'src/app/interface/circular-graphs.metadata';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: CircleValues[] = [
    {
      percentage: "10%",
      skillName: "HS 01",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "HS 02",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "HS 03",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "HS 04",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "SS 01",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "SS 02",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "SS 03",
      offset: "50",
    },
    {
      percentage: "10%",
      skillName: "SS 04",
      offset: "50",
    },

  ]

  public idioms: CircleValues[] = [
    {
      percentage: "B2",
      skillName: "INGLES",
      offset: "80",
    },
    {
      percentage: "C1",
      skillName: "ALEMAN",
      offset: "80",
    },
  ]

  public languages: CircleValues[] = [
    {
      percentage: "Junior",
      skillName: "HTML/CSS",
      offset: "150",
    },
    {
      percentage: "Junior",
      skillName: "PYTHON",
      offset: "150",
    },
    {
      percentage: "Junior",
      skillName: "JAVA",
      offset: "150",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
