import React, { useState } from 'react';
import ProjectList from './ProjectList'
import Toolbar from './Toolbar';

export default function Portfolio() {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];
  const [selectedFilter, selectFilter] = useState('All');
  const allProjects = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards",
    id: "nX001"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
    id: "nX002"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
    id: "nX003"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites",
    id: "nX004"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards",
    id: "nX005"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites",
    id: "nX006"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
    id: "nX007"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
    id: "nX008"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites",
    id: "nX009"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers",
    id: "nX010"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites",
    id: "nX011"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards",
    id: "nX012"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites",
    id: "nX013"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
    id: "nX014"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
    id: "nX015"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites",
    id: "nX016"
    }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers",
    id: "nX017"
    },
  ];
  
  const prof = allProjects.filter(project => {
    if (selectedFilter === 'All') {
      return true;
    }
    return project.category === selectedFilter;
  });

  return (
    <div>
      <Toolbar
        filters={filters}
        selected={selectedFilter}
        onSelectFilter={(filter) => {
          selectFilter(filter);
        }}
      />
      <ProjectList projects={prof}/>
    </div>
  );
}