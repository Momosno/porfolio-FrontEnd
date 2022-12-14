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
      percentage: "10",
      skillName: "HS 01",
    },
    {
      percentage: "10",
      skillName: "HS 02",
    },
    {
      percentage: "10",
      skillName: "HS 03",
    },
    {
      percentage: "10",
      skillName: "HS 04",
    },
    {
      percentage: "10",
      skillName: "SS 01",
    },
    {
      percentage: "10",
      skillName: "SS 02",
    },
    {
      percentage: "10",
      skillName: "SS 03",
    },
    {
      percentage: "10",
      skillName: "SS 04",
    },

  ]

  public idioms: CircleValues[] = [
    {
      percentage: "B2",
      skillName: "INGLES",
    },
    {
      percentage: "C1",
      skillName: "ALEMAN",
    },
  ]

  public languages: CircleValues[] = [
    {
      percentage: "B2",
      skillName: "HTML/CSS",
    },
    {
      percentage: "C1",
      skillName: "PYTHON",
    },
    {
      percentage: "C1",
      skillName: "JAVA",
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
